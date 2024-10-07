import { promises as fs} from 'fs';
import { constants } from 'fs/promises';
import path from 'path';
import { FILES_FOLDER } from '../constants.js';
const create = async () => {
    const pathToFile = path.resolve(path.join(FILES_FOLDER, 'fresh.txt'));
    
    try {
        await fs.access(pathToFile, constants.F_OK);
        throw new Error('FS operation failed')
    }  catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(pathToFile, 'I am fresh and young inside of the files folder');
            console.log('File successfully created at', pathToFile);
        } else {
            console.error(err.message);
        }
    }
};

await create();


