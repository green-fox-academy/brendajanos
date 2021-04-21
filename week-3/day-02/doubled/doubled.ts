"use strict";
export {};



// Create a method that decrypts duplicated-chars.txt
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.

const fs = require('fs');

function decoder(file:string){
    
    file= fs.readFileSync('duplicated-chart.txt', 'utf-8');
    let variatedfile: string = '';
    for(let i:number =0; i< file.length;i= i+2){
        variatedfile += file[i] ;
    }

    fs.writeFileSync('duplicated-chart.txt',variatedfile)

}

decoder(duplicated-chart.txt)
