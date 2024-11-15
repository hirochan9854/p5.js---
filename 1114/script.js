//ページ読み込み時に1度だけ実行される関数
function setup() {
  //canvas要素の生成
  createCanvas(640, 1080);

  background(255);

  line(320, 500, 320, 600);

  //塗りの色
  fill("#838383");
  triangle(420, 250, 220, 250, 325, 130);

  fill("#e6c4a8");
  ellipse(320, 325, 150);

  fill("#fdecd4");
  rect(220, 400, 200, 130);
}

//ページを表示している間、ずっと繰り返し実行される関数
function draw() {
  console.log("draw!");
}
