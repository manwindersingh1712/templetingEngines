const path=require('path')

module.exports=path.dirname(process.mainModule.filename)

//we are exporting path to the parent directory 

//path.dirname() gives us the path of the directory whose name is given
//process.mainModule.filename gives us the name of parent directory