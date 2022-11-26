interface User {
    readonly dbId:number,
email:string,
userId:number,
googleId?:string,
// startTrial : () => string
startTrial():string
getCoupon(couponname:string) : number
}

interface User {
    githubToken : string
}

interface Admin extends User {
    role : "admin" | "teacher" | "learner"
}

const hitest : User = {dbId:123,email:'hitesh@gmail.com',
userId:1,
githubToken:"github",
startTrial: () => {
    return "test";
},getCoupon(name:"test") {
    return 1;
},

};


export {};