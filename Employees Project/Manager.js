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

    totalSubsalary() {
		let totalSubsalary = 0;
​
    this.employees.forEach((employee) => {
      if (employee instanceof Manager) {
        totalSubsalary += employee.salary + employee.totalSubsalary();
      } else {
        totalSubsalary += employee.salary;
      }
    });
​
    return totalSubsalary;
  }

}
