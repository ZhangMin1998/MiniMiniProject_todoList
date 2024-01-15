// 获取全局 app 实例
const app = getApp();

Page({
  // 声明页面数据
  data: {
    // todos: [
    //   { text: '你好呀 熊老师', completed: true },
    //   { text: '我是中班班长', completed: true },
    //   { text: '一起学习 支付宝小程序', completed: false },
    // ]
  },
  // 监听生命周期回调 onLoad
  onLoad() {
    console.log('renderer', this.renderer) // 判断当前页面或自定义组件的实际渲染引擎
    // 获取用户信息并存储数据
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // 获取用户信息失败
      }
    );
  },
  // 监听生命周期回调 onShow
  onShow() {
    // 设置全局数据到当前页面数据
    this.setData({ todos: app.todos });
  },
  // 事件处理函数
  onTodoChanged(e) {
    // 修改全局数据
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos })
    // this.setData({ todos: this.data.todos.map(todo => ({
    //   ...todo,
    //   completed: checkedTodos.indexOf(todo.text) > -1,
    // })) });
  },

  addTodo() {
    // 进行页面跳转
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
