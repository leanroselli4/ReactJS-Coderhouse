import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7NV31po0kvBwnbeCiyg-h8AKHc8oByeo",
  authDomain: "lean-ecommerce-9cb75.firebaseapp.com",
  projectId: "lean-ecommerce-9cb75",
  storageBucket: "lean-ecommerce-9cb75.appspot.com",
  messagingSenderId: "501497369217",
  appId: "1:501497369217:web:f822bb050350f65886f380"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)