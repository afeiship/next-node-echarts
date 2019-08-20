/*!
 * name: next-node-echarts
 * url: https://github.com/afeiship/next-node-echarts
 * version: 1.0.0
 * date: 2019-08-20T11:37:54.683Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var createCanvas = require('canvas').createCanvas;
  var echarts = require('echarts');
  var ERR_MSG = 'Echarts must be import!';
  var DEFAULT_OPTIONS = {
    width: 1000,
    height: 500,
    pixelRatio: 2,
    option: {},
    echarts: null
  };

  var NxNodeEcharts = nx.declare('nx.NodeEcharts', {
    methods: {
      init: function(inOptions) {
        var options = nx.mix(DEFAULT_OPTIONS, inOptions);
        var echarts = options.echarts;
        if (!echarts) {
          nx.error(ERR_MSG);
        }
        echarts.setCanvasCreator(createCanvas);
        this.echarts = echarts;
        this.canvas = createCanvas(options.width, options.height);
        this.chart = echarts.init(this.canvas, null, {
          devicePixelRatio: options.pixelRatio
        });
        this.chart.setOption(options.option);
      },
      toBuffer: function() {
        return this.chart.getDom().toBuffer();
      },
      getDataURL: function(inType) {
        var buff = this.toBuffer();
        var type = (inType || 'png').toLowerCase();
        return 'data:image/' + type + ';base64,' + Buffer.from(buff).toString('base64');
      },
      dispose: function() {
        return this.chart.dispose();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNodeEcharts;
  }
})();

//# sourceMappingURL=next-node-echarts.js.map
