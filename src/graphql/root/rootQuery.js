const { GraphQLObjectType } = require("graphql");
const { GraphqlUserQueries } = require("../user/user.def");

const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: {
    ...GraphqlUserQueries,
  },
});

module.exports = { RootQuery };
