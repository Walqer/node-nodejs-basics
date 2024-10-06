import path from 'path'
import { ZIP_FOLDER } from '../constants.js';
import fs from 'fs'
import  zlib  from 'zlib'


const compress = async () => {
    const pathToFile = path.resolve(path.join(ZIP_FOLDER, 'fileToCompress.txt'));
    const pathToZipFile = path.resolve(path.join(ZIP_FOLDER, 'archive.gz'));
    const inputFile = fs.createReadStream(pathToFile);
    const outputFile = fs.createWriteStream(pathToZipFile);
    const gzip = zlib.createGzip();
    inputFile.pipe(gzip).pipe(outputFile);
    outputFile.on('finish', () => {
        console.log('File successfully compressed to', pathToZipFile);
    })
};

await compress();