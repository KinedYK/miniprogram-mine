// pages/example/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    list: [{title: '标签一'},{title: '标签二'},{title: '标签三'},{title: '标签四'},{title: '标签五'},{title: '标签六'},{title: '标签七'}],
    labels : [{
      title: '综合排序',
      id: 0
    },
    {
      title: '服务次数',
      id: 1
    },
    {
      title: '评分排序',
      id: 2
    },
  ]
  },

  onChange(e) {
    console.log(e)
  },

  onClickTabs(e) {
    console.log(e)
  },

  changeValue(e){
    console.log(e)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})