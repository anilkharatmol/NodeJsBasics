
const User=require("../models/user")


exports.getAllUsers = (req, res, next) => {

    User.findAll()
    .then((users) => {
        res.json(users)
    })  
    .catch((err) => {
      res.json(err)
    });
};



exports.createNewUser = (req, res, next) => {
  console.log(req.body)
  const name=req.body.name;
  const email=req.body.email;
  const number=req.body.number;

  User.create({
      name: name,
      email: email,
      number:number
  }).then(result => {
      res.json(result)
  }).catch(err => {
      res.json(err)
  })

}

exports.postDeleteUser = (req, res, next) => {
    const id = req.params.id;
    
    User.findByPk(id).then(user => {
        user.destroy().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
  
  };
