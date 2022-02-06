const evaluateCalifications = (students) => {
    let amountOfApproved = 0, amountOfDisapproved = 0;

    for (student of students) {
        // Si el segundo objeto del actual estudiante (nota) es 6 o mas
        student[1] >= 6 ? amountOfApproved++ : amountOfDisapproved++
        
    }

    return `${amountOfApproved} aprobados y ${amountOfDisapproved} desaprobados`

}

console.log(evaluateCalifications([["Denu", 10], ["Jorge", 6], ["Mafalda", 3]])) // 2 aprobados y 1 desaprobados