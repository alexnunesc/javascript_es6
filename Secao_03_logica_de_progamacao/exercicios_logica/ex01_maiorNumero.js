// Maior número.

const numeros = [1, 2, 3, 1, 6, 2];

const maiorNumero = (numeros) => {
  let comparador = numeros[0];
  let result = 0;

  for(let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > comparador) {
      comparador = numeros[i]
      result = comparador;
    }
  }
  return result;
}

console.log(maiorNumero(numeros));
