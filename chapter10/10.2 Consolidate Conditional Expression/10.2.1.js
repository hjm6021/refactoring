// OR 사용하기

function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;

    function isNotEligibleForDisability() {
        return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
    }
}
