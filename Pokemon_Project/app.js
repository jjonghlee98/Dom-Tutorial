const container = document.querySelector('#container');
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1; i<152; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');

  const label = document.createElement('span');
  label.classList.add('label');
  label.innerText = `#${i}`;

  const newImg = document.createElement('img');
  newImg.src = `${url}${i}.png`;

  container.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);

}