var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas!`)

if (hora < 12) {
    console.log("Tenha um Bom dia!")
} else if (hora <= 18) {
    console.log("Tenha uma ba tarde!")
} else if (hora > 18 || hora < 0) {
    console.log("Tenha uma boa noite!")
}