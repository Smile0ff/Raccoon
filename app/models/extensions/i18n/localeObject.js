const localization = require('@config/middleware/localization');

const locales = localization.locales;

class LocaleObject{

    constructor(value){
        
        locales.map((locale) => {
            this[locale] = Object.keys(value).includes(locale) ? value[locale] : null;
        });
        
    }

}

module.exports = LocaleObject;