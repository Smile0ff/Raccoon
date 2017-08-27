const page = document.querySelector('#page');

class Loader{

    constructor(){
        this._events();
    }

    _events(){
        window.addEventListener('load', () => this.handleLoaded());
    }

    handleLoaded(){
        let timer = setTimeout(() => {
            page.classList.add('__loaded');
            clearTimeout(timer);
        }, 400);
        
        return false;
    }

}

export default Loader;