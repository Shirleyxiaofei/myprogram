import Layout from '@/views/layout/Layout'
import homePage from '@/views/homePage/homePage' //认证页


let Router = {
  path: '/homePage',
  name: 'homePage',
  component: Layout,
  redirect: '/homePage/homePage',//'/monitor/overview',
  children: [
    {
      path: 'homePage',
      name: 'homePage',
      component: homePage,
    },
  ]
};
export default Router;