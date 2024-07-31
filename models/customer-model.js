const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const customer = sequelize.define('customer' , {
    customerName : DataTypes.STRING,
    customerMobile : DataTypes.STRING,
    age : DataTypes.INTEGER
},
{
    sequelize,
    modelName: "customer",
    timestamps : true,
    createdAt : true,
    updatedAt : false
})
async function main() {
    // Ensure tables are synchronized, without forcing recreation
    await sequelize.sync({ alter: true });
    const user = await customer.create({
        customerName: "omidmp",
        customerMobile: "09134423124",
        age : 27
    });

    console.log(user.dataValues);
}

main();
