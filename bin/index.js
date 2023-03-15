#! /usr/bin/env node     //shabang line
// import { translate } from '@vitalets/google-translate-api';
const yargs=require("yargs");
const util=require("./utils.js");
const Usage="\nUsage: tran <language_name> sentence to be translated";
const Options=yargs.usage(Usage).option("l",{alias:"languages",describe:"List all supported languages.",type: "boolean",demandOption:false}).help(true).argv;
// const translate=require('@vitalets/google-translate-api');
const { translate, Translator, singleTranslate, getBatchInitData, batchTranslate, languages, isSupported, getCode } = require('google-translate-api');
var sentence=util.parsesentence(yargs.argv._);

const ab=async function(){
    
    if(yargs.argv._[0]==null){
    util.showHelp();
    return;
}
if(yargs.argv.l == true || yargs.argv.languages == true){  
    util.showAll();  
    return;  
}
var language=yargs.argv._[0].toLowerCase();
if(yargs.argv._[0]){
    language=util.parseLanguge(language);
}
// const translate =abcd.translate();
if(sentence == ""){                                                                                          
    console.error("\nThe entered sentence is like John Cena, I can't see it!\n")  
    console.log("Enter tran --help to get started.\n")  
    return;
}
const res=await translate(sentence, {to: language}).then(res => {console.log("\n" + "\n" +"hello"+ res.text + "\n" + "\n");}).catch
(err => {                                                                                                     
     console.error(err);  
 });}
 ab();
// console.log("hello world");
// translate("Hola mundo", {to: 'en'}).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });