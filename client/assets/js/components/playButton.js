import getVendored from '@utils/getVendored';

const page = document.querySelector('#page');
const video = document.querySelector('#video');
const playButtonHolder = document.querySelector('#play-button');
const PlayButtonShadow = document.querySelector('#play-button-shadow');
const closeButtonHolder = document.querySelector('#close-button');

const transform = getVendored('transform');

class PlayButton{

    constructor(){
        this.isPlaying = false;

        this.dimension = {};

        this._setDimension();

        this._events();
    }

    _setDimension(){
        this.dimension.w = window.innerWidth;
        this.dimension.h = window.innerHeight;
    }

    _events(){
        playButtonHolder.addEventListener('click', (e) => this.handlePlay(e));
        closeButtonHolder.addEventListener('click', (e) => this.handleClose(e));
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('resize', (e) => this.handleResize(e));
    }

    handlePlay(e){
        this.isPlaying = true;
        
        page.classList.add('__video-active');

        video.src = video.src.replace(/autoplay=0/gi, 'autoplay=1');

        return false;
    }

    handleClose(e){
        this.isPlaying = false;
        
        page.classList.remove('__video-active');

        video.src = video.src.replace(/autoplay=0/gi, 'autoplay=0');

        return false;
    }

    handleMouseMove(e){
        let x = e.pageX,
            y = e.pageY,
            cx = x - this.dimension.w / 2,
            cy = y - this.dimension.h / 2,
            px = cx / this.dimension.w,
            py = cy / this.dimension.h;

        playButtonHolder.style[transform] = 'translateX('+ px * 4.5 +'%) translateY('+ py * 4.5 +'%)';
        PlayButtonShadow.style[transform] = 'translateX('+ px * 9 +'%) translateY('+ py * 9 +'%)';

        return false;
    }

    handleResize(e){
        this._setDimension();
    }

}

export default PlayButton;