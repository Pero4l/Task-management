import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import{ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <ToastContainer/>
    </BrowserRouter>
  </StrictMode>,
)
