const path = require('path');
const fs = require('fs');
const solc = require('solc');

const educTokenPath = path.resolve(__dirname, 'contract', 'EducToken.sol');
const source = fs.readFileSync(educTokenPath, 'utf8');

