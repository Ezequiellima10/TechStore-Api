import Product from "./product.js";
import User from "./user.js";


Product.belongsToMany(User, { through : "Carrito"})

User.belongsToMany(Product, { through : "Carrito"})




export {
    Product,
    User,
}