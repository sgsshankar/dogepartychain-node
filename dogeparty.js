var unirest = require("unirest");
var querystring = require("querystring");
var config = require('./config');
var Promise = require('promise/domains');

module.exports = {

	getAddressInfo: function(address) {
		var url = config.config.address + address;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getAssetInfo: function(asset) {
		var url = config.config.asset + asset;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBlockInfo: function(block) {
		var url = config.config.block + block;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTransactionInfo: function(transaction) {
		var url = config.config.transaction + transaction;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getLatestTransactions: function() {
		var url = config.config.transactions;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getLatestBroadcasts: function() {
		var url = config.config.broadcasts;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getMempoolInfo: function() {
		var url = config.config.mempool;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getLatestAssets: function() {
		var url = config.config.assets;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBalance: function(param) {
		var url = config.config.balance + param;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBurns: function(param) {
		var url = config.config.burns + param;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBroadcasts: function(param) {
		var url = config.config.broadcasts + param;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getIssuances: function(param) {
		var url = config.config.issuance + param;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTransactions: function(param) {
		var url = config.config.transactions + '/' + param;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getHolders: function(param) {
		var url = config.config.holders + param;
		var result = sendRequest(url, 'GET', {});
		return result;
	}
};

function sendRequest(fullpath, method, querystring) {

	var options = {
		url: config.config.hostUrl + fullpath,
		qs: querystring,
		method: method,
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': 'dogepartychain',
			'Accept': 'application/json'
		}
	};

	return new Promise(function(resolve, reject) {
		if (method == "GET") {
			unirest.get(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response);
				});
		} else if (method == "POST") {
			unirest.post(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response);
				});

		}
	});

}