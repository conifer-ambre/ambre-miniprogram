import Dialog from '../miniprogram_npm/@vant/weapp/dialog/dialog';
wx.dialog = Dialog
// 
wx.limit = (code, length) => {
  let codeWord = ''
  if (code) {
    codeWord = code
  }
  if (codeWord.length > length) {
    codeWord = codeWord.substring(0, length) + '...'
  }
  return codeWord
}
// 
wx.toFixed = (num, place) => {
  num = Math.floor(num * Math.pow(10, place)) / Math.pow(10, place)
  return num.toFixed(place)
}
// 
wx.pay = (obj) => {
  return new Promise((resolve, reject) => {
    let that = this
    wx.requestPayment({
      timeStamp: obj.timeStamp,
      nonceStr: obj.nonceStr,
      package: obj.package,
      signType: obj.signType,
      paySign: obj.sign,
      success(res) {
        resolve()
      },
      fail(res) {
        reject()
      }
    })
  })
}
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;

}
wx.environment = (api = '') => {
  return 'https://www.coniferchina.com' + api
  // appid:wx78b30ce8db3ea20c
}