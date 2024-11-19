const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');  // Import controller

// Định nghĩa các route cho sản phẩm
router.get('/', productController.getAllProducts);
router.get('/new', (req, res) => res.render('products/new')); // Route để tạo sản phẩm mới
router.get('/:id/edit', productController.getProductById); // Route để chỉnh sửa sản phẩm theo ID
router.post('/', productController.createProduct); // Route tạo sản phẩm mới
router.put('/:id', productController.updateProduct); // Route cập nhật sản phẩm theo ID
router.delete('/:id', productController.deleteProduct); // Route xóa sản phẩm theo ID

module.exports = router;
