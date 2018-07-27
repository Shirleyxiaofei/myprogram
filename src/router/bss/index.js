import Layout from '@/views/layout/Layout'
import proman from '@/views/prodctmanagement/prodctmanagement' //认证页


let Router = {
  path: '/prodctmanagement',
  name: 'proman',
  component: Layout,
  redirect: '/productmanagement/productmanagement',//'/monitor/overview',
  children: [
    {
      path: 'prodctmanagement',
      name: 'proman',
      component: proman,
    },
  ]
};
export default Router;