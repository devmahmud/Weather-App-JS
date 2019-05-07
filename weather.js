class Weather {
    constructor(city) {
        this.app_id = "28dd5a902028120311be7fc0569bc196";
        this.city = city;

    }
    //Fetch weather from API
    async get_weather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.app_id}`);
        const responseData = await response.json();
        return responseData;
    }
    changeLocation(city) {
        this.city = city;
    }
}