class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    const rows = this.employees
      .map(
        (emp) =>
          `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td></tr>`
      )
      .join("");
    return `
        <table border="1">
          <thead>
            <tr><th>Name</th><th>Position</th><th>Salary</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      `;
  }
}

const employees = [
  new Employee("Donald Trump", "Manager", 52000),
  new Employee("Vladimir Putin", "Developer", 148800),
  new Employee("Michael Jackson", "Singer", 22800),
];
const table = new EmpTable(employees);
document.write(table.getHtml());
