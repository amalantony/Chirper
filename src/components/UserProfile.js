"use strict";
var React = require('react');
var UserStore = require('../stores/users');
var ChirpStore = require('../stores/chirps');
var utils = require('../utils');
var FollowButton = require('./FollowButton');

var UserProfile = React.createClass({
	getInitialState: function() {
		var id = parseInt(this.props.params.id, 10);
		return {
			user: UserStore.get(id) || {},
			chirps: ChirpStore.byUserId(id)
		};
	},
	mixins: [UserStore.mixin, ChirpStore.mixin],
	componentDidMount: function() {
		UserStore.addChangeListener(this.onChange);
		ChirpStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		UserStore.removeChangeListener(this.onChange);
		ChirpStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState(this.getInitialState());
	},
	render: function() {
		var chirps = this.state.chirps.map(function(chirp) {
			return <li key={chirp.cid}> {chirp.text} </li>;
		});
		console.log(this.state.user);
		return(<div>
			<img className='two columns' src={utils.avatar(this.state.user.email)} />
			<div className="ten columns">
				<h1> {this.state.user.fullname} </h1>
				<h3 className="timestamp"> @{this.state.user.username} </h3>
				<p> <FollowButton userId={this.state.user.cid}></FollowButton> </p>
				<ul>
					{chirps}
				</ul>
			</div>
		</div>);
	}
});

module.exports = UserProfile;
