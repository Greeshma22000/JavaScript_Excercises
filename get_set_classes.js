class Thermostat{
    constructor(temp){
        this._temp = temp;
    }
    get temperature() {
        return 5/9 * (this._temp - 32);
    }
    set temperature(updatedTemp){
        this._temp = updatedTemp * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76);

let temp = thermos.temperature;
thermos.temperature = 26;
console.log(thermos);
temp = thermos.temperature;
console.log(temp);