"use strict";
var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

function get(url) {
	return fetch(url, {
		credentials: 'same-origin'
	}).then(function(res) {
		return res.json();
	});
}

function post(url, body) {
	return fetch(url, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(body || {}),
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(function(res) {
		return res.json();
	});
}

var API = module.exports = {
	fetchChirps: function() {
		get('/api/chirps').then(actions.gotChirps.bind(actions));
	},
	fetchUsers: function() {
		get('/api/users').then(actions.gotUsers.bind(actions));
	},
	startFecthingChrips: function() {
		this.fetchChirps();
		setInterval(this.fetchChirps, 1000);
	},
	startFetchingUsers: function() {
		this.fetchUsers();
		setInterval(this.fetchUsers, 5000);
	},
	saveChirp: function(text) {
		console.log('Save Chirp!');
		text = text.trim();
		if(text === ''){
			return;
		}
		post('/api/chirps', {text: text}).then(actions.chirped.bind(actions));
	},
	follow: function(id) {
		post('/api/follow/' + id).then(actions.followed.bind(actions));
	},
	unfollow: function(id) {
		post('/api/unfollow/' + id).then(actions.unfollowed.bind(actions));
	}
};

dispatcher.register(function(action) {
	switch (action.actionType) {
		case constants.CHIRP:
			API.saveChirp(action.data);
			break;
		case constants.FOLLOW:
			API.follow(action.data);
			break;
		case constants.UNFOLLOW:
			API.unfollow(action.data);
			break;
	}
});
