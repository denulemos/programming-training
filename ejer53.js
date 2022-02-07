const calculateMetersPerSecond = (kilometersPerHour) => {
    const metersPerSecondConstant = 1000 / 3600;
    return kilometersPerHour * metersPerSecondConstant;
}

console.log(calculateMetersPerSecond(100)); //27.77777777777778