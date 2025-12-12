//CLI to count the no of lines... CLI HAS commands
const fs = require("fs");
const {Command} = require("commander")
const program = new Command();

program
    .name('File related CLI')
    .description("CLI to count the no of lines in a file")
    .version('0.7.0')

program
    .command('count')
    .description("Count the no of lines")
    .argument("<file" , "file from which to count")
    .action((file)=>{
        fs.readFile(file, 'utf-8' , (err,data)=>{
            if (err){
                console.log(err)
            }else{
                const lines = data.split('\n').length;
                console.log(`There are ${lines} lines in ${file}`)
            }
        })
    })

program.parse();
