import { DataType as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Carrito extends Model {

}

Carrito.init(
    {
      precioTotal: {
        type: DT.FLOAT,
        allowNull: false,
  
        set(value) {
          this.setDataValue("precioTotal", value);
        },
      },
      
      cantidad: {
        type: DT.INTEGER,
        allowNull: false,
  
        set(value) {
          this.setDataValue("precio", value);
        },
      },

    },


    {
      sequelize: connection,
      modelName: "Carrito",
      timestamps: false,
    }
  );
  
  
  export default Carrito;
  