const express = require("express");

function errorMongoose(err, req, res, next){
    if(err.name == "CastError"){
      err.message = "id no match with database"
    }
      next(err);
    };
    
function errorHandler(err, req, res, next) {
    const {message}=err;
    console.log("index.js USE error")
    res.render("error.html",{message});
};

module.exports = {errorMongoose,errorHandler};
