const validate = async (ctx) => {
    ctx.assert('name', ctx.res.__('feedback-name-error')).notEmpty();
    ctx.assert('email', ctx.res.__('feedback-email-error')).isEmail();
    ctx.assert('message', ctx.res.__('feedback-message-error')).notEmpty();

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