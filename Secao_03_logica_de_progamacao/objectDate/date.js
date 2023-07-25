// Date é uma função construtora
// Os parametros são: ano, mes, dia, hora, minuto, segundo, milisegundo

const date = new Date(2023, 7, 15, 20, 59, 59);

console.log(date.toString());

// Exemplo 2

const date2 = new Date('2023-08-15 20:59:59');

console.log(date2.toString());

// Dia 
console.log('Dia', date.getDate());
// Mes
// 0 - Janeiro, 11 - Dezembro
console.log('Mes', date.getMonth() + 1);
// Ano
console.log('Ano', date.getFullYear());
// Hora
console.log('Hora', date.getHours());
// Minuto
console.log('Minuto', date.getMinutes());
// Segundo
console.log('Segundo', date.getSeconds());
// Milisegundo
console.log('Milisegundo', date.getMilliseconds());
// Dia da semana
// 0 - Domingo, 6 - Sabado
console.log('Dia da semana', date.getDay());
// Date atual
console.log(Date.now());

// Formatando a data com uma função

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(date) {
    const dia = zeroAEsquerda(date.getDate());
    const mes = zeroAEsquerda(date.getMonth() + 1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const minuto = zeroAEsquerda(date.getMinutes());
    const segundo = zeroAEsquerda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const date3 = new Date();
const dataBrasil = formataData(date3);
console.log(dataBrasil);
