import { Context, Action } from 'moleculer';
import GetUserActionParams from 'GetUserActionParams';

export default <Action>{
  name: 'user',
  params: {
    username: {
      type: 'string'
    }
  },
  async handler(ctx: Context): Promise<Array<Object>> {
    const { username } = <GetUserActionParams>ctx.params;
    return this.getUser(username);
  }
};
