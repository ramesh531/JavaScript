/*
In JS, every function has a property called Prototype

function myFunct(){

}
myFunct.prototype

---
JavaScript has prototype based inheritance. 
Suppose there is a function X. When you create another function
that is inherited from X, it will inherit the methods and
properties defined in X's prototype.

*/

//Constructor  without creating class
let EmpDetails = function(name,age){
   this.name = name;
   this.age = age;

  /* this.getName = function(){
    return this.name
   };

   this.getAge = function(){
    return this.age;
   };
   */
};

EmpDetails.prototype.getName=function(){

    return this.name;
}

EmpDetails.prototype.getAge = function(){
    return this.age;
}

let emp1 = new EmpDetails('Ram',40)
let emp2 = new EmpDetails('Sunny',12)
console.log(emp1.getName())
console.log(emp1.getAge())

console.log(emp2.getName())
console.log(emp2.getAge())

