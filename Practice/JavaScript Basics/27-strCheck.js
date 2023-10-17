// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function str_check(str) {
    if (str.substring(0, 4) == "java") {
        return true
    }
    else
        return false
}
console.log(str_check("javastr"));
console.log(str_check("javr"));