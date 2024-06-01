const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
  }).then((result) => {console.log('Product added successfully');
  res.redirect('/')})
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect("/");
  }

  const prodId = req.params.productId;
  req.user.getProducts({where:{id:prodId}}).then(products=>{
    const product=products[0];
    if(!product){
      res.redirect('/');
    }
    res.render("admin/edit-product", {
      product: products[0],
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: editMode,
    });
  }).catch((e)=>console.log(e))

};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;

  Product.findAll({where:{id:prodId}}).then(products=>{
    products[0].title=updatedTitle;
    products[0].price=updatedPrice;
    products[0].description=updatedDescription;
    products[0].imageUrl=updatedUrl;
   return products[0].save();

  }).then((result)=>{console.log('Product updated successfully !');
  res.redirect("/admin/products");})
  .catch((e)=>{console.log(e);})

 
};

exports.getProducts = (req, res, next) => {

    req.user.getProducts()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  
  Product.findAll({where:{id:prodId}}).then(products=>{
   return products[0].destroy();
  }).then(()=>{console.log('Product deleted !');
res.redirect('/admin/products')}).catch((err)=>{console.log(err);})
};
