import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) => {
    const promises = paths.map(path => {
      return fsp.stat(path)
        .then(stats => {
          if (stats.isDirectory()) {
            return 'directory';
          } else if (stats.isFile()) {
            return 'file';
          } else {
            return null;
          }
        })
        .catch(() => {
          return null;
        });
    });
    return Promise.all(promises);
  };
// END