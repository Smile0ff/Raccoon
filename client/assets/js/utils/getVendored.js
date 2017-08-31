const el = document.createElement('div');
const vendors = ['ms', 'O', 'moz', 'Webkit'];

export default (prop) => {

    if(el.style[prop] === '')
        return prop;

    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    vendors.map((vendor) => {
        if(el.style[vendor + prop] !== undefined)
            return el.style[vendor + prop];
    });

}