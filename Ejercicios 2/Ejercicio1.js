function ejercicio1(){
    let num;
    num = prompt("Ingresa un num");
    for (let index = 0; index < num; index++) {
        if(index%3!=0 && index%7!=0) { console.log(index);}
    }

}
