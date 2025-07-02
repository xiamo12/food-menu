Page({
  data: {
    userInfo: {},
    allergies: [],
    showEditModal: false,
    editForm: {
      name: '',
      babyAge: ''
    }
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
    // 获取微信用户信息
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const { userInfo: wxUserInfo } = res;
        
        // 设置编辑表单的初始值
        this.setData({
          showEditModal: true,
          editForm: {
            name: this.data.userInfo.name,
            babyAge: this.data.userInfo.babyAge
          }
        });
        
        // 更新头像为微信头像
        const app = getApp();
        app.globalData.userInfo.avatar = wxUserInfo.avatarUrl;
        this.setData({
          'userInfo.avatar': wxUserInfo.avatarUrl
        });
        
        // 保存到本地存储
        wx.setStorageSync('userInfo', app.globalData.userInfo);
      },
      fail: () => {
        // 如果用户拒绝，仍然可以编辑其他信息
        this.setData({
          showEditModal: true,
          editForm: {
            name: this.data.userInfo.name,
            babyAge: this.data.userInfo.babyAge
          }
        });
      }
    });
  },

  onInputChange(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`editForm.${field}`]: e.detail.value
    });
  },

  onSaveProfile() {
    const { editForm } = this.data;
    
    if (!editForm.name.trim()) {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none'
      });
      return;
    }

    // 更新用户信息
    const app = getApp();
    app.globalData.userInfo.name = editForm.name;
    app.globalData.userInfo.babyAge = editForm.babyAge;
    
    this.setData({
      userInfo: app.globalData.userInfo,
      showEditModal: false
    });
    
    // 保存到本地存储
    wx.setStorageSync('userInfo', app.globalData.userInfo);
    
    wx.showToast({
      title: '保存成功',
      icon: 'success'
    });
  },

  onCancelEdit() {
    this.setData({
      showEditModal: false
    });
  },

  onManageAllergies() {
    wx.navigateTo({
      url: '/pages/allergies/allergies'
    });
  },

  onViewFavorites() {
    wx.navigateTo({
      url: '/pages/favorites/favorites'
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
  },

  // 新增：点击收藏的食谱进入详情页
  onFavoriteTap(e) {
    const recipe = e.currentTarget.dataset.recipe;
    if (recipe && recipe.id) {
      wx.navigateTo({
        url: `/pages/detail/detail?id=${recipe.id}`
      });
    }
  }
}); 