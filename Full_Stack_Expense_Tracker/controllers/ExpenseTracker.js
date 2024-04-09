
const Expenses=require("../models/ExpenseTracker")


exports.getAllExpenses = (req, res, next) => {

    Expenses.findAll()
    .then((expenses) => {
        res.json(expenses)
    })  
    .catch((err) => {
      res.json(err)
    });
};



exports.createNewExpense = (req, res, next) => {
  console.log(req.body)
  const amount=req.body.amount;
  const description=req.body.description;
  const category=req.body.category;

  Expenses.create({
      amount: amount,
      description: description,
      category:category
  }).then(result => {
      res.json(result)
  }).catch(err => {
      res.json(err)
  })

}

exports.postDeleteExpense = (req, res, next) => {
    const id = req.params.id;
    
    Expenses.findByPk(id).then(expenseItem => {
        expenseItem.destroy().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
  
  };
