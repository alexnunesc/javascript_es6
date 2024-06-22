# Sintaxe de Type Annotations no TypeScript

## Introdução

TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao JavaScript. Isso significa que o TypeScript é JavaScript, mas com a adição de tipos. Isso permite que o TypeScript verifique o código em tempo de compilação e forneça informações sobre o tipo de variáveis, parâmetros e propriedades.

## Sintaxe de Type Annotations

TypeScript fornece uma sintaxe para adicionar tipos a variáveis, parâmetros e propriedades. Isso é chamado de Type Annotations. A sintaxe é simples: basta adicionar um dois pontos (:) após o nome da variável, parâmetro ou propriedade, seguido pelo tipo.

Aqui está um exemplo de Type Annotations:

```typescript
  let name: string = 'Alice';
  let age: number = 30;
  let isStudent: boolean = true;
  let simbol: symbol = Symbol('foo');
  let bigInt: bigint = 100n;
```

Neste exemplo, temos quatro variáveis com diferentes tipos: `string`, `number`, `boolean`, `symbol` e `bigint`.

## Tipos Complexos

TypeScript também suporta tipos mais complexos, como arrays, objetos e funções. Aqui está um exemplo:

### Arrays

```typescript
  // Array de números
  let numbers: number[] = [1, 2, 3];
  let arrayOfNumbers: Array<number> = [1, 2, 3];

  // Array de strings
  let strings: string[] = ['a', 'b', 'c'];
  let arrayOfStrings: Array<string> = ['a', 'b', 'c'];
```

### Objetos

```typescript
  // Objeto com propriedades tipadas
  let person: { name: string, age: number } = { name: 'Alice', age: 30 };

  // Objeto com propriedades opcionais
  let user: { name: string, age?: number } = { name: 'Bob' };
```

### Funções

TypeScript também suporta tipagem de funções. Aqui está um exemplo:

```typescript
  // Função com parâmetros tipados e retorno tipado
  function soma(a: number, b: number): number {
    return a + b;
  }
```
