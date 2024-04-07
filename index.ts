#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([{message: "enter firstnumber", type: "number", 
name: "firstnumber"},
{message: "enter secondnumber", type: "number", name: "secondnumber"},
{message: "select one of the operators", type: "list", name: "operator", 
choices: ["addition", "subtraction", "multiplication", "division"],},

]) ;
if (asnwer.operator==="addition"){
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if(asnwer.operator==="subtraction"){
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.operator==="multiplication"){
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.operator==="division"){
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {console.log("please select valid operator");}