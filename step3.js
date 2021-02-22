const process = require('process')
const fs = require('fs')
const axios = require('axios')


const cat = (path, output) => {
    fs.readFile(path,"utf8", (err, data)=>{
        if (err){

            console.error(`Error at ${path} : ${err}`);

            process.exit(1)

        } else {

            handleOutput(data, output)
        }

       

    })
}

async function webCat (url, output) {
    try {
        res = await axios.get(url)
        handleOutput(res.data, output)

    } catch (err){

        console.error(`Error at ${path} : ${err}`);

        process.exit(1)

    }

}

const handleOutput= (content, output) =>{
    if (output) {
        fs.writeFile(out,content,'utf8', (err) => {
            if (err) {
                console.error(`Unable to write ${output}: ${error}`)
                process.exit(1)
            }
        })
    }else {
        console.log(content)
    }
}

let path 
let output

if(process.argv[2] === "--out"){
    output = process.argv[3]
    path = process.arv[4]
}else {
    path = process.argv[2]
}

if(path.slice(0,4) === 'http'){
    webCat(path,output)
} else {
    cat(path,output)
}

