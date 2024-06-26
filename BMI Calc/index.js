function switchMeasure() {
    $(".metric").toggleClass("hide");
    $(".imperial").toggleClass("hide");
    switch($("select").val()) {
        case "imperial":
            var kilograms = $("#weight-input-kilograms").val();
            var stones = Math.floor(kilograms * 0.15747);
            var pounds = Math.round(((kilograms * 0.15747) - stones) * 14);
            if (kilograms !== "") {
                $("#weight-input-stone").val(stones);
                $("#weight-input-pounds").val(pounds);
            }
            var metres = $("#height-input-metres").val();
            var feet = Math.floor(metres * 3.28084);
            var inches = Math.round(((metres * 3.28084) - feet) * 12);
            if (metres !== "") {
                $("#height-input-feet").val(feet);
                $("#height-input-inch").val(inches);
            }
            if (kilograms !== "" && metres !== ""){
                calculateBMI();
            }
            break;

        case "metric":
            var stones = $("#weight-input-stone").val() * 14;
            var pounds = parseFloat($("#weight-input-pounds").val()) + stones;
            var kilograms = (pounds * 0.45359237).toFixed(2);
            if ($("#weight-input-stone").val() !== "" && $("#weight-input-pounds").val() !== ""){
                $("#weight-input-kilograms").val(kilograms);
            }
            var inches = $("#height-input-inch").val() / 12;
            var feet = parseFloat($("#height-input-feet").val()) + inches;
            var metres = (feet * 0.3048).toFixed(2);
            if ($("#height-input-inch").val() !== "" && $("#height-input-feet").val() !== ""){
                $("#height-input-metres").val(metres);
            }
            if ($("#height-input-inch").val() !== "" && $("#height-input-feet").val() !== "" && $("#weight-input-stone").val() !== "" && $("#weight-input-pounds").val() !== ""){
                calculateBMIMetric();
            }
            break;

    }
}

function calculateBMI() {
    var type = "imperial";
    var inches = $("#height-input-inch").val() / 12;
    var feet = parseFloat($("#height-input-feet").val()) + inches;
    var height = feet * 0.3048;
    var stones = $("#weight-input-stone").val() * 14;
    var pounds = parseFloat($("#weight-input-pounds").val()) + stones;
    var weight = pounds * 0.45359237;
    var bMI = parseFloat((weight / (height * height)).toFixed(1));
    checkBMI(bMI, weight, height, type);
}

function calculateBMIMetric() {
    var type = "metric";
    var height = $("#height-input-metres").val();
    var weight = $("#weight-input-kilograms").val();
    var bMI = parseFloat((weight / (height * height)).toFixed(1));
    checkBMI(bMI, weight, height, type);
}

function checkBMI(bMI,weight, height, type) {
    $("#bmi-input").val(bMI);
    if (bMI < 18.5) {
        $("#bmi-result").text("Underweight");
        gainWeight(bMI, weight, height, type);
    } 
    else if (bMI >= 18.5 && bMI <= 24.9) {
        $("#bmi-result").text("Healthy weight");
        $("#bmi-result-message").text("");
        $("#bmi-result-message-2").text("");
    } 
    else if (bMI >= 25 && bMI <= 29.9) {
        $("#bmi-result").text("Overweight");
        loseWeight(bMI, weight,height, type);
    } 
    else if (bMI >= 30){
        $("#bmi-result").text("Obese"); 
        loseWeight(bMI, weight,height, type);
    }
    else {
        $("#bmi-result").text("ERROR");
        $("#bmi-result-message").text("Please fill in all fields")
    }
}

function loseWeight(bMI, weight, height, type) {
    var idealWeight = 24.9 *(height * height);
    var weightToLose = weight - idealWeight;
    var lowerBMI = (parseFloat(bMI) - 2.0).toFixed(1);
    var lowerWeight = lowerBMI *(height * height);
    var weightToLower = weight - lowerWeight;
    if (weightToLose > 0 && type === "imperial") {
        var stonesToLose = Math.floor(weightToLose * 0.15747);
        var poundsToLose = Math.round(((weightToLose * 0.15747) - stonesToLose) * 14);
        var stonesToLower = Math.floor(weightToLower * 0.15747);
        var poundsToLower = Math.round(((weightToLower * 0.15747) - stonesToLower) * 14);
        $("#bmi-result-message").text(`Lose ${stonesToLose}St ${poundsToLose}lbs to reach a healthy BMI (18.5 - 24.9).`);
        if ((lowerBMI - 24.9) > 2){
            $("#bmi-result-message-2").text(`Next milestone: lose ${stonesToLower}St ${poundsToLower}lbs to reach a BMI of ${lowerBMI}.`);
        } else {
            $("#bmi-result-message-2").text("");
        }
    } 
    else if (weightToLose > 0) {
        var kilogramsToLose = weightToLose.toFixed(2);
        var kilogramsToLower = weightToLower.toFixed(2);
        $("#bmi-result-message").text(`Lose ${kilogramsToLose}KG to reach a healthy BMI (18.5 to 24.9).`);
        if ((lowerBMI - 24.9) > 2){
            $("#bmi-result-message-2").text(`Next milestone: lose ${kilogramsToLower}KG to reach a BMI of ${lowerBMI}.`);  
        } else {
            $("#bmi-result-message-2").text("");
        }
    }
    else {
        $("#bmi-result-message").text("");
        $("#bmi-result-message-2").text("");
    }
}

function gainWeight(bMI, weight, height, type) {
    var idealWeight = 18.5 *(height * height);
    var weightToGain = idealWeight - weight;
    var higherBMI = (parseFloat(bMI) + 2.0).toFixed(1);
    var higherWeight = higherBMI *(height * height);
    var weightToHigher = higherWeight - weight ;
    if (weightToGain > 0 && type === "imperial") {
        var stonesToGain = Math.floor(weightToGain * 0.15747);
        var poundsToGain = Math.round(((weightToGain * 0.15747) - stonesToGain) * 14);
        var stonesToHigher = Math.floor(weightToHigher * 0.15747);
        var poundsToHigher = Math.round(((weightToHigher * 0.15747) - stonesToHigher) * 14);
        $("#bmi-result-message").text(`Gain ${stonesToGain}St ${poundsToGain}lbs to reach a healthy BMI (18.5 to 24.9).`);
        if ((18.5 - higherBMI) > 2){
            $("#bmi-result-message-2").text(`Next milestone: gain ${stonesToHigher}St ${poundsToHigher}lbs to reach a BMI of ${higherBMI}.`);
        } else {
            $("#bmi-result-message-2").text("");
        }
    }
    else if (weightToGain > 0) {
        var kilogramsToGain = weightToGain.toFixed(2);
        var kilogramsToHigher = weightToHigher.toFixed(2);
        $("#bmi-result-message").text(`Gain ${kilogramsToGain}KG to reach a healthy BMI (18.5 to 24.9).`);
        if ((18.5 - higherBMI) > 2){
            $("#bmi-result-message-2").text(`Next milestone: gain ${kilogramsToHigher}KG to reach a BMI of ${higherBMI}.`);  
        } else {
            $("#bmi-result-message-2").text("");
        } 
    }
    else {
        $("#bmi-result-message").text("");
        $("#bmi-result-message-2").text("");
    }
}


function clearAll(){
    $("input").val("");
    $(".output").text("");
}
