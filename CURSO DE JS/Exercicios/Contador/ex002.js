function contar() {
    let txtini = document.getElementById('NumeroInicio')
    let txtfim = document.getElementById('NumeroFim')
    let txtp = document.getElementById('NumeroPasso')
    let res = document.getElementById('res')

    if (txtini.value.length === 0 || txtfim.value.length === 0 || txtp.value.length === 0) {
        alert('Verifique se todos os campos estão preenchidos com algum valor!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(txtini.value)
        let f = Number(txtfim.value)
        let p = Number(txtp.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
                for (let c = i; c <= f; c += p )
                res.innerHTML += (`${c} 👉🏼 `)
                res.innerHTML += (`✅`)
        }else {
            for (let c = i; c >= f; c -= p )
                res.innerHTML += (`${c} 👉🏼 `)
                res.innerHTML += (`✅`)
        }
    }
}
