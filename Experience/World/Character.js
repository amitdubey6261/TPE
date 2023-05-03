import Experience from "../Experience";
import * as THREE from 'three';
import { AnimationMixer } from "three";
import { AnimationClip } from "three";
import { Clock } from "three";

export default class{
    constructor(){
        this.clock = new Clock();
        this.experience = new Experience();
        this.scene = this.experience.scene ; 
        this.items = this.experience.resources.items ; 
        this.character = this.experience.resources.items.character.scene ; 
        this.animations = this.experience.resources.items.character.animations ;
        this.time = this.experience.time ; 
        this.setModel();
    }
    
    setModel(){
        this.character.position.set( 0 , 0.5 , 0 );
        this.scene.add(this.character);
        this.setMixer();
    }

    setMixer(){
        this.animationMixer = new AnimationMixer(this.character);   
        this.IdleClip = AnimationClip.findByName(this.animations , 'run');   
        this.runAction = this.animationMixer.clipAction(this.IdleClip);
        this.runAction.play();
    }


    update(){
        if(this.animationMixer)
            this.mixerUpdateDelta = this.clock.getDelta();
            this.animationMixer.update( this.mixerUpdateDelta );
    }
}