function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
}

try {
    calculateShippingCosts(orderData);
} catch (e) {
    if (e instanceof OrderProcessingError) {
        errorList.push({ order: orderData, errorCode: shippingStatus });
    } else {
        throw e;
    }
}

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`주문 처리 오류: ${errorCode}`);
        this.code = errorCode;
    }
    get name() {
        return 'OrderProcessingError';
    }
}
