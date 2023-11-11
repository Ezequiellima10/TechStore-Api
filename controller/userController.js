import connection from "../connection/connection.js";

class UserController {
  constructor() {}
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
  
    const query = `SELECT * FROM user WHERE id = ${id}`;
  
    connection.query(query).then(result => {
      res.status(200).send({ success: true, user: result[0] }); 
    }).catch(err => { 
      throw err; 
    });
  };
  createUser = (req, res) => {
    
    const { name, lastName, mail } = req.body;

    const query = `INSERT INTO user(name, lastName, mail) VALUES ("${name}", "${lastName}", "${mail}")`;

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

    const { name, lastName, mail } = req.body;

    const query = `UPDATE user SET name = "${name}", lastName = "${lastName}", mail = "${mail}" WHERE id = ${id}`;

    connection.query(query).then(result => {
      res.status(200).send({ success: true, message: `Usuario con ID ${id} actualizado con éxito`}); 
    }).catch(err => { 
      throw err; 
    });
  };
  deleteUser = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM user WHERE id = ${id}`;
  
    connection.query(query).then(result => {
      res.status(200).send({ success: true, message: `Usuario con ID ${id} eliminado con éxito` }); 
    }).catch(err => { 
      throw err; 
    });
  };
}

export default UserController;
