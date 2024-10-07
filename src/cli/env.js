const parseEnv = () => {
   const envKeys = Object.keys(process.env);
   const RSSKeys = envKeys.filter((key) => {
       if(key.startsWith('RSS_')) {
           return key
       }
   });
   const result = RSSKeys.map((key) => {
    return `${key}=${process.env[key]}`
   }).join('; ');
   console.log(result);
};

parseEnv();