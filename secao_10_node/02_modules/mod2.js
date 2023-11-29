class Cachorro {
  constructor(action) {
    this.action = action;
  }
  
  latir() {
    console.log(`Cachorro está fazendo ${this.action}!`);
  }
}

module.exports = {
  Cachorro,
}
