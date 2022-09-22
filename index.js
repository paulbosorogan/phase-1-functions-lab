// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
let distanceInBlocks = pickUp - 42;
    if (pickUp<=42){
        distanceInBlocks = 42 - pickUp; }
return distanceInBlocks;
}

function distanceFromHqInFeet(pickUp){
let feetCount = distanceFromHqInBlocks(pickUp) * 264;
return feetCount;
}

function distanceTravelledInFeet(start, destination) {
let feetTravelled = (destination - start);
    if (start > destination){
        feetTravelled = start - destination;
    }
return feetTravelled* 264;
}

function calculatesFarePrice(start, destination){
let feetMeter = distanceTravelledInFeet (start, destination);
    if (feetMeter<= 400){
        return 0;
    }
    if (feetMeter < 2000){
        let fare = feetMeter - 400;
        return fare * 0.02;
    }
    if (feetMeter < 2500){
        return 25;
    }
    if (feetMeter > 2500){
        return 'cannot travel that far';
    }
}