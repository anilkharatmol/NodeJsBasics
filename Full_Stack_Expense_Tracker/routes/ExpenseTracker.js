const path = require('path');

const express = require('express');

const expenseController = require('../controllers/ExpenseTracker');

const router = express.Router();

router.post('/expensetracker/add-expense',expenseController.createNewExpense)

router.get('/getExpenses',expenseController.getAllExpenses)

router.post('/expensetracker/delete/:id',expenseController.postDeleteExpense)


module.exports = router;
