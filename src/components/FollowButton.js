"use strict";
var React = require('react');
var actions = require('../actions');
var UserStore = require('../stores/users');

var FollowButton = React.createClass({
		getInitialState: function() {
			return {
				id: UserStore.currentUser.id,
				currentlyFollowing: UserStore.currentUser.following
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
			if(this.state.id === this.props.userId) {
				return <span> This is you! </span>;
			}
			var text, action;
			if (this.state.currentlyFollowing.indexOf(this.props.userId) > -1) {
				text = 'Unfollow';
				action = this.unfollow;
			} else {
				text = 'Follow';
				action = this.follow;
			}
			return <button onClick={action}>{text}</button>;
		},
		unfollow: function() {
			actions.unfollow(this.props.userId);
		},
		follow: function() {
			console.log('follow');
			actions.follow(this.props.userId);
		}
});

module.exports = FollowButton;
