const evaluateCalifications = (students) => {
    let amountOfApproved = 0, amountOfDisapproved = 0;

    for (student of students) {
        // Si el segundo objeto del actual estudiante (nota) es 6 o mas
        student[1] >= 6 ? amountOfApproved++ : amountOfDisapproved++
        
    }

    return `${amountOfApproved} aprobados y ${amountOfDisapproved} desaprobados`

}

module.exports = evaluateCalifications;