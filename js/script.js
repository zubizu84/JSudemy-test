const storeName = 'Toys';
const storeDescription = {
    budget: 10000,
    employees: ['ghn', 'fhn', 'dghm'],
    products: {
        car: 111,
        doll: 222
    },
    open: true
}
storeDescription.qwe = 5;

console.log(storeDescription.storeDescription.qwe);
