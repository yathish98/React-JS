//JavaScript Array Filter Method Assignment
const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 15, stock: 20 },
    { name: "Mobile", category: "Electronics", price: 5000, stock: 9 },
    { name: "Pencil", category: "Stationery", price: 5, stock: 0 },
    { name: "Hat", category: "Apparel", price: 500, stock: 0 }
]

//Filter by Category
var filterCategory = products.filter(function(product){
    return (product.category =='Electronics');
    });
console.log("Category");
console.log(filterCategory);

//Filter by Price Range
var filterRange = products.filter(function(product){
    return (product.price >=50 &&  product.price <=150);
    });
console.log("Price Range");
console.log(filterRange);
         
//Filter the Out of Stock products
var filterOutofStock = products.filter(function(product){
    return  (product.stock >0 );
    });
console.log("Products that are not out of stock");
console.log(filterOutofStock);    