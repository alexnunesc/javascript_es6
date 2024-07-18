class Cachorro {
  constructor(action) {
    this.action = action;
  }
  
  get latir() {
    console.log(`Cachorro está fazendo ${this.action}!`);
  }
}

module.exports = {
  Cachorro,
}
