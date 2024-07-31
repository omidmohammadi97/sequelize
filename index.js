const express = require('express')
const dotenv = require("dotenv")
// const sequelize = require("./config/db.config")
// require("./models/user-model")
// require("./models/customer-model")
// require("./models/product-model")
const {mainRouter} = require("./routes")

async function main(){
    const app = express()
    dotenv.config();
    app.use(express.json({ type: 'application/json', charset: 'utf-8' }));
    app.use(express.urlencoded({extended : true}))
    app.use(mainRouter)

    const PORT = process.env.PORT;
    // dotenv.config({
    //     path : path.join(__dirname , `.env.${NodeEnv}` ) 
    // });
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(PORT, () => console.log(`server run listening on port ${PORT}!`))
}
main();