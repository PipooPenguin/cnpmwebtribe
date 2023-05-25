// file này để xóa tất cả data của table dishes rồi tạo ra data mẫu đưa vào dishes
const mongoose = require('mongoose');
//If you are using the latest versions of Node.js with mongoose, and you get a connection refused ECONNREFUSED error message when connecting your app to the database, then you might need to change localhost to 127.0.0.1 in your mongoose.connect database connection string:
mongoose.connect('mongodb://127.0.0.1/fooddeli')
.then(()=>{console.log('connect sucess!!')})
.catch(err => {console.log('error!!')})
//connect với dishesSchema nằm trong models/dishes.js
const Dish = require('../models/dishes.js')
// require file title.js
const title = require('./title.js')
// require file type.js
const type = require('./type.js')
//console.log(title);
const pics = require('./image.js')



const seedDB = async () => {
    //delete cần thời gian nên bỏ trong hàm async await
    //xóa những thứ đang có trên database
    await Dish.deleteMany({});
     for (let i = 0; i < 15; i++) {
         const random15 = Math.floor(Math.random() * 15);
         const random4 = Math.floor(Math.random() * 4);
         const imgran = Math.floor(Math.random() * 9);
         const priceran = (Math.floor(Math.random() * (71 - 30)) + 30)*1000;
         const dish = new Dish({
             title: `${title[random15]}`,
             type: `${type[random4]}`,
            image : `${pics[imgran]}`,
     //     image : "https://api.unsplash.com/photos/8hmg_-o77T8",
            price : `${priceran}`,
            description :'rất là ngon'
         })
         await dish.save();
     }
}
// vừa gọi seedDB xong thì đóng luôn database
seedDB().then(()=>{mongoose.connection.close();});