const { RootQuery } = require("./rootQuery");
const { GraphQLSchema } = require("graphql");

const schema = new GraphQLSchema({
  query: RootQuery,
  //    mutation: RootMutation,
  // subscription: RootSubscription,
});

module.exports = { schema };
