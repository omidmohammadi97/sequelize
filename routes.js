const {Router} = require("express")
const {create , update , remove , find } = require("./CRUD/crud-product")
const route = Router();
route.patch("/product" , create)
route.put("/product" , update)
route.delete("/product/:id" , remove)
route.get("/product/:id" , find)

module.exports = {
    mainRouter : route
}