import * as THREE from 'three';
import p5 from 'p5';

import Time from './Utils/Time';
import Assets from './Utils/Assets';
import Sizes from './Utils/Sizes';
import Renderer from './Renderer';
import Camera from './Camera';
import Resources from './Utils/Resources';
import Helpers from './Helpers';
import Controllers from './Controllers';

import WorldVisual from './World/WorldVisual';
import WorldPhysics from './World/WorldPhysics';
import WPWV from './World/WPWV';
import Environment from './World/Environment';
import Sketch from './Sketch';
import HandleHTML from './HandleHTML/HandleHTML';
import Video from './Video';
import Typing from './World/Typing';
import HandleVideo from './HandleVideo';

export default class Experience {
    static instance;
    constructor(canvases) {

        if (Experience.instance) {
            return Experience.instance;
        }

        Experience.instance = this;
        this.canvas = canvases.canvas;
        this.video_canvas = canvases.video_canvas ;
        this.cameraOn = true ; 
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(Assets);
        this.items = this.resources.items; 

        this.sizes.on("resize", () => {
            this.resize();
        })

        this.time.on("update", () => {
            this.update();
        })

        this.resources.on("ready", () => {
            this.handleHTML = new HandleHTML();
            this.handleVideoCamera = new HandleVideo();
            this.helpers = new Helpers();
            this.controllers = new Controllers();
            this.environment = new Environment();
            this.WPWV = new WPWV();
            this.worldViusal = new WorldVisual();
            this.worldPhysics = new WorldPhysics();


            this.worldPhysics.on("obsPassed" , ()=>{
                this.obsPassed();
            })

            this.handleTyping = new Typing();
        })
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.renderer.update();
        if (this.controllers) this.controllers.update();
        if (this.worldViusal) this.worldViusal.update();
        if (this.worldPhysics) this.worldPhysics.update();
        if (this.environment) this.environment.update();
        if (this.handleTyping) this.handleTyping.update();
        if(this.WPWV) this.WPWV.update();
    }

    obsPassed(){
        this.handleTyping.obsPassed();
    }

}