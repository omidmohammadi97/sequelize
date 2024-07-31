const { HttpStatusCode } = require('axios');
const {productModel} = require('../models/product-model')
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
    
}
const remove  =async(req , res ,next) =>{
    
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
    page = parseInt(page, 10);
    count = parseInt(count, 10);
    const products = await productModel.findAll({
    limit : count,
    offset : (page-1) * count,   
    raw: true
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
}