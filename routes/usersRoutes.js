import { Router } from "express";
import UserController from "../controller/userController.js";
const usersRoutes = Router();

const userController = new UserController();

usersRoutes.get("", userController.getAllUsers);
usersRoutes.get("/:id", userController.getUserById);
usersRoutes.post("", userController.createUser);
usersRoutes.put("/:id", userController.updateUser);
usersRoutes.delete("/:id", userController.deleteUser);
usersRoutes.post("/addProduct/:id", userController.addProductToUser);

export default usersRoutes;
