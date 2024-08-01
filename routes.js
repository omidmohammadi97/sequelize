const {Router} = require("express")
const {create , update , remove , findOne , findAll ,findBiggerthan} = require("./CRUD/crud-product");
const route = Router();
route.patch("/product" , create)
route.put("/product/:id" , update)
route.delete("/product/:id" , remove)
route.get("/product/:id" , findOne)
route.get("/product/" , findAll)
// route.get("/bigsortPr/" , findBiggerthan)

module.exports = {
    mainRouter : route
}