// SetInterval e setTimeout

// SetInterval - executa a função de tempos em tempos

const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};

const time = setInterval(function () {
    console.log(mostraHora());
}, 1000); // 1000ms = 1s

setTimeout(function () {
    clearInterval(time);
}, 3000);

// setTimeout - executa a função depois de um tempo

setTimeout(function () {
    console.log('Olá mundo!');
}, 5000);

