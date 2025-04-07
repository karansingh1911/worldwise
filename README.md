# 🌍 WorldWise

Save your favorite places around the world — and see them beautifully rendered on a map. Built with React and modern frontend best practices.

---

## 🚀 Project Overview

**WorldWise** is a travel companion app that allows users to save and view their favorite locations across the globe. It combines geolocation, mapping, and performance-optimized UI to deliver a smooth and interactive experience.

---

## 🛠️ Tech Stack

- **React** (with hooks)
- **React Router** – for client-side routing
- **Context API** – for state management across the app
- **Tailwind CSS** + **CSS Modules** – clean, modular styling
- **JSON Server** – for mocking backend data
- **React Lazy & Suspense** – for lazy loading and code splitting
- **Geolocation API** – to detect user location
- **Geocoding API** – to fetch coordinates based on location names

---

## ✨ Features

- 🌐 **Save Favorite Places**: Pin locations on the map and keep a personal list.
- 📍 **Auto-Detect Current Location**: Uses the browser's Geolocation API.
- 🗺️ **Interactive Map**: Browse saved places visually.
- 🔁 **Dynamic Routing**: Seamless navigation between views using React Router.
- ⚡ **Performance Optimizations**:
  - Lazy-loaded components
  - Code splitting via `React.lazy`
  - Minimal re-renders with `React.memo`
- 💅 **Fully Styled UI**:
  - Tailwind CSS for utility-first design
  - CSS Modules for scoped component styles
- 🧪 **Fake Backend**:
  - JSON Server used to simulate backend interactions
  - Initial data is preloaded to enhance UX

---

## 📚 What I Learned

This project was a deep dive into many advanced React concepts and frontend techniques:

- Managing global state without external libraries using the **Context API**
- Building modular and maintainable UIs with **Tailwind CSS** and **CSS Modules**
- Implementing **code splitting** and **lazy loading** to reduce initial load time
- Working with **browser APIs** like Geolocation and integrating external APIs (Geocoding)
- Creating a local backend simulation with **JSON Server**
- Leveraging **React Router** for a smooth SPA experience
- Applying **performance optimization** best practices in real-world scenarios

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/karansingh1911/worldwise.git
cd worldwise

# Install dependencies
npm install

# Start the app and JSON Server
npm run dev
```
