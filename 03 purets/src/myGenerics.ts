const score : Array<number> = [];
const names : Array<string> = [];

function identityOne(val : boolean | number) : boolean | number {
    return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
return val;
}

// identityThree(3);

function identityFour<T>(val : T):T{
    return val;
}

interface Bottle{
    brand : string,
    type : number
}

// identityFour<Bottle>({brand:"aqua",type:1});

function getSearchProducts<T>(products : T[]) : T {
    return products[1];
}

const getMoreSearchedProduct = <T>(products : T[]): T => {
return products [1];
}


function anotherFunction<T,U extends Database>(valOne:T,valTwo : U):object{
 return {
    valOne,
    valTwo
 }
}

interface Database {
    connection :string,
    username:string,
    password:string
}


// anotherFunction(4,{connection:'check',username:'string',password:'test'});

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart : T[] = [];

    addToCard(product : T){
        this.cart.push(product)
    }
}
export {};