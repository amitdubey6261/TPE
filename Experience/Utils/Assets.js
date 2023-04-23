export default [
    {
        name:"detectHead",
        type:"mlModel",
        path:"https://teachablemachine.withgoogle.com/models/ARAuZB7qj/"
    },
    {
        name:"gameModel",
        type:"glbModel",
        path:"models/scene1/gameModel.glb"
    },
    {
        name : "gameModelTexture",
        type : "imageTexture",
        path: "models/scene1/gameModelTexture.jpg"
    },
    {
        name: "envTexture",
        type: "HDRIImg",
        path: "images/HDRI.hdr"
    },
    {
        name :"groundTex",
        type : "imageTexture",
        path : "models/ground/GroundTex.jpg"
    },
    {
        name : "ground",
        type : "glbModel",
        path : "models/ground/Ground.glb"
    },
    {
        name : "alert",
        type : "audio",
        path : "sounds/Alert.mp3"
    },
    {
        name : "track1",
        type : "audio",
        path : "sounds/Track1.mp3"
    },
    {
        name : "track2",
        type : "audio",
        path : "sounds/Track2.mp3"
    }
]