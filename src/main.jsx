import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from './pages/ErrorPage';
import InicioComponent from "./pages/Home"

// Configuración de rutas
import  {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
