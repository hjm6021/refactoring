// ----------------------------------------------------------------------------

reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }
    get customer() {
        return this._customer;
    }
    get quantity() {
        return this._quantity;
    }
    get month() {
        return this._month;
    }
    get year() {
        return this._year;
    }
    get baseCharge() {
        baseRate(this.month, this.year) * this.quantity;
    }
    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshhold(this.year));
    }
}

// Client 1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// Client 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;

// Client 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
