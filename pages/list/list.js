// pages/list/list.js
import ajax from '../../utils/ajax.js'
Page({
  getDataPhone() {
    ajax.get('http://m.nubia.com/show/page/catePhone')
      .then(res => {
        // console.log(res.data.data.result)
        var newRedPhone=[]
        var newCatePhone=[]
        for (let i = 0; i < res.data.data.result.length;i++) {
          if (res.data.data.result[i].product_id === 793 || res.data.data.result[i].product_id === 717){
            newRedPhone.push(res.data.data.result[i])
          }else{
            newCatePhone.push(res.data.data.result[i])
          }
        }
        console.log(newCatePhone)
        // console.log(newRedPhone,newCatePhone)
        this.setData({
          redPhone: newRedPhone,
          catePhone: newCatePhone
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getDataAcc(){
    ajax.get('http://m.nubia.com/show/page/cateAcc')
      .then(res => {
        console.log(res.data.data)
        this.setData({
          cateAcc: res.data.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getDataZb() {
    ajax.get('http://m.nubia.com/show/page/cateZb')
      .then(res => {
        // console.log(res.data.data)
        this.setData({
          cateZb: res.data.data.result
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
    catePhone: [],
    cateAcc: [],
    cateZb: [],
    redPhone: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataPhone()
    this.getDataAcc()
    this.getDataZb()
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