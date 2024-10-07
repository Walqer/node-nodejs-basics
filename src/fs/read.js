import { FILES_FOLDER } from '../constants.js';
import { promises as fs} from 'fs';
import path from 'path';
const read = async () => {
    const filePath = path.resolve(FILES_FOLDER, 'fileToRead.txt');
    try{
        const file = await fs.readFile(filePath, 'utf-8');
        console.log(file);
    } catch(error){
        if(error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};

await read();