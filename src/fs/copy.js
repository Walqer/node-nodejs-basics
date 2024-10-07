import { promises as fs} from 'fs';
import { constants } from 'fs/promises';
import path from 'path';
import { FILES_FOLDER } from '../constants.js';
const copy = async () => {
    const pathToFiles = path.resolve(FILES_FOLDER);
    const destination = path.resolve(path.join(FILES_FOLDER, '..', 'files_copy'));
    try{
        await fs.access(pathToFiles, constants.F_OK);
    } catch(err) {  
        if(err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
    try{
        await fs.access(destination, constants.F_OK);
        throw new Error('FS operation failed')
    } catch(err) {  
        if(err.code === 'ENOENT') {
            await fs.cp(pathToFiles, destination,{recursive:true});
            console.log('File successfully copied to', destination);
        } else{
            console.error(err.message);
        }
    }
    
};

await copy();
