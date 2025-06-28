({
    handleUploadFinished: function (component, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
        var cmpNames=[];
        // Get the file name
        uploadedFiles.forEach(file =>{console.log(file.name)
                                      cmpNames.push(file.name);
                                     } );
                                      
                                      component.set("v.fileNameList",cmpNames);                    
                                     }
})