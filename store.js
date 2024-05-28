class Store {
    listProduct;
    name;

    constructor(nameInput) {
        this.name = nameInput;
        this.listProduct = [];
        let sp1 = new Product('1', "Iphone", 'Japan', 12000);
        let sp2 = new Product('2', "Samsung", 'My', 4000);
        this.listProduct.push(sp1);
        this.listProduct.push(sp2);
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
    }
    sort() {
        return this.listProduct.sort((a, b) => {
            const lastname = a.lastname.toUpperCase().localeCompare(b.lastname.toUpperCase());
            if(lastname !== 0){
                return lastname
            }
            return a.firstname.toUpperCase().localeCompare(b.firstname.toUpperCase());
        })
    }
}