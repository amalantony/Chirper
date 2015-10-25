"use strict";

var React = require('react');
var UserStore = require('../stores/users');
var actions = require('../actions');
var Link = require('react-router').Link;
var Box = require('./ChirpBox');


var UserList = React.createClass({
	getInitialState: function() {
		return {
			users: UserStore.all(),
			user: UserStore.currentUser
		};
	},
	componentDidMount: function() {
		UserStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		UserStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState(this.getInitialState());
	},
	render: function() {
		var items = this.state.users.filter(function(user) {
			return this.state.user.cid !== user.cid;
		}.bind(this)).map(function(user) {
			return <Box user={user} key={user.cid}>
				Follow Buttons
			</Box>;
		});

		return <ul> {items} </ul>;
	}
});

module.exports = UserList;
