const express = require('express');
const router = express.Router();
const {getTodos, setTodos, updateTodos, deleteTodos} = require('C:/Users/mahab/OneDrive/Desktop/ADPS_ICE_Task_2/backend/controllers/todoscontroller.js')
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTodos).post(protect, setTodos);
router.route("/:id").put(protect, updateTodos).delete(protect, deleteTodos);
router.route('/').get(getTodos).post(setTodos)
router.route('/:id').put(updateTodos).delete(deleteTodos)

module.exports = router;