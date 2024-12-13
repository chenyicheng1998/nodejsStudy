// import fs from 'fs';

// 1
// // readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// 2
// // readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data)




import fs from 'fs/promises';


// 3
// // readFile() - Promise .then()
// fs.readFile('./text.txt', 'utf')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// 4
// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error){
        console.log(error);
    }
}
// readFile();


// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', "I am writing to this file.");
        console.log("File written to ...");
    } catch (error) {
        console.log(error);
    }
}
// writeFile();

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended to ...');
    } catch (error) {
        console.log(error);
    }
};
appendFile();


