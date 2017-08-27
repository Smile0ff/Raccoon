const RAF = () => {

    let vendors = ['ms', 'moz', 'webkit', 'o'],
        lastTime = 0;

    vendors.map((vendor) => {

        if(window.requestAnimationFrame) return;

        window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendor + 'CancelAnimationFrame']  || window[vendor + 'CancelRequestAnimationFrame'];
    });

    if(!window.requestAnimationFrame){

        window.requestAnimationFrame = (cb, el) => {
            let currentTime = Date.now(),
                timeToCall = Math.max(0, 16 - (currentTime - lastTime)),
                id = null;

            id = window.setTimeout(() => cb(currentTime + timeToCall), timeToCall);

            lastTime = currentTime + timeToCall;

            return id;
        }

    };


    if(!window.cancelAnimationFrame)
        window.cancelAnimationFrame = (id) => clearTimeout(id);

};