const {Employee} = require('./Manager')

class Manager extends Employee{
    constructor(name,title,salary,boss,arr){
        super(name,title,salary,boss)
        this.arr = arr;
    }
    bonus(multiplier) {
        return
    }
}
