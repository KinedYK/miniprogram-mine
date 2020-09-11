// components/common/tabs/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    list: Array
  },

  /**
   * Component initial data
   */
  data: {
    width: 150,
    activeTab: 0,
    navScrollLeft: 0,
  },

  /**
   * Component methods
   */
  methods: {
    onTabClick(e) {
      const index = e.currentTarget.dataset.index
      console.log(e)
      if (index !== this.data.activeTab) {
        this.triggerEvent('change', this.data.list[index])
        this.setNavScroll(e)
      }
      this.setData({
        activeTab: index
      })
    },

    setNavScroll(e) {
      const curIndex = e.currentTarget.dataset.index
      let navScrollLeft = (curIndex - 2) * this.data.width
      this.setData({
        navScrollLeft
      })
    }
  }
})
