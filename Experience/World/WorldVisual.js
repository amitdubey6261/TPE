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
        this.bakedModelTexture2 = this.items.groundTex ; 
        this.bakedModelTexture2.flipY = 0 ; 
        this.bakedModelTexture2.encoding = THREE.sRGBEncoding ; 
        this.bakedModelMaterial2 = new THREE.MeshBasicMaterial({map:this.bakedModelTexture2});
        this.ground = this.items.ground ; 

        this.ground.scene.traverse((child)=>{
            child.material = this.bakedModelMaterial2 ; 
        })

    }

    firstModel() {
        this.bakedModelTexture1 = this.items.gameModelTexture;
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
        this.obs = new THREE.Mesh(new THREE.BoxGeometry(1 , 1, 1) , new THREE.MeshBasicMaterial({color:'0x00ff00'}));
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

        this.scene.add(this.ground.scene);
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