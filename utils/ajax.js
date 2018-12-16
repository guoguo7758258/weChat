// get请求封装
const get = (url, data) => {
  // 返回一个Promise对象实例，这样的话，在外面就可以通过then，catch的方式来调用
  // promise的参数本来就是一个函数，这个函数有两个参数
  // resolve（then的时候得到这里的值）
  // reject（catch的时候得到这里的值）
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url,
      data,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        wx.showToast({
          title: '加载成功',
        })
        // 如果成功
        resolve(res)
      },
      fail: (res) => {
        // 如果失败
        reject(res)
      },
      complete: (res) => {
        // 不管成功或失败，都把加载中的loading隐藏
        wx.hideLoading()
      },
    })
  })
}
// post请求封装
// const post = (url, data) => {
//   return new Promise((resolve, reject) => {
//     wx.showLoading({
//       title: '加载中',
//     })
//     wx.request({
//       url,
//       data,
//       header: {},
//       method: 'POST',
//       dataType: 'json',
//       responseType: 'text',
//       success: (res) => {
//         wx.showToast({
//           title: '加载成功',
//         })
//         resolve (res)
//       },
//       fail: (res) => {
//         reject(res)
//       },
//       complete: (res) => {
//         wx.hideLoading()
//       },
//     })
//   })
// }
export default {
  get
}