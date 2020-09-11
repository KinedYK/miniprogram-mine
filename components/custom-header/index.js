// components/custom-header/index.js

/**
 * 在引用的页面.json中配置 "navigationStyle": "custom"
 */
Component({
  /**
   * Component properties
   */
  properties: {
    header: {
      type: Object,
      value: {
        headerbg: "#fff",
        fontColor: "#000",
        fontSize: '16',
        hiddenBlock: false,
        headerbg: 'transparent'
      }
    },
    fixedBg: String
  },

  /**
   * Component initial data
   */
  data: {
    statusHeight: 20,
    navHeight: 44,
  },

  /**
   * Component methods
   */
  methods: {

  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      wx.getSystemInfo({
        success: res => {
          console.log(res)
          let isIos = res.system.indexOf('iOS') > -1
          this.setData({
            statusHeight: res.statusBarHeight,
            navHeight: isIos ? 44 : 48
          })
        }
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
