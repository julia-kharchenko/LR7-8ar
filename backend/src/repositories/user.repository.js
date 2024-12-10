import UserModel from "../models/user.model.js";
import { BadRequestError, NotFoundError } from "../errors/index.js";

class UserRepository {
  constructor() {}

  async createUser(userData) {
    const { name, email, age } = userData;

    if (!name || !email || !age) {
      throw new BadRequestError("Please provide name, email and age");
    }

    return await UserModel.create(userData);
  }

  async getUserById(userId) {
    const user = await UserModel.findById(userId);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  async updateUserById(userId, userData) {
    const user = await UserModel.findById(userId);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const { name, email, age } = userData;

    user.name = name || user.name;
    user.email = email || user.email;
    user.age = age || user.age;

    return await user.save();
  }

  async deleteUserById(userId) {
    const user = await UserModel.findById(userId);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    await user.deleteOne();
  }

  async getUsers() {
    return await UserModel.find({});
  }
}

export default new UserRepository();
