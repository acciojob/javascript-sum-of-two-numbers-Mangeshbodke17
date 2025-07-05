let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function

let c=parseInt(input1)+parseInt(input2);

if(isNaN(c)){
console.log("Invalid input. Please enter a valid number.");
}
else{
console.log(c);
}

