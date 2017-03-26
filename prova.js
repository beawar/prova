// Write your package code here!
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Bubble from './bubble.jsx';

Meteor.startup(function() {
	RocketChat.MessageTypes.registerType({
		id: 'bubble',
		system: true,
		message: '<h1>Bubble</h1>' +
		'<div id="bubble"></div>'
	});

	// render(<Bubble />, document.getElementById('bubble'));
});

RocketChat.callbacks.add('renderMessage', (message) => {
	message.html = message.msg;
	if (Meteor.isServer) {
		RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser(
			'bubble',
			message.rid,
			' ',
			message.u._id
		);
	}
	return message;
}, RocketChat.callbacks.priority.LOW, 'bubble_create');

// Variables exported by this module can be imported by other packages and
// applications. See prova-tests.js for an example of importing.
export const name = 'prova';
