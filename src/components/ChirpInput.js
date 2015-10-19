"use strict";
var React = require('react');

var ChirpInput = module.exports = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		};
	},
	render: function() {
		return (<div className="row">
			<div className="nine columns">
				<input type="text"
					className="u-full-width"
					placeholder="Say something!"
					value={this.state.value}
					onChange={this.handleChange}/>
			</div>
			<div className="three columns">
				<button
					className='u-full-width button-primary'
					onClick={this.handleClick}>
					Chirp
				</button>
			</div>
		</div>);
	},
	handleChange: function(evt) {
		this.setState({
			value: evt.target.value
		});
	},
	handleClick: function() {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	}
});
