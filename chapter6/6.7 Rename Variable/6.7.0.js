// Before Refactoring
let tpHd = 'untitled';

result += `<h1>${tpHd}</h1>`;
tpHd = obj['articleTitle'];

// After Refactoring
result += `<h1>${title()}</h1>`;
setTitle(obj['articleTitle']);

function title() {
    return tpHd;
}
function setTitle(arg) {
    tpHd = arg;
}
