function somaTudoRest(a, b, c, ...args) {
    console.log(a, b, c, args);
    return args.reduce((acc, value) => acc + value, 0);
}

// function somaTudoRest(...args) {
//     return args.reduce((acc, value) => acc + value, 0);
// }

console.log(somaTudoRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


