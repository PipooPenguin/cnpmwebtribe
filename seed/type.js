// file này là một array các thể loại import vào seed
const foodCategories = [
    'fastfood',
    'maindish',
    'drinks',
    'desserts'
  ];
// file js kết nối với file index.js thì phải có module.exports return ra cái gì đó. 'Dishes' có một chữ + viết hoa chữ cái đầu là rule của mongoose, sẽ tạo một collection(table) với tên dishes
module.exports = foodCategories;