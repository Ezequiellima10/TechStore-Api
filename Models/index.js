import Product from "./product.js";
import User from "./user.js";
import Order from "./order.js";


Product.belongsToMany(User, { through : "Carrito"})

User.belongsToMany(Product, { through : "Carrito"})

User.hasMany(Order, { as: 'ordenes' });
Order.belongsTo(User);



export {
    Product,
    User,
    Order,
}