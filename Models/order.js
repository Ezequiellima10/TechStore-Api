import { DataType as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {

}

Order.init(
    {
      fecha: {
        type: DT.DATE,
        allowNull: false,
  
        set(value) {
          this.setDataValue("fecha", value);
        },
      },
      
    //   estado: {
    //     type: DT.BOOLEAN,
    //     allowNull: false,
  
    //     set(value) {
    //       this.setDataValue("estado", value);
    //     },
    //   },

      },
    {
      sequelize: connection,
      modelName: "Order",
      timestamps: false,
    }
  );
  
  
  export default Order;
  