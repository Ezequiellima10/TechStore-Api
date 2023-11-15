import { DataType as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {

}

Order.init(
    {
      
      productos: {
        type: DT.STRING(255),
        allowNull: false,
  
        set(value) {
          this.setDataValue("productos", value.toUpperCase());
        },
      },
      
      precioTotal: {
        type: DT.DECIMAL(10, 2),
        allowNull: false,
        set(value) {
          this.setDataValue("precioTotal", value);
        },
      },

      fecha: {
        type: DT.DATE,
        allowNull: false,

        set(value) {
          this.setDataValue("fecha", value);
        },
      },
    },
    {
      sequelize: connection,
      modelName: "Order",
      timestamps: false,
    }
  );
  
  
  export default Order;
  