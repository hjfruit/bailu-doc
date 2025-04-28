"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[3370],{23072:function(t,a,e){e.r(a),e.d(a,{demos:function(){return i}});var l=e(15009),u=e.n(l),o=e(99289),c=e.n(o),r=e(67294),i={"pro-switch-demo-base":{component:r.memo(r.lazy(function(){return e.e(3177).then(e.bind(e,35662))})),asset:{type:"BLOCK",id:"pro-switch-demo-base",refAtomIds:["pro-switch"],dependencies:{"index.tsx":{type:"FILE",value:e(28543).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{react:e(67294),"@fruits-chain/react-bailu":e(31081)},renderOpts:{compile:function(){var s=c()(u()().mark(function I(){var d,h=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,h));case 3:case"end":return n.stop()}},I)}));function v(){return s.apply(this,arguments)}return v}()}}}},47887:function(t,a,e){e.r(a),e.d(a,{texts:function(){return l}});const l=[{value:"0.2.0+",paraId:0},{value:"\u7528\u4E8E\u5728\u6253\u5F00\u548C\u5173\u95ED\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002",paraId:1,tocIndex:0},{value:"\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\uFF1B",paraId:2,tocIndex:1},{value:"\u548C ",paraId:3,tocIndex:1},{value:"antd",paraId:3,tocIndex:1},{value:" \u7684 ",paraId:3,tocIndex:1},{value:"Switch",paraId:3,tocIndex:1},{value:" \u7EC4\u4EF6\u5DEE\u522B\u5DE8\u5927\uFF0C\u539F ",paraId:3,tocIndex:1},{value:"Switch",paraId:3,tocIndex:1},{value:" \u4F7F\u7528 ",paraId:3,tocIndex:1},{value:"checked",paraId:3,tocIndex:1},{value:" \u63A7\u5236\u9AD8\u4EAE/\u6FC0\u6D3B\u72B6\u6001\uFF0C",paraId:3,tocIndex:1},{value:"onChange",paraId:3,tocIndex:1},{value:" \u4E8B\u4EF6\u8FD4\u56DE\u5F53\u524D\u662F\u5426\u9AD8\u4EAE\u3002",paraId:3,tocIndex:1},{value:"\u73B0 ",paraId:4,tocIndex:1},{value:"ProSwitch",paraId:4,tocIndex:1},{value:" \u914D\u7F6E ",paraId:4,tocIndex:1},{value:"value",paraId:4,tocIndex:1},{value:"\u3001",paraId:4,tocIndex:1},{value:"defaultValue",paraId:4,tocIndex:1},{value:"\u3001",paraId:4,tocIndex:1},{value:"onChange",paraId:4,tocIndex:1},{value:" \u4F7F\u7528\uFF0C",paraId:4,tocIndex:1},{value:"Props",paraId:4,tocIndex:1},{value:" \u66F4\u8D34\u8FD1\u8F93\u5165\u63A7\u4EF6\u7684\u98CE\u683C\uFF0C",paraId:4,tocIndex:1},{value:"activeValue",paraId:4,tocIndex:1},{value:"\u3001",paraId:4,tocIndex:1},{value:"inactiveValue",paraId:4,tocIndex:1},{value:" \u4F7F\u539F\u5355\u4E00\u7684 ",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:" \u6570\u636E\u66F4\u7075\u6D3B\u3002",paraId:4,tocIndex:1},{value:"onChange",paraId:5},{value:" \u548C ",paraId:5},{value:"action",paraId:5},{value:" \u52FF\u540C\u65F6\u4F7F\u7528\uFF0C\u70B9\u51FB ",paraId:5},{value:"ProSwitch",paraId:5},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1 ",paraId:5},{value:"onChange",paraId:5},{value:"\u3002",paraId:5}]},28543:function(t,a){a.Z=`import React from 'react'

import { ProSpace, ProSwitch } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <ProSpace direction="vertical">
      <ProSwitch
        checkedChildren="true"
        unCheckedChildren="false"
        onChange={value => {
          console.log('value => ', value)
        }}
      />
      <ProSwitch
        checkedChildren="2"
        unCheckedChildren="1"
        inactiveValue={1}
        activeValue={2}
        defaultValue={1}
        onChange={value => {
          console.log('value => ', value)
        }}
      />
      <ProSwitch
        checkedChildren="\u5F00\u542F"
        unCheckedChildren="\u5173\u95ED"
        onChange={value => {
          console.log('value => ', value)
        }}
      />
      <ProSwitch
        childrenOutside
        checkedChildren="\u5F00\u542F"
        unCheckedChildren="\u5173\u95ED"
        onChange={value => {
          console.log('value => ', value)
        }}
      />
      <ProSwitch
        checkedChildren="\u5F00\u542F"
        unCheckedChildren="\u5173\u95ED"
        inactiveValue={1}
        activeValue={2}
        value={2}
        action={value => {
          console.log('value => ', value)

          return new Promise<void>(resolve => {
            setTimeout(() => {
              console.log('\u5237\u65B0\u6570\u636E')
              resolve()
            }, 800)
          })
        }}
      />
    </ProSpace>
  )
}

export default Demo
`}}]);
