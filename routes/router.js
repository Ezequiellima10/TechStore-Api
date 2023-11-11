import {Router} from "express";
import usersRoutes from "./usersRoutes.js";
import productsRoutes from "./productsRoutes.js";

const router = Router();

router.use("/users",usersRoutes)
router.use("/products",productsRoutes)

export default router
