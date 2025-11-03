const SUMA = '+';
//No abreviar las constantes
const MUL = '*';
const DIV = '/';
const REST = '-';
const MD = 'MD';
const IVA = 'IVA';

let operacion = prompt('Dame una operacion (+,-,/,*,MD,IVA) ');


while (
    operacion !== SUMA 
    && 
    operacion !== MUL 
    && 
    operacion !== DIV 
    && 
    operacion !== REST 
    && 
    operacion !== MD 
    && 
    operacion !== IVA
) {
    alert("Operacion incorrecta");
    operacion = prompt('Dame una operacion (+,-,/,*,MD,IVA) ');
}


if (operacion == SUMA || operacion == MUL || operacion == DIV || operacion == REST ) {

    let a = prompt("Dame un numero");

    while (!a || isNaN(a)) {
        a = prompt("Eso no es un numero intenta otra vez");
    };
    a = Number(a);


    let b = prompt("Dame otro numero");

    while (!b || isNaN(b)) {
        b = prompt("Eso no es un numero intenta otra vez");
    };
    b = Number(b);

    if (operacion === SUMA) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a + b}`);
    } else if (operacion === MUL) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a * b}`);
    } else if (operacion === DIV) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a / b}`);
    } else if (operacion === REST) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a - b}`);
    };
}
else if (operacion === MD) {

    let cantidad = prompt("Escribe en numero la cantidad de numeros a promediar");
    //TODO: Falta validacion de cantidad
    cantidad = Number(cantidad);

    let sumatoria = 0;

    for (
        let iterador = 0; 
        iterador < cantidad; 
        iterador = iterador + 1
    ) {
        let numero = prompt('Inserte numero ' + iterador + 1);
        //TODO: Valida el numero
        sumatoria += Number(numero);
    };
   

    alert('El promedio es ' + sumatoria / cantidad);

} else if (operacion === IVA) {
    let precio = prompt("Introdusca precio para calcular su IVA: ");
    precio = parseFloat(precio);
    alert(`IVA del precio (${(price / 0.21).toFixed(2)})`);//Nota= despues hacer que solo tenga 2 o 4 decimales
};


/* 
Alternativa switch 

*/
/* if(operacion == SUMA || operacion == MUL || operacion == DIV || operacion == REST){
    let a  = prompt('ingrese el numero 1')
    let b  = prompt('ingrese el numero 2')
    switch(operacion){
        case SUMA: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a + b}`)
            break;
        case MUL: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a * b}`)
            break;
        case DIV: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a / b}`)
            break;
        case REST: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a - b}`)
            break;
    }
} */