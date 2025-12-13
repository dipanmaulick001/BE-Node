//CLI to count the no of lines and words... CLI HAS commands
const fs = require("fs");
const {Command} = require("commander") //package to create cli- based on commands
const program = new Command();

program      //description of the entire CLI
    .name('File related CLI')
    .description("CLI to count the no of lines and words in a file")
    .version('0.7.0')

program //1ST COMMAND
    .command('count-lines')
    .description("Count the no of lines")
    .argument("<file>" , "file from which to count")
    .action((file)=>{
        fs.readFile(file, 'utf-8' , (err,data)=>{
            if (err){
                console.log(err)
            }else{
                const lines = data.split('\n').length
                console.log(`There are ${lines} lines in ${file}`)
            }
        })
    })

program //2ND COMMAND
    .command('count-words')
    .description("Count the no of words")
    .argument("<file>" , "file from which to count")
    .action((file)=>{
        fs.readFile(file, 'utf-8' , (err,data)=>{
            if (err){
                console.log(err)
            }else{
                const words = data.split(/\s+/).length;  //regex of all white space characters
                console.log(`There are ${words} words in ${file}`)
            }
        })
    })



program.parse(); //look at what we provided, matching with the command, and execute the correct action
