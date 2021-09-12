/*Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/


let student ={
    Name : 'Abhishek',
    Rollnumber: 26,
    Class: '12th',
    Subject:['Hindi', 'English', 'Math'],
    Section : 'B',
    Gender: 'Male'
}


console.log(Object.keys(student).length);
