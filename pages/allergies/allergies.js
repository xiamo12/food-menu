const { commonAllergies } = require('../../utils/data.js');

Page({
  data: {
    commonAllergies: commonAllergies,
    userAllergies: [],
    showAddModal: false,
    newAllergy: ''
  },

  onLoad() {
    this.loadUserAllergies();
  },

  loadUserAllergies() {
    const app = getApp();
    this.setData({
      userAllergies: [...app.globalData.allergies]
    });
  },

  onAddAllergy() {
    this.setData({
      showAddModal: true
    });
  },

  onInputChange(e) {
    this.setData({
      newAllergy: e.detail.value
    });
  },

  onConfirmAdd() {
    const { newAllergy, userAllergies } = this.data;
    
    if (!newAllergy.trim()) {
      wx.showToast({
        title: '请输入食材名称',
        icon: 'none'
      });
      return;
    }

    if (userAllergies.includes(newAllergy)) {
      wx.showToast({
        title: '该食材已在忌口列表中',
        icon: 'none'
      });
      return;
    }

    const newAllergies = [...userAllergies, newAllergy];
    this.setData({
      userAllergies: newAllergies,
      newAllergy: '',
      showAddModal: false
    });

    this.saveAllergies(newAllergies);
  },

  onCancelAdd() {
    this.setData({
      showAddModal: false,
      newAllergy: ''
    });
  },

  onCommonAllergyTap(e) {
    const { name } = e.currentTarget.dataset;
    const { userAllergies } = this.data;
    
    if (userAllergies.includes(name)) {
      wx.showToast({
        title: '该食材已在忌口列表中',
        icon: 'none'
      });
      return;
    }

    const newAllergies = [...userAllergies, name];
    this.setData({
      userAllergies: newAllergies
    });

    this.saveAllergies(newAllergies);
    
    wx.showToast({
      title: '已添加到忌口',
      icon: 'success'
    });
  },

  onUserAllergyTap(e) {
    const { name } = e.currentTarget.dataset;
    const { userAllergies } = this.data;
    
    wx.showModal({
      title: '移除忌口',
      content: `确定要移除"${name}"吗？`,
      success: (res) => {
        if (res.confirm) {
          const newAllergies = userAllergies.filter(item => item !== name);
          this.setData({
            userAllergies: newAllergies
          });
          
          this.saveAllergies(newAllergies);
          
          wx.showToast({
            title: '已移除忌口',
            icon: 'success'
          });
        }
      }
    });
  },

  onClearAll() {
    wx.showModal({
      title: '清空忌口',
      content: '确定要清空所有忌口设置吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            userAllergies: []
          });
          
          this.saveAllergies([]);
          
          wx.showToast({
            title: '已清空忌口',
            icon: 'success'
          });
        }
      }
    });
  },

  saveAllergies(allergies) {
    const app = getApp();
    app.globalData.allergies = allergies;
    wx.setStorageSync('allergies', allergies);
  },

  onSaveSettings() {
    wx.showToast({
      title: '设置已保存',
      icon: 'success'
    });
    
    setTimeout(() => {
      wx.navigateBack();
    }, 1500);
  }
}); 