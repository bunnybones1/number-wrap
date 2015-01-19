var wrap = require('./');

var testData = [
	[-2, 0, 2],
	[-1, 0, 2],
	[0, 0, 2],
	[1, 0, 2],
	[2, 0, 2],
	[3, 0, 2],
	[3.1, 0, 2],
	[-.1, 0, 2]
]

testData.forEach(function(data){
	console.log(data);
	console.log(wrap(data[0], data[1], data[2]));
})
