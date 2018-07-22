const DbService = require('moleculer-db');
const MongooseAdapter = require('moleculer-db-adapter-mongoose');
const mongoose = require('mongoose');

const { genHash, compareHash } = require('./helpers');
const { signToken, verifyToken } = require('./token');
const { Post } = require('./models');

// Mock USER
const User = {
  // findOne: () => Promise.resolve(null),
  findOne: () =>
    Promise.resolve({
      email: 'test@example.com',
      passwordHash: '$2a$10$RGVlrbI6C7UKcwfelt4PTuDMg.Sd4MGor4trmxkP7FIOSAWqgXXM6'
    }),
  save: info => Promise.resolve(info)
};

const ERROR_CODE_USER_NOT_EXIST = 1;
const ERROR_CODE_CANT_FIND_USER = 2;

const GENERATE_TOKEN = 'GENERATE_TOKEN';
const RESET = 'RESET';

const { MONGO_DB_URL = 'mongodb://localhost/midu' } = process.env;

module.exports = {
  name: 'authorizers',

  /**
   * Mixins
   */
  mixins: [DbService],
  adapter: new MongooseAdapter(MONGO_DB_URL),
  model: Post,

  /**
   * Service settings
   */
  settings: {},

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    signUpWithEmailPassword: {
      params: {
        email: 'string',
        password: 'string'
      },
      handler: async ({ params }) => {
        const { email, password } = params;
        const user = await User.findOne({ email });
        return !user
          ? User.save({
            email,
            passwordHash: await genHash(password)
          })
          : Promise.reject(new Error('User already exists', ERROR_CODE_USER_NOT_EXIST));
      }
    },

    signInWithEmailPassword: {
      params: {
        email: 'string',
        password: 'string'
      },
      handler: async ({ params }) => {
        const { email, password } = params;
        const user = await User.findOne({ email });
        return user
          ? compareHash(password, user.passwordHash)
          : Promise.reject(new Error('Cant find user with email', ERROR_CODE_CANT_FIND_USER));
      }
    },

    resetPassword: {
      params: {
        email: 'string',
        token: { type: 'string', optional: true },
        password: { type: 'string', optional: true },
        action: 'string'
      },
      handler: async ({ params }) => {
        const { email, action } = params;

        if (action === GENERATE_TOKEN) return await signToken({ email });

        if (action === RESET) {
          const { password, token } = params;
          const { email } = await verifyToken(token);
          const user = await User.findOne({ email });
          return user
            ? user.update({
              passwordHash: await genHash(password)
            })
            : Promise.reject(new Error('User not found', ERROR_CODE_USER_NOT_EXIST));
        }

        return Promise.reject(new Error('Unknown action'));
      }
    }
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {
    saySomething() {
      return 'Say something';
    }
  },

  /**
   * Service created lifecycle event handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   */
  started() {},

  /**
   * Service stopped lifecycle event handler
   */
  stopped() {}
};
