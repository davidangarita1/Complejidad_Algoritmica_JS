const { performance } = require("node:perf_hooks")

const contar = (n) => {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

const tiempoInicial = performance.now()
contar(5) 
const tiempoFinal = performance.now()
const duracion = tiempoFinal - tiempoInicial
console.log(`El algoritmo contar ha durado ${duracion}ms.`)