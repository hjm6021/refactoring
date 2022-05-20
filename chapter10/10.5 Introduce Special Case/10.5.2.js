// 객체 리터럴 사용하기

class Site {
    get customer() {
        return this._customer === '미확인 고객' ? createUnknownCustomer() : this._customer;
    }
}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {
        return false;
    }
}

function client1() {
    const site = new Site();
    const aCustmer = site.customer;
    let customerName = aCustmer.name;
    return customerName;
}

function client2() {
    const site = new Site();
    const aCustmer = site.customer;
    const plan = aCustmer.billingPlan;
    return plan;
}

function client3() {
    const site = new Site();
    const aCustmer = site.customer;
    if (isUnknown(aCustmer)) aCustmer.billingPlan = newPlan;
}

function client4() {
    const site = new Site();
    const aCustmer = site.customer;
    const weeksDelinquent = aCustmer.paymentHistory.weeksDelinquentInLastYear;
    return weeksDelinquent;
}

function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlan.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };
}

function isUnknown(arg) {
    return arg.isUnknown;
}
