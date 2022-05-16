// 간단한 레코드 캡슐화하기
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() {
        return this._data.name;
    }
    set name(aString) {
        this._data.name = aString;
    }
    get country() {
        return this._data.country;
    }
    set country(aCountryCode) {
        this._data.country = aCountryCode;
    }
}

function getOrganization() {
    return organization;
}

const organization = new Organization({ name: '애크미 구스베리', country: 'GB' });

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;
