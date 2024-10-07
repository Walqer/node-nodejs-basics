import { Transform } from 'stream';
const  {stdout, stdin} = process 
const transform = async () => {
    // Write your code here 
    const reverseStream = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.toString().split('').reverse().join('') + '\n');
        }
    })
    stdin.pipe(reverseStream).pipe(stdout)
};

await transform();