
// for (persona for salarios){persona.name == 'juanita'}

const nombreIngresado = document.querySelector('#nombre');
const btnCalcularMediana = document.querySelector('#btnCalcularMediana');
const resultMediana = document.querySelector('#resultMediana');
const pantallaNombres = document.querySelector('#pantallaTodasPersonas');
const btnCalcularProyeccion = document.querySelector('#btnCalcularProyeccion');
const resultProyeccion = document.querySelector('#resultProyeccion');
const btnMedianaEmpresa = document.querySelector('#btnMedianaEmpresa');
const inputNombreEmpresa = document.querySelector('#nombreEmpresa');
const inputYearEmpresa = document.querySelector('#yearEmpresa');
const resultMedianaEmpresa = document.querySelector('#resultMedianaEmpresa')
const pantallaTodasEmpresas = document.querySelector('#pantallaTodasEmpresas');


btnCalcularMediana.addEventListener('click',medianaDePersona);
btnCalcularProyeccion.addEventListener('click',proyeccionSalarial);
btnMedianaEmpresa.addEventListener('click',MedianaDeSalariosEmpresarial);

imprimirNombres();
const empresas = {};
reestrurarArray();
console.log(empresas);
imprimirNombresEmpresas();

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

//////analisis empresarial: reestructuracion de array

function comentadoEsctruturaDeDatos(){
    /* ---------------------------------------
estructura del array "salarios":
salarios[
    {//obejtos "persona":
        .name
        .trabajos[
            {//objetos "trabajo":
                .year
                .empresa
                .salario
            }
        ]
    }
]
----------------------------------------------
estructura deseada para el nuevo objeto "empresas":
empresas{
    {//objeto "empresa":
        {//objeto "years":
            [// array de salarios:]
            [// array de salarios:]
            ....
        }
                {//objeto "year":
            [// array de salarios:]
            [// array de salarios:]
            ....
        }
        ...
    }
        {//objeto "empresa":
        {//objeto "year":
            [// array de salarios:]
            [// array de salarios:]
            ....
        }
                {//objeto "year":
            [// array de salarios:]
            [// array de salarios:]
            ....
        }
        ...
    }
    ....
}
*/
}

function reestrurarArray (){
    salarios.forEach (persona=>persona.trabajos.forEach(trabajo=>{
        if (!empresas[trabajo.empresa]) empresas[trabajo.empresa]={};
        if (!empresas[trabajo.empresa][trabajo.year]) empresas[trabajo.empresa][trabajo.year]=[];
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }))
}

function MedianaDeSalariosEmpresarial(empresaYear, empresaName){

    empresaYear=inputYearEmpresa.value;
    empresaName=inputNombreEmpresa.value;

    if(!empresas[empresaName]){
        console.log("no se encontro empresa");
        resultMedianaEmpresa.innerText = 'nombre incorrecto ';
    } else if(!empresas[empresaName][empresaYear]){
        console.log('año incorrecto');
        resultMedianaEmpresa.innerText = 'año incorrecto ';
    }
    else {
        let medianaEmpresa=PlatziMath.calcularMediana(empresas[empresaName][empresaYear]);
        resultMedianaEmpresa.innerText = 'la mediana es: '+medianaEmpresa;
    }
}
function imprimirNombresEmpresas(){

    const arrayNombres = [];
    let charAux='';

    salarios.forEach(personas=>personas.trabajos.forEach(trabajo=>{
       // if (arrayNombres.length<=0){
       //     arrayNombres.push(trabajo.empresa);
      //      charAux=trabajo.empresa + " \n";
      //  }
        if(!arrayNombres.find(nombre=> nombre == trabajo.empresa)){
            arrayNombres.push(trabajo.empresa);
            charAux= charAux + trabajo.empresa + "\n";
        }         
    }));   
    pantallaTodasEmpresas.value=charAux;
}

