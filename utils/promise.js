import { promisifyAll } from 'miniprogram-api-promise';

// 创建 wxp 变量 以及 wx.pro 即微信自定义属性
// 将 wxp 和 wx.pro 指向一个空对象
// 因为对象是引用类型的数据，所以 wxp 和 wx.pro 指向同一个内存空间
const wxp = (wx.pro = {});

// 将 wx 的方法挂载到 wxp 这个对象中
promisifyAll(wx, wxp);

// 使用： wx.pro.getSystemInfo().then(console.log('回调'));
