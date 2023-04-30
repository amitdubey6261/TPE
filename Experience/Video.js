import Experience from "./Experience";

export default function Video() {
    return (p5) => {
        let video ;
        let canvas ;
        let experience = new Experience(); 

        p5.setup = () =>{
            let canvas = p5.createCanvas(experience.video_canvas.offsetWidth , experience.video_canvas.offsetWidth/2);
            canvas.parent(experience.video_canvas);
            video = p5.createCapture(p5.VIDEO);
            video.size(experience.video_canvas.offsetWidth , experience.video_canvas.offsetWidth/2 )
        }

        p5.draw = () =>{
            p5.image( video , 0 , 0 , experience.video_canvas.offsetWidth , experience.video_canvas.offsetWidth/2 )
        }
    }
}