class Person {
    get department() {
        return this._department;
    }
}

class Department {
    get manager() {
        return this._manager;
    }
}

// Client
const aPerson = new Person();
manager = aPerson.department.manager;
