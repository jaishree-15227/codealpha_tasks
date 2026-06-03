let fitnessData = JSON.parse(localStorage.getItem("fitnessData")) || [];

function addFitnessData() {
    let exercise = document.getElementById("exercise").value;
    let time = Number(document.getElementById("time").value);
    let steps = Number(document.getElementById("steps").value);
    let calories = Number(document.getElementById("calories").value);

    if (exercise === "" || time <= 0 || steps < 0 || calories < 0) {
        alert("Please enter valid fitness data");
        return;
    }

    let data = {
        exercise: exercise,
        time: time,
        steps: steps,
        calories: calories
    };

    fitnessData.push(data);

    localStorage.setItem("fitnessData", JSON.stringify(fitnessData));

    document.getElementById("exercise").value = "";
    document.getElementById("time").value = "";
    document.getElementById("steps").value = "";
    document.getElementById("calories").value = "";

    displayData();
}

function displayData() {
    let totalTime = 0;
    let totalSteps = 0;
    let totalCalories = 0;

    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    for (let i = 0; i < fitnessData.length; i++) {
        totalTime += fitnessData[i].time;
        totalSteps += fitnessData[i].steps;
        totalCalories += fitnessData[i].calories;

        let listItem = document.createElement("li");
        listItem.innerText =
            fitnessData[i].exercise +
            " | Time: " + fitnessData[i].time + " min" +
            " | Steps: " + fitnessData[i].steps +
            " | Calories: " + fitnessData[i].calories;

        historyList.appendChild(listItem);
    }

    document.getElementById("totalTime").innerText = totalTime;
    document.getElementById("totalSteps").innerText = totalSteps;
    document.getElementById("totalCalories").innerText = totalCalories;

    document.getElementById("timeBar").style.width =
        Math.min((totalTime / 60) * 100, 100) + "%";

    document.getElementById("stepsBar").style.width =
        Math.min((totalSteps / 10000) * 100, 100) + "%";

    document.getElementById("caloriesBar").style.width =
        Math.min((totalCalories / 500) * 100, 100) + "%";
}

function clearData() {
    localStorage.removeItem("fitnessData");
    fitnessData = [];
    displayData();
}

displayData();