// Function to convert Fahrenheit to Celsius
const convertToCelsius = (num1) => {
    return (num1 - 32) * (5 / 9);
};

// Function to describe the temperature
const describeTemperature = (num2) => {
    if (num2 < 32) {
        return "very cold";
    } else if (num2 < 64) {
        return "cold";
    } else if (num2 < 86) {
        return "warm";
    } else if (num2 < 100) {
        return "hot";
    } else {
        return "very hot";
    }
};

// Funtion asks user to input temp 
const temperatureConverter = () => {
    const fahrenheitInput = prompt(`Please enter a temperature in Fahrenheit`);
    const fahrenheitTemp = (fahrenheitInput);

    const celsiusTemp = convertToCelsius(fahrenheitTemp);
    const weather = describeTemperature(fahrenheitTemp);

    alert(`The temperature you entered is ${fahrenheitInput}F, which is ${celsiusTemp}C, it will feel ${weather}`);
}

temperatureConverter();
