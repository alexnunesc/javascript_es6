// Polimofismo  =  multiplas formas

// Superclasse
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    console.log(`Saldo anterior: ${this.saldo}`);
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

// Crianado a conta filha
const conta1 = new Conta(11, 22, 10);

// conta1.depositar(110);
// conta1.sacar(30);
// console.log('----------------------------');

//###############################################

// Conta corrente
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
// herda os métodos da conta
CC.prototype = Object.create(Conta.prototype);
// para não ficar com o construtor como sendo o da conta
CC.prototype.constructor = CC;

// sobrescrevendo o método sacar
CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

// Criando a conta filha
const cc = new CC(11, 22, 0, 100);

// cc.depositar(10);
// cc.sacar(110);
// cc.sacar(1);
// console.log('----------------------------');

// ###############################################

// Conta poupança
function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
// herda os métodos da conta
CP.prototype = Object.create(Conta.prototype);
// para não ficar com o construtor como sendo o da conta
CP.prototype.constructor = CP;

// Criando a conta filha
const cp = new CP(12, 33, 0);

cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

console.log('----------------------------');