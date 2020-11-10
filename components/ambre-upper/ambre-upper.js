const app = getApp()
Component({
  properties: {
    title: {
      type: String,
      value: 'CONIFER',
    },
    showBack: {
      type: Boolean
    },
    showSearch: {
      type: Boolean
    },
    transparent: {
      type: Boolean
    },
    bgColor: {
      type: String,
      value: 'fff'
    },
    fontColor: {
      type: String,
      value: '222222'
    }
  },
  data: {
    statusBarHeight: null,
    titleBarHeight: null
  },
  attached() {
    this.getSystemInfo()
  },
  methods: {
    back() {
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      if (prevPage) {
        wx.navigateBack({})
      } else {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    },
    toIndex() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    getSystemInfo() {
      let that = this
      wx.getSystemInfo({
        success(res) {
          that.setData({
            statusBarHeight: res.statusBarHeight,
            titleBarHeight: res.screenWidth * 88 / 750
          })
        }
      })
    },
    to(e) {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  }
})