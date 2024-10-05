import { FILES_FOLDER } from '../constants.js';
import { promises as fs} from 'fs';
import path from 'path';
const remove = async () => {
    const fileToRemove = path.resolve(FILES_FOLDER, 'fileToRemove.txt');
    try{
        fs.unlink(fileToRemove);
    }catch(error){
        if(error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};

await remove();