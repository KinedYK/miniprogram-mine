// pages/list/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    key: 0,
    list: [],
    pageNum: 1,
    pageSize: 10,
  },

  // 集中调用初始化页面相关接口
  initPageApi() {

  },

  getList(e) {
    console.log(e)
    app.http('/test/list', 'GET', {
      pageNum: this.data.pageNum,
      pageSise: this.data.pageSize
    }).then(res => {
      console.log(res)
      this.setData({
        list: [...this.data.list, ...res.list],
      })
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.initPageApi()
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
    this.setData({
      key: 0
    })
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    this.setData({
      key: ++this.data.key
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})