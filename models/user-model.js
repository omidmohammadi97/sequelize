const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

class User extends Model {}

User.init({
    username: DataTypes.STRING, // VARCHAR
    birthday: DataTypes.DATE
}, {
    sequelize,
    modelName: "user"
});

async function main() {
    // Ensure tables are synchronized, without forcing recreation
    await sequelize.sync({ alter: true });

    // Correct date initialization
    const user = await User.create({
        username: "omidmp",
        birthday: new Date("1997-04-27") // Correct date format: YYYY-MM-DD
    });

    console.log(user.dataValues);
}

// main();
