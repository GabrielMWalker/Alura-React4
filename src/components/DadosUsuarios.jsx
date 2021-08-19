import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuarios() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        margin="normal"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuarios;
