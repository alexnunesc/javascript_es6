const { Cachorro } = require("./mod2");
const path = require("path");

console.log(path.resolve(__dirname, "..", "..", "secao_10_node", "02_modules", "mod2.js")); // __dirname is the current directory

console.log(__dirname);

const c1 = new Cachorro("Au Au");



c1.latir
