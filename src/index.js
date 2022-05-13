import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCnR8dXxt0Vez6z2VSswoMi2BSD2onEmSs",
//   authDomain: "montivero-marcio-ecommerce.firebaseapp.com",
//   projectId: "montivero-marcio-ecommerce",
//   storageBucket: "montivero-marcio-ecommerce.appspot.com",
//   messagingSenderId: "185903903054",
//   appId: "1:185903903054:web:9c6911697b64e18df52e1f"
// };

// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
