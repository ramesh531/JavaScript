/*
Hiding the implementation details and showing only the functionality

*/

function Employee(name,age,salary){

    this.name=name
    this.age= age
    this.salary = salary

    let bounus = 1000

    let calculateFinalSal = function(){

        finalSal = salary + bounus

        console.log('final sal is : '+ finalSal);
    }

 

    this.getEmpDetails = function(){

        console.log ('Name : '+ this.name + '| Age: '+age)

        calculateFinalSal();
    }
}

let emp1 = new Employee('Ram',41,42000);
emp1.getEmpDetails()
//emp1.calculateFinalSal()