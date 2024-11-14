//ページ読み込み時に1度だけ実行される関数
function setup() {
  //canvas要素の生成
  createCanvas(640, 1080);

  point(100, 200);

  line(320, 500, 320, 600);

  rect(220, 400, 200, 130);

  ellipse(320, 325, 150);

  triangle(420, 250, 220, 250, 325, 130);
}

//ページを表示している間、ずっと繰り返し実行される関数
function draw() {
  console.log("draw!");
}
