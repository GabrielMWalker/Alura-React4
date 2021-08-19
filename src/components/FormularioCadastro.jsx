import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais
      aoEnviar={coletarDados}
      aoVoltar={anterior}
      validarCpf={validarCpf}
    />,
    <DadosEntrega aoEnviar={coletarDados} aoVoltar={anterior} />,
    <Typography variant="h5" align="center">
      Obrigado pelo cadastro
    </Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function anterior() {
    setEtapaAtual(etapaAtual - 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;

//
