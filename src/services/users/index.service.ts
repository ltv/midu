import { Service } from 'moleculer';
import UsersAction from './actions/users';
import GetUserAction from './actions/GetUser';
import methods from './methods';

const UserService: Partial<Service> = {
  name: 'users',
  settings: {},
  metadata: {},
  actions: {
    UsersAction,
    GetUserAction
  },
  methods,
  events: {}
};

export = UserService;
