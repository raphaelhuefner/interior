function dump_pic(data) {
  images.push(data);
  $('#gotten-pictures').append('<p><img src="' + data + '" /><br />' + data + '</p>');
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
