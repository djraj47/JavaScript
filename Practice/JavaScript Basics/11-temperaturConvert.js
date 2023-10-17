// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 

function CelsiusTOFahrenheit(cel) {

    let Fahrenheit = cel * 9 / 5 + 32;
    console.log(Fahrenheit);
}
function fahrenheitToCelsius(fhn) {

    let Celsius = (fhn - 32) * 5 / 9;
    console.log(Celsius);
}

CelsiusTOFahrenheit(60);
CelsiusTOFahrenheit(45);

fahrenheitToCelsius(45);
fahrenheitToCelsius(23);