import ApiGateway from 'moleculer-web';
import { Service } from 'moleculer';

const ApiService: Partial<Service> = {
  name: 'api',
  mixins: [ApiGateway],

  // More info about settings: http://moleculer.services/docs/moleculer-web.html
  settings: {
    port: 3000,

    routes: [
      {
        path: '/api',

        aliases: {
          // Login
          'POST /oauth/login': 'authorizer.login',

          // Users
          'GET /users': 'users.users',
          'GET /user': 'users.user'
        },

        // Disable to call not-mapped actions
        mappingPolicy: 'restrict',

        // Set CORS headers
        cors: true,

        // Parse body content
        bodyParsers: {
          json: {
            strict: false
          },
          urlencoded: {
            extended: false
          }
        }
      }
    ],

    // Serve assets from "public" folder
    assets: {
      folder: 'public'
    }
  }
};

export = ApiService;
