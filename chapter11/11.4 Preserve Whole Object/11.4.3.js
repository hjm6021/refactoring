// 새 함수를 다른 방식으로 만들기

const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.withinRange(tempRange);
if (!isWithinRange) alerts.push('방 온도가 지정 범위를 벗어났습니다.');

class HeatingPlan {
    withinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = low >= this._temperatureRange.low && high <= this._temperatureRange.high;
        return isWithinRange;
    }
}
