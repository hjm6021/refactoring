// 서브 클래스가 하나 일 때

class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }
    get hasTalkback() {
        return this._premiumDelegate ? this._premiumDelegate.hasTalkback : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice() {
        return this._premiumDelegate ? this._premiumDelegate.basePrice : this._privateBasePrice;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
    get _privateBasePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    get hasDinner() {
        return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }
    get hasTalkback() {
        return this._host._show.hasOwnProperty('talkback');
    }
    get basePrice() {
        return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
    }
    extendBasePrice(base) {
        return Math.round(base + this._extras.premiumFee);
    }
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
    }
}

aBooking = createBooking(show, date);
aBooking = createPremiumBooking(show, date, extras);

function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date);
    result._bePremium(extras);
    return result;
}
