class Site {
    get customer() {
        return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer;
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

class UnknownCustomer {
    get isUnknown() {
        return true;
    }
    get name() {
        return '거주자';
    }
    get billingPlan() {
        return registry.billingPlan.basic;
    }
    set billingPlan(arg) {}
    get paymentHistory() {
        return new NullPaymentHistory();
    }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
        return 0;
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
    aCustmer.billingPlan = newPlan;
}

function client4() {
    const site = new Site();
    const aCustmer = site.customer;
    const weeksDelinquent = aCustmer.paymentHistory.weeksDelinquentInLastYear;
    return weeksDelinquent;
}
