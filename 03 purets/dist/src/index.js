"use strict";
// class User {
//     public email:string 
//     name:string 
//     private readonly city ="jaipur"
//     constructor(email :string ,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "jaipur";
    }
    get getAppleEmail() {
        return `apple${this.email}.com`;
    }
    get courseCount() {
        return this._courseCount;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more then one");
        }
        this._courseCount = courseNum;
    }
}
class subClass extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("test@gmail.com", "hitesh");
