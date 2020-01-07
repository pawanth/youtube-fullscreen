url = location.href

if( url.indexOf('watch?') >= 0){
    // var newurl = url.replace("watch?", "");
    var newurl = url.replace("watch", "watch_popup");

    // newurl = newurl.replace("=", "/");
    location.href = newurl;
}
