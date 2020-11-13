"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carsInsurance_1 = __importDefault(require("./services/carsInsurance"));
const products_1 = __importDefault(require("./services/products"));
const productsAtDayZero = [
    new products_1.default('Medium Coverage', 10, 20),
    new products_1.default('Full Coverage', 2, 0),
    new products_1.default('Low Coverage', 5, 7),
    new products_1.default('Mega Coverage', 0, 80),
    new products_1.default('Mega Coverage', -1, 80),
    new products_1.default('Special Full Coverage', 15, 20),
    new products_1.default('Special Full Coverage', 10, 49),
    new products_1.default('Special Full Coverage', 5, 49),
    new products_1.default('Super Sale', 3, 6),
];
const carInsurance = new carsInsurance_1.default(productsAtDayZero);
const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};
for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
}
