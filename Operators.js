//Arithmetic
//Assignment
//Comparision
//Logical
//Type
//Bitwise

//Operator - is a symbol that usually represents an action or process

let sum = 1 + 2

//Arithmetic Operators
/*
+  Addition
-  Subtraction
*  Mutlitiplication
/  Division
%  Modulos //Reminder
** Exponetation
++  increment  [Post increment x++, pre increment x++]
--  decrement  [ ]
*/

// let x=5
// let y=2
// let result = x ** y
// console.log('The result is :'+ result)

// let a=7
// //console.log('Value of a is : '+ a++)
// //console.log('Value of a is : '+ ++a)

// let q = 2 * a++; // Value is incremented after the operation
// console.log('Value of q is : '+ q)
// console.log('Value of a is : '+ a)

// let c= 8;
// let r = 2 * ++c; // Value is incremented before the operation
// console.log('Value of r is : '+ r)
// console.log('Value of c is : '+ c)

/*Assignment Operators
=   Assignment
+=  Add and Assign (x+=5  is same as x = x+5)
-=  Subtract and Assign (x-=5 is  x= x-5)
*=  Multiply and Assign (x*=5 is x = x*5)
/=  Divide and Assign (x/=5 is x= x/5)
%=  Modulos and Assign (x%=5 is x= x%5)

*/

// let p=15;
// p+=10;
// console.log(p)

/* Comparision Operators
== equal value
=== equal value with type
!= not eqaul
!== not equal with type
>  greater than
< less than 
<= less than or equal
>=  greater than or equal
Ternary operator : like if-then-els
? : 
condition ? value if true : value if false
x>y ? x: y

*/

// let x=1;
// let y =5;

//let result = x==y
 //console.log(result)

// console.log(x>y ? x : y)

/*   Logical Operators 
 &&  logical AND if both are true then it returns true
 ||  logical OR  if one of them is true then it returns true
 !   Reverse the value 
*/

// let A = true;
// let B = false
// console.log(A||B)
// console.log(!A)

// console.log(10>5 && 3<2)

// console.log(10>5 || 3<2)

/*Type Operators 
typeof  --- returns the data type of the variable or a value
instanceof  -- returns true if an object is an instance of an
                object type (i.e a particular class)

*/

// let firstName='Ram'
// console.log(typeof firstName)

// console.log(typeof 1334)

// console.log(typeof 13.34)

// console.log(typeof true)

// console.log(typeof NaN);
// console.log(typeof [1,2,3]); //number
// console.log(typeof null); // object
// console.log(typeof function(){}); // function
// console.log(typeof myClass); //undefined

// console.log(typeof new Date()); // object

// console.log(typeof {name:'ram',age:41}); //object


// let lastName ='Allamsetti'
// console.log(lastName instanceof String)

// let name1 =new String('Allamsetti')
// console.log(name1 instanceof String)

// let num1= 5
// console.log(num1 instanceof Number)

// let num2= new Number(20);
// console.log(num2 instanceof Number)

/* Bitwise Operators

& Bitwise And sets each bit to 1 if both bits are 1
| Bitwise OR  sets each bit to 1 if either is 1
^ Exclusive OR sets each bit to 1 if one of the bit is 1 
~  Not  - inverts all the bits -(unary operator works with one operand)
<< Left Shift - shifts left and fill empty spaces with 0
>> Right Shift

A= 1 = 0001
B= 2 = 0010
A&B  = 0000
A|B  = 0011

*/

let A=1;
let B=3;
console.log(A & B)
console.log(A | B)
console.log(A ^ B)

console.log(~B)

console.log(A<<B)
