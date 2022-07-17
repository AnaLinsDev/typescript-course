abstract class Department {
  protected employees: string[] = [];
  static idEmployee: number = 0;

  constructor(protected readonly id: number, protected name: string) {}

  abstract describe(this: Department): void;

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(employee: string) {
      Department.idEmployee = Department.idEmployee + 1
      return { id: Department.idEmployee  , name: employee }
  }
}

class ITDepartment extends Department {
  constructor(id: number, name: string, private admins: string[]) {
    super(id, name);
  }

  describe(this: ITDepartment): void {
    console.log("ID: " + this.id);
    console.log("Department: " + this.name);
    console.log(
      "Employees" + " (" + this.employees.length + "): " + this.employees
    );
    console.log("Admins" + " (" + this.admins.length + "): " + this.admins);

  }

  addEmployee(this: ITDepartment, employee: string) {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;

  get getMostRecentReport() {
    if (this.lastReport) {
      return "Recent Report: " + this.lastReport;
    } else {
      throw { message: "Report not found", code: 404 };
    }
  }

  set setMostRecentReport(newReport: string) {
    if (!newReport) {
      throw { message: "new value required", code: 500 };
    } else {
      this.addReports(newReport);
    }
  }

  constructor(id: number, name: string, private reports: string[] = []) {
    super(id, name);
    this.lastReport = reports[0];
  }

  addReports(this: AccountDepartment, report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  describe(this: AccountDepartment): void {
    console.log("ID: " + this.id);
    console.log("Department: " + this.name);
    console.log(
      "Employees" + " (" + this.employees.length + "): " + this.employees
    );
    console.log("Reports" + " (" + this.reports.length + "): " + this.reports);

  }

}

const accounting = new AccountDepartment(0, "Accounting");
const it = new ITDepartment(1, "IT", ["Mac"]);

console.log(AccountDepartment.createEmployee('Maria'))
console.log(AccountDepartment.createEmployee('Joao'))
console.log(ITDepartment.createEmployee('Jose'))
console.log(ITDepartment.createEmployee('Joana'))

console.log("______________________");

accounting.addEmployee("John");
accounting.addEmployee("Mary");
accounting.addReports("Something went wrong !");
accounting.setMostRecentReport = "Success on accounting";
accounting.describe();
console.log(accounting.getMostRecentReport);

console.log("______________________");

it.addEmployee("Pablo");
it.addEmployee("Jose");
it.addEmployee("Mac");
it.addEmployee("Max");
it.describe();

/* 
const copy = { describe: accounting.describe };
const copy = { name: 'HR' , describe: accounting.describe };
copy.describe();
*/

/*
Singleton:
Padrão para que só tenha uma instancia da classe X ( Não está implementado nesse arquivo )
*/
