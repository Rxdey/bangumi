module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions'
    }),

    require("postcss-import")({
      path: ["src/"]
    }),

    // require('postcss-px2rem')({
    //   remUni: 75
    // })
    require('postcss-px-to-viewport')({
      viewportWidth: 750, 
      // viewportHeight: 1334,
      unitPrecision: 3,// 指定`px`转换为视窗单位值的小数位数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位
      selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 mediaQuery: false // 允许在媒体查询中转换`px`。
    })
  ]
};