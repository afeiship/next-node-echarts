const fs = require('fs');
const { createCanvas } = require('canvas');
const echarts = require('echarts');
// const options = require('./data1');
// const options = require('./demo/bar');
// const options = require('./demo/bubble');
// const options = require('./demo/pie');
const options = require('../data/area');
console.time('t1');
const canvas = createCanvas(1000, 500);
console.timeEnd('t1');
let chart = null;

// console.dir(canvas)
console.time('t2');
// init node canvas:
echarts.setCanvasCreator(() => canvas);
console.timeEnd('t2');
// init canvas:
chart = echarts.init(canvas);
chart.setOption(options);
// chart.getDom().toBuffer()

console.time('tx');
const buff = chart.getDom().toBuffer();
const b64 = 'data:image/png;base64,' + Buffer.from(buff).toString('base64');
console.timeEnd('tx');

console.time('t3');
const base64 = chart.getDataURL({
  backgroundColor: '#fff',
  pixelRatio: 2
});
console.timeEnd('t3');

console.time('t4');
fs.writeFileSync('./test-fei.html', `<img src="${base64}" width="1000" height="500" />`);
console.timeEnd('t4');

console.log(b64 === base64);

chart.dispose();
console.log('done!');
