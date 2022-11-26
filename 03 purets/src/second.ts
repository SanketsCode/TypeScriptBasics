interface TakePhoto{
    cameraMode : string
    filter : string
    burstMode : number
}

function getPhoto(UserPhoto :TakePhoto):void{
    const {cameraMode,filter,burstMode} = UserPhoto;
    console.log(UserPhoto);
    
}

getPhoto({cameraMode:"Portrait",filter:'face',burstMode:2});

interface story {
    createStory() : void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode : string,
        public filter :string,
        public burstMode :number
    ){}
}

class Youtube implements TakePhoto,story {
    constructor(
        public cameraMode : string,
        public filter :string,
        public burstMode :number,
        public short : string
    ){}

    createStory(): void {
        
    }
}

export {};