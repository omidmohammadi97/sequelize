const { HttpStatusCode } = require('axios');
const {productModel} = require('../models/product-model');
const { Op } = require('sequelize');

const biggerThan = async(col , condition)=>{
    console.log("hellooo",col , condition)
    return await productModel.sum(id , {
        where:{
            col : {
                [Op.gt] : condition
            }
        },
        raw : true,
        attributes : ['productName' , 'customerId']
    })
}
const lessThan = async(col ,field, condition)=>{
    return await productModel.sum(col , {
        where:{
            field : {
                [Op.lt] : condition
            }
        },
        raw : true,
        attributes : ['productName' , 'customerId']
    })
}
const getMin = async()=>{
    return await productModel.min(col)
    

}
const getMax = async(col)=>{
    return await productModel.max(col)
}

module.exports = {
    biggerThan,
    getMin,
    getMax,
    lessThan
}