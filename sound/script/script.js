
if (!Modernizr.audio) {
  alert("Браузер не поддерживает воспроизведение звуковых файлов");
}
else {
  var audio = document.getElementById("audio");
  var res = audio.canPlayType('audio/ogg; codecs="vorbis"');
  if (res) alert(res + " can play ogg vorbis");
  else alert("no support for ogg vorbis");
}