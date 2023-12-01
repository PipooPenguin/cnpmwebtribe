const joi = require('joi');
const dishSchema= joi.object({
  title: joi.string().min(3).max(20).required(),
  image: joi.string(),
  price: joi.number().min(1000).required(),
  type: joi.string(),
  image : joi.string(),
}).required();
module.exports  = dishSchema;