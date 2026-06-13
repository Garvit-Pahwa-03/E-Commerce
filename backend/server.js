const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || 
        origin.startsWith('http://localhost') || 
        origin.startsWith('http://127.0.0.1') || 
        origin.includes('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy configuration'));
    }
  },
  credentials: true
}));

app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

// Production vs Development Base Landing Page
if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.json({ message: 'ShopNest API is running live and healthy in Production...' });
  });
} else {
  app.get('/', (req, res) => {
    res.send('ShopNest API is running in Development mode...');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));