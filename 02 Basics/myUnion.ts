// union is combination of multiple type of data

let score : number | string = 33;

score = "32";

score = 77;

type User = {
    name : string
    id:number 
}

type Admin = {
    username:string
    id:number
}

let hitesh : User | Admin = {name:"hitesh",id:124}

hitesh = {username :"hc",id:123}

function getDBId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }

    console.log(`Your DB is ${id}`);
    
}

//Array

const data : Array<number | string > = [1,2,3,"4"];

let seatAllotment : "aisle" | "middle" | "window" ;

seatAllotment = "aisle";

// seatAllotment ="test" 



export {};