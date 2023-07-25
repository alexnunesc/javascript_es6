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