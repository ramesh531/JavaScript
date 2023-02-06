class Empoloyee{

    setEmployeeDetails(name,id,phoneNo){
        this.name =name
        this.id = id
        this.phoneNo = phoneNo
    }

    getEmpName(){
        return this.name
    }

    getEmpId(){
        return this.id
    }

    getPhoneNo(){
        return this.phoneNo
    }

}

let emp1 = new Empoloyee();
emp1.setEmployeeDetails('Ram','1001',9884544372)
console.log(emp1.getEmpName())
console.log(emp1.getEmpId())
console.log(emp1.getPhoneNo())