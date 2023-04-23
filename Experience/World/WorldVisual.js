import * as THREE from 'three';
import Experience from '../Experience';


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
        this.addModels();
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