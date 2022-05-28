function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else return -23;
}

function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
    if (shippingRules < 0) return shippingRules;
}

const shippingStatus = calculateShippingCosts(orderData);
if (shippingStatus < 0) errorList.push({ order: orderData, errorCode: shippingStatus });
