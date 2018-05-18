AudioLibrary = function(){
  this.MAX_CANAIS = 5;
  this.audios = {};
  this.canais = [];

  for (var i = 0; i < this.MAX_CANAIS; i++) {
    this.canais[i] = new Audio();
  }
};

AudioLibrary.prototype.load = function (key, url) {
  this.audios[key] = new Audio();
  this.audios[key].src = url;
  this.audios[key].load();
};

AudioLibrary.prototype.play = function (key) {
  this.audios[key].play();
};
