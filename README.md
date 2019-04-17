# next-node-echarts
> Echarts for node

## install:
```bash
npm install -S afeiship/next-node-echarts --registry=https://registry.npm.taobao.org
```

## apis:
| api        | params | description        |
| ---------- | ------ | ------------------ |
| getDataURL | -      | get base64 string. |
| dispose    | -      | dispose resource   |

## usage:
```js
import NxNodeEcharts from 'next-node-echarts';

// create nodeEcharts:
const echarts = new NxNodeEcharts({
  width: 1000,
  heigth: 500,
  option: item
});

const b64 = echarts.getDataURL();
const filename = './test/outputs/' + index + '.html';
fs.writeFileSync(filename, `<img src="${b64}" width="1000" height="500" />`);
echarts.dispose();
```

## resources:
- https://github.com/lmk123/blog/issues/61
- https://echarts.baidu.com/option.html
- https://github.com/Automattic/node-canvas
