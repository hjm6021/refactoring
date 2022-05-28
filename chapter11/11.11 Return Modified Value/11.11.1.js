const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();

const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
    let result;
    for (let i = 0; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
}
