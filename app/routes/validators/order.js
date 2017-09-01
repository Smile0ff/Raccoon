const validate = async (ctx) => {
    ctx.assert('name', ctx.res.__('order-name-error')).notEmpty();
    ctx.assert('email', ctx.res.__('order-email-error')).isEmail();
    ctx.assert('amount', ctx.res.__('order-amount-error')).isNumber().notEmpty();

    let result = await ctx.getValidationResult(),
        mapped = result.mapped();

    return {
        hasErrors: (Object.keys(mapped).length > 0) ? true : false,
        errors: mapped 
    }
}

module.exports = {
    validate
}