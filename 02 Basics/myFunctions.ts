function addTwo(num : number):number{
    return num +2;
}

addTwo(5); 

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name:string,email:string,password:string,isPaid:boolean){

}

signUpUser("hitesh","hitesh@gmail.com","test",true);
let name = getUpper("sanket");

// function getValue(myVal:number) : boolean | string{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 ok";
// }

const getHello = (s : string):string => {
    return "";
}

// const heros = ["thor","spiderman","Ironman"];
const heros = [1,2,3];

heros.map((hero):string => {
    return `hero is ${hero}`;
});

function consolError(errmsg:string):void{
    console.log(errmsg);  
    // return 1;
}

function handleError(err :string):never{
 throw new Error(err);

}

export {};