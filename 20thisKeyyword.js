// This keyword
//  in each method we have an access of special keyword called "this"
//  "this" represnts the object . "Calling" the "method" in which "this" is "present"

let person = {
    firstName: "Harry",
    lastName: "Brook",
    city: "delhi",
    birthYear: 1987,
    Education: "SDE",
    getSummary: function () {
        return `${this.firstName} ${this.lastName} ${this.city}`
    }
}
console.log(person.getSummary());

