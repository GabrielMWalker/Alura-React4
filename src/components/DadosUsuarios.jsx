import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErros from "../hooks/useErros";

function DadosUsuarios({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, password });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        fullWidth
        required
        value={email}
        margin="normal"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        onBlur={validarCampos}
        id="password"
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        error={!erros.password.valido}
        helperText={erros.password.texto}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;
