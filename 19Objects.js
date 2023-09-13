// Objects

let car = {
    color: "red",
    model: "2022",
    company: "Honda"
}
console.log(car);

// accessing the js object properties
console.log(car["model"]);
console.log(car.model);

let proprtyName = "color";
console.log(car[proprtyName]);
console.log(car.color);  // use direct prorrty name

// modify the object property
car["color"] = "black";
car.model = "2032"
console.log(car);

// Delete properties of object
// always returns true
let obj = {
    prop1: "value1",
    prop2: "value2"
}

delete obj.prop1;
delete obj["prop2"];
console.log(obj);

// Funtion vs Method
// method-- > function in object as property