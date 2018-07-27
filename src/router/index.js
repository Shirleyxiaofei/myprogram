import Vue from 'vue'
import Router from 'vue-router'
import bss from './bss'
import sym from './sym'
import hpg from './hpg'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'homePage',
    name: 'homePage',
    meta: {
      title: 'homePage'
      // icon: 'el-icon-caret-right'
    },
    children: [{
      path: 'homePage',
      component: _import('homePage/homePage'),
      name: 'homePage',
      meta: { title: 'homePage' }
    },
    ]
  },

]
// 添加路由

constantRouterMap.push(bss);
// 系统管理的路由
constantRouterMap.push(sym);

constantRouterMap.push(hpg);
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    hidden: true,
    children: [
      { path: '401', component: _import('errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }, hidden: true },
      { path: '404', component: _import('errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }, hidden: true }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
