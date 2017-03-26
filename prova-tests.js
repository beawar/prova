// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest';

// Import and rename a variable exported by prova.js.
import { name as packageName } from 'meteor/prova';

// Write your tests here!
// Here is an example.
Tinytest.add('prova - example', function(test) {
	test.equal(packageName, 'prova');
});
