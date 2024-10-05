import { FILES_FOLDER } from '../constants.js';
import { promises as fs} from 'fs';
const list = async () => {
    try{
        const files = await fs.readdir(FILES_FOLDER)
        console.log(files)
    } catch(err) {
        if(err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
    
};

await list();

