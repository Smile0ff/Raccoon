const validator = require('koa-middle-validator');

const isNumber = (value) => !isNaN(value);

module.exports = () => validator({
    customValidators: {
        isNumber: isNumber
    }
});