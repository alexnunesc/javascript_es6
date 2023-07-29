// Usando o forEach

const numeros = [10, 20, 30];

let total = 0;
numeros.forEach((valor) => {
  return total += valor;
});

console.log(total); // 60
