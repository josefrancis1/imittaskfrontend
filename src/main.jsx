import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import store from './store.js'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
 </Provider>
)
