import express from "express";
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

export default router;
