import connection from "../connection/connection.js";
import Product from "../Models/Product.js";

class ProductController {
  constructor() {}


  getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
  
      res.status(200).json({ success: true, result: products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al obtener la lista de productos' });
    }
  };


  getProductById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Busca el producto por ID en la base de datos
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ success: false, error: 'Producto no encontrado' });
      }
  
      res.status(200).json({ success: true, product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al obtener el producto por ID' });
    }
  };


  createProduct = async (req, res) => {
    const { name, precio, stock } = req.body;
  
    try {
      // Crea un nuevo producto en la base de datos
      const newProduct = await Product.create({ name, precio, stock });
  
      res.status(201).json({ success: true, result: newProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al crear el producto' });
    }
  };


  updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, precio, stock } = req.body;
  
    try {
      // Busca el producto por ID en la base de datos
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ success: false, error: 'Producto no encontrado' });
      }
  
      // Actualiza los campos proporcionados
      if (name) product.name = name;
      if (precio) product.precio = precio;
      if (stock) product.stock = stock;
  
      // Guarda los cambios en la base de datos
      await product.save();
  
      res.status(200).json({ success: true, message: `Producto con ID ${id} actualizado con éxito` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al actualizar el producto' });
    }
  };

  
  deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Busca el producto por ID en la base de datos
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ success: false, error: 'Producto no encontrado' });
      }
  
      // Elimina el producto de la base de datos
      await product.destroy();
  
      res.status(200).json({ success: true, message: `Producto con ID ${id} eliminado con éxito` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al eliminar el producto' });
    }
  };
}

export default ProductController;
