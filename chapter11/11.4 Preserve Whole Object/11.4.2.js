// 새 함수를 다른 방식으로 만들기

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) alerts.push('방 온도가 지정 범위를 벗어났습니다.');

class HeatingPlan {
    withinRange(bottom, top) {
        return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
    }
}
