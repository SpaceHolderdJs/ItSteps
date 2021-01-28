const button = document.querySelector("button");
const input = document.querySelector("input");

const wrapper = document.querySelector(".components-wrapper");
const h3 = document.querySelector("h3");

const select = document.querySelector("select");

class Component {
    
   static element = (text, parent) => {
      const elm = document.createElement("p");
      elm.textContent = text;
      return parent.appendChild(elm);
   }

    constructor(obj) {

        const requiredInfo = ["l","rank","s","y"];
        const component = document.createElement("div");
        component.classList.add("component");
        component.sortData = {};

        const img = document.createElement("img");
        img.src = obj.i.imageUrl;
        img.classList.add("film-cover");
        component.appendChild(img); 

        for(let i in obj) {
            i == "rank" ? [component.sortData.raiting = obj[i], Component.element(`Raiting: ${obj[i]}`, component)] : 
            i == "y" ? component.sortData.year = obj[i] : requiredInfo.includes(i) && Component.element(obj[i], component);
        }

        return wrapper.appendChild(component);

    }
}

button.addEventListener("click", function(){

   wrapper.children.length > 0 &&  [...wrapper.children].forEach(e=>wrapper.removeChild(e));

   const DATA = async () => {
        fetch(`https://imdb8.p.rapidapi.com/title/auto-complete?q=${input.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            },
            
        })
        .then(response => response.json())
        .then(data => {
           console.log(data);
           h3.textContent = `Finded ${data.d.length} movies`;
           select.style.display = "block";
           data.d.forEach(e=> new Component(e));
        })
        .catch(err => {
            console.error(err);
        });
   }

   return DATA();

});                     

select.addEventListener("change", function(e){

    const unsorted = [...wrapper.children];

    [...wrapper.children].forEach(e=>wrapper.removeChild(e));

    unsorted.sort((e1,e2)=>e2.sortData[e.target.value] - e1.sortData[e.target.value]);

    unsorted.forEach(e=>wrapper.appendChild(e));

});