const origin = process.env.ORIGIN;

const authorizedSubdomains = [
    process.env.LOCALE_EN
];

const getUserSubdomain = (ctx) => {
    let subdomains = ctx.subdomains;
    let originParts = origin.split('.').length - 1;

    if(subdomains.length < originParts)
        return false;

    let userSubdomain = subdomains.pop();

    if(!authorizedSubdomains.includes(userSubdomain))
        ctx.throw(404, 'Subdomain Not Found');

    return userSubdomain;
}

module.exports = async (ctx, next) => {
    let userSubdomain = getUserSubdomain(ctx);

    ctx.userSubdomain = userSubdomain ? userSubdomain : null;

    await next();
}