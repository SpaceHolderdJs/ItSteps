const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];




window.addEventListener("scroll", function(e){
  if (window.scrollY >= 0 && window.scrollY <= 120) {
    header.style.height = `${90 - window.scrollY/2}vh`;
    header.style.top = "";
  }

});

const section = document.getElementsByTagName("section")[0];

const links = [
  "https://www.thespruceeats.com/thmb/IYTcBuRIHbY18hkp5o4eR7Y3mJs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/frappuccino-beverage-from-starbucks-coffee-157774909-5a6a23c2ba6177001a74f4b7.jpg",

  "https://www.tallink.ee/documents/10192/31064102/starbucksi-kohv-eestis.jpg/cb70a667-716d-a9d6-c530-6b765d5bba9c?t=1523517049858",

  "https://img.moneysavingmom.com/wp-content/uploads/2018/03/starbucks-pink-latte-pic.jpg",

  
];

 const captionList = ["Chocolate shake","Latte","Cappuchino"];

class Drinks{
  
  constructor(link, caption){
    section.innerHTML += `
    <div class="card">
    <div class="card-image">
       <img src="${link}" width = "300px" height = "200px">
       <span class = "card-title">${caption}</span>
    </div>
    <div class="card-content">
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem, officiis ex eos ab cupiditate. Numquam illo ipsum eum itaque sequi. Deleniti, culpa repudiandae dolor temporibus delectus aut nesciunt eos.</p>
    </div>
    <div class="card-action">
      <a href="#">BUY</a>
    </div>
  </div>
    `; 
  }
}

for(let i = 0; i<3; i++){
     
  let card = new Drinks(links[i], captionList[i]) 

}

const cardControls = document.querySelector(".control");
const card = document.querySelector(".bonus-card");


cardControls.addEventListener("mousemove", e =>{
  card.style.transform = `rotateY(${(window.innerHeight - e.pageX)/25}deg) rotateX(${(window.innerWidth - e.pageY)/-50}deg)`;
});

cardControls.addEventListener("mouseleave", e =>{
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});