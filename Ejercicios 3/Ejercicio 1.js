//Ejercicio 1
function ejercicio1(){

let espacios = 0;
espacios = parseInt(prompt("ingresa el tamaño"));
var arreglo = new Array(espacios);

for(var i = 0; i < espacios; i+=1){
    let numero = parseInt(prompt("Dame numero")); 
    arreglo[i] = numero;
}

let x = parseInt(prompt("Ingresa valor para comparar"));
var may = 0;
for(i = 0; i < espacios; i+=1){
    if(arreglo[i] > x){
        may+=1;
    }
}
console.log("De tu lista,", may,"valores son mayor a ",x);
}