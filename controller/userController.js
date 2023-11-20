import connection from "../connection/connection.js";
import Product from "../Models/Product.js";
import User from "../Models/User.js";
import UserProduct from "../Models/UserProduct.js";
class UserController {
  constructor() {} 


  addProductToUser = async (req, res) => {
    const userId = req.params.id;
    const productId = req.body.productId;
  
    try {
      // Verifica si el usuario y el producto existen
      const user = await User.findByPk(userId);
      const product = await Product.findByPk(productId);
  
      if (!user || !product) {
        return res.status(404).json({ message: 'Usuario o producto no encontrado' });
      }
  
      // Verifica si hay suficiente stock del producto
      if (product.stock <= 0) {
        return res.status(400).json({ message: 'Producto sin stock disponible' });
      }
  
      // Agrega la relación entre el usuario y el producto en la tabla intermedia
      await UserProduct.create({
        userId: userId,
        productId: productId,
      });
  
      // Actualiza el stock del producto restando 1
      await product.update({ stock: product.stock - 1 });
  
      return res.status(201).json({ message: 'Producto agregado al usuario con éxito' });
    } catch (error) {
      console.error('Error al agregar producto a usuario:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json({ success: true, result: users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Error al obtener los usuarios' });
    }
  };

  getUserById = async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (user) {
        res.status(200).json({ success: true, user });
      } else {
        res.status(404).json({ success: false, error: 'Usuario no encontrado' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Error al obtener el usuario por ID' });
    }
  };

  createUser = async (req, res) => {
    const { name, lastName, email } = req.body;
  
    try {
      const newUser = await User.create({ name, lastName, email });
  
      res.status(201).json({ success: true, user: newUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Error al crear el usuario' });
    }
  };


  updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, email } = req.body;
  
    try {
      // Busca el usuario por ID
      const user = await User.findByPk(id);
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
      }
  
      // Actualiza los campos proporcionados
      if (name) user.name = name;
      if (lastName) user.lastName = lastName;
      if (email) user.email = email;
  
      // Guarda los cambios en la base de datos
      await user.save();
  
      res.status(200).json({ success: true, message: `Usuario con ID ${id} actualizado con éxito` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al actualizar el usuario' });
    }
  };


  deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Busca el usuario por ID
      const user = await User.findByPk(id);
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
      }
  
      // Elimina el usuario de la base de datos
      await user.destroy();
  
      res.status(200).json({ success: true, message: `Usuario con ID ${id} eliminado con éxito` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al eliminar el usuario' });
    }
  };
}

export default UserController;
