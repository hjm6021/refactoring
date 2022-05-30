class Party {}

class Employee extends Party {
    get annaulCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get totalAnnaulCost() {
        return this.monthlyCost * 12;
    }
}
