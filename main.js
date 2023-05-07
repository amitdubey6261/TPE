import './style.css'

import Experience from './Experience/Experience';

const canvases = {
    canvas : document.querySelector('.experience-canvas'),
    video_canvas : document.querySelector('.p5-video'),
    graph_canvas : document.querySelector('.graph-canvas'),
}

const experience = new Experience( canvases );