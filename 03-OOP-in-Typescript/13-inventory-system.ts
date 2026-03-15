class Product {
    protected static productCount: number = 0;
    readonly id: number;
    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        Product.productCount++;
        this.id = Product.productCount;
        this.name = name;
        this.price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length < 1) {
            throw new Error('Name must be at least 1 character long!');
        }

        this._name = newName;
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        if (newPrice <= 0) {
            throw new Error('Price must be a positive number!');
        }

        this._price = newPrice;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }

}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        let allProducts: string[] = [];

        this.products.forEach(pr => {
            allProducts.push(pr.getDetails())
        });

        allProducts.push(`Total products created: ${this.products.length}`);

        return allProducts.join('\n')
    }
}
