import Experience from "../Experience";

export default class{
    constructor(){
        this.experience = new Experience();
        this.items = this.experience.items ; 
        this.items.track2.play();
    }
}