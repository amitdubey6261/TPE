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
        this.character.scale.set(2,2,2);
        this.scene.add(this.character);
        this.setMixer();
        this.setActions();
    }

    setMixer(){
        this.animationMixer = new AnimationMixer(this.character);  

        this.clips = {} ; 
        this.actions = {};

        this.clips.idleClip = AnimationClip.findByName(this.animations , 'IDLE');   
        this.clips.jumpClip =  AnimationClip.findByName(this.animations , 'JUMP');   
        this.clips.deathClip =  AnimationClip.findByName(this.animations , 'DEATH');   
        this.clips.rollClip =  AnimationClip.findByName(this.animations , 'ROLL');   
        this.clips.runClip =  AnimationClip.findByName(this.animations , 'RUN');  
        
        
        this.actions.idleAction = this.animationMixer.clipAction(this.clips.idleClip);
        this.actions.jumpAction = this.animationMixer.clipAction(this.clips.jumpClip);
        this.actions.deathAction = this.animationMixer.clipAction(this.clips.deathClip);
        this.actions.rollAction = this.animationMixer.clipAction(this.clips.rollClip);
        this.actions.runAction = this.animationMixer.clipAction(this.clips.runClip); 
    }
    
    setActions(){
        
        this.animationMixer.addEventListener('finished' , (e)=>{
            if( e.action._clip.name == "RUN"){
                this.actions.runAction.reset();
                this.actions.runAction.play();
            }
            
            if( e.action._clip.name == "JUMP"){
                this.actions.runAction.reset();
                this.actions.jumpAction.fadeIn(0.3);
                this.actions.runAction.play();
            }
        })
        
        this.actionController();
        
    }
    
    actionController(){
        this.RUN = () =>{
            this.actions.runAction.play();
            this.actions.runAction.loop = THREE.LoopOnce ; 
        }

        // this.JUMP = () =>{
        //     this.animationMixer.stopAllAction();
        //     this.actions.jumpAction.fadeIn(0.5);
        //     this.actions.jumpAction.play();
        //     this.actions.jumpAction.loop = THREE.LoopOnce ; 
        // }

        this.RUN()
    }
    
    
    
    
    update(){

        //update clock
        if(this.animationMixer)
            this.mixerUpdateDelta = this.clock.getDelta();
            this.animationMixer.update( this.mixerUpdateDelta );
        }
}
