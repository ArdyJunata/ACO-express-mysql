exports.haversine = async (coords1, coords2, isMiles) => {
    function toRad(x) {
        return x * Math.PI / 180;
    }
    let lon1 = coords1.lng;
    let lat1 = coords1.lat;
    let lon2 = coords2.lng;
    let lat2 = coords2.lat;
    let R = 6371; // km
    let x1 = lat2 - lat1;
    let dLat = toRad(x1);
    let x2 = lon2 - lon1;
    let dLon = toRad(x2)
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    if (isMiles) d /= 1.60934;
    return d;
}