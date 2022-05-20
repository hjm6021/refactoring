class Site {
    get customer() {
        return this._customer;
    }
}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
}

function client1() {
    const site = new Site();
    const aCustmer = site.customer;
    let customerName;
    if (aCustmer === '미확인 고객') customerName = '거주자';
    else customerName = aCustmer.name;
    return customerName;
}

function client2() {
    const plan = aCustmer === '미확인 고객' ? registry.billingPlan.basic : aCustmer.billingPlan;
    return plan;
}

function client3() {
    if (aCustmer !== '미확인 고객') aCustmer.billingPlan = newPlan;
}

function client4() {
    const weeksDelinquent = aCustmer === '미확인 고객' ? 0 : aCustmer.paymentHistory.weeksDelinquentInLastYear;
}
