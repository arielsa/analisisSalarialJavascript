//cupones-------------------
const couponObj = {

    'cuponObjA':30,
    'cuponObjB':10 ,
    'cuponObjC':50 ,
    'cuponObjD':40 ,
    'b':50
};

const cuponArray = [
{
    nombre: 'cuponArr',
    descuento : 30,
},
{
   nombre: 'm',
    descuento : 30,
},
 {
    nombre: 'n',
    descuento : 10,
}

];

cuponArray.push(
    {
        nombre:'l',
        descuento: 70,
    }
)


//--------------------------



const btnCalcular = document.getElementById('btnCalcular');
const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#discount');
const result = document.querySelector('#result');
inputPrice.value = '100';

//const cupones ------------
const btnCalcularCupon = document.querySelector('#btnCalcularCupon');
//const inputPriceCupon = document.querySelector('#inputPriceCupon');
const inputDescuentoCupon = document.querySelector('#discountCupon');
const resultCupon = document.querySelector('#resultCupon');

// evenListeners-------
btnCalcular.addEventListener('click',calcularPorcentaje);
btnCalcularCupon.addEventListener('click',calcularPorcentajeCupon);


function calcularPorcentaje () {
    //(P* (100-D ))/100

    let precio = Number(inputPrice.value);
    let descuento = Number(inputDescuento.value); 

    if (!precio || !descuento){
        result.innerText='Faltan datos';
        return;
    }

    if (descuento>100){
        result.innerText='descuento no valido';
        return;
    }

    let newPrice = (precio * (100-descuento))/100;

    result.innerText= 'Resultado: $' + newPrice;

    
};

//cupones------------

function calcularCuponValido(descuento){

    let precio = Number(inputPrice.value);
    if (!precio || !descuento){
        resultCupon.innerText='Cupon valido, faltan datos';
        return;
    } else {
        let newPrice = (precio * (100-descuento))/100;

        resultCupon.innerText= 'Resultado con descuento: $' + newPrice;
    }
};

let cuponesArrValidacion = false;
let cuponesObjValidacion = false;
let descuentoCupon;

function calcularPorcentajeCupon (){

    verificarCuponObj ();
    if (!cuponesObjValidacion) {
        verificarCuponArr ();      
    }      
   
    if ( cuponesArrValidacion==false && cuponesObjValidacion == false ) {

        resultCupon.innerText = 'cupones no validos';
        console.log(cuponesArrValidacion);
        inputDescuentoCupon.value = '';
       return;
    }
    cuponesArrValidacion = false;
    cuponesObjValidacion = false;
};

function verificarCuponObj() {
    if (couponObj[inputDescuentoCupon.value]){
        cuponesObjValidacion= true;
        descuentoCupon=couponObj[inputDescuentoCupon.value];
        calcularCuponValido(descuentoCupon);
        return;
    } else {
        resultCupon.innerText = 'cupones no validos 1';        
        return;
    }
};

function verificarCuponArr(){
    const cuponInArr = cuponArray.find(buscarCuponArr);

    if (cuponInArr){
        cuponesArrValidacion=true;
        let descuento = cuponInArr.descuento;
        calcularCuponValido(descuento);        
    }  else {
        resultCupon.innerText = 'cupones no validos 2';        
        return;
    }
};

function buscarCuponArr (arrCupon){
        return  arrCupon.nombre == inputDescuentoCupon.value;
};

