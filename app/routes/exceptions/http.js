exports.throwBadRequestException = (msg) => {
    let err = new Error(msg || 'Bad Request');
    err.status = 400;

    throw err;
};

exports.throwForbiddenException = (msg) => {
    let err = new Error(msg || 'Forbidden');
    err.status = 403;

    throw err;
};

exports.throwNotFoundException = (msg) => {
    let err = new Error(msg || 'Not Found');
    err.status = 404;

    throw err;
};

exports.throwInternalServerException = (msg) => {
    let err = new Error(msg || 'Internal Server Error');
    err.status = 500;

    throw err;
};