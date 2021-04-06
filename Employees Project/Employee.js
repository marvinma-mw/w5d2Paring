
class Employee{
    constructor(name,title,salary,boss){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
    bonus(multiplier) {
        return this.salary * multiplier;
    }
}

exports.Employee=Employee

//  module.exports={
//     Employee:Employee
// }
