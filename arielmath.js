const inputValorIngresado = document.querySelector('#inputValorIngresado');
const pantalla = document.querySelector('#pantalla');
const btnAgragarValor = document.querySelector('#ingresarValor')
const btnCalcularPromedio = document.querySelector('#btnCalcularPromedio');
const resultPromedio = document.querySelector('#resultPromedio');
const btnCalcularMediana = document.querySelector('#btnCalcularMediana');
const resultMediana = document.querySelector('#resultMediana');
const btnCalcularModa = document.querySelector('#btnCalcularModa');
const resultModa = document.querySelector('#resultModa');

const arrayA = [];


btnAgragarValor.addEventListener('click',ingresarValor);
btnCalcularPromedio.addEventListener('click',CalcularPromedioBtn);
btnCalcularMediana.addEventListener('click', calcularMediana);
btnCalcularModa.addEventListener('click',calcularModa);

function ingresarValor(){

    let valorAIngresar = Number(inputValorIngresado.value);
    if (! valorAIngresar){
        console.log('vacio');
    } else {
        arrayA.push(
            valorAIngresar
        );
        pantalla.value=arrayA;        
    }

};

function CalcularPromedioBtn (){    
    if (arrayA.length<=0){        
        resultPromedio.innerText = 'array vacio';        
    }else{
        calcularPromedio();                
    }
};
function calcularPromedio (){
   // calcularConIteracion();
    calcularConReduce();
};
///la funcion con reduce sobreescribira el resultado del calcularConIteracion.
function calcularConIteracion(){
    let tamaño=arrayA.length;
    let total=0;
    let promedio;
    let i;

    ordenarArray();

    for(i=0; i<tamaño; i++){
        total=total+arrayA[i];        
    }
    promedio=total/tamaño;
    resultPromedio.innerText = 'el promedio es: '+ promedio;
};
function calcularConReduce(){

    ordenarArray();

    let valoresSumados = arrayA.reduce(sumarTodosLosElementos);
    function sumarTodosLosElementos(acumulador,valorIterado){
        return acumulador + valorIterado;
    };

    let promedio = valoresSumados/arrayA.length;
    resultPromedio.innerText= 'el promedio con reduce es: ' + promedio.toFixed(2);
 
};

function calcularMediana (){

    ordenarArray();

    let mediana;

    if (arrayA.length%2){
        console.log('es inpar');
        let IndexMitad= Math.floor(arrayA.length/2);
        mediana = arrayA[IndexMitad];
    } else {
        console.log('es par');
        let IndexMitad= arrayA.length/2; 
        mediana = (arrayA[IndexMitad] + arrayA[IndexMitad-1])/2;      
    }

    resultMediana.innerText= 'la mediana es: ' + mediana;

};

function ordenarArray(){
    arrayA.sort();
    pantalla.value = arrayA.sort();
};
function ordenarArrayBidimencional(arrayDeArrays){

    //[[0,1][0,1][0,1]]
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[1]-nuevoValor[1];
    }

    const lista = arrayDeArrays.sort(ordenarListaSort);
    return lista;

}
function calcularModa(){
    let objListaAuxiliar={};

    for(let i= 0; i<arrayA.length;i++){
        let elemntoAuxiliar = arrayA[i];

        if (objListaAuxiliar[elemntoAuxiliar]){
            objListaAuxiliar[elemntoAuxiliar]+=1;
        }else{
            objListaAuxiliar[elemntoAuxiliar]=1;
        }
    }
    const arrayAux = Object.entries(objListaAuxiliar);
   const arrayAuxOrdenada =  ordenarArrayBidimencional(arrayAux);
   const arrayAuxOrdenadaMaxNum = arrayAuxOrdenada[arrayAuxOrdenada.length-1];
   //resultModa.innerText = 'la moda es: ' + arrayAuxOrdenada[arrayAuxOrdenada.length-1][0];
   let moda = arrayAuxOrdenadaMaxNum[0];
   resultModa.innerText = 'la moda es: ' + moda;
   console.log('fin');   

};
