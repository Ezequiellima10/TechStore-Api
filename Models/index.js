import Product from "./product.js";
import User from "./user.js";
import UserProduct from "./userProduct.js";
import Order from "./order.js";
import connection from "../connection/connection.js";


Product.belongsToMany(User, { through: { model: UserProduct, uniqueKey: 'productId' } });
User.belongsToMany(Product, { through: { model: UserProduct, uniqueKey: 'userId' } });
User.hasMany(Order, { as: 'ordenes' });
Order.belongsTo(User);

export {
    Product,
    User,
    Order,
    UserProduct
}