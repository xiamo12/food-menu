const { recipes } = require('../../utils/data.js');

Page({
  data: {
    recipe: null,
    isFavorite: false
  },

  onLoad(options) {
    const { id } = options;
    const recipe = recipes.find(r => r.id == id);
    
    if (recipe) {
      this.setData({ recipe });
      this.checkFavoriteStatus();
    } else {
      wx.showToast({
        title: '食谱不存在',
        icon: 'error'
      });
      wx.navigateBack();
    }
  },

  checkFavoriteStatus() {
    const app = getApp();
    const favorites = app.globalData.userInfo.favorites;
    const isFavorite = favorites.some(f => f.id === this.data.recipe.id);
    this.setData({ isFavorite });
  },

  onToggleFavorite() {
    const app = getApp();
    const recipe = this.data.recipe;
    const favorites = app.globalData.userInfo.favorites;
    
    if (this.data.isFavorite) {
      // 移除收藏
      const newFavorites = favorites.filter(f => f.id !== recipe.id);
      app.globalData.userInfo.favorites = newFavorites;
      this.setData({ isFavorite: false });
      wx.showToast({
        title: '已取消收藏',
        icon: 'success'
      });
    } else {
      // 添加收藏
      favorites.push(recipe);
      this.setData({ isFavorite: true });
      wx.showToast({
        title: '已添加到收藏',
        icon: 'success'
      });
    }
    
    // 保存到本地存储
    wx.setStorageSync('favorites', app.globalData.userInfo.favorites);
  },

  onShare() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  onShareAppMessage() {
    const recipe = this.data.recipe;
    return {
      title: `${recipe.name} - 宝宝辅食食谱`,
      path: `/pages/detail/detail?id=${recipe.id}`,
      imageUrl: recipe.image
    };
  }
}); 