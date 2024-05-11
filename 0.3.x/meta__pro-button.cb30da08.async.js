"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[7037],{86230:function(u,e,t){t.r(e),t.d(e,{demos:function(){return f}});var l=t(15009),a=t.n(l),p=t(99289),c=t.n(p),r=t(67294),f={"src-pro-button-demo-action":{component:r.memo(r.lazy(function(){return Promise.all([t.e(6566),t.e(4550),t.e(2433)]).then(t.bind(t,37413))})),asset:{type:"BLOCK",id:"src-pro-button-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(32766).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.1"}},entry:"index.tsx",description:"\u5BF9\u4E8E\u5F02\u6B65\u64CD\u4F5C\uFF0C\u914D\u5408 action \u66F4\u7B80\u6D01\u3002",title:"action"},context:{react:t(67294),"@fruits-chain/react-bailu":t(31081)},renderOpts:{compile:function(){var i=c()(a()().mark(function d(){var o,m=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,m));case 3:case"end":return n.stop()}},d)}));function s(){return i.apply(this,arguments)}return s}()}},"src-pro-button-demo-tooltip":{component:r.memo(r.lazy(function(){return Promise.all([t.e(6566),t.e(4550),t.e(2433)]).then(t.bind(t,8192))})),asset:{type:"BLOCK",id:"src-pro-button-demo-tooltip",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(68).Z},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.1"}},entry:"index.tsx",description:"\u6309\u94AE disabled \u72B6\u6001\u4F1A\u5BF9\u6309\u94AE\u9F20\u6807\u4E8B\u4EF6\u7981\u6B62\u5192\u6CE1\uFF0C\u4E0E Tooltip \u7EC4\u4EF6\u4F7F\u7528\u65F6\u9700\u8981\u989D\u5916\u505A\u517C\u5BB9\u3002",title:"widthTooltip"},context:{antd:t(37436),react:t(67294),"@fruits-chain/react-bailu":t(31081)},renderOpts:{compile:function(){var i=c()(a()().mark(function d(){var o,m=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,m));case 3:case"end":return n.stop()}},d)}));function s(){return i.apply(this,arguments)}return s}()}}}},57870:function(u,e,t){t.r(e),t.d(e,{texts:function(){return l}});const l=[{value:"0.2.0+",paraId:0},{value:"\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002",paraId:1,tocIndex:1},{value:"\u76F8\u5BF9\u4E8E\u539F ",paraId:2,tocIndex:1},{value:"Button",paraId:2,tocIndex:1},{value:" \u7EC4\u4EF6\u65B0\u589E ",paraId:2,tocIndex:1},{value:"action",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u3002",paraId:2,tocIndex:1},{value:"\u5176\u4ED6\u5C5E\u6027\u4E0E ",paraId:3,tocIndex:5},{value:"Button",paraId:3,tocIndex:5},{value:" \u4FDD\u6301\u4E00\u81F4\uFF0C\u8BE6\u60C5\u8BF7\u770B ",paraId:3,tocIndex:5},{value:"Button \u6309\u94AE",paraId:3,tocIndex:5}]},32766:function(u,e){e.Z=`import React from 'react'

import { Layout, ProButton, ProSpace } from '@fruits-chain/react-bailu'

const sleep = () =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

const Demo: React.FC = () => {
  return (
    <Layout.Content>
      <ProSpace>
        <ProButton action={sleep}>\u54C8\u54C8\u54C8</ProButton>
        <ProButton action={sleep} type="primary">
          \u54C8\u54C8\u54C8
        </ProButton>
      </ProSpace>
    </Layout.Content>
  )
}

export default Demo
`},68:function(u,e){e.Z=`import { Tooltip } from 'antd'
import React from 'react'

import { Layout, ProButton, ProSpace } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Layout.Content>
      <ProSpace>
        <Tooltip title="123">
          <ProButton disabled widthTooltip>
            \u54C8\u54C8\u54C8
          </ProButton>
        </Tooltip>

        <Tooltip title="321">
          <ProButton type="primary" disabled widthTooltip>
            \u54C8\u54C8\u54C8
          </ProButton>
        </Tooltip>
      </ProSpace>
    </Layout.Content>
  )
}

export default Demo
`}}]);
