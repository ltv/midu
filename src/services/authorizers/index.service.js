const { genHash, compareHash } = require('./helpers');
const { signToken, verifyToken } = require('./token');

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

module.exports = {
  name: 'authorizers',

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
        password: { type: 'string', optional: true },
        action: 'string'
      },
      handler: async ({ params }) => {
        const { email, action } = params;

        if (action === GENERATE_TOKEN) return await signToken({ email });

        if (action === RESET) {
          const { password } = params;
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
