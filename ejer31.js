const getTypeOfAngle = (grade) => {
    let result = "";

    switch(true) {
        case (grade > 90):
            result = "Angulo Agudo"
            break;
        case (grade == 90):
            result = "Angulo Recto"
            break;
        case (grade < 90 && grade < 180):
            result = "Angulo Obtuso"
            break;
        case (grade == 180):
            result= "Angulo Llano";
            break;
        case (grade > 180 && grade < 360):
            result = "Angulo Concavo"
            break;
        default:
            result = "Angulo Completo"
            break;
    }

    return result;

}

console.log(getTypeOfAngle(90)); // Angulo Recto