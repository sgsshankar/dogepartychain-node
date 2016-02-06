# dogepartychain-node
nodejs API for Dogeparty chain

### Installation

```
npm install dogeparty

```

### Instance

```
var dogeparty = require('dogeparty');
```
### Usage

```
dogeparty.method(<args>).then(function(response) {
		//Results here
	});
```

### Methods
Refer to the [Dogeparty chain API](http://dogepartychain.io/api) to know about each output and explanation
```
getAddressInfo(address)
getAssetInfo(asset)
getBlockInfo(block)
getTransactionInfo(txHash)
getLatestTransactions()
getLatestBroadcasts()
getMempoolInfo()
getLatestAssets()
getBalance(address)
getBurns(address) | getBurns(block_number)
getBroadcasts(address) | getBroadcasts(block_number)
getIssuances(address) | getIssuances(asset) | getIssuances(block_number)
getTransactions(address) | getTransactions(asset)
getHolders(asset)

```

### Development

Feel free to fork from [dogepartychain-node](https://github.com/sgsshankar/dogepartychain-node)

### Issues

https://github.com/sgsshankar/dogepartychain-node/issues


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sgsshankar/dogepartychain-node/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

