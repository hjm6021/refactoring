// 매개 변수를 속성으로 바꾸기

// Before Refactoring
function inNewEngland(aCustomer) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

// After Refactoring
function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return xxNEWinNewEngland(stateCode);
}
function xxNEWinNewEngland(stateCode) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const xnewEnglanders = someCustomers.filter((c) => xxNEWinNewEngland(c.address.state));
