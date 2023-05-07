import Experience from "./Experience";
import Sketch from "./Sketch";
import Video from "./Video";
import p5 from 'p5'

export default class{
    constructor(){
        this.experience = new Experience(); 
        this.items = this.experience.items ; 
        this.cameraButton  = this.experience.handleHTML.nvb5 ; 
        this.handleCameraClick();
        // this.video_p5 = new p5(Video());
        // this.machi_p5 = new p5(Sketch());
    }

    handleCameraClick(){
        this.cameraButton.addEventListener('click' , ()=>{
            if( this.experience.cameraOn == true ){
                this.experience.cameraOn = false ; 
            }
            else{
                this.experience.cameraOn = true ; 
            }
        })
    }
}