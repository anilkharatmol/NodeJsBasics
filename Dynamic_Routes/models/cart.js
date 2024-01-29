const fs = require('fs');
const path= require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports= class Cart {
    static addProduct(id,productPrice){
        //fetch the previous cart
        fs.readFile(p ,(e,fileContent) =>{
             let cart= {products:[], totalPrice:0};

             if(!e){
                cart=JSON.parse(fileContent)
             }
              //Analyze the cart, Find existing product
              const existingProductIndex= cart.products.findIndex(p=>p.id===id);
              const existingProduct=cart.products[existingProductIndex];
              //Add new product/increase quantity
             let updatedProduct;
              if(existingProduct){
                updatedProduct={...existingProduct}
                updatedProduct.quantity+=1; 
                cart.products=[...cart.products];
                cart.products[existingProductIndex]=updatedProduct;
              }
              else{
                updatedProduct= {id:id, quantity:1}
                cart.products=[...cart.products,updatedProduct]
              }
              cart.totalPrice+=Number(productPrice);
              fs.writeFile(p, JSON.stringify(cart),(err)=>{
                console.log(err);
              })
        })
    }
}