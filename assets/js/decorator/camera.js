function dump_pic(data) {
    $('#gotten-pictures').append('<p><img src="' + data + '" />' + data + '</p>');
}

function fail(msg) {
    alert(msg);
}

function show_pic() {
    navigator.camera.getPicture(dump_pic, fail, {
        quality : 50, destinationType : Camera.DestinationType.DATA_URL
    });
}
