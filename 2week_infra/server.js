import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import os from 'os';

//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const PORT = 3000;
const server = http.createServer(async (req, res) => {
    let filePath;
    if(req.url == '/'){
        filePath = path.join(__dirname,'week1.html');
    }
    else{
        throw new Error('not found')
    }

    try{
        // const data = await fs.readFile(filePath, 'utf-8');
        let data = await fs.readFile(filePath, 'utf-8');
        // let data = await fs.readFile('week1.html', 'utf-8'); if directory is same its ok
        data = data. replace('{{type}}', os.type());
        data = data. replace('{{hostname}}', os.hostname());
        data = data. replace('{{cpu_num}}', os.cpus().length);
        data = data. replace('{{total_mem}}', os.totalmem());
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(data);
    } catch (error){
        console.error('errorin file reading', error);
    }

    // console.log(req.url);
    // console.log(req.method);
});

server.listen(3000, () => {
    console.log(`server is running in ${PORT}`)
})