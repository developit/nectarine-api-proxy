var express = require('express'),
	cors = require('cors'),
	proxy = require('http-proxy-middleware');

express()
	// enable CORS
	.use( cors() )
	// proxy straight to Peach
	.use(proxy('https://v1.peachapi.com', { changeOrigin:true }))
	// accept requests on PORT
	.listen(process.env.PORT || 8080);
