const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
} = require("graphql");

const GraphQLTodoType = new GraphQLObjectType({
  name: "todo",
  fields: () => {
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      completed: { type: GraphQLBoolean },
      createdAt: { type: GraphQLFloat },
    };
  },
});

module.exports = { GraphQLTodoType };
