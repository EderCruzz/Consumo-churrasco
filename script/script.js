// carne 400 gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por pessoa + 6hras - 2000ml
// Refrigerante - 800ml por pessoa + 6hrs 1200ml
// Agua - 400ml por pessoa + 6hrs 600ml
// Suco - 200ml por pessoa + 6hrs 300ml

// crianças valem por 0,5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let result = document.getElementById('res')

function calcular() {

    let adultos = inputAdultos.value
    let crianças = inputCriancas.value
    let duracao = inputDuracao.value
    let carne = carnePP(duracao)
    let cerveja = cervejaPP(duracao)
    let refrigerante = refrigerantePP(duracao)
    let suco = sucoPP(duracao)

    let qtdTotalCarne = carne * adultos + carne / 2 * crianças
    let qtdTotalCerveja = cerveja * adultos
    let qtdTotalRefrigerante = refrigerante * adultos + refrigerante / 2 * crianças
    let qtdTotalSuco = suco * adultos + suco / 2 * crianças

    result.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carne.</p>
                        <p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja.</p>
                        <p>${Math.ceil(qtdTotalRefrigerante / 1000)}L de Refrigerante.</p>
                        <p>${Math.ceil(qtdTotalSuco / 1000)}L de Suco.</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refrigerantePP(duracao) {
    if (duracao >= 6) {
        return 1200
    } else {
        return 800
    }
}

function sucoPP(duracao) {
    if (duracao >= 6) {
        return 300
    } else {
        return 200
    }
}