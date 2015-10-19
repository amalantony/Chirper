"use strict";
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var App = module.exports = React.createClass({
	render: function() {
		return (<div>
			<div className="row">
				<h1> Chirps </h1>
			</div>

			<div className="row">
				<div className="three columns">
					Navigation
				</div>
				<div className="nine columns">
					<RouteHandler/>
				</div>
			</div>

		</div>);
	}
});
