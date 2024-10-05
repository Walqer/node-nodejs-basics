const parseArgs = () => {
   const args = process.argv.slice(2)
   const result = []
   for(let i = 0; i < args.length; i++) {
    const arg = args[i].slice(2);
    const value = args[i+1]
    result.push(`${arg} is ${value}`)
    i++
   }
   console.log(result.join(', '));
};

parseArgs();