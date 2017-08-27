import { EventEmitter } from 'events';

const videoHolder = document.querySelector('#presentation-video');
const video = document.querySelector('#video');
const playButton = document.querySelector('#play-button');

class Presentation extends EventEmitter{

    constructor(){
        super();

        this.isPlaying = false;

        this._events();
    }

    _events(){
        playButton.addEventListener('click', (e) => this.handleClick(e)); 
    }

    handleClick(e){
        playButton.classList.toggle('__active');
        videoHolder.classList.toggle('__active');

        video.src = !this.isPlaying ? video.src.replace(/autoplay=0/gi, 'autoplay=1') : video.src.replace(/autoplay=1/gi, 'autoplay=0');

        this.isPlaying = !this.isPlaying;

        return false;
    }

}

export default Presentation;