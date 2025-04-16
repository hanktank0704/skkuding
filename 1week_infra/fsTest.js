import fs from 'fs';
// import fs from 'fs/promises'

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


//readFileSync() -> synchronous, might block if file is too big
const data =fs.readFileSync('./test.txt', 'utf8');
console.log(data);

// //readFile() -> promise .then()
// fs.readFile('./test.txt', 'utf8');
// .then((data) => console.log(data))