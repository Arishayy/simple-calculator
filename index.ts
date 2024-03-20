import inquirer  from "inquirer";

//Asking ques from user by inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "SecondNumber"},
    {
        message: "Select one Operator to select Airthemetic Operations",
        type: "list",
        name: "Operator",
        choices: ["Addition","Subtraction","Multiplication","Divison"],
    }
]);

console.log(answers);

//if else conditional statement
if(answers.Operator === "Addition"){
    console.log(answers.firstNumber + answers.SecondNumber)
}
else if(answers.Operator === "Subtraction"){
    console.log(answers.firstNumber - answers.SecondNumber)
}
else if (answers.Operator === "Multiplication"){
    console.log(answers.firstNumber * answers.SecondNumber)
}
else if(answers.Operator === "Division"){
    console.log(answers.firstNumber / answers.SecondNumber)
}
else{
    console.log("ERROR!, Invalid Input")
}