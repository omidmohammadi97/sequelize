const express = require('express')
const dotenv = require("dotenv")
const sequelize = require("./config/db.config")
require("./models/user-model")
require("./models/customer-model")
const app = express()

async function main(){
    dotenv.config();
    // db.dbConnection();    
    app.use(express.json({ type: 'application/json', charset: 'utf-8' }));
    app.use(express.urlencoded({extended : true}))
    const PORT = process.env.PORT;
    // dotenv.config({
    //     path : path.join(__dirname , `.env.${NodeEnv}` ) 
    // });
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(PORT, () => console.log(`server run listening on port ${PORT}!`))
}
main();