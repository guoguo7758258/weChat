// pages/address/address_list/address_list.js
Page({
  //编辑收货地址
  handelBianjiAddress() {
    wx.navigateTo({
      url: '../xiugai/xiugai',
      success: function(res) {
        wx.showLoading({
          title: '加载中',
        })
      },
      fail: function(res) {
        wx.showLoading({
          title: '加载失败',
        })
      },
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },
  //删除收货地址
  handelDelet() {

  },
  handelNewAddress() {
    wx.navigateTo({
      url: '../new_address/new_address',
      success: function(res) {
        wx.showLoading({
          title: '加载成功'
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
  //新增收货地址
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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