import Layout from '@/views/layout/Layout'
import parameter from '@/views/systemManage/parameterMain' //系统参数维护
import parameUsreter from '@/views/systemManage/parameterUSerMain' //系统用户维护
import maintencemenu from '@/views/systemManage/maintencemenu' //菜单维护
import attrspecconfig from '@/views/systemManage/attrspecconfig' //属性规格配置
import systempostcon from '@/views/systemManage/systempostcon' //系统岗位配置
import systemdataconfig from '@/views/systemManage/systemdataconfig' //系统主数据编码配置
import systemvalueconfig from '@/views/systemManage/systemvalueconfig' //系统主数据编码配置

let Router = {
  path: '/systemManage',
  name: 'parameUsreter',
  component: Layout,
  redirect: '/systemManage/parameterUSerMain',//'/monitor/overview',
  children: [
    {
      path: 'parameterUSerMain',
      name: 'parameUsreter',
      component: parameUsreter,
    },
    {
      path: 'parameterMain',
      name: 'parameter',
      component: parameter,
    },
    {
      path: 'maintencemenu',
      name: 'maintencemenu',
      component: maintencemenu,
    },
    {
      path: 'attrspecconfig',
      name: 'attrspecconfig',
      component: attrspecconfig,
    },
    {
      path: 'systempostcon',
      name: 'systempostcon',
      component: systempostcon,
    },
    {
      path: 'systemdataconfig',
      name: 'systemdataconfig',
      component: systemdataconfig,
    },
    {
      path: 'systemvalueconfig',
      name: 'systemvalueconfig',
      component: systemvalueconfig,
    },
  ]
};
export default Router;
