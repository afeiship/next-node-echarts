(function() {
  var NxNodeEcharts = require('../src/next-node-echarts');
  var fs = require('fs');
  var data_area = require('./data/area');
  var data_pie = require('./data/pie');
  var data_bar = require('./data/bar');
  var data_bubble = require('./data/bubble');
  var data_duidie = require('./data/duidie');

  describe('NxNodeEcharts.methods', function() {
    test('create base64 to outputs', function() {
      var datas = [data_area, data_pie, data_bar, data_bubble, data_duidie];

      datas.forEach(function(item, index) {
        var echarts = new NxNodeEcharts({
          width: 1000,
          heigth: 500,
          option: item
        });

        var b64 = echarts.getDataURL();
        fs.writeFileSync(
          './test/outputs/' + index + '.html',
          `<img src="${b64}" width="1000" height="500" />`
        );
      });
    });
  });
})();
