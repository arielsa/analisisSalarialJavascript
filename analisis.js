
// for (persona for salarios){persona.name == 'juanita'}

const nombreIngresado = document.querySelector('#nombre');
const btnCalcularMediana = document.querySelector('#btnCalcularMediana');
const resultMediana = document.querySelector('#resultMediana');
const pantallaNombres = document.querySelector('#pantallaTodasPersonas');
const btnCalcularProyeccion = document.querySelector('#btnCalcularProyeccion');
const resultProyeccion = document.querySelector('#resultProyeccion');


btnCalcularMediana.addEventListener('click',medianaDePersona);
btnCalcularProyeccion.addEventListener('click',proyeccionSalarial);
imprimirNombres();

//proyeccionSalarial('Ju');

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

   
    const salarios = trabajos.map(propiedades => propiedades.salario);

    let mediana = PlatziMath.calcularMediana(salarios);
    resultMediana.innerText = 'la mediana es: ' + mediana;
}

function proyeccionSalarial (nombrePersona){
    nombrePersona=nombreIngresado.value;////////////////////////
    
    const trabajos = buscadorDePersona(nombrePersona).trabajos;
    let acumuladorDeDiferencias = [];

    for(i=1; i<trabajos.length; i++ ){
        let salariooPasado=trabajos[i-1].salario;
        let salarioActual = trabajos[i].salario;
        let diferenciaSalarial = salarioActual-salariooPasado;
        let coeficienteDiferencial = diferenciaSalarial/salariooPasado;
        
        acumuladorDeDiferencias.push(coeficienteDiferencial);
    }

    let medianaDeCoeficientes = PlatziMath.calcularMediana(acumuladorDeDiferencias);
       
    let proximoSalario = (trabajos[trabajos.length-1].salario*medianaDeCoeficientes) + trabajos[trabajos.length-1].salario;
    proximoSalario=Math.round(proximoSalario);

    resultProyeccion.innerText = 'proyeccion estimada:'+proximoSalario;
    
}