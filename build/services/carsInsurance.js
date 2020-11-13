"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productList_1 = __importDefault(require("../utils/productList"));
class CarInsurance {
    constructor(products) {
        this.products = products;
    }
    updatePrice() {
        for (let i in this.products) {
            let isARow = productList_1.default.isARow(this.products[i].name);
            this.products[i].price = productList_1.default.validatorFunction(isARow.validation, this.products[i].sellIn, this.products[i].price);
            if (isARow.changeSellIn) {
                this.products[i].sellIn = productList_1.default.changeSellIn(this.products[i].sellIn);
            }
        }
        return this.products;
    }
}
exports.default = CarInsurance;
