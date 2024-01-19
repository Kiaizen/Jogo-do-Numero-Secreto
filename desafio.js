function imc(altura,peso) {
   let resultado = peso / altura**2
   console.log(resultado)
}

imc(1.75, 90)

function fatorial(num) {
    let resultado = num
    for (let i = num; i > 1; i--) {
        let num2 = i - 1;
         resultado =  resultado * num2;
    }
    return resultado
}

console.log(fatorial(9))

function converterDolarEmReal(dolar) {
    let real = dolar * 4.80
    return console.log(`R$${real}`) 
}

converterDolarEmReal(44)

function areaEPerimetroRetangulo(altura,largura) {
    let area = largura * altura
    let perimetro = (altura + largura) * 2
    console.log(`A área do retangulo é igual a ${area}`,`O perimetro do retangulo é igual a ${perimetro}`)
}

areaEPerimetroRetangulo(23,5)

function areaEPerimetroCirculo(raio) {
    const pi = 3.14
    let area = pi * raio**2
    let perimetro = 2* pi * raio
    console.log(`A área do circulo é igual a ${area}`,`O perimetro do circulo é igual a ${perimetro}`)
}

areaEPerimetroCirculo(5)

function exibirTabuada(tabuada) {
    return`<spam>${tabuada}</spam></br>`
}

function Tabuada(num) {
    let tabuada = 0
    let resultado = [];
    let paragrafo = document.querySelector('p')
    for (let i = 1; i < 10; i++) {
        tabuada = num * i
        resultado.push(`${num} x ${i} = ${tabuada}`)
    };
    const resultadoTabuada = resultado.map(exibirTabuada).join('')
    paragrafo.innerHTML = resultadoTabuada
    console.log(resultado)
}
Tabuada(5)


let listaGenerica = []

let linguagensDeProgramacao = ['JavaScript', 'Kotlin', 'Python']

linguagensDeProgramacao.push('Java','Ruby','GoLang')

let trio = ['Uno','duo','trio']
console.log(trio[2])
