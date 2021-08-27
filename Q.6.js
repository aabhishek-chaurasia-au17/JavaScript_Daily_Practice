
const car = {
    brand : 'BMW',
    color : 'Black',
    Owner : '1st',
    Haveruftop: 'Yes',
    Condition : 'Normal',
    lounchYear: '2021',
    getDetails(){
        console.log(`this car company name is ${this.brand} and color is ${this.color} only owner ${this.Owner} car. it has a ${this.Haveruftop} condition is ${this.Condition} & lounch Year is ${this.lounchYear}`);
    }
}


console.log(car.getDetails());


console.log(car);