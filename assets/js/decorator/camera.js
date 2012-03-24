function dump_pic(data) {
    $('#gotten-pictures').append('<p><img src="' + data + '" /><br />' + data + '</p>');
}

function fail(msg) {
    alert(msg);
}

function show_pic() {
    navigator.camera.getPicture(dump_pic, fail, {
        quality : 50, destinationType : Camera.DestinationType.FILE_URI
    });
}
