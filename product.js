class Product {
    id;
    name;
    factory;
    price;

    constructor(id, name, factory, price) {
        this.id = id;
        this.name = name;
        this.factory = factory;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getFactory() {
        return this.factory;
    }
    setFactory(Factory) {
        this.factory = Factory;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    toString() {
        return `id: ${this.id}, Name: ${this.name}, Factory: ${this.factory}, Price: ${this.price}`;
    }
}