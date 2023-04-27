import * as THREE from 'three';
import Experience from '../Experience';

import Words from './Words';

export default class {
    constructor() {
        this.GameSpeed = 0.4;
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.items = this.resources.items;
        //sound
        // this.items.track2.play();
        this.setEventListners();
        this.stringMatcher = "";
    }

    setEventListners() {
        window.addEventListener('keydown', (e) => {
            if (e.defaultPrevented) return;
            else if (e.key == 'F11') {
                this.setFullScreen();
            }
            else if(e.key == 'Backspace'){
                if(!this.stringMatcher.length == 0 ){
                    this.stringMatcher = this.stringMatcher.slice( 0 , -1 );
                }
            }
            else {
                this.stringMatcher += e.key;
            }
            e.preventDefault();
        })
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

    update() {
        if (this.stringMatcher.length == Words[this.experience.worldPhysics.strIdx].length && (this.stringMatcher === Words[this.experience.worldPhysics.strIdx])) {
            this.jump();
            this.stringMatcher = "";
        };
    }

    jump() {
        this.experience.worldPhysics.charachterBody.velocity.set(0, 7 , 0);
    }


}