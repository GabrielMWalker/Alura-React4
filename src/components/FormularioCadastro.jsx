import React from "react";
import { Container } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  return (
    <Container>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      <DadosUsuarios />
      <DadosEntrega />
    </Container>
  );
}

export default FormularioCadastro;
