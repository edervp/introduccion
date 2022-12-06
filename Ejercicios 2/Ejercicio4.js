function ejercicio4() {
    
    let num,contPostivos=-1, contNegativos=0;

    while(num!=0){
        num=prompt("Ingresa 0 para salir o un numero distinto para contarlos");
        if(num<0){
            contNegativos++;
        }else contPostivos++;

        console.log("Numero ingresado "+num);
    }


    console.log("Numeros positivos: "+histograma(contPostivos));
    console.log("Numeros negativos: "+histograma(contNegativos));
}

function histograma(tamanio){
    let asteriscos='';
    for (let index = 0; index < tamanio; index++) {
        asteriscos+='*';
            
    }
    return asteriscos;
}   