#! /usr/bin/env node     //shabang line
const yargs=require("yargs");
const util=require("./utils.js");
const Usage="\nUsage: tran <language_name> sentence to be translated";
const Options=yargs.usage(Usage).option("l",{alias:"languages",describe:"List all supported languages.",type: "boolean",demandOption:false}).help(true).argv;

console.log("hello world");