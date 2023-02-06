function carregar() {
    var msg = document.getElementById('h2horas')
    var img = document.getElementById('img')
    var par = document.getElementById('par')
    var d = new Date()
    var hora = d.getHours()
    var minutos = d.getMinutes()
    

    msg.innerHTML = (`Agora são ${hora}:${minutos}`)

    if (hora >= 0 && hora <= 12) {
        img.src = 'manha3.jpg'
        par.innerText = ('Tenha um bom Dia!')
        document.body.style.background = '#FBE4B5'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'tarde3.jpg'
        par.innerText = ('Tenha uma boa Tarde!')
        document.body.style.background = '#76AEC1'
    } else {
        img.src = 'noite3.jpg'
        par.innerText = ('Tenha uma boa Noite!')
        document.body.style.background = '#00195E'
    }
}