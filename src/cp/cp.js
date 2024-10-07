import { spawn } from 'child_process'
import path from 'path'
import { CP_FOLDER } from '../constants.js';
const spawnChildProcess = async (args) => {


    const child = spawn('node', [path.join(CP_FOLDER, 'script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'inherit'] 
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
        console.log(`Child proccess exited with code ${code}`);
    });
};


// Put your arguments in function call to test this functionality
spawnChildProcess(['foo','bar']);
