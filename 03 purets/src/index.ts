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
    protected _courseCount = 1;
    readonly city : string = "jaipur";
    constructor(
        public email :string,
        public name:string,
        // private userId :string
    ){
    }

    get getAppleEmail():string{
        return `apple${this.email}.com`;
    }

    get courseCount():number {
        return this._courseCount;
    }

    private deleteToken(){
        console.log("Token Deleted");
        
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course Count should be more then one");
        }
        this._courseCount = courseNum;
    }


}


class subClass extends User {
    isFamily : boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}



const hitesh : User = new User("test@gmail.com","hitesh");
