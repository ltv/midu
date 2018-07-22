const { genHash, compareHash } = require('./helpers');
const User = {};

const ERROR_CODE_USER_EXIST = 1;
const ERROR_CODE_CANT_FIND_USER = 2;

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
        return user
          ? User.save({
            email,
            passwordHash: await genHash(password)
          })
          : Promise.reject(new Error('User already exists', ERROR_CODE_USER_EXIST));
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
