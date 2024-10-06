import path from 'path'
import { ZIP_FOLDER } from '../constants.js';
import fs from 'fs'
import  zlib  from 'zlib'


const compress = async () => {
    const pathToFile = path.resolve(path.join(ZIP_FOLDER, 'fileToCompress.txt'));
    const pathToZipFile = path.resolve(path.join(ZIP_FOLDER, 'farchive.gz'));
    const inputFile = fs.createReadStream(pathToFile);
    const outputFile = fs.createWriteStream(pathToZipFile);
    outputFile.on('finish', () => {
        console.log('File successfully compressed to', pathToZipFile);
    })
    const gzip = zlib.createGzip();
    inputFile.pipe(gzip).pipe(outputFile);
};

await compress();