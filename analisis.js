
// for (persona for salarios){persona.name == 'juanita'}

const nombreIngresado = document.querySelector('#nombre');
const btnCalcularMediana = document.querySelector('#btnCalcularMediana');
const resultMediana = document.querySelector('#resultMediana');
const pantallaNombres = document.querySelector('#pantallaTodasPersonas');


btnCalcularMediana.addEventListener('click',medianaDePersona);
imprimirNombres();


function imprimirNombres (){
    const arrayNombres = [];

    arrayNombres.push(
        salarios.map(function (persona){return persona.name + '\n'})
    );
    
    pantallaNombres.value = arrayNombres;

}

function buscadorDePersona(personaBuscada){
    const persona = salarios.find(persona=>persona.name==personaBuscada);
    return persona;
}

function medianaDePersona(nombrePersona){
     nombrePersona = nombreIngresado.value;///////////////////////
    const trabajos = buscadorDePersona(nombrePersona).trabajos;
    const salarios = trabajos.map(function(propiedades){
        return propiedades.salario;
    });
    let mediana = PlatziMath.calcularMediana(salarios);
    resultMediana.innerText = 'la mediana es: ' + mediana;
}


