import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  validatePassword = async (myPlaintextPassword) => {
    const validate = await bcrypt.hash(myPlaintextPassword, this.salt);
    return validate === this.password;
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
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Tiene que tener formato de email",
          },
          notEmpty: {
            msg: "no puede estar vacío",
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
    try {
      if (user.password) {
        const salt = await bcrypt.genSalt();
        user.salt = salt;
  
        const passwordHash = await bcrypt.hash(user.password, salt);
        user.password = passwordHash;
      }
    } catch (error) {
      console.error("Error al generar la sal y cifrar la contraseña:", error);
      throw error;
    }
  });
  
  export default User;
  