import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toast } from "react-toastify"
import { toastAlerta } from "../utils/toastAlerta"

// 2ª PARTE: DEFINI OS DADOS QUE O CONTEXTO IRÁ ARMAZENAR
interface AuthContextProps {
  usuario: UsuarioLogin
  handleLogout(): void
  handleLogin(usuario: UsuarioLogin): Promise<void>
  isLoading: boolean
}

// DEFINE A ESTRUTURA DO CONTEXTO (COMPONENTE QUE ENVOLVE OUTROS)
interface AuthProviderProps {
  children: ReactNode
}

// 1ª PARTE: CONSTRUÇÃO INICIAL DO CONTEXTO DE ARMAZENZAMENTO
export const AuthContext = createContext({} as AuthContextProps)

// 3ª PARTE: FUNÇÃO QUE GERENCIA O CONTEXTO DE ARMAZENAMENTO
export function AuthProvider({ children }: AuthProviderProps) {

  //CRIANDO o ESTADO DE USUARIO LOGADO- useState
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  })

  //VARIAVEL DE ESTADO DE CARREGAMENTO - UTILIZADO PARA INIDICAR QUE ESTÁ HAVENDO ALGUMA REQUISIÇÃO AO BACKEND
  const [isLoading, setIsLoading] = useState(false)
  
  // RESPONSAVEL POR LOGAR O USUARIO E ATUALIZAR O ESTADO DE USUARIO
  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true) // Muda o estado p/ verdadeiro, indicando que existe uma requisição sendo processada no back

    try { //tenta fazer a requisição, e se houver erro não deixa a aplicação parar 

      await login(`/usuarios/logar`, userLogin, setUsuario) //esperamos que a service Login() finalize a sua aplicação
      toastAlerta("Usuário logado com sucesso", 'sucesso') //Avisa ao user que ocorreu tudo certo com um alerta
      setIsLoading(false) //altera o estado para falso, indicando a requisição já terminou de ser processada
      
    } catch (error) {

      console.log(error) //Avisa a gente do erro no console do navegador
      toastAlerta("Dados do usuário inconsistentes", 'info') // Avisa ao user que não deu certo com um alert
      setIsLoading(false) // altera o estado para falso, indicando que a requisição já terminou de ser processada
    }
  }
  

  // função que apaga os dados do user logado na aplicação
  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    })
  }
  
  return (
    // disponibiliza os dados ao resto da aplicação
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
       {children} {/*Representa os outros componentes da aplicação */}
    </AuthContext.Provider>
  )
}