var NxNodeEcharts = require('../src/next-node-echarts');
var fs = require('fs');
var data_area = require('./data/area');
var data_pie = require('./data/pie');
var data_bar = require('./data/bar');
var data_bubble = require('./data/bubble');
var data_duidie = require('./data/duidie');

var items = [data_area /*data_pie, data_bar, data_bubble, data_duidie */];

items.forEach(function(item, index) {
  var echarts = new NxNodeEcharts({
    width: 1000,
    heigth: 500,
    option: item
  });

  var b64 = echarts.getDataURL();
  var filebuf = echarts.toBuffer();
  var filename = './test/outputs/' + index + '.html';
  fs.writeFileSync(filename, `<img src="${b64}" width="1000" height="500" />`);
  fs.writeFileSync('./test/outputs/0.png', filebuf);
  echarts.dispose();
  console.log(`File created at: http://0.0.0.0:3000/outputs/${index}.png`);
});
