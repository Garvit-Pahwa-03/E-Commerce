<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="ShopNest Logo" width="90" />

  # ShopNest — Full-Stack MERN E-Commerce Platform

  **A production-ready, end-to-end e-commerce application built with the MERN stack, featuring a complete Admin Dashboard, Razorpay payment integration, and Cloudinary-powered media management.**

  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
  ![Razorpay](https://img.shields.io/badge/Razorpay-0C3066?style=for-the-badge&logo=razorpay&logoColor=white)

</div>

---

## 🌐 Live Demo

> Deployed on Render — [**View Live App →**](https://your-render-link.onrender.com)

### 🔑 Demo Access

| Role | Email | Password |
|------|-------|----------|
| 👑 Admin | `admin@gmail.com` | `Admin@123` |
| 🛍️ Customer | `demo@gmail.com` | `Demo@123` |

> The **Admin** account has full access to the dashboard — manage products, view orders, check analytics, and upload images via Cloudinary.

---

## ✨ Key Features

**Customer Side**
- Browse and filter products on a dynamic Shop page
- Full cart management powered by Redux Toolkit
- Razorpay-integrated checkout with order tracking
- Personal profile page with complete order history
- User registration, login, and JWT-based session management

**Admin Dashboard**
- Add, edit, and delete products with Cloudinary image upload
- View and manage all customer orders
- Sales analytics overview
- Role-based route protection via admin middleware

**Platform**
- Fully responsive UI across desktop and mobile
- Secure password hashing and JWT authentication
- Email notifications via `sendEmail` utility
- RESTful API with modular Express routing

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js (CRA), Redux Toolkit, Context API, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT (JSON Web Tokens) |
| **Payments** | Razorpay |
| **Media Storage** | Cloudinary + Multer |
| **Deployment** | Render (monorepo, single-instance) |

---

## 📁 Project Structure

```
shopnest/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js        # Cloudinary SDK setup
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   ├── analyticsController.js
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── adminMiddleware.js    # Admin role guard
│   │   └── authMiddleware.js    # JWT verification
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes/
│   │   ├── analyticsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── productRoutes.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── seed.js
│   └── server.js
│
└── frontend/
    └── src/
        ├── admin/               # Admin dashboard components
        ├── components/          # Shared UI components
        ├── context/             # Auth context (JWT session)
        ├── pages/
        │   ├── Home.jsx
        │   ├── Shop.jsx
        │   ├── ProductDetail.jsx
        │   ├── Cart.jsx
        │   ├── Checkout.jsx
        │   ├── OrderSuccess.jsx
        │   ├── Profile.jsx
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   ├── About.jsx
        │   ├── Disclaimer.jsx
        │   └── ReturnPolicy.jsx
        ├── redux/
        │   ├── cartSlice.js
        │   └── store.js
        ├── styles/              # Modular CSS files
        ├── api.js               # Axios base config
        └── App.jsx
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js v18+
- MongoDB running locally (or a remote URI)
- Razorpay test keys
- Cloudinary account credentials

### 1. Clone & Configure Environment

```bash
git clone https://github.com/yourusername/shopnest.git
cd shopnest
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/shopnest
JWT_SECRET=your_jwt_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 2. Install All Dependencies

From the **root** `shopnest/` folder:

```bash
npm run build
```

> This installs dependencies for both `backend/` and `frontend/` in one go.

### 3. Seed the Database

```bash
npm run seed
```

This populates the database with sample products and creates an admin user:

| Field | Value |
|-------|-------|
| Email | `admin@shopnest.com` |
| Password | `password123` |

### 4. Start Both Servers

```bash
npm run dev
```

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)

---

## ☁️ Deployment on Render (Free Tier)

ShopNest is structured as a **single Render Web Service** — the Express backend serves the React build in production, eliminating the need for two separate deployments.

1. Push this repository to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com) → **New Web Service**
3. Connect your GitHub repo
4. Set the following:

| Setting | Value |
|---------|-------|
| **Build Command** | `npm run render-build` |
| **Start Command** | `npm start` |

5. Under **Advanced → Environment Variables**, add all variables from your `.env` file and set `NODE_ENV=production`
6. Hit **Deploy** — Render handles the rest

---

## 📬 API Reference (Postman)

A fully configured Postman collection is included: **`ShopNest_Postman_Collection.json`**

Import it into Postman to test all API endpoints. It includes pre-configured variables like `{{token}}` for protected admin and user routes.

**Endpoint Groups:**
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/products` — Fetch all products
- `POST /api/orders` — Place an order (protected)
- `GET /api/analytics` — Admin dashboard data (admin only)
- `POST /api/payment/create-order` — Initiate Razorpay payment

---

## 🔐 Authentication Flow

1. User registers/logs in → receives a **JWT token**
2. Token is stored client-side via **AuthContext**
3. Protected routes validate the token via `authMiddleware.js`
4. Admin routes additionally verify the user role via `adminMiddleware.js`

---

## 📸 Screenshots

> *(Add screenshots of Home, Shop, Admin Dashboard, Checkout here)*

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
