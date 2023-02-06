let fruits =['apple','banana','grapes']

fruits.pop() //Remove last element
console.log(fruits)

fruits.shift() // Remove first element
console.log(fruits)

fruits.push('orange') // Add to the last
console.log(fruits)

fruits.unshift('lemon') // Add to first
console.log(fruits)

delete fruits[1] // The index position will be removed.
console.log(fruits)

fruits[1]='cherry'
console.log(fruits)

fruits.splice(1,2) // Remove elements from 1 to 2
console.log(fruits)

fruits.splice(2,0,'Orange','cherry')
console.log(fruits)

let citrusfruits = fruits.slice(0,2)
console.log(fruits )
console.log(citrusfruits)

let evenNumbers =[ 2,4,6,8]
let oddNumbers = [1,3,5,7]
let primeNumber = [2,3,5]
let numbers = evenNumbers.concat(oddNumbers)
console.log(numbers)
