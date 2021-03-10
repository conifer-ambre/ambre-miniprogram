import Dialog from './miniprogram_npm/@vant/weapp/dialog/dialog';

wx.dialog = Dialog

wx.pay = (obj) => {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      timeStamp: obj.timeStamp,
      nonceStr: obj.nonceStr,
      package: obj.package,
      signType: obj.signType,
      paySign: obj.sign,
      success() {
        resolve()
      },
      fail() {
        reject()
      }
    })
  })
}

wx.environment = (api = '') => {
  return 'https://www.coniferchina.com' + api
  // appid:wx78b30ce8db3ea20c
}