class UserRepository {
  static instance;
  createUser() {
    // returns status
  }

  loginUser() {
    // returns token
  }

  updateUser(userId, updates) {
    // returns status
  }

  getUserById(userId) {}

  static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
      return UserRepository.instance;
    } else {
      return UserRepository.instance;
    }
  }
}

module.exports = { UserRepository };
