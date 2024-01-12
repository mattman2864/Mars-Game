let colonyName = "A Boring Name"
document.getElementById("colonyName").innerHTML = colonyName;

// Starting stats initialized
var stats = {
    power: 0,
    iron: 0,
    food: 0,
    steel: 0,
}

// Number of buildings initialized
var buildings = {
    "dormitory": 0,
    "mine": 0,
    "greenhouse": 0,
    "factory": 0,
    "bank": 0,
    "laboratory": 0,
    "powerhouse": 0,
    "headquarter": 0,
    "beacon": 0
}

// Costs of buildings initialized
var buildingCosts = {
    "dormitory": 10,
    "mine": 100,
    "greenhouse": 1000
}

// Workers
workers = 0;
maxWorkers = 0;

// Main Loop
setInterval(function () {
    updateStats();
    callEvent();
}, 10);

// Updates all stats for HTML
function updateStats () {
    document.getElementById("dormCount").innerHTML = buildings["dormitory"];
    document.getElementById("dormCost").innerHTML = buildingCosts["dormitory"];
    document.getElementById("mineCount").innerHTML = buildings["mine"];
    document.getElementById("mineCost").innerHTML = buildingCosts["mine"];
    document.getElementById("greenhouseCount").innerHTML = buildings["greenhouse"];
    document.getElementById("greenhouseCost").innerHTML = buildingCosts["greenhouse"];
    document.getElementById("power").innerHTML = stats.power;
    document.getElementById("iron").innerHTML = stats.iron;
    document.getElementById("food").innerHTML = stats.food;
    document.getElementById("steel").innerHTML = stats.steel;

    // Generator
    document.getElementById("generatorIn").style.width = clickPower + "%";

    // Workers
    maxWorkers = 6 * buildings["dormitory"];
    document.getElementById("maxWorkers").innerHTML = maxWorkers;
    document.getElementById("workers").innerHTML = workers;
}

// Buy any building
function buy (buildingName) {
    if (stats.power >= buildingCosts[buildingName]) {
        stats.power -= buildingCosts[buildingName];
        buildings[buildingName] += 1;
        buildingCosts[buildingName] = Math.round(buildingCosts[buildingName] * 1.55)
    }
}

// For Renaming Base
function rename() {
    let queryName = prompt("What is the name of your colony? (Max 20)");
    if (queryName == null) {
        return
    }
    while (queryName.length > 20) {
        if (queryName.length > 20) {
            queryName = prompt("Name is too long (Max 20)");
        } else {
            queryName = prompt("What is the name of your colony? (Max 20)");
        }
        if (queryName == null) {
            return
        }
    }
    if (queryName.length == 0) return;
    colonyName = queryName;
    document.getElementById("colonyName").innerHTML = colonyName;
}

// Mouse Down For Power Generation
clickPower = 0;
mouse = false;
function mousedown()
{
  mouse = true;
  callEvent();
}
function mouseup()
{
  mouse =false;
  clickPower = 0;
}
function callEvent()
{
 if(mouse)
 {
    clickPower = (clickPower + 1) % 100;
    if (clickPower == 0) {
        stats.power += 1;
        mouseup();
    }
    document.getElementById("generatorIn").style.width = clickPower + "%";
 }
 else
 return;
}