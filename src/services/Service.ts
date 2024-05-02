import axios from "axios";

// Conexão Back vs Front
const api = axios.create({
  baseURL: "https://blogpessoal-aojm.onrender.com/"  //usuarios/logar
});


// Services -> funções que vão realizar as requisições ao Back
// url: usuarios/logar
// Funções assincronas 
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);

}

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

