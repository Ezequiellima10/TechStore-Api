import connection from "../connection/connection.js";
import Product from "../Models/product.js";
import User from "../Models/user.js";
class UserController {
  constructor() {} 


  addProductToUser = async (req, res) => {
    const userId = req.params.id; //Obtengo los ids  del usuario y producto pasados por paramtetro
    const productId = req.body.productId; 

  
    try {
      // Verificar si el usuario y el producto existen
      const user = await User.findByPk(userId);
      const product = await Product.findByPk(productId);
  
      if (!user || !product) {
        return res.status(404).json({ message: 'Usuario o producto no encontrado' });
      }  
  
      // Agrega la relación entre el usuario y el producto en la tabla intermedia
      await UserProduct.create({
        UserId: userId,
        ProductId: productId,
      });
  
      return res.status(201).json({ message: 'Producto agregado al usuario con éxito' });
    } catch (error) {
      console.error('Error al agregar producto a usuario:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  };

  getAllUsers = (req, res) => {
    const query = `select * from user`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, result }); 
    }).catch(err => { 
      throw err; 
    });
  };


  getUserById = (req, res) => {
    const { id } = req.params;
  
    const query = `SELECT * FROM users WHERE id = ${id}`;
  
    connection.query(query).then(result => {
      res.status(200).send({ success: true, user: result[0] }); 
    }).catch(err => { 
      throw err; 
    });
  };


  createUser = (req, res) => {
    
    const { name, lastName, email } = req.body;

    const query = `INSERT INTO users (name, lastName, email) VALUES ("${name}", "${lastName}", "${email}")`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, result }); 
    }).catch(err => { 
      throw err; 
    });     
    // connection.query(query, (err, result) => {
    //   if (err) throw err;

    //   res.status(200).send({ success: true, result });
    // });
  };


  updateUser = (req, res) => {
    const { id } = req.params;

    const { name, lastName, email } = req.body;

  // Construye la query con los datos proporcionados
  let query = 'UPDATE user SET ';
  const updates = [];
  
  if (name) updates.push(`name = "${name}"`);
  if (lastName) updates.push(`lastName = "${lastName}"`);
  if (email) updates.push(`email = "${email}"`);
  
  if (updates.length === 0) {
    return res.status(400).send({ success: false, error: 'No se proporcionaron datos para actualizar' });
  }
  
  query += updates.join(', ') + ` WHERE id = ${id}`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, message: `Usuario con ID ${id} actualizado con éxito`}); 
    }).catch(err => { 
      throw err; 
    });
  };


  deleteUser = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM users WHERE id = ${id}`;
  
    connection.query(query).then(result => {
      res.status(200).send({ success: true, message: `Usuario con ID ${id} eliminado con éxito` }); 
    }).catch(err => { 
      throw err; 
    });
  };
}

export default UserController;
