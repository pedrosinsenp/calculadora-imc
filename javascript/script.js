function calcular() {
    let seu_imc = document.getElementById('seu-imc')
    let seu_estado = document.getElementById('seu-estado-imc')
    let peso = Number(document.getElementById('input-peso').value)
    let altura = Number(document.getElementById('input-altura').value)
    if (altura >= 100) {
        altura = altura / 100
    }
    let imc = (peso / (altura**2)).toFixed(2)
    if (imc != Infinity && imc != 0.00 && imc != 'NaN') { 
        if (imc < 17) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Muito abaixo do peso!!'
            seu_estado.style.color = 'darkred'
        } else if (imc < 18.5) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Abaixo do peso!'
            seu_estado.style.color = '#bf2604'
        } else if (imc < 25) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Peso normal'
            seu_estado.style.color = '#00670c'
        } else if (imc < 30) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Acima do peso'
            seu_estado.style.color = '#bf2604'
        } else if (imc < 35) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Obesidade grau 1!'
            seu_estado.style.color = 'red'
        } else if (imc < 40) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Obesidade grau 2!!'
            seu_estado.style.color = 'darkred'
        } else if (imc >= 40) {
            seu_imc.innerHTML = imc
            seu_estado.innerHTML = 'Obesidade grau 3 (mórbida)!!!'
            seu_estado.style.color = '#260101'
        }
    } else {
        seu_imc.innerHTML = ''
        seu_estado.innerHTML = 'Verifique suas credenciais!'
        seu_estado.style.color = 'red'
    }
}

function clickinfo() {
    let info = document.getElementById('perg')
    let infotx = info.style.display
    if (infotx == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
    }
}

function modo_claro() {
    let modo_css = document.getElementById('modos')
    modo_css.innerHTML = '<link rel="stylesheet" href="css/style-claro.css" id="css-escuro">'
}

function modo_escuro() {
    let modo_css = document.getElementById('modos')
    modo_css.innerHTML = '<link rel="stylesheet" href="css/style-escuro.css" id="css-escuro">'
}