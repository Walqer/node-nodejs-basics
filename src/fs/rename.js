import { FILES_FOLDER } from '../constants.js';
import { promises as fs} from 'fs';
import path from 'path';
const rename = async () => {
    const currentPath = path.resolve(FILES_FOLDER, 'wrongFilename.txt');
    const newPath = path.resolve(FILES_FOLDER, 'properFilename.md');
    try {
        await fs.access(currentPath, constants.F_OK)
    } catch (error) {
        if(error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
    try {
        await fs.access(newPath, constants.F_OK)
        throw new Error('FS operation failed')
    } catch (error) {
        if(error.code === 'ENOENT') {
            await fs.rename(currentPath,newPath)
        }
       
    }
    
};

await rename();