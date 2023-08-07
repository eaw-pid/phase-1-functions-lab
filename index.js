// Code your solution in this file!
function distanceFromHqInBlocks(pickupLoc) {
    if (pickupLoc === 42) {
        return 0
    } else if (pickupLoc < 42) {
        return 42 - pickupLoc;
    } else if (pickupLoc > 42) {
        return pickupLoc - 42;
    }

}

function distanceFromHqInFeet(pickupLoc) {
    return distanceFromHqInBlocks(pickupLoc) * 264
}

function distanceTravelledInFeet(b,a) {
    if (b>a) {
        return ((b-a)*264);
    } else {
        return ((a-b)*264);
    }
}

function calculatesFarePrice(b,a) {
    let distance = distanceTravelledInFeet(a,b)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    }
}