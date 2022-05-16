class Shipment {
    constructor() {
        this._shippingCompany = null;
        this._trackingNumber = null;
    }
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
    get shippingCompany() {
        return this._shippingCompany;
    }
    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }
    get trackingNumber() {
        return this._trackingNumber;
    }
    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }
}

// Client
const aShipment = new Shipment();
aShipment.shippingCompany = request.vendor;
