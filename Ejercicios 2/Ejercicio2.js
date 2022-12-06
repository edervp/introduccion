function ejercicio2() {
    //suma de naturales
    let num, acumulador=0,formula;

num = parseInt (prompt("Ingresa la posicion n"));

for (let index = 1; index <= num; index++) {
    acumulador+=index;   

}

formula=(num*(num+1))/2;
console.log("s1 "+acumulador);
console.log("s2 "+formula);
if(formula===acumulador){
    console.log("Son iguales");
}else console.log("No son iguales");

}

