function payAmount(employee) {
    if (employee.isSeperated) result = { amount: 0, reasonCode: 'SEP' };
    if (employee.isRetired) result = { amount: 0, reasonCode: 'RET' };

    return calculateAmount();
}
