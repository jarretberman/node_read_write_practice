const process = require('process')
const fs = require('fs')

const cat = (path) => {
    fs.readFile(path,"utf8", (err, data)=>{
        if (err){

            console.log(`Error at ${path} : ${err}`);

            process.exit(1)

        }

        console.log(data)

    })
}

cat(process.argv[2])