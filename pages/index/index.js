const { recipes } = require('../../utils/data.js');

Page({
  data: {
    todayMenu: {
      breakfast: null,
      lunch: null,
      dinner: null
    },
    currentDate: ''
  },

  onLoad() {
    this.setCurrentDate();
    this.loadTodayMenu();
  },

  onShow() {
    // 只在显示页面时检查日期，不重新生成菜单
    this.checkAndUpdateMenu();
  },

  setCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    this.setData({
      currentDate: `${year}-${month}-${day}`
    });
  },

  checkAndUpdateMenu() {
    const today = new Date().toDateString();
    const savedDate = wx.getStorageSync('menuDate');
    
    // 如果是新的一天，重新生成菜单
    if (savedDate !== today) {
      this.generateTodayMenu();
      wx.setStorageSync('menuDate', today);
    }
  },

  loadTodayMenu() {
    const savedMenu = wx.getStorageSync('todayMenu');
    const today = new Date().toDateString();
    const savedDate = wx.getStorageSync('menuDate');
    
    // 如果保存的菜单是今天的，则使用保存的菜单
    if (savedMenu && savedDate === today) {
      this.setData({ todayMenu: savedMenu });
    } else {
      // 否则生成新菜单
      this.generateTodayMenu();
      wx.setStorageSync('menuDate', today);
    }
  },

  generateTodayMenu() {
    const app = getApp();
    const allergies = app.globalData.allergies;
    
    // 过滤掉包含忌口食材的食谱
    const availableRecipes = recipes.filter(recipe => {
      return !allergies.some(allergy => 
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(allergy.toLowerCase())
        )
      );
    });

    // 按类型分组
    const breakfastRecipes = availableRecipes.filter(r => r.type === 'breakfast');
    const lunchRecipes = availableRecipes.filter(r => r.type === 'lunch');
    const dinnerRecipes = availableRecipes.filter(r => r.type === 'dinner');

    // 检查是否有足够的食谱
    if (breakfastRecipes.length === 0 || lunchRecipes.length === 0 || dinnerRecipes.length === 0) {
      wx.showModal({
        title: '提示',
        content: '当前忌口设置过多，无法生成完整菜单，建议调整忌口设置',
        showCancel: false
      });
    }

    // 随机选择食谱
    const todayMenu = {
      breakfast: breakfastRecipes[Math.floor(Math.random() * breakfastRecipes.length)] || breakfastRecipes[0],
      lunch: lunchRecipes[Math.floor(Math.random() * lunchRecipes.length)] || lunchRecipes[0],
      dinner: dinnerRecipes[Math.floor(Math.random() * dinnerRecipes.length)] || dinnerRecipes[0]
    };

    this.setData({ todayMenu });
    
    // 保存到本地存储
    wx.setStorageSync('todayMenu', todayMenu);
  },

  onRecipeTap(e) {
    const { type } = e.currentTarget.dataset;
    const recipe = this.data.todayMenu[type];
    
    if (recipe) {
      wx.navigateTo({
        url: `/pages/detail/detail?id=${recipe.id}`
      });
    }
  },

  onRegenerateMenu() {
    wx.showLoading({
      title: '生成中...'
    });
    
    setTimeout(() => {
      this.generateTodayMenu();
      wx.hideLoading();
      wx.showToast({
        title: '菜单已更新',
        icon: 'success'
      });
    }, 1000);
  }
}); 