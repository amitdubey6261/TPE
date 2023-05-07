import * as THREE from 'three';
import Experience from '../Experience';
import Character from './Character';


export default class {
    constructor() {
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.items = this.resources.items;

        console.log(this.items)

        this.gameSpeed = this.experience.WPWV.GameSpeed ; 
        this.createVisuals();
    }

    createVisuals() {
        this.addGround();
        this.firstModel();
        this.addcharachter();
        this.addModels();
        this.createObstacle();
    }

    addGround(){
        this.ground = new THREE.Mesh(new THREE.PlaneGeometry(1000 , 1000) , new THREE.MeshBasicMaterial({color:0x000000}));
        this.ground.rotateX(-Math.PI/2);
        this.scene.add(this.ground);

        this.createScene();
    }

    createScene(){
        this.sceneBuilding = [] ; 
        for(let i = 0 ; i<250 ; i++){
            this.sceneBuilding[i] = new THREE.Mesh(new THREE.BoxGeometry( 0.5 , Math.floor(30+Math.random()*50),0.5 ) , new THREE.MeshBasicMaterial({color:0x000000})) ; 
            this.sceneBuilding[i].position.set( i-125 , 0 , -100 );
            this.scene.add(this.sceneBuilding[i]);
        }
    }

    firstModel() {
        // this.bakedModelTexture1 = this.items.gameModelTexture;
        this.bakedModelTexture1 = this.items.gameModelTexture2;
        this.bakedModelTexture1.flipY = 0;
        this.bakedModelTexture1.encoding = THREE.sRGBEncoding;
        this.bakedModelMaterial1 = new THREE.MeshBasicMaterial({ map: this.bakedModelTexture1 });
        this.model1 = this.items.gameModel;

        this.modelArray = [];

        for (let i = 0; i < 10; i++) {
            this.modelArray[i] = this.model1.scene.clone();
            this.modelArray[i].traverse((child) => {
                child.material = this.bakedModelMaterial1;
            })
        }

    }

    addcharachter(){
        this.character = new Character();
    }

    createObstacle(){
        this.obs = new THREE.Mesh(new THREE.BoxGeometry(1 , 1, 1) , new THREE.MeshStandardMaterial({color:0x7393B3}));
        this.obs.scale.set(2,2,2);
        this.scene.add(this.obs);
    }

    addModels() {

        this.modelArrayIdx = 0;
        this.modelArray.map((tile) => {
            tile.position.set(0, 0, -this.modelArrayIdx * 22)
            this.scene.add(tile)
            this.modelArrayIdx++;
        })

        // this.scene.add(this.ground.scene);
    }

    update() {
        this.makeEngine();
        this.character.update();
    }

    makeEngine(){

        this.modelArray.map((tile)=>{
            tile.position.z += this.gameSpeed ; 
        })


        this.modelArray.map((tile)=>{
            if( tile.position.z > 30 ){
                tile.position.z = -80 ; 
            }
        })
    }
}