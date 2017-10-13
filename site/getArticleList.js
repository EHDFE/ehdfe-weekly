const glob = require('glob');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

glob('weekly/*.md',function(err,files){

    var arr  = files.map((item)=>item.slice(7)).reverse();
    fs.writeFile('./site/app/articles/globData.json',JSON.stringify(arr),()=>{
        if(err) throw err;
        console.log(chalk.blue("Yes,we have get the article data,go on!"))
    })
})