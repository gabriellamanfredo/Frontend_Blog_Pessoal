import axios from "axios";

// Conexão Back vs Front
const api = axios.create({
  baseURL: "https://blogpessoal-aojm.onrender.com/"  //usuarios/logar
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

//login("usuario/logar")
/*
  resposta = {
    headers:{},
    data: {
      os dados do user logado
    },

    ...

  }

*/

// Services -> funções que vão realizar as requisições ao Back
// url: usuarios/logar
// Funções assincronas 
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);

}

// CRIANDO CRUD DA APLICAÇÃO
export const buscar = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header)
}
