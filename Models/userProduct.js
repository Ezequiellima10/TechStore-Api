import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class UserProduct extends Model {

}

UserProduct.init(      
    {
        userId: {
            type: DT.INTEGER(11),
            allowNull: false,

            set(value) {
            this.setDataValue("userId", value);
            },
        },
        productId: {
            type: DT.INTEGER(11),
            allowNull: false,

            set(value) {
            this.setDataValue("productId", value);
            },
        }
    },
    {
    sequelize: connection,
    modelName: "UserProduct",
    timestamps: false,
    }
);

export default UserProduct;
