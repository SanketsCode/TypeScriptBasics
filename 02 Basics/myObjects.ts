const User = {
    name:"sanket",
    email:"sanket@gmail.com",
    isActive:true
}

// function createUser({name:string,isPaid:boolean}){
// }

// let newUser = {name:"sanket",isPaid:"false",email:"sanket@gmail.com"}

// createUser(newUser);

function createCourse():{name:string,price:number}{
return {
    name:"js",
    price:20
}
}

//type alias

// type User = {
//     name : string;
//     email:string;
//     isActive:boolean;
// }

// function createUser(user:User){

// }


type User = {
    readonly _id : string
    name:string
    email:string
    isActive:boolean,
    creaditCardDetails?:number
}

let myUser : User = {
    _id:"12345",
    name:"sanket",
    email:'sanket@gmail.com',
    isActive:false
}

type cardNumber = {
     cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardDate & cardNumber & {
    cvv :number
}


myUser.email = "new@gmail.com";
// myUser._id = "1234"; use of readonly


 
export {};