import ToggleMenu from '@components/toggleMenu';
import PlayButton from '@components/playButton';

import isMobile from '@utils/isMobile';

class ShowreelContainer{

    constructor(){

        this.toggleMenu = new ToggleMenu();

        if(!isMobile())
            this.playButton = new PlayButton();
        
    }

}

export default ShowreelContainer;