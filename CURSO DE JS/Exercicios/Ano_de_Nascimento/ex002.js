function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Algo está errado! Verifique o ano digitado')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade +=0 && idade < 10) {
                img.setAttribute("src","foto-bebe-m.png")
            } else if (idade < 21) {
                img.setAttribute("src","foto-jovem-m.png")
            } else if (idade < 50) {
                img.setAttribute("src","foto-adulto-m.png")
            }else {
                img.setAttribute("src","foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade +=0 && idade < 10) {
                img.setAttribute("src","foto-bebe-f.png")
            } else if (idade < 21) {
                img.setAttribute("src","foto-jovem-f.png")
            } else if (idade < 50) {
                img.setAttribute("src","foto-adulto-f.png")
            }else {
                img.setAttribute("src","foto-idoso-f.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero==='Mulher'?'uma':'um'} ${gênero} de ${idade} ano${idade>1?'s':''}`
        res.appendChild(img)
}
}