import React from 'react'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <>

    {/* Satélite - ele habilita o sistema de localização/roteamento */}
      <BrowserRouter>
        <Navbar/>

        <div>

        </div>
          <Routes>

            {/* Rota para chegar no objetivo */}
            <Route path = '/' element = { <Home/>} />
            <Route path = '/' element = { <Login/>} />
            <Route path = '/' element = { <Home/>} />
              
          </Routes>
        {/* GPS/Aplicativo -> ele pega o caminho da URL (login/cadastro) */}

        <Footer/>

      </BrowserRouter>
    </>
)
}
export default App