import { Router } from "express";
import UserController from "../controller/userController.js";
const usersRoutes = Router();

const userController = new UserController();

usersRoutes.get("", userController.getAllUsers);
usersRoutes.get("/:id/:chayane", userController.getUserById);
usersRoutes.post("", userController.createUser);
usersRoutes.put("/:id", userController.updateUser);
usersRoutes.delete("/:id", userController.deleteUser);

export default usersRoutes;
