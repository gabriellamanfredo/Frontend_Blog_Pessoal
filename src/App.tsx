import React from 'react'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTemas/FormularioTemas';
import DeletarTema from './components/temas/deletarTemas/DeletarTemas';

function App() {
  return (
    <AuthProvider>
      {/* Satélite - ele habilita o sistema de localização/roteamento */}
      <BrowserRouter>
        <Navbar />

        <div className='min-h-[80vh]'>
          <Routes>

            {/* Rota para chegar no objetivo */}
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/temas' element={<ListaTemas />} />
            <Route path='/cadastrarTema' element={<FormularioTema />} />
            <Route path='/editarTema/:id' element={<FormularioTema />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />

          </Routes>
          {/* GPS/Aplicativo -> ele pega o caminho da URL (login/cadastro) */}
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App

