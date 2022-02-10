const isValidEmail = (emailToCheck) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToCheck);
}

module.exports = isValidEmail;