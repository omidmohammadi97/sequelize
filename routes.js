const {Router} = require("express")
const {create , update , remove , findOne , findAll } = require("./CRUD/crud-product")
const route = Router();
route.patch("/product" , create)
route.put("/product" , update)
route.delete("/product/:id" , remove)
route.get("/product/:id" , findOne)
route.get("/product/" , findAll)

module.exports = {
    mainRouter : route
}