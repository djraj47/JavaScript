// 51.  Write a JavaScript program to convert a given number into hours and minutes.

function convert_in_hours(num) {
    hours = Math.floor(num / 60);
    mins = num % 60;
    return (`${hours}hrs ${mins}min`)
}

console.log(convert_in_hours(456));