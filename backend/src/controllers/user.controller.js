import UserRepository from "../repositories/user.repository.js";
import { StatusCodes } from "http-status-codes";

const createUser = async (req, res) => {
  const user = await UserRepository.createUser(req.body);

  return res.status(StatusCodes.CREATED).json({ data: user });
};

const getUserById = async (req, res) => {
  const { id: userId } = req.params;

  const user = await UserRepository.getUserById(userId);

  return res.status(StatusCodes.OK).json({ data: user });
};

const updateUserById = async (req, res) => {
  const { id: userId } = req.params;

  const user = await UserRepository.updateUserById(userId, req.body);

  return res.status(StatusCodes.OK).json({ data: user });
};

const deleteUserById = async (req, res) => {
  const { id: userId } = req.params;

  await UserRepository.deleteUserById(userId);

  return res.status(StatusCodes.OK).json({ data: { success: true } });
};

const getUsers = async (req, res) => {
  const users = await UserRepository.getUsers();

  return res.status(StatusCodes.OK).json({ data: { users } });
};

export { createUser, getUserById, updateUserById, deleteUserById, getUsers };
