import {STREAM_FOLDER} from '../constants.js'; 
import { createReadStream} from 'fs';
import path from 'path'
const { stdout } = process;

const read = async () => {
    const readableStream = createReadStream(path.resolve(STREAM_FOLDER, 'fileToRead.txt'))
    let data = "";
    readableStream.on('data',(chunk) => {
        data+= chunk
    })
    readableStream.on('end', () => {
        stdout.write(data + '\n')
    })
};

await read();