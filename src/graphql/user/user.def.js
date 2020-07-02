const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLEnumType,
} = require("graphql");
const { GraphQLTodoType } = require("../todo/todo.def");
const { UserRepository } = require("../../repositories/user/user.repository");
const { TodoRepository } = require("../../repositories/todo/todo.repository");

const GraphQLProfileType = new GraphQLObjectType({
  name: "profile",
  fields: () => {
    return {
      age: { type: GraphQLInt },
      email: { type: GraphQLString },
      fullName: { type: GraphQLString },
    };
  },
});

const todoTypes = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  INCOMPLETE: "INCOMPLETE",
};

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: () => {
    return {
      profile: {
        type: GraphQLProfileType,
        resolve: (arc, {}, ctx) => {
          // const { userId } = ctx.getUserId();
          // const _userRepository =ctx._UserRepository // UserRepository.getInstance();
          _userRepository.createUser();
          return {
            age: 21,
            email: "chintan@zujo.io",
            fullName: "chintan Rajpara",
          };
        },
      },
      todo: {
        type: GraphQLTodoType,
        args: { id: { type: GraphQLID } },
        resolve: (src, args) => {
          const id = args.id;
          if (!id) {
            throw new Error("No id found");
          }
          const { userId } = ctx.getUserId();
          return TodoRepository.getInstance().getTodo(userId, id);
          return {
            id: "10if09",
            title: "wash car",
            completed: false,
            createdAt: 1593671078,
          };
        },
      },
      todos: {
        args: {
          type: new GraphQLEnumType({
            name: "todoType",
            values: {
              [todoTypes.ALL]: { value: todoTypes.ALL },
              [todoTypes.COMPLETED]: { value: todoTypes.COMPLETED },
              [todoTypes.INCOMPLETE]: { value: todoTypes.INCOMPLETE },
            },
          }),
        },
        type: new GraphQLList(GraphQLTodoType),
        resolve: (src, args, ctx) => {
          const { userId } = ctx.getUserId();
          const type = args.type;
          switch (type) {
            case todoTypes.ALL:
              break;

            case todoTypes.COMPLETED:
              break;
            case todoTypes.INCOMPLETE:
              break;
            default:
              break;
          }

          return TodoRepository.getInstance().getAll;

          return [
            {
              id: "10if09",
              title: "wash car",
              completed: false,
              createdAt: 1593671078,
            },
            {
              id: "1eu90m",
              title: "go to gym",
              completed: false,
              createdAt: 1593668078,
            },
          ];
        },
      },
    };
  },
});

const GraphqlUserQueries = {
  viewer: {
    type: GraphQLUser,
    resolve: () => {
      return {};
    },
  },
};

module.exports = { GraphQLProfileType, GraphqlUserQueries };
