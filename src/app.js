const { GraphQLServer } = require("graphql-yoga");
const { context } = require("./context/context");
const { schema } = require("./graphql/root/schema");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "Root",
//     fields: {
//       fullName: {
//         args: { id: { type: GraphQLID } },
//         type: GraphQLString,
//         resolve: (src, args) => {
//           console.log({ src, args });
//           return "CHINTAN";
//         },
//       },
//     },
//   }),
//   //    mutation: RootMutation,
//   // subscription: RootSubscription,
// });

const server = new GraphQLServer({ schema, context });

server.start({ port: 3001, playground: "/playground" }, ({}) => {
  console.log("server is up ");
});
