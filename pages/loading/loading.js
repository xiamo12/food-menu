Page({
  data: {
    countdown: 3,
    loadingText: '正在为您准备美味食谱...'
  },

  onLoad() {
    this.startCountdown();
  },

  startCountdown() {
    const timer = setInterval(() => {
      this.setData({
        countdown: this.data.countdown - 1
      });

      if (this.data.countdown <= 0) {
        clearInterval(timer);
        this.navigateToHome();
      }
    }, 1000);
  },

  navigateToHome() {
    // 检查是否是首次启动
    const app = getApp();
    if (app.globalData.isFirstLaunch) {
      // 首次启动显示欢迎信息
      wx.showModal({
        title: '欢迎使用',
        content: '宝宝辅食菜单助手为您提供专业的辅食建议！',
        showCancel: false,
        success: () => {
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      });
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

  // 用户点击跳过按钮
  onSkip() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
}); 