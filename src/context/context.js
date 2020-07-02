const userRepository = require("../repositories/user/user.repository");

const context = ({ request, response }) => {
  return {
    getUserId: () => {
      const authorization = request.headers.authorization;
      if (authorization) {
        // TODO: jwt
      } else {
        throw new Error("No authorization header found!!");
      }
      return {
        userId: "generate from request.headers.authorization JWT token",
      };
    },
    _UserRepository: userRepository.getInstance(),
  };
};

module.exports = { context };
