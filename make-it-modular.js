const mymodule = require('./mymodule');

const directory = process.argv[2];
const ext = process.argv[3];

mymodule(directory, ext, function (err, filteredFiles) {
    if (err) {
        console.error('Error:', err);
        return;
    }

    filteredFiles.forEach(file => {
        console.log(file);
    });
});