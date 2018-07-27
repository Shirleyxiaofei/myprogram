import i18n from '@/lang'
import router from '@/router'

let list = [
  {
    id: "sym",
    name: "系统管理",
    subList: [
      {
        title: "系统用户维护",
        path: '/systemManage/parameterUSerMain',
        id: 'pam'
      },
      {
        title: "系统参数维护",
        path: '/systemManage/parameterMain',
        id: 'ptm'
      },
      {
        title: "菜单维护",
        path: '/systemManage/maintencemenu',
        id: 'mtm'
      },
      {
        title: "属性规格配置",
        path: '/systemManage/attrspecconfig',
        id: 'asc'
      },
    ]
  },
]

export default list