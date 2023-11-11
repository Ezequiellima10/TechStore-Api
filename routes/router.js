import {Router} from "express";
import usersRoutes from "./usersRoutes.js";

const router = Router();

router.use("/users",usersRoutes)

export default router
