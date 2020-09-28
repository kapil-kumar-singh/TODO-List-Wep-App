const express = require('express');
const router = express.Router();


const taskController = require("../controllers/task_controller");

console.log(`router is loaded`);

router.get("/", taskController.home);

router.post('/add_task', taskController.addTask);

router.post('/delete-task', taskController.deleteTask);


module.exports = router;