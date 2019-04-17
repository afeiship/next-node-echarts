# next-node-echarts
> Echarts for node

## install
```bash
npm install -S afeiship/next-node-echarts --registry=https://registry.npm.taobao.org
```

## apis
| api        | params | description        |
| ---------- | ------ | ------------------ |
| getDataURL | -      | get base64 string. |
| dispose    | -      | dispose resource   |

## usage
```js
import NxNodeEcharts from 'next-node-echarts';

// example data:
const option = {
  title: {
    text: 'test'
  },
  tooltip: {},
  legend: {
    data: ['test']
  },
  xAxis: {
    data: ['a', 'b', 'c', 'd', 'f', 'g']
  },
  yAxis: {},
  series: [
    {
      name: 'test',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

// create nodeEcharts:
const ncharts = new NxNodeEcharts({
  width: 1000,
  heigth: 500,
  option: option
});

const b64 = ncharts.getDataURL();
const filename = './test/outputs/' + index + '.html';
fs.writeFileSync(filename, `<img src="${b64}" width="1000" height="500" />`);
ncharts.dispose();

// OR you can call original echarts/node-canvas api:
// ncharts.chart.balblax
// ncharts.canvas.balblay
```
## docs
- https://afeiship.github.io/next-node-echarts/

## resources
- https://github.com/lmk123/blog/issues/61
- https://echarts.baidu.com/option.html
- https://github.com/Automattic/node-canvas
