class GeraSenha {
  GeraNovaSenha(incluirLetrasMaiusculas, incluirLetrasMinusculas, incluirNumeros, incluirSimbolos, qtd) {
    try {
      if (Number(qtd) < 4) {
        return new Error('A quantidade de caracteres deve ser maior ou igual a 4');
      }

      let caracteres = '';
      // adiciona os caracteres que a senha vai ter em uma variável de acordo com o que o usuário escolher
      if (incluirLetrasMaiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (incluirLetrasMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
      if (incluirNumeros) caracteres += '0123456789';
      if (incluirSimbolos) caracteres += '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
      let senha = '';
      // Adiciona um caractere de cada categoria selecionada
      if (incluirLetrasMaiusculas) senha += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.length)];
      if (incluirLetrasMinusculas) senha += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 'abcdefghijklmnopqrstuvwxyz'.length)];
      if (incluirNumeros) senha += '0123456789'[Math.floor(Math.random() * '0123456789'.length)];
      if (incluirSimbolos) senha += '!@#$%^&*()-_=+[]{}|;:,.<>?'[Math.floor(Math.random() * '!@#$%^&*()-_=+[]{}|;:,.<>?'.length)];
      
      // gera o restante da senha de acordo com a quantidade de caracteres que o usuário escolher
      for (let i = senha.length; i < qtd; i++) {
        // pega um caractere aleatório da variável caracteres e adiciona na variável senha
        senha += caracteres[Math.floor(Math.random() * caracteres.length)];
      }
  
      return senha;

    } catch (error) {
      return error.message;
    }
  }
}

const gera = new GeraSenha();
// console.log(gera.GeraNovaSenha(true, true, true, true, 10));
