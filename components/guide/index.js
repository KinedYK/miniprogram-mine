// components/guide/index.js

Component({
  /**
   * Component properties
   */
  properties: {
    /**
    * guideEles{ id: String, tip: String }
    */
    guideEles: Object 
  },

  /**
   * Component initial data
   */
  data: {
    guideElesIndex: 0, // 当前第几个元素
    showGuide: false,
    pointEle: {}
  },

  pageLifetimes:{
    show(){
      this.getEleInfo(this.data.guideEles[0].id)
    }
  },

  /**
   * Component methods
   */
  methods: {
    // 获取指定元素的高度信息
    getEleInfo(id) {
      // if (wx.getStorageSync('social_guide_shown') == true) 
      //   return
      const query = wx.createSelectorQuery()
      query.select(id).boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec((res) => {
        console.log(res)
        let scrollTop = this.autoScroll(res)
        let pointEle = {
          width: res[0].width,
          height: res[0].height,
          top: res[0].top - scrollTop,
          left: res[0].left
        }
        console.log(pointEle)
        this.setData({
          pointEle,
          showGuide: true,
        })
      })
    },

    // 元素不在可视范围则滚动
    autoScroll(ele) {
      var SystemInfo = wx.getSystemInfoSync()
      console.log(SystemInfo)
      let scrollTop = 0
      if(ele[0].height + ele[0].top > SystemInfo.windowHeight) {
        scrollTop = 180
        wx.pageScrollTo({
          scrollTop: scrollTop,
          duration: 500
        })
      }
      return scrollTop
    },

    /// 点击下一步
    onGuideTap() {
      let i = ++this.data.guideElesIndex
      this.setData({
        guideElesIndex: i
      })
      if (i === this.data.guideEles.length) {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 200
        })
        this.setData({
          showGuide: false
        })
        wx.setStorageSync('social_guide_shown', true)
        return
      }
      this.getEleInfo(this.data.guideEles[i].id)
    },
  }
})
