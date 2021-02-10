window.onload = () => {


    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const wrapper = document.querySelector('.wrapper');
    const audio = document.querySelector('audio');
    audio.crossOrigin = "anonymous";




    class Card {

        constructor(data) {

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.classList.add('cover');
            img.src = data.album['cover_medium'];

            card.appendChild(img);

            const div = document.createElement('div');
            div.classList.add('data-wrapper');
            card.appendChild(div);

            const requiedInfo = ['title_short', 'rank'];

            for (let i in data) {
                let p = document.createElement('p')
                requiedInfo.includes(i) && [
                    p.textContent = `${i} : ${data[i]}`,
                    div.appendChild(p)
                ]
            }

            let p = document.createElement('p');
            p.textContent = data.artist.name;
            div.appendChild(p);

            const button = document.createElement('button');
            button.textContent = 'Play ▶';
            div.appendChild(button);

            button.onclick = function() {
                audio.src = data.preview;
                card.audio = data.preview;
                audio.play();
            }

            return wrapper.appendChild(card);

        }

    }


    button.addEventListener('click', function() {
        const DATA = async() => {
            await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.value}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    data.data.forEach(e => {
                        new Card(e)
                    })
                })
                .catch(err => {
                    console.error(err);
                });
        }

        return DATA();
    })

}