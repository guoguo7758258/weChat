// pages/mine/mine.js
Page({
  goAddress() {
    wx.navigateTo({
      url: '../address/address_list/address_list',
      success: function(res) {
        wx.showLoading({
          title: '加载中'
        })
      },
      fail: function(res) {
        wx.showLoading({
          title: '加载失败'
        })
      },
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: (res) => {
        var data = JSON.parse(res.rawData)
        this.setData({
          nickName: data.nickName,
          avatarUrl: data.avatarUrl
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})