import path from 'path'
import { ZIP_FOLDER } from '../constants.js';
import fs from 'fs'
import  zlib  from 'zlib'


const decompress = async () => {
    const pathToFile = path.resolve(path.join(ZIP_FOLDER, 'fileToCompress.txt'));
    const pathToZipFile = path.resolve(path.join(ZIP_FOLDER, 'farchive.gz'));
    const inputFile = fs.createReadStream(pathToZipFile);
    const outputFile = fs.createWriteStream(pathToFile);
    const gzip = zlib.createGunzip();
    inputFile.pipe(gzip).pipe(outputFile);
    
    outputFile.on('finish', () => {
        console.log('File successfully uncompressed to', pathToFile);
    })
};

await decompress();