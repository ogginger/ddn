//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"express",
	"file"
], function(
	express,
	file
) {
	console.log("main.js initialized successfully!");
	var app = express();

	//Send the file requested.
	app.get("/ddn/:url", function( request, response ) {
		console.log("Recieved request for '" + request.params.file + "'." );
		file.get( request.params.file ).then(function( Body ) {
			response.set( "Content-Type", "text/javascript" );
			response.send( Body );
		});
	});

	app.listen( 80, function() {
		console.log("DDN started. Listening on port 80.");
	});
});
