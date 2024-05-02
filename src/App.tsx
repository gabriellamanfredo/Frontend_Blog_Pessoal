import React from 'react'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Satélite - ele habilita o sistema de localização/roteamento */}
      <BrowserRouter>
        <Navbar />

        <div className='min-h-[80vh]'>
          <Routes>

            {/* Rota para chegar no objetivo */}
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/' element={<Home />} />

          </Routes>
          {/* GPS/Aplicativo -> ele pega o caminho da URL (login/cadastro) */}
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App

