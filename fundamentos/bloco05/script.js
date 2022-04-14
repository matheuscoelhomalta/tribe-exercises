let elementos = ['matheus', 'arthur', 'marina', 'lucas', 'larissa'];

lista = document.getElementById('elementosOndeEuEstou');

for (let index = 0; index < elementos.length; index++) {
    let lista = elementos[index];

    let listaElementos = document.createElement('li');
    listaElementos.innerText = lista;

    lista.appendChild(listaElementos);
}


