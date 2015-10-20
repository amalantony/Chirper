"use strict";
var React = require('react');
var ChirpBox = require('./ChirpBox');

var ChirpList = React.createClass({
	render: function() {
		var items = this.props.chirps.map(function(chirp) {
			return (<ChirpBox key={chirp.cid} chirp={chirp} />);
		});
		return <ul> {items} </ul>;
	}
});

module.exports = ChirpList;
