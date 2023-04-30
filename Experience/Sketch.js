import Experience from "./Experience";

export default function Sketch() {
    return (_) => {
        let experience = new Experience();
        let beep = experience.resources.items.alert ; 
        let video;
        let flippedVideo;
        let label = "";
        let classifier;
        let count = 0 ;


        _.preload = () => {
            classifier = experience.resources.items.detectHead;
        }

        _.setup = () => {
            video = _.createCapture(_.VIDEO);
            video.size(320, 240);
            video.hide();
            flippedVideo = video;
            classifyVideo();
        }

        function classifyVideo() {
            if(experience.cameraOn){
                classifier.classify(flippedVideo, gotResult);
            }
        }

        function gotResult(err, results) {
            if (err) {
                console.log(err);
                return;
            }

            if (results[0].label == 'Class 2') {
                count += 1;
            }

            if (count == 30) {
                beep.play();
                count = 0;
            }
        }

        _.draw = ()=>{
            if(experience.cameraOn){
                classifyVideo();
            }
        }
    }
}