const  {Sequelize} = require("sequelize")
//use sequelize for connecting to mysql,mssql , mariadb , postgresSQL
const sequelize = new Sequelize({
    dialect : "mysql",
    host : "localhost",
    port:3306,
    username  : "root",
    password : "13761972omp",
    database : "expressjs",
    logging : false

})

sequelize.authenticate().then(()=>{
    sequelize.sync({force:false})

    console.log("connected to database")
}).catch(err => {
    console.log("Something went wrong during the connecting to db" , err.mesa)
})

module.exports = {sequelize}