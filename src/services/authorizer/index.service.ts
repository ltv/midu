import { Service } from 'moleculer';

const AuthorizerService: Partial<Service> = {
  name: 'authorizer',
  settings: {},
  metadata: {},
  actions: {
    /**
     * Login with username & password
     *
     * @actions
     * @param {Object} user - User credentials
     *
     * @returns {Object} Logged in user with token
     */
    login: {
      params: {
        email: { type: 'string' },
        password: { type: 'string', min: 6 }
      },
      handler(ctx) {
        return true;
      }
    }
  },
  methods: {},
  events: {}
};

export = AuthorizerService;
