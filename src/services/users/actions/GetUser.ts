import { Context, Action } from 'moleculer';

export default <Action>{
  name: 'users',
  params: {
    name: {
      type: 'string',
      optional: true
    }
  },
  async handler(ctx: Context): Promise<Array<Object>> {
    return this.getUsers();
  }
};
