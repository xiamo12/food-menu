App({
  globalData: {
    userInfo: {
      name: '宝宝妈妈',
      avatar: '/images/default-avatar.png',
      babyAge: '1岁',
      createTime: '2024-01-01',
      favorites: []
    },
    allergies: ['花生', '鸡蛋', '牛奶'],
    recipes: []
  },

  onLaunch() {
    // 从本地存储加载数据
    const userInfo = wx.getStorageSync('userInfo');
    const allergies = wx.getStorageSync('allergies');
    const favorites = wx.getStorageSync('favorites');
    
    if (userInfo) {
      this.globalData.userInfo = { ...this.globalData.userInfo, ...userInfo };
    }
    if (allergies) {
      this.globalData.allergies = allergies;
    }
    if (favorites) {
      this.globalData.userInfo.favorites = favorites;
    }
  }
}); 