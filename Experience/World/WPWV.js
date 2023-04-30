import * as THREE from 'three';
import Experience from '../Experience';

import Typing from './Typing';
import Sounds from './Sounds';

export default class {
    constructor() {
        this.GameSpeed = 0.3;
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.items = this.resources.items;
        this.handleSounds = new Sounds();
    }

}