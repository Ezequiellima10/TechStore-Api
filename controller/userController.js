import connection from "../connection/connection.js";

class UserController {
  constructor() {}
  getAllUsers = (req, res) => {
    res.send("Users");
  };
  getUserById = (req, res) => {
    res.send("Users by id");
  };
  createUser = (req, res) => {
    console.log(`🚀 ~ holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
    const { name, lastName, mail } = req.body;

    const query = `INSERT INTO user(name, lastName, mail) VALUES ("${name}", "${lastName}", "${mail}")`;

    connection.query(query, (err, result) => {
      if (err) throw err;

      res.status(200).send({ success: true, result });
    });
  };
  updateUser = (req, res) => {
    res.send("Users update");
  };
  deleteUser = (req, res) => {
    res.send("Users delete");
  };
}

export default UserController;
