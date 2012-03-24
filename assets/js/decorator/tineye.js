function talkToTineye(imageFileUri) {
  if (undefined == typeof imageFileUri) {
    imageFileUri = store_get_last();
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
  options.fileKey="images[0]";
  options.fileName=imageFileUri.substr(imageFileUri.lastIndexOf('/')+1);
  options.mimeType="image/jpeg";
  
  options.params = {
    color_format: 'rgb'
    , limit: '3'
  };

  var ft = new FileTransfer();
  ft.upload(imageFileUri, "http://multicolorengine.tineye.com/hackdays_flickr/rest/extract_colors/", win, fail, options);
};


// curl http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/ -F "image=@staticmap.png"
// http://multicolorengine.tineye.com/hackdays_flickr/rest/extract_colors/ -F "image=@assets/img/staticmap.png" -d "color_format=rgb" -d "color_format=rgb"
// http://multicolorengine.tineye.com/hackdays_flickr/_static/plain_explorer.html
