function Gerar() {
let numb = document.getElementById('numero')
let res = document.getElementById('resdiv')
let tab = document.getElementById('seltab')
if (numb.value.length == 0) {
    res.innerHTML = (`[ERRO] Você Não digitou nada, confira novamente!`)
} else {
    let num = Number(numb.value)
    let r = 1
    while (r <= 10) {
        let item = document.createElement('option')
        item.text = `${num} x ${r} = ${num*r}`
        tab.appendChild(item)
        r++
    }
}

}