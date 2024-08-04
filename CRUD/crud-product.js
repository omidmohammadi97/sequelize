const { HttpStatusCode } = require('axios');
const {productModel} = require('../models/product-model');
const { biggerThan } = require('../functions/product-functions');
const { Op } = require('sequelize');
const create =  async (req , res ,next) =>{
    const { productName , productDescription , customerId}= req.body
        const pr = await productModel.create({
            productName : productName,
            productDescription : productDescription,
            customerId : customerId
    });

    console.log(pr.dataValues);
    return;
}
const update = async (req , res ,next)=>{
    const { productName , productDescription} = req.body;
    const {id} = req.params;
    const product = await productModel.findOne({
        where : {
            id : id
        }
    });
    if(!product) throw new HttpStatusCode.NotFound("محصولی یافت نشد");
    const result = await productModel.update({
        productName : productName,
        productDescription : productDescription,
    },{
        where:{
            id : id
        }
    }
) 
console.log(result.toJSON())
}
const remove  =async(req , res ,next) =>{
    const {id} = req.params;
    return await productModel.destroy({
        where : {
            id : id
        }
    })
}
const findOne = async(req , res ,next) =>{
    console.log(req.params)
    const { id }= req.params
    //we can also use findByPk instead of findOne 
    const product = await productModel.findOne({
        where : {id : id},
        raw: true
    })
    if(!product) throw new HttpStatusCode.NotFound("محصول مورد نظر پیدا نشد")
    console.log(product)
    
}
const findAll = async(req , res ,next) =>{
    let {page , count} = req.query 
    console.log(page , count)
    page = parseInt(page, 10);
    count = parseInt(count, 10);
    const products = await productModel.findAll({
    limit : count,
    offset : (page-1) * count,   
    raw: true,
    order : [['id' , 'DESC']]
     })
    if(!products) throw new HttpStatusCode.NotFound("چیزی یافت نشد :(")
    console.log(products)
}
const findByRegx = async(req , res ,next) =>{
    const products = await productModel.findAll({
   where:{
    // productName : {
    //        // [Op.regexp] : "o$" // datas that ends with o
    //        // [Op.regexp] : "^e" // datas that starts with e
    //       // [Op.notRegexp] : "^e" // datas that not starts with e
    //      // [Op.like] : "%e%" // all products name that includes e in it

    //     },
    customerId : {
        //[Op.in] :[ 1,10] // find all customerIds that includes values in array
        [Op.notIn] :[ 1,10]  // find all customerIds that not includes values in array
    }
   },
   raw: true,
   logging:false,
   attributes : ["id" , "productName" , "productDescription" , "customerId"]
     })
    if(!products) throw new HttpStatusCode.NotFound("چیزی یافت نشد :(")
    console.log(products)
}

module.exports = {
     create
    ,update
    ,remove
    ,findOne
    ,findAll
    ,findByRegx
}