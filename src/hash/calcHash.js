import crypto from 'crypto'
import { createReadStream} from 'fs';
import {HASH_FOLDER} from '../constants.js'
import path from 'path'
const calculateHash = async () => {
   const pathToFile = path.resolve(path.join(HASH_FOLDER, 'fileToCalculateHashFor.txt'));
   const fileStream = createReadStream(pathToFile);
   const hash = crypto.createHash('sha256');
   fileStream.on('data',(chunk) => {
    hash.update(chunk);
   })
   fileStream.on('end', () => {
    const result = hash.digest('hex');
    console.log(`SHA256 hash for file: ${result}`);
});
};

await calculateHash();  