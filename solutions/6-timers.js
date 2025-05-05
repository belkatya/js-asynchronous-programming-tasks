import fs from 'fs';

// BEGIN
export default (filePath, period, callback) => {
    let lastModification = null;
    const timerId = setInterval(() => {
      fs.stat(filePath, (error, stats) => {
        if (error) {
          clearInterval(timerId);
          callback(error);
          return;
        }
        const currentModified = stats.mtimeMs;
        if (lastModification === null) {
            lastModification = currentModified;
        } else if (currentModified > lastModification) {
            lastModification = currentModified;
          callback(null);
        }
      });
    }, period);
    return timerId;
  };
// END
