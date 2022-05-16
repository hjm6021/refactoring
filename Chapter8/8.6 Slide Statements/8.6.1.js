const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
const units = order.units;

let discount;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isReapeat) discount += 20;

let charge;
charge = baseCharge + units * chargePerUnit;
charge = charge - discount;
chargeOrder(charge);
