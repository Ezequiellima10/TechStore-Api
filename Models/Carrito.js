import { DataType as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Carrito extends Model {

}

Carrito.init(
    
    

    {
      sequelize: connection,
      modelName: "Carrito",
      timestamps: false,
    }
  );
  
  
  export default Carrito;
  