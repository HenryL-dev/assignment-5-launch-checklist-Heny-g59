// Write your JavaScript code here!





//const { formSubmission } = require("./scriptHelper");



// const { pickPlanet } = require("./scriptHelper");
window.addEventListener("load", function (event) {
    event.preventDefault();

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randoPlanet = pickPlanet(listedPlanets);

        console.log(randoPlanet);

        addDestinationInfo(document, randoPlanet.name, randoPlanet.diameter, randoPlanet.star, randoPlanet.distance, randoPlanet.moons, randoPlanet.image);
        //console.log(addDestinationInfo)

    })
    
    
    

    

    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form")
    list.style.visibility = "hidden";
    let submitClick = document.getElementById("formSubmit");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilot =   document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value)
        
        
        

    })






    

    

    

    

});