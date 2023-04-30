import Experience from "../Experience";

export default class{
    constructor(){
        this.experience = new Experience();
        this.items = this.experience.items ; 
        this.soundOn = false ; 
        this.navToggleButton = this.experience.handleHTML.nvb4 ; 
        this.toggleSoundWithNavButton();
    }

    toggleSoundWithNavButton(){
        this.navToggleButton.addEventListener('click' , ()=>{
            console.log('click')
            if(this.soundOn == true ){
                this.items.track1.pause();
                this.soundOn = false ; 

            }
            else{
                this.items.track1.play();
                this.soundOn = true ; 
            }
        })
    }

}