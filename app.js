import readline from "readline";

let tasks = [];
let counter = 1;

function displayFireworks() {
  const fireworks = [
    "   *   ",
    "  * *  ",
    " *   * ",
    "*     *",
    " *   * ",
    "  * *  ",
    "   *   ",
  ];

  console.clear();

  fireworks.forEach((line, index) => {
    setTimeout(() => {
      console.log(line);
    }, index * 400);
  });

  setTimeout(() => {
    console.log("🎉 Congratulations! All tasks are complete! 🎉");
  }, fireworks.length * 400);
}

function displayYelling(callback) {
  const yellingLines = [
    "RISE AND SHINE!!!",
    "A NEW DAY!!!",
    "TIME TO BE GREAT!!!",
  ];

  const asciiArt = [
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣄⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣶⣶⣶⣶⣶⣶⣤⣤⣄⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢀⣀⣀⣀⣀⣤⣤⣤⣶⣶⣶⣶⣶⣶⣤⣄⡙⠢⣄⡀⠀⠀",
    "⢀⣤⡠⠖⣡⣾⣿⠿⠿⠛⠛⠛⠛⠛⠛⠛⠿⠿⠿⣿⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠛⠛⠛⠛⠛⠛⠻⢿⣷⣦⡙⢾⣷",
    "⠸⠿⠃⡾⠟⠉⠀⠀⠀⠀⠀⠀⣀⢀⡀⣀⢀⣀⣀⢀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢀⠀⡀⢀⠀⡀⢀⡀⢀⡀⠀⠀⠀⠀⠀⠀⠙⠻⣾⢹",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⢠⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠀⠀⣀⣀⣀⣀⣀⣄⣠⣄⣤⣤⣀⣀⠀⠀⠀⠀⠀⠈⠈",
    "⠀⠀⠀⠀⠀⠀⢀⣤⠞⠋⠁⢹⣿⣿⣿⣿⣿⣏⠹⣿⡉⠀⠀⢻⠄⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⢩⡿⠋⢹⣿⣿⣿⣟⣻⡇⠈⠙⠳⢦⡀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠿⣳⢦⣤⣤⣼⣿⣿⣿⣿⣿⣋⣄⣈⣻⣆⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⣔⣏⣄⣤⣼⣿⣿⣿⣿⣿⣥⣶⣶⡾⠟⠃⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠛⠁⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠈⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠋⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⡟⠉⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣦⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣶⡶⠶⠶⠶⠿⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  ];

  console.clear();

  asciiArt.forEach((line, index) => {
    setTimeout(() => {
      console.log(line);
    }, index * 200);
  });

  setTimeout(() => {
    yellingLines.forEach((line, index) => {
      setTimeout(() => {
        console.log(line);
      }, index * 500);
    });

    setTimeout(() => {
      console.log("TIME TO GET YOUR DAY STARTED!!!!");
      if (callback) {
        callback();
      }
    }, yellingLines.length * 500);
  }, asciiArt.length * 200);
}

function parseInput(input) {
  const [description, date, priority] = input
    .split(",")
    .map((item) => item.trim());

  let task = {
    id: counter,
    description: description,
    completed: false,
    priority: priority || "low",
    dueDate: date || "No due date",
  };
  return task;
}

function addTask(input, listOfTasks) {
  const t = parseInput(input);
  listOfTasks.push(t);
  counter += 1;
  console.log("Task successfully added!");
}

const userTask = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  userTask.question(
    "Add a task in format {task, date, priority(low, medium, high)} or'Done': ",
    (task) => {
      if (task === "Done") {
        userTask.close();
        displayTasks(tasks);
        taskCompleted();
      } else {
        addTask(task, tasks);
        promptUser();
      }
    }
  );
}

function displayTasks(listOfTasks) {
  console.log("Tasks:");
  for (let i = 0; i < listOfTasks.length; i++) {
    console.log([
      listOfTasks[i].id,
      listOfTasks[i].description,
      listOfTasks[i].completed,
      listOfTasks[i].priority,
      listOfTasks[i].dueDate,
    ]);
  }
}

function taskCompleted() {
  const userTaskForCompletion = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  userTaskForCompletion.question(
    "Have you completed any tasks? (Yes or No): ",
    (input) => {
      if (input === "Yes") {
        promptForTask(userTaskForCompletion);
      } else {
        userTaskForCompletion.close();
        sortAndDisplayTasks(tasks);
      }
    }
  );
}

function promptForTask(userTaskForCompletion) {
  userTaskForCompletion.question(
    "Which task did you complete? (Ex: 1)(Type Done when finished): ",
    (input) => {
      const taskId = parseInt(input);
      if (input != "Done") {
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].id === taskId) {
            tasks[i].completed = true;
            break;
          }
        }
        displayTasks(tasks);
        promptForTask(userTaskForCompletion);
        if (allCompleted()) {
          displayFireworks();
          userTaskForCompletion.close();
          resetTaskList();
        }
      } else {
        if (allCompleted()) {
          displayFireworks();
          userTaskForCompletion.close();
        } else {
          userTaskForCompletion.close();
          sortAndDisplayTasks(tasks);
        }
      }
    }
  );
}

function allCompleted() {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed == false) {
      return false;
    }
  }
  return true;
}

function resetTaskList() {
  tasks.length = 0;
}

displayYelling(promptUser);

const priorityEmojis = { high: "🔴", medium: "🟠", low: "🟢" };

function sortAndDisplayTasks(taskList) {
  console.log("\n");
  console.log("Your remaining tasks and their priority");

  taskList
    .filter((task) => !task.completed) // Filter out completed tasks
    .sort(
      (a, b) =>
        ({ high: 1, medium: 2, low: 3 }[a.priority] -
        { high: 1, medium: 2, low: 3 }[b.priority])
    )
    .forEach((task) =>
      console.log(
        `${priorityEmojis[task.priority]} ${task.priority.toUpperCase()}: ${
          task.description
        }`
      )
    );
}
