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

class StyledEmpTable extends EmpTable {
  getStyles() {
    return `
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            font-family: Arial, sans-serif;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          th {
            background-color: #f4f4f4;
            text-align: left;
          }
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          tr:hover {
            background-color: #f1f1f1;
          }
        </style>
      `;
  }

  getHtml() {
    const baseHtml = super.getHtml();
    const styles = this.getStyles();
    return `${styles}${baseHtml}`;
  }
}

const styledTable = new StyledEmpTable(employees);
document.write(styledTable.getHtml());
