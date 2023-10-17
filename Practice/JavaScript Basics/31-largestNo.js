// 31. Write a JavaScript program to find the largest of three given integers.  

function largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        return `${num1} is largest`
    else if (num2 > num1 && num2 > num3)
        return `${num2} is largest`
    else
        return `${num3} is largest`
}

console.log(largest(122,343,32));