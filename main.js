#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.bgGray("\n\t Welcome to umairs - Todo List \n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do",
                choices: ["Add task", "Delete Task", "Update Task", "View Todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deletetsk();
        }
        else if (option.choice === "Update Task") {
            await updatetask();
        }
        else if (option.choice === "View Todo-list") {
            await Viewtask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todo list`);
};
let Viewtask = () => {
    console.log("\n your todo list :\n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
let deletetsk = async () => {
    await Viewtask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of task you want to delete :"
        }
    ]);
    let deletedtask = todolist.splice(taskindex.index - 1, 1);
    console.log(`\n ${deletedtask} this task has been deleted`);
};
let updatetask = async () => {
    await Viewtask();
    let updateindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of task you want to update :"
        },
        {
            name: "newtask",
            type: "input",
            message: "Enter new task name :",
        }
    ]);
    todolist[updateindex.index - 1] = updateindex.newtask;
    console.log(`task at index no. ${updateindex.index - 1} updated successfully`);
};
main();
