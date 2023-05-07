import * as THREE from 'three';
import Experience from '../Experience';

import Typing from './Typing';
import Sounds from './Sounds';

export default class {
    constructor() {
        this.GameSpeed = 1;
        this.experience = new Experience();
        this.elements = this.experience.handleHTML.domElements ; 
        this.time  = this.experience.time ; 
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.items = this.resources.items;
        this.handleSounds = new Sounds();
    }

    update(){
        this.elements.timeReplace.innerHTML = `${Math.floor(this.time.elapsed/1000)} sec`;
    }

}