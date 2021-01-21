class Edition {

    constructor (name, author){
        this.name = name;
        this.author = author;
    }

    show(){
        return console.table(this)
    }

}

// Экземпляры унаследуют метод show у высшего родителя, нет смысла переопределять его 

class Book extends Edition {

    constructor (name, author, year, edition){
        super(name, author);
        this.year = year;
        this.edition = edition;
    }

}


class Article extends Edition {

    constructor (name, author, magazineName, magazineNumber, magazineYear){
        super (name, author);
        this.magazineName = magazineName;
        this.magazineNumber = magazineNumber;
        this.magazineYear = magazineYear;
    }
}


class Site extends Edition {

    constructor (name, author, link, annotation){
        super (name, author);
        this.link = link;
        this.annotation = annotation;
    }
}



let data = [
    new Book("Philosophy of Java", "Exsel", 2010, "flinta"),
    new Site("Front-End trends in 2021", "Mattaka", "some link", "some description"),
    new Site("MND", "Mozilla Developers Team", "some link2", "lorem"),
    new Article("Benefits of AI", "Brin", "GoogleMagazine", 4, 2010),
    new Book("JS Refactoring", "Flauer", 2016, "oxford"),
];

function show(){
    return console.log(this);
}

Object.defineProperty(data, "show", {value : show, enumerable : false});

data.show();

function findBy(author,name){
    return console.log(this.filter(e=>name ? e.name == name : e.author == author));
}

Object.defineProperty(data, "findBy", {value : findBy, enumerable : false});

data.findBy(null,"MND"); //по имени
data.findBy("Flauer", null); // по автору