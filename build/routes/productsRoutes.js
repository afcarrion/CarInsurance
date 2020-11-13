"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carsInsurance_1 = __importDefault(require("../services/carsInsurance"));
const products_1 = __importDefault(require("../services/products"));
class ProductsRoutes {
    constructor() {
        this.product = products_1.default;
        this.router = express_1.Router();
        this.routes();
        this.product = products_1.default;
    }
    getProducts(req, res) {
        let listArrayProducts;
        const productsAtDayZero = [
            new products_1.default('Medium Coverage', 10, 20),
            new products_1.default('Full Coverage', 2, 0),
            new products_1.default('Low Coverage', 5, 7),
            new products_1.default('Mega Coverage', 0, 80),
            new products_1.default('Mega Coverage', -1, 80),
            new products_1.default('Special Full Coverage', 15, 20),
            new products_1.default('Special Full Coverage', 10, 49),
            new products_1.default('Special Full Coverage', 5, 49),
            new products_1.default('Super Sale', 3, 6)
        ];
        const carsInsurance = new carsInsurance_1.default(productsAtDayZero);
        const productPrinter = function (product) {
            console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
        };
        for (let i = 1; i <= 30; i += 1) {
            console.log(`Day ${i}`);
            console.log('name, sellIn, price');
            carsInsurance.updatePrice().forEach(productPrinter);
            console.log('');
        }
        console.log();
        res.status(200).json({
            message: "Process Sucessfull",
        });
    }
    routes() {
        this.router.get('/', this.getProducts);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
