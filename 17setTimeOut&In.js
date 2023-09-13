// setTimeOut and setInterval

// setTimeOut ( function|code , delay , agr1 , agr2 , .....)

function greeting() {
    console.log("Welcome to family");
}
setTimeout(greeting, 5000); // 5000ms = 5sec

setTimeout(function greeting(name) {
    console.log(`Welcome to home  ${name}`);
}, 7000, "raj")


//setInterval 
// setInterval ( function|code , delay , agr1 , agr2 , .....)
setInterval(greeting,3000);