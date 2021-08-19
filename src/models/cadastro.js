function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 6 || senha.length > 20) {
    return { valido: false, texto: "Senha deve estar entre 6 e 20 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCpf, validarSenha };
