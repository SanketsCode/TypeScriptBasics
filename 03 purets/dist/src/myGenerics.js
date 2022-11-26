"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({brand:"aqua",type:1});
function getSearchProducts(products) {
    return products[1];
}
const getMoreSearchedProduct = (products) => {
    return products[1];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCard(product) {
        this.cart.push(product);
    }
}
