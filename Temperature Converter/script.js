const celsiusInput = document.getElementById('input-celsius');
const fahrenheitInput = document.getElementById('input-fahrenheit');
const convertButton = document.getElementById('convert-btn');
const resetButton = document.getElementById('reset-btn');

convertButton.addEventListener('click', () => {
  if (celsiusInput.value !== '') {
    fahrenheitInput.value = celsiusToFahrenheit(celsiusInput.value);
  } else if (fahrenheitInput.value !== '') {
    celsiusInput.value = fahrenheitToCelsius(fahrenheitInput.value);
  }
});

resetButton.addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitInput.value = '';
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
