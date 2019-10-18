const combine = require('multipipe');
const fs = require('fs');
const compressAndEncryptStream = require('./combinedStreams').compressAndEncrypt;

// method 1
fs.createReadStream(process.argv[3])
	.pipe(compressAndEncryptStream(process.argv[2]))
	.pipe(fs.createWriteStream(process.argv[3] + '.gz.enc'));

// method 2
fs.createReadStream(process.argv[3])
	.pipe(compressAndEncryptStream(process.argv[2]))
	.pipe(fs.createWriteStream(process.argv[3] + '.gz.enc'))
	.on('error', err => {
		console.log(err);
	});

// method 3
combine(
	fs
		.createReadStream(process.argv[3])
		.pipe(compressAndEncryptStream(process.argv[2]))
		.pipe(fs.createWriteStream(process.argv[3] + '.gz.enc')),
).on('error', err => {
	console.log(err);
});
