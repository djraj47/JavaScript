// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  

function capitalizeFrist(str) {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
}

console.log(capitalizeFrist("My name is raj"));