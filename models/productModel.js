const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Tên sản phẩm bắt buộc
  price: { type: Number, required: true }, // Giá sản phẩm bắt buộc
  description: String  // Mô tả sản phẩm không bắt buộc
});

const Product = mongoose.model('Product', productSchema); // Tạo model từ schema

module.exports = Product;
