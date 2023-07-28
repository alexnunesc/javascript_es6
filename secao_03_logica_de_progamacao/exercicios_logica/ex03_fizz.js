const nomes = ['Fizz', 'Buzz', 'FizzBuzz'];
const numeros = [3, 5, 15, '9', 10, 30, 25, 45, 60, 75, 90, 100];

const checkNomes = (numeros) => {
  for(let numero of numeros) {
    try {
      if (typeof numero !== 'number') {
        throw new Error('O valor deve ser um número.');
      }

      if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('FizzBuzz');
      } else if (numero % 3 === 0) {
        console.log('Fizz');
      } else if (numero % 5 === 0) {
        console.log('Buzz');
      } else if (numero % 3 !== 0 && numero % 5 !== 0){
        console.log(numero);
      }

    } catch (error) {
      console.log(error.message);
    }
  }
}

checkNomes(numeros);
