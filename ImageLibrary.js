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

ImageLibrary.prototype.drawAngle = function(ctx, key, x, y, ang){
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang*Math.PI/180);
  //ctx.fillStyle = "white";
  //ctx.fillRect(-this.images[key].width/2,-this.images[key].width/2,this.images[key].width,this.images[key].height);
  ctx.drawImage(this.images[key], -this.images[key].width/2, -this.images[key].height/2);
  ctx.restore();
}
