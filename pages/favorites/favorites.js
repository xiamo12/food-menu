Page({
  data: {
    favorites: []
  },

  onLoad() {
    this.loadFavorites();
  },

  onShow() {
    this.loadFavorites();
  },

  loadFavorites() {
    const app = getApp();
    this.setData({
      favorites: app.globalData.userInfo.favorites
    });
  },

  onRecipeTap(e) {
    const recipe = e.currentTarget.dataset.recipe;
    if (recipe && recipe.id) {
      wx.navigateTo({
        url: `/pages/detail/detail?id=${recipe.id}`
      });
    }
  },

  onRemoveFavorite(e) {
    const recipe = e.currentTarget.dataset.recipe;
    
    wx.showModal({
      title: '取消收藏',
      content: `确定要取消收藏"${recipe.name}"吗？`,
      success: (res) => {
        if (res.confirm) {
          const app = getApp();
          const favorites = app.globalData.userInfo.favorites;
          const newFavorites = favorites.filter(f => f.id !== recipe.id);
          
          app.globalData.userInfo.favorites = newFavorites;
          this.setData({ favorites: newFavorites });
          
          // 保存到本地存储
          wx.setStorageSync('favorites', newFavorites);
          
          wx.showToast({
            title: '已取消收藏',
            icon: 'success'
          });
        }
      }
    });
  }
}); 