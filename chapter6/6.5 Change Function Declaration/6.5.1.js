// 함수 이름 바꾸기 (마이그레이션 절차)

// Before Refactoring
function circum(radius) {
    return 2 * Math.PI * radius;
}

// After Refactoring
function circum(radius) {
    return circumference(radius);
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}
