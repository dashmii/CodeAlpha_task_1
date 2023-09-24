function convert() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const resultElement = document.getElementById('result');
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number');
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    let result;
  
    switch (fromUnit) {
      case 'celsius':
        result = {
          fahrenheit: (temperature * 9/5) + 32,
          kelvin: temperature + 273.15
        };
        break;
      case 'fahrenheit':
        result = {
          celsius: (temperature - 32) * 5/9,
          kelvin: (temperature - 32) * 5/9 + 273.15
        };
        break;
      case 'kelvin':
        result = {
          celsius: temperature - 273.15,
          fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
        break;
    }
  
    resultElement.innerHTML = `Result: 
      ${result.celsius ? `Celsius: ${result.celsius}°C,` : ''}
      ${result.fahrenheit ? ` Fahrenheit: ${result.fahrenheit}°F,` : ''}
      ${result.kelvin ? ` Kelvin: ${result.kelvin}K` : ''}`;
  }
  