// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    // format this better cause thats a phat mess
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}"></img>
    `;

}

function validateInput(testInput) {
  // set a variable called number input?????????? makes no sense idk why i thought i heard this in office hours
//if test imput "" , return "Empty" )).toEqual("Not a Number"
// conditional if, else if, else?
//better format for conditional
    if (testInput === "") {
        return "Empty";
    } 
        else if (isNaN(testInput)) {
            return "Not a Number";
    } 
        else {
            return "Is a Number";
    }
}


// form submission needs to validate imput
// include conditionals to dictate responses to specific errors in input*
//  updates list on what is and whats needed to be ready
//needs to also include shuttle requirments with faulty items, use template literals
// use getElementById()
// needs to change color and status
//launchstatus color not usable the way i have it? let launchStatusColor = document.querySelecter("#launchStatus")
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if ((validateInput(pilot) === "Empty") || (validateInput(copilot) === "Empty") || (validateInput(cargoLevel) === "Empty") || (validateInput(fuelLevel) === "Empty")) {
        alert("Entry for every feild required!");
        return false;
    }
    else if ((validateInput(pilot) === "Is a number") || (validateInput(copilot) === "Is a number") || (validateInput(cargoLevel) === "Is a number") || (validateInput(fuelLevel) === "Is a number")) {
        alert("Invalid input! Please enter Pilot/Copilot names as text.")
        return false;
    }
    else if ((validateInput(fuelLevel) === "Not a number") || (validateInput(cargoLevel) === "Not a number") || (validateInput(cargoLevel) === "Not a number")) {
        alert("Invalid input! Please enter Fuel/Cargo Levels as integer(s).")
        return false
    }


    let pilotStatus = document.getElementById("pilotStatus");   
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    
    let listVis = document.querySelecter("#faultyItems")
    let isReady = true;

    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent = `Co-Pilot ${pilot} is ready for launch`;

    if (fuelLevel < 10000 && cargoLevel > 10000) {
        listVis.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        fuelStatus.textContent = "Fuel level too low for launch";
        cargoStatus.textContent = "Cargo mass too heavy for launch";
        isReady = false;
    }
    else if (fuelLevel < 10000) {
        listVis.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        fuelStatus.textContent = "Fuel level too low for launch";
        cargoStatus.textContent = "Cargo mass low enough for launch";
        isReady = false;
    }
    else if (cargoLevel > 10000) {
        listVis.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        fuelStatus.textContent = "Fuel level high enough for launch";
        cargoStatus.textContent = "Cargo mass too heavy for launch";
        isReady = false;
    }
    else {
        
        listVis.style.visibility = "visible";
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.textContent = "Shuttle is Ready for Launch";
        fuelStatus.textContent = "Fuel level high enough for launch";
        cargoStatus.textContent = "Cargo mass low enough for launch";
        isReady = true;
    }
 
}
   
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}
// delete loop, make i a variable, include logic, and return plantes with the variable in brackets for the relating data type 
// correct syntax for math, look for examples online
function pickPlanet(planets) {
    
        let i = Math.floor(Math.random() * planets.length);
        return planets[i];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
