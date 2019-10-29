var formatter = {};

formatter.install = function (Vue, options) {
  Vue.myGlobalMethod = {}
  Vue.directive('fa', {
    bind: (el, binding, vnode, oldVnode) => {
      console.log('****format****')
    },
    update: (el, binding, vnode, oldVnode) => {},
    unbind: () => {}
  })
  Vue.directive('hid', {
    bind: (el, binding, vnode, oldVnode) => {},
    update: (el, binding, vnode, oldVnode) => {},
    unbind: (vnode) => {}
  })
};

export default formatter
