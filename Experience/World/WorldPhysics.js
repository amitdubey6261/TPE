import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

import Experience from '../Experience';
import Words from './Words';
import EventEmitter from 'events';
import { MeshBasicMaterial } from 'three';


export default class extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.character = this.experience.worldViusal.character.character ; 
        this.obs = this.experience.worldViusal.obs ; 
        this.timeStep = 1 / 30;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.items = this.resources.items;
        this.gameSpeed = this.experience.WPWV.GameSpeed ; 
        this.setWorld();
        this.setDebg();
        this.createCannonBodies();
    }

    setWorld() {
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, -10, 0)
        })
    }

    setDebg() {
        this.cannonDebg = new CannonDebugger(this.scene, this.world, {
            color: 0xff0000,
            scale: 1.0
        })
    }

    createCannonBodies() {
        this.createGround();
        this.createCharacter();
        this.createObstacle();
        this.addBodyToScene();
    }

    createCharacter(){
        this.charachterBody = new CANNON.Body({
            shape : new CANNON.Box(new CANNON.Vec3( 0.7,2,0.7)) , 
            position : new CANNON.Vec3( 0 , 5 , 0 ),
            mass : 60
        })
    }

    createGround() {
        this.groundCB = new CANNON.Body({
            shape: new CANNON.Plane(10, 10),
            position: new CANNON.Vec3(0, 0.4, 0),
            mass: 0
        })

        this.groundCB.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    }

    createObstacle(){
        this.obstacleBody = new CANNON.Body({
            shape : new CANNON.Box(new CANNON.Vec3(1,1,1)),
            position : new CANNON.Vec3( 0 , 2 , -100 ),
            mass : 10
        })
    }

    addBodyToScene() {
        this.world.addBody(this.groundCB);
        this.world.addBody(this.charachterBody);
        this.world.addBody(this.obstacleBody);
    }

    update() {
        //connecting body 
        this.character.position.copy(this.charachterBody.position );
        this.character.quaternion.copy(this.charachterBody.quaternion );

        this.obs.position.copy(this.obstacleBody.position );
        this.obs.quaternion.copy(this.obstacleBody.quaternion );

        this.world.step(this.timeStep);
        this.engine();
        this.cannonDebg.update();
    }

    engine(){

        this.obstacleBody.position.z += this.gameSpeed ; 

        if(this.obstacleBody.position.z > 30) {
            this.obstacleBody.position.set( 0 , 2 , -100 );
        }

        if(this.obstacleBody.position.z > 3 && this.obstacleBody.position.z < 3+this.gameSpeed ){
            this.emit('obsPassed');
        }

        //Snap character to x,z axis
        if(this.charachterBody.position.x > 0.1 || this.charachterBody.position.x < -0.1 ){
            this.charachterBody.position.x = 0 ;
        }
        if(this.charachterBody.position.z > 0.1 || this.charachterBody.position.z < -0.1 ){
            this.charachterBody.position.z = 0 ;
        }
    }
}