import { Router } from "express";
import ProductController from "../controller/productController.js";
const productsRoutes = Router();

const productController = new ProductController();

productsRoutes.get("", productController.getAllProducts);
productsRoutes.get("/:id", productController.getProductById);
productsRoutes.post("", productController.createProduct);
productsRoutes.put("/:id", productController.updateProduct);
productsRoutes.delete("/:id", productController.deleteProduct);

export default productsRoutes;
