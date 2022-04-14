let novaTag = document.createElement('h1');
novaTag.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(novaTag);
//
let elementoMain = document.createElement('main');

elementoMain.className = 'main-content';

document.body.appendChild(elementoMain);
//
let elementSection = document.createElement('section');
elementSection.className = 'center-content';

document.body.appendChild(elementSection);
//
let elementoP = document.createElement('p');
elementoP.innerText = 'textando o texto';

elementSection.appendChild(elementoP);
//
elementSection.className = 'left-content right-content'
elementoMain.appendChild(elementSection);
//
let elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementSection.appendChild(elementImg);
//
var elementLista = document.createElement('ul');
let arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez'];


for (index = 0; index < 10; index++) {
    let elementli = document.createElement('li');
    elementli.innerText = arrayNumbers[index];
    elementLista.appendChild(elementli);
}

elementSection.appendChild(elementLista);