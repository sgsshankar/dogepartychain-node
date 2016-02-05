var express = require('express');
var dogeparty = require('./dogeparty');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
	res.send("Express app for dogeparty chain api ");
});

app.get('/api/address/:address', function(req, res) {
	var response = dogeparty.getAddressInfo(req.params.address).then(function(response) {
		res.send(response);
	});
});

app.get('/api/asset/:asset', function(req, res) {
	var response = dogeparty.getAssetInfo(req.params.asset).then(function(response) {
		res.send(response);
	});
});

app.get('/api/block/:blockno', function(req, res) {
	var response = dogeparty.getBlockInfo(req.params.blockno).then(function(response) {
		res.send(response);
	});
});

app.get('/api/broadcasts', function(req, res) {
	var response = dogeparty.getLatestBroadcasts().then(function(response) {
		res.send(response);
	});
});

app.get('/api/transactions', function(req, res) {
	var response = dogeparty.getLatestTransactions().then(function(response) {
		res.send(response);
	});
});

app.get('/api/mempool', function(req, res) {
	var response = dogeparty.getMempoolInfo().then(function(response) {
		res.send(response);
	});
});

app.get('/api/transaction/:txhash', function(req, res) {
	var response = dogeparty.getTransactionInfo(req.params.txinfo).then(function(response) {
		res.send(response);
	});
});

app.get('/api/balances/:param', function(req, res) {
	var response = dogeparty.getBalance(req.params.param).then(function(response) {
		res.send(response);
	});
});

app.get('/api/burns/:param', function(req, res) {
	var response = dogeparty.getBurns(req.params.param).then(function(response) {
		res.send(response);
	});
});

app.get('/api/broadcasts/:param', function(req, res) {
	var response = dogeparty.getBroadcasts(req.params.param).then(function(response) {
		res.send(response);
	});
});

app.get('/api/issuances/:param', function(req, res) {
	var response = dogeparty.getIssuances(req.params.param).then(function(response) {
		res.send(response);
	});
});

app.get('/api/transactions/:param', function(req, res) {
	var response = dogeparty.getTransactions(req.params.param).then(function(response) {
		res.send(response);
	});
});

app.get('/api/holders/:param', function(req, res) {
	var response = dogeparty.getHolders(req.params.param).then(function(response) {
		res.send(response);
	});
});

var server = app.listen(port, function() {
	console.log("open browser to http://localhost:3000/");
});