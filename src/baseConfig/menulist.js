import i18n from '@/lang'
import router from '@/router'

let menulist = [
  {
    label: "菜单",
    id: 1,
    children: [
      {
        label: "首页",
        id: 2,
      },
      {
        label: "产品/销售品管理",
        id: 3,
        children: [
          {
            label: "目录管理",
            id: 5,
          },
          {
            label: "产品配置",
            id: 6,
          },
          {
            label: "产品属性配置",
            id: 7,
          },
          {
            label: "产品属性值配置",
            id: 8,
          },
          {
            label: "服务项审批申请",
            id: 9,
          },
          {
            label: "服务项审批",
            id: 10,
          },
          {
            label: "服务项开通规则配置",
            id: 11,
          },
          {
            label: "服务项关联配置",
            id: 12,
          },
          {
            label: "销售品配置",
            id: 13,
          },
          {
            label: "销售品属性配置",
            id: 14,
          },
          {
            label: "销售品属性值配置",
            id: 15,
          },
          {
            label: "销售品审批申请",
            id: 16,
          },
          {
            label: "销售品审批",
            id: 17,
          },
          {
            label: "销售品发布",
            id: 18,
          }
        ]
      },
      {
        label: "销售管理",
        id: 20,

        children: [
          {
            label: "客户首页",
            id: 21,
          },
          {
            label: "查询销售品信息",
            id: 22,
          },
          {
            label: "商机目录匹配",
            id: 23,
          },
          {
            label: "商机生成",
            id: 24,
          },
          {
            label: "业务受理",
            id: 25,
          },
          {
            label: "合同上传",
            id: 26,
          },
          {
            label: "费用审批",
            id: 27,
          },
          {
            label: "订单审核",
            id: 28,
          },
          {
            label: "订单管理",
            id: 29,
          },
          {
            label: "合同咨费管理",
            id: 30,
          },
          {
            label: "商机管理",
            id: 31,
          },
          {
            label: "集团订单",
            id: 32,
          }
        ]
      },
      {
        label: "客户管理",
        id: 37,

        children: [
          {
            label: "客户归属客户经理管理",
            id: 38,
          }
        ]
      },
      {
        label: "财务管理",
        id: 40,

        children: [
          {
            label: "账单查询",
            id: 41,
          },
          {
            label: "日调用量",
            id: 42,
          },
          {
            label: "预出账查询",
            id: 43,
          },
          {
            label: "客户月账查询",
            id: 44,
          },
        ]
      },
      {
        label: "服务开通",
        id: 46,

        children: [
          {
            label: "开通单管理",
            id: 47
          },
          {
            label: "历史开通单管理",
            id: 48
          },
        ]
      },
      {
        label: "一点开通管理",
        id: 49,

        children: [
          {
            label: "历史开通单管理",
            id: 50
          },
          {
            label: "历史全量开通单管理",
            id: 53
          },
        ]
      },
      {
        label: "系统管理",
        path: "systemManage / parameterUSerMain",
        id: 52,
        children: [
          {
            label: "系统用户维护",
            path: "systemManage / parameterUSerMain",
            id: 54
          },
          {
            label: "系统参数维护",
            path: "systemManage/parameterMain",
            id: 55
          },
          {
            label: "菜单维护",
            path: "systemManage/maintencemenu",
            id: 56
          },
          {
            label: "属性规格配置",
            path: "systemManage/attrspecconfig",
            id: 57
          },
          {
            label: "系统岗位配置",
            path: "systemManage/systempostcon",
            id: 58
          },
          {
            label: "系统主数据编码配置",
            path: "systemManage/systemdataconfig",
            id: 60
          },
          {
            label: "属性值配置",
            path: "systemManage/systemvalueconfig",
            id: 62
          },
        ]
      }
    ]
  },
]

export default menulist