const concatFiles = require('./concatFile.js');

concatFiles(process.argv[2], process.argv.slice(3), () => {
  console.log('File concatenated successfully.');
});
