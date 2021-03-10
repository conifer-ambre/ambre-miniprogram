import './utils.js'
const base = wx.environment()
wx.axios = {
  post(api, data = {}, extra = {}) {
    const { method, loading } = extra
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中...'
      })
      wx.request({
        url: base + api,
        method: 'POST',
        header: {
          Authorization: wx.getStorageSync('tokenHead') + wx.getStorageSync('token')
        },
        data: data,
        success(response) {
          wx.stopPullDownRefresh()
          wx.hideLoading()
          if (response.statusCode === 200) {
            if (response.data.code === 200) {
              resolve(response.data)
            } else if (response.data.code === 401) {
              wx.navigateTo({
                url: '/pages/login/login'
              })
            } else {
              wx.showToast({
                title: response.data.message,
                icon: 'none'
              })
              reject()
            }
          } else {
            wx.showToast({
              title: response.data.message,
              icon: 'none'
            })
            reject()
          }
        },
        fail(error) {
          wx.stopPullDownRefresh()
          wx.hideLoading()
          wx.showToast({
            title: error.errMsg,
            icon: 'none'
          })
          reject()
        }
      })
    })
  }
}
