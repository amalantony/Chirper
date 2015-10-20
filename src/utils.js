"use strict";
var crypto = require('crypto');

exports.avatar = function(email) {
	if(!email) {
		return '';
	}

	email = crypto.createHash('md5').update(email).digest('hex');
	return 'http://gravatar.com/avatar/' + email + '?s=92';
};
