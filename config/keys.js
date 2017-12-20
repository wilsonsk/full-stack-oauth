// Figure out which set of credentials to return
if(process.env.NODE_ENV === 'production') {
	// return production keys
	module.exports = require('./prod');

} else {
	// return dev keys
	module.exports = require('./dev');
}
