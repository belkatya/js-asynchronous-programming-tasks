import fs from 'fs';

// BEGIN
export const move = (sourcePath, destinationPath, callback) => {
    fs.readFile(sourcePath, 'utf-8', (error1, content) => {
      if (error1) {
        callback(error1);
        return;
      }
      fs.writeFile(destinationPath, content, (error2) => {
        if (error2) {
          callback(error2);
          return;
        }
        fs.unlink(sourcePath, (error3) => {
          if (error3) {
            callback(error3);
            return;
          }
          callback(null);
        });
      });
    });
  };
// END
