let volume = 0;
let oneRepMax = 0;

document.getElementById("enterBtn").onclick = function volumeCalc() {
    //parseFloat is a method that converts the string value inputted by user into a number
    const weight = parseFloat(document.getElementById("Weight").value);
    const reps = parseFloat(document.getElementById("Reps").value);

    //volume calculation
    volume = weight * reps;

    //orm calculation
    oneRepMax = weight * (1 + (reps/30));

    //fixes error in Epley formula used to calculate orm
    if (reps === 0)
        oneRepMax = 0;

    if (reps === 1)
        oneRepMax = weight;

    //update volume number
    document.getElementById("volumeDisplay").textContent = volume;

    //update orm number
    document.getElementById("ormDisplay").textContent = oneRepMax;
};
