App({
  globalData: {
    userInfo: {
      name: '宝宝',
      avatar: '/images/default-avatar.png',
      babyAge: '1岁',
      createTime: '2024-01-01',
      favorites: []
    },
    allergies: ['花生', '鸡蛋', '牛奶'],
    recipes: [],
    isFirstLaunch: true
  },

  onLaunch() {
    // 从本地存储加载数据
    const userInfo = wx.getStorageSync('userInfo');
    const allergies = wx.getStorageSync('allergies');
    const favorites = wx.getStorageSync('favorites');
    const isFirstLaunch = wx.getStorageSync('isFirstLaunch');
    
    if (userInfo) {
      this.globalData.userInfo = { ...this.globalData.userInfo, ...userInfo };
    }
    if (allergies) {
      this.globalData.allergies = allergies;
    }
    if (favorites) {
      this.globalData.userInfo.favorites = favorites;
    }
    if (isFirstLaunch !== null) {
      this.globalData.isFirstLaunch = isFirstLaunch;
    }
  },

  onShow() {
    // 标记不是首次启动
    if (this.globalData.isFirstLaunch) {
      this.globalData.isFirstLaunch = false;
      wx.setStorageSync('isFirstLaunch', false);
    }
  }
}); 