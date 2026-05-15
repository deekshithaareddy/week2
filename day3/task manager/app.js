//  iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
                  import {addTask,getAllTasks} from './task.js'
                 addTask("study","HIGH","2027-03-28")
                 addTask("eat","medium","2026-09-25")
                 const tasks=getAllTasks()
                 console.log(tasks)




