// организовать двоичный поиск с помощью конструктора, создать класс

class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
       return this.result = Math.round((this.maxValue + this.minValue) / 2);
        
    }
    lower() {
        return this.maxValue = this.result;
    }

    greater() {
        return this.minValue = this.result;
    }
}

module.exports = GuessingGame;
