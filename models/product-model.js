const {  DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const productModel = sequelize.define('product' , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        unique : true,
        primaryKey : true
    },
    productName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    productDescription : {
        type:DataTypes.STRING
    },
    customerId : {
        type : DataTypes.INTEGER,
        allowNull : false
    }

},
{
    timestamps : false,
})
// async function main() {
//     // Ensure tables are synchronized, without forcing recreation
//     await product.sync({ alter: true });
//     const pr = await product.create({
//         productName: "بستنی",
//         productDescription: "بستنی چوبی",
//         customerId : 1
//     });

//     console.log(pr.dataValues);
// }

// main();
module.exports = {
    productModel
}