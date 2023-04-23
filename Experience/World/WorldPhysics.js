import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

import Experience from '../Experience';
import Words from './Words';


export default class {
    constructor() {
        this.experience = new Experience();
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
        this.strIdx = 0 ;
    }

    setWorld() {
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, -10, 0)
        })
    }

    setDebg() {
        this.cannonDebg = new CannonDebugger(this.scene, this.world, {
            color: 0xffffff,
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
            shape : new CANNON.Box(new CANNON.Vec3( 1,1,1)) , 
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
            shape : new CANNON.Box(new CANNON.Vec3(0.7,0.7,0.7)),
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
        this.world.step(this.timeStep);
        this.engine();
        this.cannonDebg.update();
    }

    engine(){

        this.obstacleBody.position.z += this.gameSpeed ; 

        if(this.obstacleBody.position.z > -3 ) {
            this.strIdx++ ;
            if(this.strIdx > Words.length-1 ){
                this.strIdx = 0 ; 
            }
        }
        if(this.obstacleBody.position.z > 30) {
            this.obstacleBody.position.set( 0 , 2 , -100 );
            // console.log(Words[this.strIdx])
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