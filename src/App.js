import React, { Component } from "react";
import FormularioCadastro from "./components/";
import { Container, Typography } from "@material-ui/core";
import { validarCpf, validarSenha } from "./models/cadastro.js";

import "./App.css";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCpf,
            password: validarSenha,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
