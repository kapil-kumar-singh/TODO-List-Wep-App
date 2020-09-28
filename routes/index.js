const express = require('express');
const router = express.Router();



const homeController = require("../controllers/todo_controller");

console.log(`router is loaded`);

router.get("/", homeController.home);

router.post('/add_task', homeController.addTask);


module.exports = router;