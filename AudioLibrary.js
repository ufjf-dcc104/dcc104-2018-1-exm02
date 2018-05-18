AudioLibrary = function(){
  this.MAX_CANAIS = 15;
  this.audios = {};
  this.canais = [];

  for (var i = 0; i < this.MAX_CANAIS; i++) {
    this.canais[i] = {
      audio: new Audio(),
      fim: -1
    }
  }
};

AudioLibrary.prototype.load = function (key, url) {
  this.audios[key] = new Audio();
  this.audios[key].src = url;
  this.audios[key].load();
};

AudioLibrary.prototype.play = function (key) {
  var agora = new Date();
  for (var i = 0; i < this.canais.length; i++) {
    var canal = this.canais[i];
    if(canal.fim < agora.getTime()){
      canal.audio.src = this.audios[key].src;
      canal.fim = this.audios[key].duration*1000+agora.getTime();
      canal.audio.play();
      break;
    }
  }
};
