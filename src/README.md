# Swiggy Live API Frontend 🍔

A fully functional **frontend** web app that replicates core features of Swiggy, built with **React** and **Tailwind CSS**. It fetches **real-time restaurant and menu data** from Swiggy’s live API (via a CORS proxy) and implements interactive features like dynamic routing, search, filters, and cart management — all without a backend.

---

## 🚀 Features

* **Live Data Fetching** — Uses Swiggy’s real-time public API to display restaurants and menus.
* **Dynamic Routing** — Individual restaurant pages using React Router.
* **Search & Filter** — Search restaurants by name or cuisine and filter by ratings or delivery time.
* **Add to Cart (State Managed)** — Cart-like functionality implemented with React state/Context API (add/remove items).
* **Shimmer UI** — Skeleton loaders for smooth UX while data is loading.
* **Error Handling** — Graceful fallbacks for network/API failures.
* **Responsive Design** — Built with Tailwind CSS for a modern, mobile-friendly layout.

---

## 🧠 Tech Stack

| Category             | Tools                              |
| -------------------- | ---------------------------------- |
| **Frontend**         | React.js                           |
| **Styling**          | Tailwind CSS                       |
| **Routing**          | React Router DOM                   |
| **State Management** | React Hooks / Context API          |
| **API Integration**  | Swiggy Live API (via a CORS proxy) |
| **Version Control**  | Git & GitHub                       |

---

## ⚙️ Installation & Setup

> These commands assume you have Node.js and npm installed.

1. **Clone the repository**

```bash
git clone https://github.com/NishantTripathi21/Frontend-using-Swiggy-s-live-API.git
cd Frontend-using-Swiggy-s-live-API
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Tailwind CSS** (if not already configured)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then add Tailwind directives to your CSS (e.g. `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Start the development server**

If the project uses Parcel (example):

```bash
npx parcel src/index.html
```

Or with a typical React setup (create-react-app / Vite) use:

```bash
npm start
# or
npm run dev
```

---

## ⚠️ Important Notes / CORS

* Swiggy’s live API is protected by CORS and may not allow direct client-side requests from your origin. In development you can use a proxy like **CORS Anywhere** (`https://cors-anywhere.herokuapp.com/`) or set up your own small proxy server.
* **Legal / Terms:** Using someone else’s private or undocumented API in a production or public project can violate terms of service. I have **not deployed** this project for this reason — keep this repo for learning/demonstration only.

---

## 🔧 How the App Works (high level)

* The app fetches restaurant lists from Swiggy’s API and renders them on the home page.
* Clicking a restaurant uses dynamic routing to open a detail page that fetches the restaurant's menu.
* The app uses React Context (or local state) to manage a simple cart — items can be added/removed and quantities adjusted.
* Shimmer placeholders show while API requests are in-flight; error UI displays if fetch fails.

---
## ✅ Scripts (example)

Add or confirm these scripts in `package.json` depending on your setup:

```json
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html",
  "dev": "parcel src/index.html --open"
}
```

Or for CRA/Vite projects adjust accordingly (`npm start`, `npm run build`).

---

## Contributing

This repo is mainly for learning. If you want to improve it:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes and open a pull request.

---

## License

This project is for educational/demonstration purposes. Replace this section with a proper license (e.g., MIT) if you plan to open-source it publicly.

---
