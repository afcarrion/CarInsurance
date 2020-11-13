import { Request, Response, Router} from 'express';
import CarsInsurance from '../services/carsInsurance';
import Product from '../services/products';
class ProductsRoutes{

    router: Router;
    product = Product;

    constructor(){
        this.router = Router();
        this.routes();
        this.product = Product;
    }

    getProducts(req: Request, res: Response){
        const productsAtDayZero =  [
            new Product('Medium Coverage', 10, 20),
            new Product('Full Coverage', 2, 0),
            new Product('Low Coverage', 5, 7),
            new Product('Mega Coverage', 0, 80),
            new Product('Mega Coverage', -1, 80),
            new Product('Special Full Coverage', 15, 20),
            new Product('Special Full Coverage', 10, 49),
            new Product('Special Full Coverage', 5, 49),
            new Product('Super Sale', 3, 6)
        ];
        const carsInsurance = new CarsInsurance(productsAtDayZero);
        const productPrinter = function (product) {
            console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
        };
        for (let i = 1; i <= 30; i += 1) {
            console.log(`Day ${i}`);
            console.log('name, sellIn, price');
            carsInsurance.updatePrice().forEach(productPrinter);
            console.log('');
        }
        /*const product =  carsInsurance.updatePrice();
        console.log(product);*/
        res.send('Products');
    }

    routes(){
        this.router.get('/', this.getProducts);
    }

}

const productsRoutes = new ProductsRoutes();

export default productsRoutes.router;