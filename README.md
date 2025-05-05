# 💼 E-Commerce Web App

A modern and fully functional **e-commerce platform** built with **React**, **Tailwind CSS**, and **Appwrite**. This project includes user authentication, product listing, cart management, order placement, and order tracking.

---

# 🌍 Hosted on Netlify

* [click here](https://project-pitp.netlify.app/) to visit Shop.co

## 🚀 Features

* 🧾 User Authentication (Sign up / Login / Logout)
* 🛒 Add to Cart & Checkout
* 📦 Order History (Recent Orders)
* 🎨 Responsive UI with Tailwind CSS
* 🔐 Secure data with Appwrite backend
* 🌐 Real-time database and API integration

---

## 🛠️ Tech Stack

| Frontend     | Backend (BaaS) | Styling       |
| ------------ | -------------- | ------------- |
| React (Vite) | Appwrite       | Tailwind CSS  |
| React Router | Appwrite DB    | Heroicons     |
| Redux Toolkit  | JWT/Auth       | Daisy UI |

---

## 📂 Project Structure

```
src/
├── public/             # Static images and icons
├── components/         # Reusable UI components (Navbar, ProductCard, etc.)
├── context/            # Global context (CartContext, AuthContext)
├── pages/              # Route pages (Home, ProductDetails, Cart, Orders, etc.)
├── App.jsx             # Root component
├── main.jsx            # Application entry point
└── index.css           # Tailwind CSS imports and custom styles
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Yousufkhango/Shop.co.git
cd shop.co
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Appwrite

* Create an Appwrite project at [appwrite.io](https://appwrite.io)
* Create a database, collections (`products`, `orders`, `users`, `categories`)
* Enable Authentication
* Update Appwrite credentials in your `.env` file:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_db_id
VITE_APPWRITE_COLLECTION_PRODUCTS=products_id
VITE_APPWRITE_COLLECTION_ORDERS=orders_id
```

### 4. Run the App

```bash
npm run dev
```

---


## 🧠 Future Improvements

* 🔍 Product filtering and search
* 🧾 Admin dashboard for inventory management
* 💳 Stripe/PayPal integration
* 📱 PWA support

---

## 🤝 Contributing

Feel free to fork this repo, make changes, and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

Made with ❤️ by [Muhammad Yousuf](https://github.com/yousufkhango)
