function payAmount(employee) {
    let result;
    if (employee.isSeperated) {
        result = { amount: 0, reasonCode: 'SEP' };
    } else {
        if (employee.isRetired) {
            result = { amount: 0, reasonCode: 'RET' };
        } else {
            result = calculateAmount();
        }
    }
    return result;
}
