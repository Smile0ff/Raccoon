import { EventEmitter } from 'events';

class Clip extends EventEmitter{

    constructor(options){
        super();

        this.sprite = null;
        this.resource = options.resource;
        this.width = options.width;
        this.height = options.height;
        this.frames = options.frames;

        this.ticksPerFrame = options.ticksPerFrame;

        this.ticks = 0;
        this.currentFrame = 0;

        this.loadResource();
    }

    loadResource(){
        this.sprite = new Image();

        this.sprite.addEventListener('load', () => this.emit('resource-loaded'));

        this.sprite.src = this.resource;
    }

    update(){
        this.ticks++;

        if(this.ticks >= this.ticksPerFrame){

            this.ticks = 0;

            if(this.currentFrame < this.frames - 1){

                this.currentFrame++;
                
            } else{

                this.currentFrame = this.frames - 1;
                this.emit('animation-ended');
            }

        }
    }

    render(ctx, dimension){
        ctx.clearRect(0, 0, dimension.w, dimension.h);

        ctx.drawImage(
            this.sprite,
            this.width * this.currentFrame,
            0,
            this.width,
            this.height,
            0,
            0,
            dimension.w,
            dimension.h
        );

    }

}

export default Clip;