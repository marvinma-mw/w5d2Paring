
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

module.export.Employee

//  module.export={
//     Employee:Employee
// }
