class Storage {
    constructor() {
        this.city;
        this.defaultCity = "Dhaka";
    }
    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        return this.city;
    }
    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}