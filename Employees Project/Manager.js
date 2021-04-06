const {Employee} = require('./Employee')

console.log(Employee)

class Manager extends Employee{
    constructor(name,title,salary,boss){
        super(name,title,salary,boss)
        this.arr = [];
    }
    bonus(multiplier) {
        return
    }

    totalSubSalary(){

    }

}
