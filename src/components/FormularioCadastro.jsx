import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuarios aoEnviar={proximo} />,
    <DadosPessoais
      aoEnviar={proximo}
      aoVoltar={anterior}
      validarCpf={validarCpf}
    />,
    <DadosEntrega aoEnviar={aoEnviar} aoVoltar={anterior} />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function anterior() {
    setEtapaAtual(etapaAtual - 1);
  }

  return <Container>{formularios[etapaAtual]}</Container>;
}

export default FormularioCadastro;
