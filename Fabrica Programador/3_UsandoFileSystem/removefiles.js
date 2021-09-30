const fs = require('fs/promises')

const fileNamePath = './arquivos_base.js';

fs.unlink(fileNamePath).then(console.log).catch(console.error)