exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.'
    next();
};

exports.csrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        // return res.send('BAD CSRF');
        return res.render('404');
    };
};