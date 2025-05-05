import fs from 'fs';

// BEGIN
export const compareFileSizes = (filePath1, filePath2, callback) => {
    fs.stat(filePath1, (err1, stats1) => {
      if (err1) {
        callback(err1);
        return;
      }
      fs.stat(filePath2, (err2, stats2) => {
        if (err2) {
          callback(err2);
          return;
        }  
        callback(null, Math.sign(stats1.size - stats2.size));
      });
    });
  };
// END