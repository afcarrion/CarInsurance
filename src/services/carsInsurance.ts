import Product from './products';
import ProductList from '../utils/productList';
class CarInsurance {

    products: Product[];

    constructor(products:Product[]) {
      this.products = products;
    }

    updatePrice() {
        
        for(let i in this.products){
            let isARow = ProductList.isARow(this.products[i].name); 
            this.products[i].price = ProductList.validatorFunction(isARow.validation,this.products[i].sellIn, this.products[i].price);
            if (isARow.changeSellIn)
            {
                this.products[i].sellIn = ProductList.changeSellIn(this.products[i].sellIn);
            }
        }  
      return this.products;
    }
  }

  export default CarInsurance;
