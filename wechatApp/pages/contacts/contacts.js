Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[
      {
        icon: "ic_new_friend.png",
        title:'新的朋友',
        unread:1
      },
      {
        icon: "ic_group_cheat.png",
        title: '群聊',
      },
      {
        icon: "ic_tag.png",
        title: '标签',
      },
      {
        icon: "ic_offical.png",
        title: '公众号',
      }
    ],
    friends:[
      {header:true,name:'C'},
      { avatar: '5.png', name: "曹操" },
      { avatar: '3.png', name: "曹丕" },
      { avatar:'4.png',name:"曹植"},
      { header: true, name: 'G' },
      { avatar: '11.png', name: "郭嘉" },
      { header: true, name: 'H' },
      { avatar: '10.png', name: "黄盖" },
      { header: true, name: 'L' },
      { avatar: '1.png', name: "刘备" },
      { avatar: '8.png', name: "老诸葛" },
      { header: true, name: 'S' },
      { avatar: '7.png', name: "司马懿" },      
      { avatar: '12.png', name: "孙权" },
      { avatar: '9.png', name: "神周瑜" },
      { header: true, name: 'X' },
      { avatar: '6.png', name: "荀攸" },
      { header: true, name: 'Z' },
      { avatar: '13.png', name: "诸葛亮" },
      { avatar: '2.png', name: "甄姬" }
    ]
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