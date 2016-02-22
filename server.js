var express   = require('express')

var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
	var ipaddress = request.headers['x-forwarded-for'] || 
	                request.connection.remoteAddress || 
	                request.socket.remoteAddress ||
     				request.connection.socket.remoteAddress,
		language  = request.headers["accept-language"].split(',')[0],
		software  = request.headers['user-agent'].split(') ')[0].split(' (')[1]

	response.json({
		ipaddress: ipaddress,
		language: language,
		software: software
	})
})

app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'))
})