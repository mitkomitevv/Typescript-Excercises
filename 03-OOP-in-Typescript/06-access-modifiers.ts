class Employee {
    public name: string;
    protected position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }

    showSalary(): string {
        return `Salary: $${this.salary}`;
    }
}
