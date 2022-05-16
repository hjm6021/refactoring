// Before Refactoring
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

spaceship.owner = defaultOwner;
defaultOwner = { firstName: '레베카', lastName: '파슨스' };

// After Refactoring
function getDefaultOwner() {
    return defaultOwner;
}
function setDefaultOwner(arg) {
    defaultOwner = arg;
}

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });
