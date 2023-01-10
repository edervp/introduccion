//Ejercicio 7
function ejercicio7() {
	let prueba = [
		[4, 2, 6, 5, 7, 1, 3, 9, 8],
		[8, 5, 7, 2, 9, 3, 1, 4, 6],
		[1, 3, 9, 4, 6, 8, 2, 7, 5],
		[9, 7, 1, 3, 8, 5, 6, 2, 4],
		[5, 4, 3, 7, 2, 6, 8, 1, 9],
		[6, 8, 2, 1, 4, 9, 7, 5, 3],
		[7, 9, 4, 6, 3, 2, 5, 8, 1],
		[2, 6, 5, 8, 1, 4, 9, 3, 7],
		[3, 1, 8, 9, 5, 7, 4, 6, 2]];

	console.log(prueba);

	//comparacion 

	var se_repiten = false;
	for (i = 0; i < 9; i++) {
		for (j = 0; j < 9; j++) {
			for (let linea = j + 1; linea < 9; linea++) {
				if (prueba[i][j] == prueba[i][linea]) {
					se_repiten = true;
					break;
				}
				if (prueba[j][i] == prueba[linea][i]) {
					se_repiten = true;
					break;
				}
			}


		}
	}
	let arregloAux = new Array();

	for (let i = 0; i < 9; i += 3) {
		for (let j = 0; j < 9; j += 3) {
			for (let x = i; x < 3; x++) {
				for (let y = j; y < 3; y++) {
					arregloAux.push(prueba[x][y]);

				}

			}
			if (!consecutivo(arregloAux)) {
				se_repiten = true;
				break;
			}

		}

	}
	function consecutivo(arreglo) {
		arreglo.sort(function (a, b) { return a - b })
		if (arreglo[0] != 1) return false;
		for (let index = 0; index < arreglo.length - 1; index++) {
			if (arreglo[index] + 1 != arreglo[index + 1]) {
				return false;
			}
		}
		return true;
	}

	if (se_repiten == true) {
		console.log("la solucion no es correcta");
	} else {
		console.log("La solucion es correcta");
	}

}