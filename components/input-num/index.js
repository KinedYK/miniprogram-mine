// components/input-num/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 999
    },
    count: {
      type: Number,
      value: 1
    },
    disabled: Boolean
  },

  observers: {
    count() {
      this.setData({
        inputValue: this.data.count
      })
    }
  },

  /**
   * Component initial data
   */
  data: {
    inputValue: 1
  },

  pageLifetimes: {
    show() {},
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('this.data.count', this.data.count)
      this.setData({
        inputValue: this.data.count
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * Component methods
   */
  methods: {
    bindKeyInput(e) {
      this.setData({
        inputValue: this.filterNumber(e.detail.value)
      })
      this.triggerEvent('changeValue', this.data.inputValue)
    },

    add() {
      if (this.data.inputValue < this.data.max) {
        this.setData({
          inputValue: ++this.data.inputValue
        })
        this.triggerEvent('changeValue', this.data.inputValue)
      }

    },

    reduce() {
      if (this.data.inputValue > this.data.min) {
        this.setData({
          inputValue: --this.data.inputValue
        })
        this.triggerEvent('changeValue', this.data.inputValue)
      }

    },

    filterNumber(val) {
      if (val > this.data.max) {
        return this.data.max
      } else if (val < this.data.min) {
        return this.data.min
      } else {
        return val
      }
    }
  }
})
