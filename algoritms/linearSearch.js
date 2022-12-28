/*
* Complejidad Temporal -> O( n )
* Complejidad Espacial -> O( n )
* Espacio Auxiliar O( 1 )
*/

function linearSearch(list, key) {
	for (let i = 0; i < list.length; i++) { // O(n)
		if (list[i] === key) { // O(1)
			return i; // O(1)
		}
	}
	return -1; // O(1)
}