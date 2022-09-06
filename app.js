//core module
//file system
// const fs = require('fs');

// menuliskan string ke file (Synchronus)
// fs.writeFileSync('text.txt','Hello world secara sysnchronus!');

// fs.readFile('text.txt', "utf-8",(err, data)=> {
//     if(err) throw err;
//     console.log(data);
// });

// Membuat readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what is your name ? ",(name)=>{
    rl.question("what is your phone number ? ",(number)=>{
        rl.question("what is your email ? ",(email)=>{
            console.log(`thank you ${name}, your number is ${number}, then your email is ${email}`);
            rl.close();
        })
    })
});