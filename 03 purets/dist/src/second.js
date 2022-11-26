"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPhoto(UserPhoto) {
    const { cameraMode, filter, burstMode } = UserPhoto;
    console.log(UserPhoto);
}
getPhoto({ cameraMode: "Portrait", filter: 'face', burstMode: 2 });
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
    createStory() {
    }
}
