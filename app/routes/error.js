const processError = async (ctx, next) => {

    try{

        await next();

        if(ctx.status === 404)
            ctx.throw(404, 'Page Not Found');    

    } catch(err){
        ctx.status = err.status || 500;
        await ctx.render('errors', { err });

        ctx.app.emit('error', err, ctx);
    }
    
}

module.exports = processError;