export function CalulateRPM(height: number, length: number, ShooterWheel: number) {
    return getFinalRPM(height, length, ShooterWheel);
}

function getVerticalVelocity(height: number) {
    return Math.sqrt(-(2 * (-9.8) * height));
}

function getHorizontalVelocity(height: number, length: number) {
    return length / getAirTime(height);
}

function getExitVelocity(height: number, length: number) {
    return Math.sqrt( Math.pow(getVerticalVelocity(height), 2) + Math.pow(getHorizontalVelocity(height, length), 2));
}

function getAirTime(height: number) {
    return getVerticalVelocity(height) / 9.8;
}

function getFinalRPM(height: number, length: number, wheelWidth: number) {
    const RadPerSecond = getExitVelocity(height, length) / wheelWidth;
    const RPM = RadPerSecond * (60 / (2 * Math.PI));
    const motorRPM = RPM * 2 *2;

    const gearRatio = motorRPM / /* Base RPM Of Motor ---> */ 6000;

    return motorRPM;
}