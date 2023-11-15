import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {

    validatePassword = async (myPlaintextPassword) => {
        const validate = await bcrypt.hash(myPlaintextPassword, this.salt);
        return validate===this.password
      };
}

User.init(
    {
      name: {
        type: DT.STRING(50),
        allowNull: false,
  
        set(value) {
          this.setDataValue("name", value.toUpperCase());
        },
      },
      lastName: {
        type: DT.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DT.STRING,
        validate: {
          isEmail: {
            msg: "Tiene que tener formato de email",
          },
          _notEmpty: {
            msg: "no puede estar vacio",
          },
          get notEmpty() {
            return this._notEmpty;
          },
          set notEmpty(value) {
            this._notEmpty = value;
          },
        },
      },
      salt: {
        type: DT.STRING,
      },
      password: {
        type: DT.STRING,
      },
    },
    {
      sequelize: connection,
      modelName: "User",
      timestamps: false,
    }
  );
  
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.salt = salt;
  
    const passwordHash = await bcrypt.hash(user.password, salt);
    // const passwordHash= await bcrypt.hash(user.password, 10)
    user.password = passwordHash;
  });
  
  export default User;
  