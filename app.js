const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Cấu hình middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/products');
  });  
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My App</h1><p><a href="/products">Go to Products</a></p>');
});
app.set('view engine', 'ejs');  // Cấu hình EJS làm view engine
app.use(bodyParser.urlencoded({ extended: true }));  // Xử lý dữ liệu từ form
app.use(methodOverride('_method'));  // Giúp xử lý PUT/DELETE method trong form
app.use(express.static('public'));  // Phục vụ file tĩnh

// Sử dụng các route
app.use('/products', productRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
