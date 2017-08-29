const emmitError = (err, ctx) => ctx.app.emit('error', err, ctx);

const handleNotFound = async (err, ctx) => {
    await ctx.render('errors/not-found', { err });
}

const handleCommon = async (err, ctx) => {
    await ctx.render('errors/common', { err });
}

const processError = async (ctx, next) => {

    try{

        await next();

        if(ctx.status === 404)
            ctx.throw(404, 'Page Not Found');    

    } catch(err){

        (err.status !== 404)
            ? handleCommon(err, ctx)
            : handleNotFound(err, ctx)
        ;

        emmitError(err, ctx);

    }
    
}

module.exports = processError;