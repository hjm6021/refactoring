class Person {
    get manager() {
        return this._department.manager;
    }
}

class Department {
    get manager() {
        return this._manager;
    }
}

// Client
const aPerson = new Person();
manager = aPerson.manager;
