self.onmessage= function(event){
	Buscar(event.data);
}

function Buscar(numero) {
	var n = 1;
	lista = "";
	search: while (n<parseInt(numero)) {
		n += 1;
		for (var i = 2; i <= Math.sqrt(n); i += 1)
			if (n % i == 0)
			        continue search;
		lista += " " + n;
		}
	self.postMessage(lista);
}
