"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productList = [{
        "name": "Medium Coverage",
        "validation": "mediumValidation",
        "changeSellIn": true,
        "limit": 50
    }, {
        "name": "Full Coverage",
        "validation": "fullValidation",
        "changeSellIn": true,
        "limit": 50
    }, {
        "name": "Low Coverage",
        "validation": "mediumValidation",
        "changeSellIn": true,
        "limit": 50
    }, {
        "name": "Mega Coverage",
        "validation": "megaValidation",
        "changeSellIn": false,
        "limit": 80
    }, {
        "name": "Special Full Coverage",
        "validation": "specialValidation",
        "changeSellIn": true,
        "limit": 50
    }, {
        "name": "Super Sale",
        "validation": "superValidation",
        "changeSellIn": true,
        "limit": 50
    }];
//Validate Function
function isARow(name) {
    let index = productList.map(e => ((e.name).toLowerCase()).trim()).indexOf(((name).toLowerCase()).trim());
    if (index >= 0) {
        return {
            'validation': productList[index].validation,
            'changeSellIn': productList[index].changeSellIn,
            'limit': productList[index].limit
        };
    }
    else {
        return {
            'validation': 'mediumValidation',
            'changeSellIn': true,
            'limit': productList[index].limit
        };
    }
}
function validatorFunction(validator, sellIn, price) {
    if (validator === "mediumValidation") {
        return mediumValidation(sellIn, price);
    }
    else if (validator === "fullValidation") {
        return fullValidation(sellIn, price);
    }
    else if (validator === "megaValidation") {
        return megaValidation(price);
    }
    else if (validator === "specialValidation") {
        return specialValidation(sellIn, price);
    }
    else if (validator === "superValidation") {
        return superValidation(sellIn, price);
    }
    return 0;
}
function mediumValidation(sellIn, price) {
    if (sellIn > 0 && price > 0) {
        price -= 1;
    }
    else if (sellIn <= 0 && price > 0) {
        price = price - 2;
    }
    if (price < 0) {
        price = 0;
    }
    return price;
}
function specialValidation(sellIn, price) {
    if (sellIn <= 10 && price < 50) {
        if (sellIn <= 5 && price < 50) {
            price += 3;
        }
        else {
            price += 2;
        }
    }
    else {
        price += 1;
    }
    if (sellIn <= 0) {
        price = 0;
    }
    else if (price > 50) {
        price = 50;
    }
    return price;
}
function superValidation(sellIn, price) {
    if (price > 3) {
        price -= 1;
    }
    else if (price > 0) {
        price -= 2;
    }
    if (price < 0)
        price = 0;
    return price;
}
function fullValidation(sellIn, price) {
    if (price < 50) {
        price += 1;
        if (sellIn <= 0 && price < 50) {
            price += 1;
        }
    }
    return price;
}
function megaValidation(price) {
    return price;
}
function changeSellIn(sellIn) {
    sellIn -= 1;
    return sellIn;
}
exports.default = { productList, isARow, validatorFunction, changeSellIn };
