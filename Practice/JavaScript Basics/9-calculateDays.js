// 9. Write a JavaScript program to calculate the days left before Christmas. 
let today = new Date()
let christmasDate = new Date(today.getFullYear(), 11, 25);;

if (today.getMonth() == 11 && today.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);

}

let oneDay = 1000 * 60 * 60 * 24;
console.log("Next Christmas will be in " + Math.round((christmasDate.getTime() - today.getTime()) / oneDay));

console.log(today.getTime()/oneDay); 




