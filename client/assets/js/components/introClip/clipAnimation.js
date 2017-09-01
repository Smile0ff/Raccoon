import { EventEmitter } from 'events';

import '@utils/requestAnimationFrame';

import Clip from './clip';

const page = document.querySelector('#page');
const clipHolder = document.querySelector('#clip-holder');
const canvasHolder = document.querySelector('#canvas-holder');

const canvas = document.querySelector('#clip');
const spriteSrc = canvas.dataset.resource;
const ctx = canvas.getContext('2d');

class ClipAnimation extends EventEmitter{

    constructor(){
        super();

        this.dimension = {}
        
        this.clip = new Clip({
            resource: spriteSrc,
            width: 600,
            height: 600,
            frames: 50,
            ticksPerFrame: 3
        });

        this.loopId = null;

        this.setDimension();
        this.setCanvasSize();

        this._events();
    }

    _events(){

        this.clip
            .on('resource-loaded', () => this.handleResourceLoaded())
            .on('animation-ended', () => this.handleAnimationEnd());

        window.addEventListener('resize', (e) => this.handleResize(e));
    }

    handleResourceLoaded(){
        document.body.classList.remove('__preload');
        page.classList.add('__loaded');

        this.loop();
    }

    handleAnimationEnd(){
        
        clipHolder.classList.add('__animation-done');

        cancelAnimationFrame(this.loopId);

    }

    handleResize(e){
        this.setDimension();
        this.setCanvasSize();
    }

    setDimension(){
        this.dimension = {
            w: canvasHolder.offsetWidth,
            h: canvasHolder.offsetHeight
        }
    }

    setCanvasSize(){
        canvas.width = this.dimension.w;
        canvas.height = this.dimension.w;
    }

    loop(){
        this.loopId = requestAnimationFrame(() => this.loop());

        this.clip.update();
        this.clip.render(ctx, this.dimension);
    }

}

export default ClipAnimation;