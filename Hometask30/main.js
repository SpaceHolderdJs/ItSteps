const button = document.querySelector('button');
const main = document.querySelector('main');


class Card {
    constructor(data) {

        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('p');
        title.textContent = data['original_title'];
        card.appendChild(title);

        const popularity = document.createElement('input');
        popularity.type = 'range';
        popularity.name = 'popularity'
        popularity.step = '0.1';
        popularity.max = '4999';
        popularity.min = '0.1';
        popularity.value = +data['popularity'];
        popularity.style.filter = `hue-rotate(${((+popularity.value).toFixed(0))/8}deg)`;
        card.appendChild(popularity);

        const label = document.createElement('label');
        label.for = 'popularity';
        label.textContent = +data['popularity'];
        card.appendChild(label);

        const overview = document.createElement('p');
        overview.textContent = data['overview'];
        card.appendChild(overview);

        return main.appendChild(card);

    }
}

button.addEventListener('click', function() {
    const DATA = async() => {
        await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=2e901364c3d103dcb00ced520e9bca3c`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.results.forEach(e => new Card(e));
            })

    }

    return DATA();
})