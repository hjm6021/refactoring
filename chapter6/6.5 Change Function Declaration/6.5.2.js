// 매개 변수 추가하기

// Before Refactoring
class Book {
    addReservation(customer) {
        this._reservations.push(customer);
    }
}

// After Refactoring
class Book {
    addReservation(customer) {
        this.zz_addReservation(customer, false);
    }
    zz_addReservation(customer, isPriority) {
        assert(isPriority === true || isPriority === false);
        this._reservations.push(customer);
    }
}
