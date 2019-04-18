var createCanvas = require('canvas').createCanvas;
var echarts = require('echarts');
var DEFAULT_OPTIONS = {
  width: 1000,
  height: 500,
  pixelRatio: 3,
  option: {}
};

function NodeEcharts(inOptions) {
  var options = Object.assign(DEFAULT_OPTIONS, inOptions);
  var canvas = (this.canvas = createCanvas(options.width, options.height));
  echarts.setCanvasCreator(createCanvas);
  this.chart = echarts.init(canvas, null, { devicePixelRatio: options.pixelRatio });
  this.chart.setOption(options.option);
}

NodeEcharts.prototype.getDataURL = function(inType) {
  var buff = this.chart.getDom().toBuffer();
  var type = (inType || 'png').toLowerCase();
  return 'data:image/' + type + ';base64,' + Buffer.from(buff).toString('base64');
};

NodeEcharts.prototype.dispose = function() {
  this.chart.dispose();
};
// NodeEcharts.prototype.

module.exports = NodeEcharts;
