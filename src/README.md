# Swiggy Live API Frontend 🍔

A fully functional frontend web app that replicates core features of Swiggy, built using **React + Tailwind CSS**.  
It fetches **real-time restaurant and menu data** from Swiggy’s **live API** (via a CORS proxy) and implements interactive features like dynamic routing, search, filters, and cart management — all without a backend.

---

## 🚀 Features

- **Live Data Fetching:** Uses Swiggy’s real-time public API to display restaurants and their menus.
- **Dynamic Routing:** View individual restaurant details and menus with React Router.
- **Search & Filter:** Search restaurants by name or cuisine and filter by ratings or delivery time.
- **Add to Cart (State Managed):** Uses React state for cart-like functionality (add/remove items).
- **Shimmer UI:** Skeleton loaders for seamless user experience during API fetch.
- **Error Handling:** Graceful fallback for network or API failures.
- **Responsive Design:** Built with Tailwind CSS for clean, modern, mobile-friendly UI.

---

## 🧠 Tech Stack

| Category | Tools |
|-----------|-------|
| **Frontend** | React.js |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **State Management** | React Hooks / Context API |
| **API Integration** | Swiggy Live API (via CORS proxy) |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   git clone https://github.com/NishantTripathi21/Frontend-using-Swiggy-s-live-API.git
   cd Frontend-using-Swiggy-s-live-API

2. **Install the dependencies**
    npm install

3. **setup tailwind CSS**
    npm install tailwindcss @tailwindcss/postcss

4. **start the development server**
    npx parcel src/index.html

⚠️ Note: Swiggy’s live API has CORS restrictions. Use a proxy such as [CORS Anywhere](https://cors-anywhere.herokuapp.com/) to fetch data successfully.




