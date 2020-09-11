// components/drop-tab/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    defId: Number,
    name: String,
    info: {
      type: Array,
      observer: function (v) {
        this.setDefItem()
      }
    },
  },

  /**
   *  
   * Component initial data
   */
  data: {
    isShow: false,
    currItem: '',
  },

  pageLifetimes: {
    show: function () {
      // 页面被展示
      this.setDefItem()
    },
  },

  /**
   * Component methods
   */
  methods: {
    onBorderClose() {
      this.setData({
        isShow: false,
      })
    },

    onBorderOpen() {
      this.setData({
        isShow: true,
      })
      this.triggerEvent('handleopen', this.data.name)
    },

    onBorderChange(e) {
      if (this.data.isShow) {
        this.onBorderClose()
      } else {
        this.onBorderOpen()
      }
    },

    onChoose(e) {
      let currItem = e.currentTarget.dataset.item
      console.log('currItem', currItem)
      if (currItem.id !== this.data.currItem.id) {
        this.triggerEvent('change', {
          ...currItem,
          name: this.data.name
        })
        this.setData({
          currItem
        })
      }
    },

    setDefItem() {
      let index = 0
      if (this.data.defId !== null) {
        this.data.info.some((v, i) => {
          if (v.id == this.data.defId) {
            index = i
            return true
          }
        })
      }
      this.setData({
        currItem: this.data.info[index]
      })
    }
  }
})
