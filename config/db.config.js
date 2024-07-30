const  {Sequelize} = require("sequelize")
//use sequelize for connecting to mysql,mssql , mariadb , postgresSQL
const sequelize = new Sequelize({
    dialect : "mysql",
    host : "localhost",
    port:3306,
    username  : "root",
    password : "13761972omp",
    database : "expressjs"

})
sequelize.sync({force:true})

sequelize.authenticate().then(()=>{
    console.log("connected to database")
}).catch(err => {
    console.log("Something went wrong during the connecting to db" , err.message)
})

module.exports = {sequelize}