function ejercicio3(){
    //Numero mayor
    
    let num,tamanio,mayor=0;
    let primerNumero=false;
    tamanio = prompt("Ingresa el tamanio (n)");
    console.log("tamanio n "+tamanio);
    for (let index = 0; index < tamanio; index++) {
        num = parseFloat( prompt("Ingresa un numero"));
        if(!primerNumero){
            
            mayor=num;
            primerNumero=true;
        }
        
        if(num>mayor){
            mayor=num;
        }
        console.log("Numero ingresado"+num);
    }
    
    console.log("El numero mayor es "+ mayor);

}