// 공통 코드가 나중에 올 때

class Employee {
    constructor(name) {}
    get isPrivileged() {}
    assignCar() {}
}

class Manager extends Employee {
    constructor(name, grade) {
        super(name);
        this._grade = grade;
        if (this.isPrivileged) this.assignCar();
    }
    get isPrivileged() {
        return this._grade > 4;
    }
}
