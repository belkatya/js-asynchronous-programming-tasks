import fs from 'fs';

// BEGIN
export default (filePath, data, callback) => {
    fs.writeFile(filePath, data, () => {
        callback();
    })
};
// END