import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form>
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        required
        value={numero}
        margin="normal"
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        id="estado"
        label="Estado"
        required
        type="text"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <TextField
        id="cidade"
        label="Cidade"
        required
        type="text"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />
      <TextField
        id="cep"
        label="CEP"
        type="number"
        required
        variant="outlined"
        value={cep}
        margin="normal"
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
