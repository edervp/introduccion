//digitos
function ejercicio5(){
    let numeroString="", digitos=0;
    numeroString = prompt("Ingrese un numero");

    for (let index = 0; index < numeroString.length; index++) {
        digitos++;
        
    }

    if(digitos==1)console.log(numeroString +" tiene 1 digito");
    else console.log(numeroString +" tiene "+digitos+" digitos");

}