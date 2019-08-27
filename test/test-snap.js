const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(800, 600);
const ctx = canvas.getContext('2d');
const fs = require('fs');

function wrapFillText(context, inText, x, y, maxWidth, lineHeight) {
  // 字符分隔为数组
  var arrText = inText.split('');
  var line = '';

  for (var n = 0; n < arrText.length; n++) {
    var testLine = line + arrText[n];
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = arrText[n];
      y += lineHeight || 24;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

// Write "Awesome!"
ctx.font = '16px Impact';
wrapFillText(
  ctx,
  'TITLE:清晨醒来，打开窗帘，一抹慵懒的阳光照进来',
  10,
  20,
  780
);

ctx.font = '12px Impact';
ctx.fillStyle = '#999';
wrapFillText(
  ctx,
  'DESC:清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。',
  10,
  60,
  780,
  18
);

// Draw cat with lime helmet
loadImage('./test/outputs/snap.png').then((image) => {
  ctx.drawImage(image, 100, 110, 600, 500);
  const html = '<img src="' + canvas.toDataURL() + '" />';
  fs.writeFileSync('./dist/node-example.html', html);
});
