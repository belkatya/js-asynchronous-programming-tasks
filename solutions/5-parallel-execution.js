import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (directoryPath, callback) => {
    fs.readdir(directoryPath, (error, files) => {
      if (error) {
        callback(error);
        return;
      }
  
      const filesPaths = files.map(file => path.join(directoryPath, file));
  
      async.map(filesPaths, (filePath, callbackFile) => {
        fs.stat(filePath, (statError, stats) => {
          if (statError) {
            callbackFile(statError);
            return;
          }
  
          if (stats.isFile()) {
            callbackFile(null, stats.size);
          } else {
            callbackFile(null, 0);
          }
        });
      }, (mapError, results) => {
        if (mapError) {
          callback(mapError);
          return;
        }
        
        callback(null, _.sumBy(results, size => size));
      });
    });
  };
// END
