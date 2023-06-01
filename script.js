var citiesInStorage = JSON.parse(localStorage.getItem("citySearch")) || []

var foreCity = prompt("enter city");
var promptDay = prompt("Enter date");

console.log(foreCity+ " " +promptDay)



citiesInStorage.push({searchedName: foreCity, searchedDate: promptDay});

localStorage.setItem("citySearch", JSON.stringify(citiesInStorage));

var cityArray = JSON.parse(localStorage.getItem("citySearch"));

console.log(cityArray);

for (let i = 0; i < citiesInStorage.length; i++) {
    var cityDateButton = document.createElement("button");
    // cityButton.setAttribute("class", "btn m-1 btn-secondary align-items-center");
    // var cityArray = JSON.parse(localStorage.getItem("citySearch"));
    var counter = cityArray[i];
    console.log(counter.searchedName, counter.searchedDate);

    cityDateButton.textContent = counter.searchedName + " " + counter.searchedDate;
    document.getElementById("cities").appendChild(cityDateButton);
    
}