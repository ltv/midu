const _mutation = () => 'Not yet implemented';

const midu = ({ service = {}, actions = {}, mutations = {} }) => {
  return {
    ...service,
    actions: Object.keys(actions).reduce((carry, key) => {
      const { params } = actions[key];
      const mutation = mutations[key] || _mutation;
      carry[key] = {
        params,
        handler(ctx) {
          const service = this;
          return mutation(ctx, service);
        }
      };
      return carry;
    }, {})
  };
};

module.exports = midu;
