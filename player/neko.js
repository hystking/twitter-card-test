function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function loadImage(url) {
  return function(callback) {
    var image = new Image();
    image.src = url;
    if(image.complete) {
      return callback(null, image);
    }
    image.addEventListener("load", function(){
      callback(null, image);
    });
  }
}


function neko(dom){
  var ctx = dom.getContext("2d");
  var query = getQueryParams(document.location.search);
  console.log(query)

  var cover_url, face_url, color_url;
  var cover, face, color;
  cover_url = "neko_img/cover.png";
  switch(query.face) {
    case "2":
      face_url = "neko_img/face2.png";
      break;
    default:
      face_url = "neko_img/face1.png";
  }
  switch(query.color) {
    case "2":
      color_url = "neko_img/color2.png";
      break;
    default:
      color_url = "neko_img/color1.png";
  }
  async.parallel([
    loadImage(cover_url),
    loadImage(face_url),
    loadImage(color_url),
  ], function(err, results){
    cover = results[0];
    face = results[1];
    color = results[2];

    render();
  });

  function render() {
    var time = Date.now();
    var offsetY;
    dt = time % 120;
    if(dt < 60) {
      offsetY = 0;
    } else {
      offsetY = 12;
    }
    ctx.clearRect(0, 0, dom.width, dom.height);
    ctx.drawImage(color, 0, offsetY);
    ctx.drawImage(face, 0, offsetY);
    ctx.drawImage(cover, 0, offsetY);
    requestAnimationFrame(render);
  }
}
