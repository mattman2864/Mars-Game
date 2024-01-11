let colonyName = "A Boring Name"
document.getElementById("colonyName").innerHTML = colonyName;

var stats = {
    money: 10,
    iron: 0,
    food: 0,
    steel: 0,
}

var buildings = {
    dormitories: 0,
    mines: 0,
    greenhouses: 0,
    factories: 0,
    banks: 0,
    laboratories: 0,
    powerhouses: 0,
    headquartes: 0,
    beacons: 0
}

setInterval(function () {
    document.getElementById("dormCount").innerHTML = buildings.dormitories;
    document.getElementById("mineCount").innerHTML = buildings.mines;
    document.getElementById("greenhouseCount").innerHTML = buildings.greenhouses;
    // document.getElementById("factoryCount").innerHTML = buildings.factories;
    // document.getElementById("bankCount").innerHTML = buildings.banks;
    // document.getElementById("laboratoryCount").innerHTML = buildings.laboratories;
    // document.getElementById("powerhouseCount").innerHTML = buildings.powerhouses;
    // document.getElementById("headquartersCount").innerHTML = buildings.headquartes;
    // document.getElementById("beaconCount").innerHTML = buildings.beacons;
    document.getElementById("money").innerHTML = stats.money;
    document.getElementById("iron").innerHTML = stats.iron;
    document.getElementById("food").innerHTML = stats.food;
    document.getElementById("steel").innerHTML = stats.steel;
}, 10);

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

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}
