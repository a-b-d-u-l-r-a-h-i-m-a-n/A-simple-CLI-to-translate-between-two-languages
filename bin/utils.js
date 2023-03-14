module.exports.parsesentence=function(words){
    var sentence="";
    for(var i=1;i<words.length;i++){
        sentence=sentence+words[i]+" ";
    }
};
module.exports.showHelp=function(){
    const usage = "\nUsage: tran <lang_name> sentence to be translated";                                                          
    console.log(usage);  
    console.log('\nOptions:\r')  ;
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')  ;
    console.log('    -l, --languages\t' + '      ' + 'List all languages.' + '\t\t' + '[boolean]\r')  ;
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')  ;
};
