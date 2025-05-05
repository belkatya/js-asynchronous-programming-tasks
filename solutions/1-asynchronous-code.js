import fs from 'fs';

// BEGIN
export default (filePath) => {
    fs.readFile(filePath, 'utf-8', (_error, data) => console.log(data));
};
// END
