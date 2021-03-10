const app = getApp()
Component({
  properties: {
    title: {
      type: String,
      value: 'HEADER'
    },
    back: {
      type: Boolean
    },
    transparent: {
      type: Boolean
    },
    background: {
      type: String,
      value: '#ffffff'
    },
    color: {
      type: String,
      value: '#222222'
    }
  },
  data: {
    status: null,
    bar: null
  },
  attached() {
    this.handleSystem()
  },
  methods: {
    handleBack() {
      let pages = getCurrentPages()
      let prev = pages[pages.length - 2]
      if (prev) {
        wx.navigateBack({})
      } else {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    },
    handleIndex() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    handleSystem() {
      let that = this
      wx.getSystemInfo({
        success(res) {
          that.setData({
            bar: (res.screenWidth * 88) / 750,
            status: res.statusBarHeight,
            height: res.statusBarHeight + (res.screenWidth * 88) / 750
          })
        }
      })
    }
  }
})
