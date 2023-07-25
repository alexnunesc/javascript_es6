// Break - Para a execução do loop
// Continue - Pula a execução do momento
// Não é recomendado o uso de break e continue

// Break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('Encontrei o 5');
        break;
    }
    console.log(`i = ${i}`);
}

// Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('Pulei o 5');
        continue;
    }
    console.log(`i = ${i}`);
}
