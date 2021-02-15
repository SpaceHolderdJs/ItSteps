class Race {
    constructor(name, competitors, duration) {
        this.name = name;
        this.competitors = competitors;
        this.duration = duration;
        this.racers = [];
    }

    initSpeed() {
        this.competitors.forEach(e => e.speed = 100 + Math.floor(Math.random() * 500));
    }

    initTime() {
        this.competitors.forEach(e => e.time = this.duration - e.speed * 10);
    }

    promises() {
        this.competitors.forEach(e => {
            this.racers.push(new Promise(res => {
                setTimeout(() => {
                    res(
                        console.log(`Car ${e.brand} ${e.model} finished in ${e.time}ms with speed ${e.speed}km/h`)
                    )
                }, e.time)
            }))
        })

        return this.racers;
    }

    initStatistics() {
        this.statistics = [...this.competitors].sort((e1, e2) => e1.time - e2.time)
        this.winner = this.statistics[0];

        console.log(`=== Statistics of ${this.name} race ===`);
        console.table(this.statistics);
        console.log(`Winner: ${this.winner.brand} ${this.winner.model}`);
    }
}

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

let cars = [
    new Car('Ford', 'Mustang 2019 Shelby', ),
    new Car('Chevrolet', 'Camaro SS'),
    new Car('BMW', 'M3'),
    new Car('Toyota', 'Celica'),
    new Car('Dodge', 'Viper')
];

let race1 = new Race('Formula-1 competiton', cars, 10000);

race1.initSpeed();

race1.initTime();

Promise.all(race1.promises()).then(race1.initStatistics())