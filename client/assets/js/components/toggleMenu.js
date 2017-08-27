import { EventEmitter } from 'events';

const page = document.querySelector('#page');
const toggleMenuButton = document.querySelector('#toggle-menu');

class ToggleMenu extends EventEmitter{

    constructor(){
        super();
        
        this.isActive = false;

        this._events();
    }

    _events(){
        toggleMenuButton.addEventListener('click', (e) => this.handleClick(e));
    }

    handleClick(e){
        this.isActive = !this.isActive;

        page.classList.toggle('__menu-active');

        return false;
    }

}

export default ToggleMenu;