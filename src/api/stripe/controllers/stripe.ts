/**
 * A set of functions called "actions" for `stripe`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok123';
    } catch (err) {
      ctx.body = err;
    }
  }
};
