function talkToTineye(imageFileUri) {
  if (undefined == typeof imageFileUri) {
    imageFileUri = images[images.length - 1];
  }

  consolog("talkToTineye, use: " + imageFileUri);

  // !! Assumes variable fileURI contains a valid URI to a  text file on the device
  var win = function(r) {
      consolog("Code = " + r.responseCode);
      consolog("Response = " + r.response);
      consolog("Sent = " + r.bytesSent);
  }
  
  var fail = function(error) {
      alert("An error has occurred: Code = " = error.code);
      consolog("upload error source " + error.source);
      consolog("upload error target " + error.target);
  }
  
  var options = new FileUploadOptions();
  options.fileKey="image";
  options.fileName=imageFileUri.substr(imageFileUri.lastIndexOf('/')+1);
  options.mimeType="text/plain";
  
  options.params = {
    min_score: '0'
    , limit: '10'
    , offset: '0'
  };

  var ft = new FileTransfer();
  ft.upload(imageFileUri, "http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/", win, fail, options);
};


// curl http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/ -F "image=@staticmap.png"
// http://multicolorengine.tineye.com/hackdays_flickr/rest/extract_colors/
// http://multicolorengine.tineye.com/hackdays_flickr/_static/plain_explorer.html
