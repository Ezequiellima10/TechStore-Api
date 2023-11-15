import connection from "../connection/connection.js";

class ProductController {
  constructor() {}


  getAllProducts = (req, res) => {
    const query = `select * from product`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, result }); 
    }).catch(err => { 
      throw err; 
    });
  };


  getProductById = (req, res) => {
    const { id } = req.params;
  
    const query = `SELECT * FROM product WHERE id = ${id}`;
  
    connection.query(query).then(result => {
      res.status(200).send({ success: true, product: result[0] }); 
    }).catch(err => { 
      throw err; 
    });
  };


  createProduct = (req, res) => {
    
    const { name, precio, stock } = req.body;

    const query = `INSERT INTO product(name, precio, stock) VALUES ("${name}", "${precio}", "${stock}")`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, result }); 
    }).catch(err => { 
      throw err; 
    }); 
  };


  updateProduct = (req, res) => {
    const { id } = req.params;

    const { name, precio, stock } = req.body;

  // Construye la query con los datos proporcionados
  let query = 'UPDATE product SET ';
  const updates = [];
  
  if (name) updates.push(`name = "${name}"`);
  if (precio) updates.push(`precio = "${precio}"`);
  if (stock) updates.push(`stock = "${stock}"`);
  
  if (updates.length === 0) {
    return res.status(400).send({ success: false, error: 'No se proporcionaron datos para actualizar' });
  }
  
  query += updates.join(', ') + ` WHERE id = ${id}`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, message: `Producto con ID ${id} actualizado con éxito`}); 
    }).catch(err => { 
      throw err; 
    });
  };

  
  deleteProduct = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM product WHERE id = ${id}`;
  
    connection.query(query).then(result => {
      res.status(200).send({ success: true, message: `Producto con ID ${id} eliminado con éxito` }); 
    }).catch(err => { 
      throw err; 
    });
  };
}

export default ProductController;
