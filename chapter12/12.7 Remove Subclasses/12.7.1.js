class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }
    get name() {
        return this._name;
    }
    get genderCode() {
        return this._genderCode;
    }
    get isMale() {
        return this._genderCode === 'M';
    }
}

class Male extends Person {
    get genderCode() {
        return 'M';
    }
}

class Female extends Person {
    get genderCode() {
        return 'F';
    }
}

const numberOfMales = people.filter((p) => p.isMale).length;

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case 'M':
            return new Person(aRecord.name, 'M');

        case 'F':
            return new Person(aRecord.name, 'F');

        default:
            return new Person(aRecord.name, 'X');
    }
}

function loadFromInput(data) {
    return data.map((aRecord) => createPerson(aRecord));
}
