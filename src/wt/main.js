import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { WT_FOLDER } from '../constants.js';

const createWorker = (n) => {
    return new Promise((resolve) => {
        const worker = new Worker(path.resolve(WT_FOLDER,'worker.js'));

        worker.postMessage(n);
        worker.on('message', (result) => {
            resolve(result);
        });
        worker.on('error', (error) => {
            resolve({ status: 'error', data: null });
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                resolve({ status: 'error', data: null });
            }
        });
    });
};

const performCalculations = async () => {
    const numberOfCores = os.cpus().length;
    const results = [];

   
    for (let i = 0; i < numberOfCores; i++) {
        const result = await createWorker(10 + i);
        results.push(result);
    }
    console.log(results);
    process.exit(0);
};

await performCalculations();
