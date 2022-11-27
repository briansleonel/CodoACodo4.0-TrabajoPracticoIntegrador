import { Route, Routes } from 'react-router-dom'
import './App.css';

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import ErrorPage from './pages/ErrorPage';
import ContactUs from './pages/ContactUs';
import GestionPaquetes from './pages/GestionPaquetes';

import Layout from "./components/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path='gestion-paquetes' element={<GestionPaquetes />} />
        <Route path='contact' element={<ContactUs />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />

      {/* <Route path="/account" element={<AccountLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="edit" element={<ProfileEdit />} />
      </Route> */}
    </Routes>
  )
}

export default App;