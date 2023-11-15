import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {

}

Product.init(
    {
      name: {
        type: DT.STRING(30),
        allowNull: false,
  
        set(value) {
          this.setDataValue("name", value.toUpperCase());
        },
      },
      
      precio: {
        type: DT.DECIMAL(10,2),
        allowNull: false,
  
        set(value) {
          this.setDataValue("precio", value);
        },
      },

      stock:{
        type: DT.INTEGER,
  
        set(value) {
          this.setDataValue("stock", value);
        },
      },
    },


    {
      sequelize: connection,
      modelName: "Product",
      timestamps: false,
    }
  );
  
  
  export default Product;
  