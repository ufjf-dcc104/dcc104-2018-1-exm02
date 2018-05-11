function ImageLibrary(){
  this.images = {};
}

ImageLibrary.prototype.load = function (key,url) {
  var img = new Image();
  this.images[key] = img;
  img.src = url;
};

ImageLibrary.prototype.draw = function (ctx, key, x, y) {
  ctx.drawImage(this.images[key], x, y);
};

ImageLibrary.prototype.drawSize = function (ctx, key, x, y, w, h) {
  ctx.drawImage(this.images[key], x, y, w, h);
};
