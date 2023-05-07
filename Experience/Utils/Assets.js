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
        name:"character",
        type:"glbModel",
        path:"models/character/chaar.glb"
    },
    {
        name : "gameModelTexture",
        type : "imageTexture",
        path: "models/scene1/gameModelTexture.jpg"
    },
    {
        name : "gameModelTexture2",
        type : "imageTexture",
        path: "models/scene1/NewUI.jpg"
    },
    {
        name: "envTexture",
        type: "HDRIImg",
        path: "images/HDRI.hdr"
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