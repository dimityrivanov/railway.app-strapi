export default {
  routes: [
    {
     method: 'GET',
     path: '/stripe',
     handler: 'stripe.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
