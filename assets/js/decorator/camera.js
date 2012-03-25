function dump_pic(data) {
  store_save(data);
  $('#gotten-pictures').append('<p><img src="' + data + '" /><br />' + data + '</p>');
  consolog("new pic = " + data);
  getColorsFromTineye(data);
}

function fail(msg) {
  alert(msg);
}

function getPic() {
  navigator.camera.getPicture(dump_pic, fail, {
    quality : 50
    , destinationType : Camera.DestinationType.FILE_URI
    , targetWidth: 200
    , targetHeight: 200
  });
}
