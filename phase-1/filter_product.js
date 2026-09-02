


const products = [
    { id: 1, name: "iPhone 15", category: "Mobile", price: 70000, stock: 10 },
    { id: 2, name: "Samsung S24", category: "Mobile", price: 65000, stock: 0 },
    { id: 3, name: "MacBook Air", category: "Laptop", price: 95000, stock: 5 },
    { id: 4, name: "Dell Inspiron", category: "Laptop", price: 55000, stock: 8 },
    { id: 5, name: "iPad Air", category: "Tablet", price: 50000, stock: 3 },
    { id: 6, name: "OnePlus 12", category: "Mobile", price: 55000, stock: 12 }
];
const filter = {
    category: "Mobile",
    minPrice: 50000,
    maxPrice: 70000,
    onlyInStock: true
}
function filterProduct(products, filters){
        return products.filter((product)=>{
            return (filters.category == null || (product.category == filters.category))&&
            (filters?.minPrice ? product.price >= filters.minPrice : true) &&
            (filters?.maxPrice ? product.price <= filters.maxPrice : true) &&
            (filters?.onlyInStock ? filters.onlyInStock === true && product.stock > 0 : true)
        })
    }

console.log(filterProduct(products, filter))