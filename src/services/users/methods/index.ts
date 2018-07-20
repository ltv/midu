import { ServiceMethods } from 'moleculer';

const users = [
  { username: 'lucduong', email: 'luc@ltv.vn' },
  { username: 'anhle', email: 'lehoanganh25991@gmail.com' }
];

type NormalUser = { username: String; email: String };

export default <ServiceMethods>{
  getUsers(): Array<NormalUser> {
    return users;
  },

  getUser(username: String): NormalUser {
    return users.find(u => u.username === username);
  }
};
