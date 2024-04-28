#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const myPin = 2456;
let balance = 100;
let ans = await inquirer.prompt([
    { message: "Enter your pincode", type: "number", name: "userpincode" },
]);
console.log(ans);
if (ans.userpincode === myPin) {
    console.log("Your pincode is correct");
    let input = await inquirer.prompt([
        { message: "What do you want to do? ",
            type: "list",
            name: "operation",
            choices: ["Withdraw", "checkbalance"],
        }
    ]);
    console.log(input);
    if (input.operation === "Withdraw") {
        let amount = await inquirer.prompt([
            { message: "Enter your amount",
                type: "number",
                name: "wamount",
            }
        ]);
        console.log(amount);
        if (amount.wamount < balance) {
            console.log(`You have withdrawl ${chalk.bold.cyanBright(amount.wamount)}`);
            console.log(`balanced remaining:   ${balance - amount.wamount}`);
        }
        else if (amount.wamount > balance) {
            console.log("insuffient balance!");
        }
    }
    else if (input.operation === "checkbalance") {
        console.log(`Your balance is    ${balance}`);
    }
}
else {
    console.log("Your pincode is invalid");
}
