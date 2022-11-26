"use strict";
// union is combination of multiple type of data
exports.__esModule = true;
var score = 33;
score = "32";
score = 77;
var hitesh = { name: "hitesh", id: 124 };
hitesh = { username: "hc", id: 123 };
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("Your DB is ".concat(id));
}
//Array
var data = [1, 2, 3, "4"];
var seatAllotment;
seatAllotment = "aisle";
