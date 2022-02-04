const isValidEmail = (emailToCheck) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToCheck);
}

console.log(isValidEmail("denu@gmail.com")); // true
console.log(isValidEmail("denugmail.com")); // false