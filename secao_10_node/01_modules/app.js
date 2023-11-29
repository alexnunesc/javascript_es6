const { falaNome, Test1 } = require("./mod1");

falaNome();

const p1 = new Test1("Alex");

console.log(p1.nome);


// Ou

const mod1 = require("./mod1");

mod1.falaNome();
