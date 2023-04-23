import * as THREE from 'three';
import Experience from "../Experience";

export default class {
    constructor(){
        this.experience = new Experience() ; 
        this.canvas = this.experience.canvas ; 
        this.scene = this.experience.scene ; 
        this.items = this.experience.resources.items ; 
        this.setLight();
        this.envTexture();
    }

    envTexture(){
        this.scene.background = this.items.envTexture ; 
    }

    setLight(){
        this.abmLight = new THREE.AmbientLight(  0xff0000 , 1000);
        this.scene.fog = new THREE.Fog( 0x993333 , 10 , 100 );
        this.scene.add(this.abmLight);
    }

    update(){

    }
}