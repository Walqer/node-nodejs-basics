import {STREAM_FOLDER} from '../constants.js'; 
import { createWriteStream} from 'fs';
import path from 'path'
const { stdin } = process;
const write = async () => {
    console.log('Write something to', path.resolve(STREAM_FOLDER, 'fileToWrite.txt'));
    console.log('Press control + d or command + d to finish writing');
    const writableStream = createWriteStream(path.resolve(STREAM_FOLDER, 'fileToWrite.txt'))
    writableStream.on('finish', () => {
        console.log('File successfully written to', path.resolve(STREAM_FOLDER, 'fileToWrite.txt'));
    })
    stdin.pipe(writableStream)
    stdin.on('end', () => {
        writableStream.end();
    })
};

await write();