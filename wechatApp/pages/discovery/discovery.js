// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {header:true},
      {
        icon:"v2.png",name:"朋友圈",unread:1,community:{avatar:'21.png'}
      }, { header: true },
      {
        icon: "icon_de_saoyisao.png",name: "扫一扫"
      }, {
        icon: "icon_de_yao.png", name: "摇一摇"
      }, { header: true },
       {
        icon: "icon_de_shop.png", name: "购物"
      }, {
        icon: "icon_de_game.png", name: "游戏"
       }, { header: true },
       {
        icon: "icon_de_ping.png", name: "漂流瓶"
      }, {
        icon: "icon_de_nearby.png", name: "附近"
      }]
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