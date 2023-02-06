let numbers=[1,2,3,4,6,8]
console.log(numbers)

let months =['Jan','Feb','March']
console.log(months)
months.push('April')
console.log(months);
console.log('Length of months array : '+months.length)

for(x of months){
    console.log(x)
}




let cars = new Array('Ford','Toyota','BMW')
console.log(cars)
console.log(cars[1])

cars[1]='Honda';
console.log(cars[1])
console.log(cars)

for ( x in cars){

    console.log(cars[x])
}