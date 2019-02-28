const fs = require('fs');
const express = require('express');
const genericRoutes = express.Router();
//generates the route depending on the folder in which the index is

fs.readdir(__dirname, (__, items) => {
    if (items.length) {
        items.forEach((folderName) => {
            if (folderName !== 'index.js') {
                genericRoutes.use(require(`./${folderName}`));
            }
        });
    }
});

module.exports = genericRoutes;