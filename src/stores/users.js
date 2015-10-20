/* global USER */
"use strict";

var constants = require('../constants');

var UserStore = require('./store').extend({
	init: function() {
		this.bind(constants.GOT_USERS, this.set);
		this.bind(constants.FOLLOWED, this.updateUser);
		this.bind(constants.UNFOLLOWED, this.updateUser);
	},
	currentUser: USER,
	updateUser: function(data) {
			this.currentUser = data;
	}
});

module.exports = UserStore;
