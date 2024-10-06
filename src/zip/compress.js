import path from 'path'
import { ZIP_FOLDER } from '../constants.js';
import fs from 'fs'
import  zlib  from 'zlib'


const compress = async () => {
    const pathToFile = path.resolve(path.join(ZIP_FOLDER, 'fileToCompress.txt'));
    const pathToZipFile = path.resolve(path.join(ZIP_FOLDER, 'archive.gz'));
    const inputZipFile = fs.createReadStream(pathToFile);
    const outputUncompressedFile = fs.createWriteStream(pathToZipFile);
    const gzip = zlib.createGzip();
    inputZipFile.pipe(gzip).pipe(outputUncompressedFile);
    outputUncompressedFile.on('finish', () => {
        console.log('File successfully compressed to', pathToZipFile);
    })
};

await compress();