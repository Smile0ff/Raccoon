import ClipAnimation from '@components/introClip/clipAnimation';

import ToggleMenu from '@components/toggleMenu';
import Presentation from '@components/presentation';

class HomeContainer{

    constructor(){

        this.clipAnimation = new ClipAnimation();
        this.toggleMenu = new ToggleMenu();
        this.presentation = new Presentation();
            
    }

}

export default HomeContainer;