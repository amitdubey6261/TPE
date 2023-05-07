import Experience from "../Experience";
import Words from "./Words";

export default class {
    constructor() {
        this.experience = new Experience();
        this.character = this.experience.worldViusal.character;
        this.charachterBody = this.experience.worldPhysics.charachterBody;
        this.ostaclePassed = false;
        this.stringIdx = 0;
        this.experience.handleHTML.stringReplace.innerHTML = Words[this.stringIdx];
        this.stringMatcher = "";
        this.handleEventListner();
        this.setJump();
        this.stringAndEye = this.experience.handleHTML.domElements.stringAndEye;

        this.fun = (e) => {
            if (e.defaultPrevented) return;
            else if (e.key == 'F11') {
                this.setFullScreen();
            }
            else if(e.key == 'Escape'){
                window.removeEventListener('keydown', this.fun );
            }
            else if (e.key == 'Backspace') {
                if (!this.stringMatcher.length == 0) {
                    this.stringMatcher = this.stringMatcher.slice(0, -1);
                }
            }
            else {
                this.stringMatcher += e.key;
            }
            console.log(this.stringMatcher)
            e.preventDefault();
        }
    }




    handleEventListner() {
        this.experience.handleHTML.domElements.stringAndEye.addEventListener('click', () => {
            this.setEventListners();
        })
    }

    setEventListners() {
        window.addEventListener('keydown', this.fun);
    }

    setFullScreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
        else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    }

    //event
    obsPassed() {
        this.stringIdx += 1;
        if (this.stringIdx > Words.length - 1) {
            this.stringIdx = 0;
        }
        this.experience.handleHTML.stringReplace.innerHTML = Words[this.stringIdx];
    }

    update() {
        if (this.stringMatcher.length == Words[this.stringIdx].length && this.stringMatcher === Words[this.stringIdx]) {
            this.setJump();
        }
    }

    setJump() {
        // this.character.JUMP();
        this.charachterBody.velocity.set(0, 10 , 0);
        this.stringMatcher = "";
    }


}