function validarSenha(senha) {
  // Verifica se a senha tem pelo menos 8 caracteres e contém números e letras
  const temNumero = /\d/.test(senha);
  const temLetra = /[a-zA-Z]/.test(senha);

  if (senha.length < 8) {
    return { valido: false, mensagem: 'A senha deve ter pelo menos 8 caracteres.' };
  }

  if (!temNumero || !temLetra) {
    return { valido: false, mensagem: 'A senha deve conter pelo menos um número e uma letra.' };
  }

  return { valido: true, mensagem: 'Senha válida!' };
}

module.exports = validarSenha;