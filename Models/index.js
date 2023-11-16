import Product from "./Product.js";
import User from "./User.js";
import UserProduct from "./UserProduct.js";
import connection from "../connection/connection.js";


Product.belongsToMany(User, { through: { model: UserProduct, uniqueKey: 'productId' } });
User.belongsToMany(Product, { through: { model: UserProduct, uniqueKey: 'userId' } });

export {
    Product,
    User,
    UserProduct
}