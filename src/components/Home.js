"use strict";
var React = require('react');
var ChirpInput = require('./ChirpInput');
var actions = require('../actions');
var ChirpList = require('./ChirpList');
var ChirpStore = require('../stores/chirps.js');

var Home = React.createClass({
	getInitialState: function() {
		return {
			chirps: ChirpStore.timeline()
		};
	},
	mixins: [ChirpStore.mixin],
	componentDidMount: function() {
		ChirpStore.addChangeListener(this.onChange);
	},
	componentWillUnmount: function() {
		ChirpStore.removeChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState(this.getInitialState());
	},
	render: function() {
		return(<div>
			<ChirpInput onSave={this.saveChirp}></ChirpInput>
			<ChirpList chirps={this.state.chirps}></ChirpList>
		</div>);
	},
	saveChirp: function(text) {
		actions.chirp(text);
	}
});

module.exports = Home;
