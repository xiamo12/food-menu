Page({
  data: {
    userInfo: {},
    allergies: []
  },

  onLoad() {
    this.loadUserData();
  },

  onShow() {
    this.loadUserData();
  },

  loadUserData() {
    const app = getApp();
    this.setData({
      userInfo: app.globalData.userInfo,
      allergies: app.globalData.allergies
    });
  },

  onEditProfile() {
    wx.showModal({
      title: '编辑资料',
      content: '功能开发中...',
      showCancel: false
    });
  },

  onManageAllergies() {
    wx.navigateTo({
      url: '/pages/allergies/allergies'
    });
  },

  onViewFavorites() {
    wx.showModal({
      title: '我的收藏',
      content: `共收藏了 ${this.data.userInfo.favorites.length} 个食谱`,
      showCancel: false
    });
  },

  onSyncData() {
    wx.showLoading({
      title: '同步中...'
    });
    
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '同步成功',
        icon: 'success'
      });
    }, 1500);
  }
}); 