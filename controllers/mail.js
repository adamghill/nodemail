exports.index = function(req, res, next) {
	res.locals.tag = '';
	res.render('mail/index.html');
};
