const Product = require('../models/productModel'); // Import model Product

// Định nghĩa các hàm CRUD cho sản phẩm
const productController = {
  // Lấy tất cả sản phẩm
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();  // Tìm tất cả sản phẩm
      res.render('products/index', { products });
    } catch (error) {
      res.status(500).send('Error fetching products');
    }
  },

  // Lấy sản phẩm theo ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);  // Tìm sản phẩm theo ID
      res.render('products/edit', { product });
    } catch (error) {
      res.status(500).send('Error fetching product');
    }
  },

  // Tạo mới sản phẩm
  createProduct: async (req, res) => {
    const { name, price, description } = req.body;
    const product = new Product({ name, price, description });
    try {
      await product.save();  // Lưu sản phẩm mới
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error creating product');
    }
  },

  // Cập nhật sản phẩm
  updateProduct: async (req, res) => {
    const { name, price, description } = req.body;
    try {
      await Product.findByIdAndUpdate(req.params.id, { name, price, description });
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error updating product');
    }
  },

  // Xóa sản phẩm
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);  // Xóa sản phẩm theo ID
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error deleting product');
    }
  }
};

module.exports = productController;
