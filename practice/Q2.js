/*Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property.
Sample object:
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


console.log(student);

delete student.Rollnumber

console.log(student);
