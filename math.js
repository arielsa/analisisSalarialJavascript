console.group('Cuadrado') 

const ladoCuadrado =document.querySelector('#ladoCuadrado');
const cuadradoResultado = document.querySelector('#cuadradoResultado');
const btnCuadrado = document.querySelector('#btnCuadrado');

const ladoTriangulo1 = document.querySelector('#ladoTriangulo1');
const ladoTriangulo2 = document.querySelector('#ladoTriangulo2');
const ladoTrianguloBase = document.querySelector('#ladoTriangulo3');
const btnTriangulo = document.querySelector('#btnTriangulo');
const trianguloResultado = document.querySelector('#trianguloResultado');

const radioCirculo = document.querySelector('#radioCirculo');
const btnCirculo = document.querySelector('#btnCirculo');
const circuloResultado = document.querySelector('#circuloResultado')

btnTriangulo.addEventListener('click',calcularTriangulo);
btnCuadrado.addEventListener('click', cuadradoRender);
btnCirculo.addEventListener('click',calcularCirculo);



function cuadradoRender(){  
 
  cuadradoResultado.innerText= `Perimetro: ${ladoCuadrado.value * 4} 
  Area: ${ladoCuadrado.value * ladoCuadrado.value} `;
  
};

function calcularTriangulo (){
  const a = parseInt(ladoTriangulo1.value) ;
  const b = parseInt(ladoTriangulo2.value);
  const c = parseInt(ladoTrianguloBase.value);

  const perimetroTriangulo = a + b + c ;
  const areaTriangulo = a * calcularAlturaTriangulo(a,c);

  trianguloResultado.innerText=`Perimetro: ${perimetroTriangulo}
  Area: ${areaTriangulo}` 

  
};

function calcularAlturaTriangulo (lado1,base){

  if (  base != lado1 ){
    console.warn('no es un triangulo isosele');
  }else{
    //h = raiz de (lado1**2 - (b**2)/4)
    return  Math.sqrt((lado1 ** 2)-((base **2)/4),2);
  };

};

function calcularCirculo(){ 
    
    let radio = parseInt(radioCirculo.value);

    const pi = Math.PI.toFixed(2);
    let diameter = radio * 2 ;
    let circunference = diameter * pi;
    let areaCirculo = ( Math.pow(radio,2) ) * pi;

    circuloResultado.innerText=`Diametro: ${diameter}
    Circunferencia: ${circunference}
    Area: ${areaCirculo}` 


};



