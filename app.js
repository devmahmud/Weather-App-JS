// Init storage
const storage = new Storage();
const weatherLoc = storage.getLocationData();
console.log(weatherLoc);

// Init Weather Object
const weather = new Weather(weatherLoc);

// Init UI Object
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event

document.getElementById('w-changebtn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change Location
    weather.changeLocation(city);

    // Set location in LocalStorage
    storage.setLocationData(city);
    // Get and Display Weather
    getWeather();
    // Close Modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.get_weather()
        .then(result => {
            ui.paint(result);
        })
        .catch(error => console.log(error));
}