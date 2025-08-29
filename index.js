let fahrenheit = null;
let celsius = null;
let kelvin = null;

const inputCelsius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const inputKelvin = document.getElementById("kelvin");

function toCelsius(fahrenheit, kelvin) {
  if (fahrenheit) {
    celsius = ((fahrenheit - 32) * 5) / 9;
  } else if (kelvin) {
    celsius = kelvin - 273.15;
  } else {
    null;
  }

  return celsius;
}

function toFahrenheit(celsius, kelvin) {
  if (celsius) {
    fahrenheit = celsius * (9 / 5) + 32;
  } else if (kelvin) {
    fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
  } else {
    null;
  }
  return fahrenheit;
}

function toKelvin(celsius, fahrenheit) {
  if (celsius) {
    kelvin = celsius + 273.15;
       console.log("k",kelvin)

  } 
  else if (fahrenheit) {
    kelvin = ((fahrenheit - 32) * (5 / 9)) + 273.15;
    //    console.log("k",kelvin)

  } else {
    null;
  }
  return kelvin;
}

inputCelsius.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    celsius = parseInt(inputCelsius.value);
    fahrenheit = toFahrenheit(celsius, false);
    kelvin = toKelvin(celsius, false);
    console.log(celsius, fahrenheit, kelvin);
    inputCelsius.value = celsius;
    inputFahrenheit.value = fahrenheit;
    inputKelvin.value = kelvin;
  }
});

inputFahrenheit.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    fahrenheit = parseInt(inputFahrenheit.value);
    celsius = toCelsius(fahrenheit, false);
    kelvin = toKelvin(false, fahrenheit);
    inputCelsius.value = celsius;
    inputFahrenheit.value = fahrenheit;
    inputKelvin.value = kelvin;
  }
});

inputKelvin.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    kelvin = parseInt(inputKelvin.value);
    celsius = toCelsius(false, kelvin);
    fahrenheit = toFahrenheit(false, kelvin);
    inputCelsius.value = celsius;
    inputFahrenheit.value = fahrenheit;
    inputKelvin.value = kelvin;
  }
});
