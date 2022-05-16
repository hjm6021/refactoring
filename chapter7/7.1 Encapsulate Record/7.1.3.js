class CustomerData {
    constructor(data) {
        this._data = data;
    }
    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
    get rawData() {
        return _.cloneDeep(this._data);
    }
    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }
}

const customerData = {
    1920: {
        name: '마틴 파울러',
        id: '1920',
        usages: {
            2016: {
                1: 50,
                2: 55,
            },
            2015: {
                1: 70,
                2: 63,
            },
        },
    },
    38673: {
        name: '닐 포드',
        id: '38673',
        // 생략
    },
};

function compareUsage(customerId, laterYear, month) {
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);

    return {
        laterAmount: later,
        change: later - earlier,
    };
}
function getCustomerData() {
    return customerData;
}
function getRawDataOfCustomers() {
    return customerData.rawData;
}
function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
}
