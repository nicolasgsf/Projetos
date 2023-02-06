var idade = 71
console.log(`Olá, você atualmente tem ${idade} anos de idade`)

if (idade < 16) {
    console.log(`Portanto você ainda não pode votar!`)
} else if (idade === 16 || idade === 17 || idade >= 71) {
    console.log(`Portanto seu voto é optativo!`)
} else if (idade >= 18 && idade<= 70) {
    console.log('Portanto o seu voto é obrigatório!')
}