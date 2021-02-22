const process = require('process')
const fs = require('fs')
const axios = require('axios')


const cat = (path) => {
    fs.readFile(path,"utf8", (err, data)=>{
        if (err){

            console.log(`Error at ${path} : ${err}`);

            process.exit(1)

        }

        console.log(data)

    })
}

async function webCat (url) {
    try {
        res = await axios.get(url)
        console.log(res.data)

    } catch (err){

        console.log(`Error at ${path} : ${err}`);

        process.exit(1)

    }

}

let path = process.argv[2]

if(path.slice(0,4) === 'http'){
    webCat(path)
} else {
    cat(path)
}

