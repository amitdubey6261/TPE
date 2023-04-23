import * as THREE from 'three';
import * as ml5 from 'ml5';
import { Howl } from 'howler';

import EventEmitter from 'events';
import Experience from '../Experience';

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { TextureLoader } from 'three';
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default class extends EventEmitter {

    constructor(Assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;
        this.assets = Assets;

        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {
            gltfLoader: new GLTFLoader(),
            dracoLoader: new DRACOLoader(),
            textureLoader: new TextureLoader(),
            rgbeLoader: new RGBELoader(),
        }

        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }

    startLoading() {
        for (const asset of this.assets) {

            if (asset.type === "glbModel") {
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                }, (xhr) => {
                    // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                    (e) => {
                        console.log(e);
                    })
            }

            else if (asset.type === "videoTexture") {
                this.video = {};
                this.videoTexture = {};

                this.video[asset.name] = document.createElement("video");
                this.video[asset.name].src = asset.path;
                this.video[asset.name].playsInline = true;
                this.video[asset.name].autoplay = true;
                this.video[asset.name].loop = true;
                this.video[asset.name].muted = true;
                this.video[asset.name].play();


                this.videoTexture[asset.name] = new THREE.VideoTexture(
                    this.video[asset.name]
                );

                this.videoTexture[asset.name].flipY = true;

                this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].mageFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].generateMipmaps = false;
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

                this.singleAssetLoaded(asset, this.videoTexture[asset.name]);

            }

            else if (asset.type === "imageTexture") {
                this.loaders.textureLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                })
            }

            else if (asset.type === "mlModel") {
                this.mlModel = ml5.imageClassifier(asset.path + 'model.json', () => {
                    this.singleAssetLoaded(asset, this.mlModel);
                })
            }

            else if (asset.type === "HDRIImg") {
                this.loaders.rgbeLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                })
            }

            else if (asset.type === "audio") {
                new Promise((resolve, reject) => {
                    resolve(new Howl({src:[asset.path]}));
                }).then((res) => {
                    this.singleAssetLoaded(asset, res);
                }).catch((e) => {
                    console.log(e);
                })
            }

        }
    }

    singleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded += 1;
        if (this.loaded == this.queue) {
            this.emit("ready");
        } 2
    }
}