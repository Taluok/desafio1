class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some((product) => product.code === code)) {
            console.error("El código de producto ya existe.");
            return;
        }

        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(product);
        console.log("Producto agregado:", product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Descripción 1", 30.99, "imagen1.jpg", "P1", 50);
productManager.addProduct("Producto 2", "Descripción 2", 50.99, "imagen2.jpg", "P2", 30);

console.log("Todos los productos:", productManager.getProducts());

const productIdToFind = 2;
const foundProduct = productManager.getProductById(productIdToFind);
console.log("Producto encontrado por ID:", foundProduct);
