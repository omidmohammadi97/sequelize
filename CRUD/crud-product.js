const {productModel} = require('../models/product-model')
const create =  async (req , res ,next) =>{
    console.log(req.body)
    const { productName , productDescription , customerId}= req.body
        const pr = await productModel.create({
            productName : productName,
            productDescription : productDescription,
            customerId : customerId
    });

    console.log(pr.dataValues);
}
const update = async (req , res ,next)=>{
    
}
const remove  =async(req , res ,next) =>{
    
}
const find = async(req , res ,next) =>{
    
}

module.exports = {
    create
    ,update
    ,remove
    ,find
}