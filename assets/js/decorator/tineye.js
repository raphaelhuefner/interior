function getColorsFromTineye(imageFileUri) {
  if (undefined == typeof imageFileUri) {
    imageFileUri = store_get_last();
  }

  consolog("talkToTineye, use: " + imageFileUri);

  // !! Assumes variable fileURI contains a valid URI to a  text file on the device
  var win = function(r) {
      getImagesFromTineye(r.response);
      //consolog("Code = " + r.responseCode);
      //consolog("Response = " + r.response);
      //consolog("Sent = " + r.bytesSent);
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
    color_format: 'hex'
    , limit: '3'
  };

  var ft = new FileTransfer();
  ft.upload(imageFileUri, "http://multicolorengine.tineye.com/hackdays_flickr/rest/extract_colors/", win, fail, options);
};


function getImagesFromTineye(colorData) {
var data = {};
  var colors = [];
  var weights = [];
  var c;
  var count = 0;
  while (c = colorData.result.pop() && count < 3) {
    data['colors[' + count + ']'] = c.color;
    data['weights[' + count + ']'] = c.weight;
//    colors.push(c.color);
  //  weights.push(c.weight);
  consolog(c.color + ' ' + c.weight);
    count++;
  }

  // !! Assumes variable fileURI contains a valid URI to a  text file on the device
  var win = function(data, textStatus, jqXHR) {
      consolog("getImagesFromTineye Code = " + textStatus);
      consolog("getImagesFromTineye Response = " + data);
  }
  
  var fail = function(error) {
      alert("An error has occurred: Code = " = error.code);
      consolog("upload error source " + error.source);
      consolog("upload error target " + error.target);
  }
  
  $.ajax('http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/',
    {
      data: data
      , success: win
    }
    
  );
  
};



// curl http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/ -F "image=@staticmap.png"
// http://multicolorengine.tineye.com/hackdays_flickr/rest/extract_colors/ -F "image=@assets/img/staticmap.png" -d "color_format=rgb" -d "color_format=rgb"
// http://multicolorengine.tineye.com/hackdays_flickr/_static/plain_explorer.html
// curl http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/



// curl http://multicolorengine.tineye.com/hackdays_flickr/rest/color_search/    -F "colors[0]=255,112,223"          -F "colors[1]=DF4F23"                -F "weights[0]=70"         -F "weights[1]=30" -F "limit=10"
     
// http://multicolorengine.tineye.com/hackdays_flickr/collection/?filepath=102765973.jpg     