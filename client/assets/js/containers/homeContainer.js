import ClipAnimation from '@components/introClip/clipAnimation';

import ToggleMenu from '@components/toggleMenu';
import Presentation from '@components/presentation';

import isMobile from '@utils/isMobile';

class HomeContainer{

    constructor(){

        if(!isMobile())
            this.clipAnimation = new ClipAnimation();
        
        this.toggleMenu = new ToggleMenu();
        this.presentation = new Presentation();
            
    }

}

export default HomeContainer;