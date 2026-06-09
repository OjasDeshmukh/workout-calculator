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

    //update volume number
    document.getElementById("volumeDisplay").textContent = volume;

    //update orm number
    document.getElementById("ormDisplay").textContent = oneRepMax;
};
