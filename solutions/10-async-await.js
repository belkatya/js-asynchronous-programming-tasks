import fsp from 'fs/promises';

// BEGIN
export const exchange = async (filePath, filePath2) => {
    const [data, data2] = await Promise.all([
        fsp.readFile(filePath, 'utf-8'),
        fsp.readFile(filePath2, 'utf-8')
    ]);
    await fsp.writeFile(filePath2, data, 'utf-8');
    await fsp.writeFile(filePath, data2, 'utf-8');
};
// END