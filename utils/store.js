const Store = require('wxministore');

const store = new Store({
  // 局部模式 为true时 另需设置范围
  openPart: false,

  // 防改写模式  https://github.com/xiaoyao96/wxMiniStore#non-writable-%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-121
  // nonWritable: true,

  // 状态
  state: {
    msg: '这是一个全局状态',
    user: {
      name: '李四',
    },
  },

  /**
   * 全局方法
   * 在 wxml 中，直接使用方法名调用: bindtap="goAnyWhere" data-url="/index/index"
   * 在 js 中，直接使用 this.方法名 来调用: this.sayHello();
   * 在非页面的 js 中，我们不建议使用 Store 中的全局方法。但你可使用 getCurrentPage().pop().sayHello() 来调用。
   * 1. 尽量封装复用率高的全局方法
   * 2. 非交互型事件（即非 bindxx）的公用方法，建议不写入 Store 中。写入 App 中更好。
   */
  methods: {
    goAnyWhere(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      });
    },
  },

  // 页面监听 支持周期事件 ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
  pageListener: {
    // 所有页面的 onLoad，将会优先执行此监听
    onLoad(options) {
      console.log('onload: 我在' + this.route, '参数为', options);
    },
    // 当Page中有onShareAppMessage且有返回值，则会优先使用Page中的分享。
    onShareAppMessage(res) {
      return {
        title: '全局分享',
        path: '/pages/index/index',
      };
    },
  },
});

module.exports = store;
