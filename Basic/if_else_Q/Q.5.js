
const bioData ={
    myName : 'Abhishek chaurasia',
    myAge : '26',
    role : 'Full Stack Devloper',
    getData(){
        console.log(`my name is ${this.myName} and my age is ${this.myAge} now corrently Looking role as a ${this.role}`);
    }
}

console.log(bioData);
console.log(bioData.myName);
console.log(bioData['myAge']);
console.log(bioData.getData());


