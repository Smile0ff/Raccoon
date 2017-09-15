import ToggleMenu from '@components/toggleMenu';
import Presentation from '@components/presentation';

class HomeContainer{

    constructor(){
        this.toggleMenu = new ToggleMenu();
        this.presentation = new Presentation();
            
    }

}

export default HomeContainer;