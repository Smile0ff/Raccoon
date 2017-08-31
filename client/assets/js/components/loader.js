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
            document.body.classList.remove('__preload');
            page.classList.add('__loaded');
            clearTimeout(timer);
        }, 400);
        
        return false;
    }

}

export default Loader;