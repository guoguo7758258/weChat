// pages/mall/mall.js
import ajax from '../../../utils/ajax.js'
Page({
  seeother() {
    wx.switchTab({
      url: '../../list/list',
      success: function(res) {
        wx.showLoading({
          title: '加载中...'
        })
      },
      fail: function(res) {
        wx.showLoading({
          title: '加载失败'
        })
        console.log(res)
      },
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },
  hidePhoneSpices() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  addTitle(event) {
    console.log(event.currentTarget)
    this.setData({
      title: event.currentTarget.dataset.text,
      isShow: !this.data.isShow
    })
    this.getList(event.currentTarget.dataset.productid)
  },
  //获取商品信息
  getList(id){
    if(id!=''){
      if(id< 600){
        ajax.get(`https://m.nubia.com/show/page/searchAcc?productId=0&cateId=${id}`)
            .then(res => {
              console.log(res.data.data.result)
              wx.setNavigationBarTitle({
                title: '周边'
              })
              this.setData({
                accList: res.data.data.result,
              })
            })
            .catch(err => {
              console.log(err)
            })
      } else {
        ajax.get(`https://m.nubia.com/show/page/searchAcc?productId=${id}`)
          .then(res => {
            console.log(res.data.data.result)
            wx.setNavigationBarTitle({
              title: '周边'
            })
            this.setData({
              accList: res.data.data.result
            })
          })
            .catch(err => {
              console.log(err)
            })
      }
    } else {
      console.log(id)
      ajax.get('https://m.nubia.com/show/page/searchAcc')
        .then(res => {
          // console.log(res.data.data.result)
          wx.setNavigationBarTitle({
            title: '努比亚手机'
          })
          this.setData({
            accList: res.data.data.result
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  // 加载列表
  getDataAllPhone(id) {
    ajax.get('https://m.nubia.com/show/page/phoneType')
      .then(res => {
        wx.setNavigationBarTitle({
          title: '努比亚手机'
        })
        this.setData({
          allPhone: res.data.data.result
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    // phoneList: [],
    allPhone: [],
    isShow: true,
    accList: [],
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.name
    })
    console.log(options.id)
    this.getList(options.id)
    this.getDataAllPhone()
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