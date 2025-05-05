import fsp from 'fs/promises';

// BEGIN
export const reverse = (filePath) => {
    return fsp.readFile(filePath, 'utf-8')
      .then((data) => {
        return data.split('\n').reverse().join('\n');
      })
      .then((reversedData) => fsp.writeFile(filePath, reversedData, 'utf-8'));
  };
// END