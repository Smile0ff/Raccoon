const mongoose = require('mongoose');

const localization = require('@config/middleware/localization');
const LocaleObject = require('./localeObject');

class LocaleType extends mongoose.SchemaType{

    constructor(key, options){
        super(key, options);
    }

    cast(value){
        let localeObject = new LocaleObject(value);

        return localeObject[localization.getCurrentLocale()];
    }

}

mongoose.Schema.Types.LocaleType = LocaleType; 

module.exports = LocaleType;