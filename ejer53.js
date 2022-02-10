const calculateMetersPerSecond = (kilometersPerHour) => {
    const metersPerSecondConstant = 1000 / 3600;
    return kilometersPerHour * metersPerSecondConstant;
}

module.exports = calculateMetersPerSecond;