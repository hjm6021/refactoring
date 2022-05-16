// 유효범위를 벗어나는 변수가 없을 때
function printOwing(invoice) {
    let outstanding = 0;

    // 미해결 채무(outstanding)을 계산한다.
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    printDetails();

    function printDetails() {
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
    }
}

function printBanner() {
    console.log('*****************');
    console.log('**** 고객 채무 ****');
    console.log('*****************');
}
