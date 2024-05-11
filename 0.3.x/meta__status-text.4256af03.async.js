"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[4591],{3722:function(s,e,t){t.r(e),t.d(e,{demos:function(){return d}});var a=t(15009),u=t.n(a),o=t(99289),i=t.n(o),r=t(67294),d={"status-text-demo-base":{component:r.memo(r.lazy(function(){return t.e(1521).then(t.bind(t,58006))})),asset:{type:"BLOCK",id:"status-text-demo-base",refAtomIds:["status-text"],dependencies:{"index.tsx":{type:"FILE",value:t(55983).Z},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.1"}},entry:"index.tsx"},context:{antd:t(37436),react:t(67294),"@fruits-chain/react-bailu":t(31081)},renderOpts:{compile:function(){var m=i()(u()().mark(function _(){var l,f=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,f));case 3:case"end":return n.stop()}},_)}));function c(){return m.apply(this,arguments)}return c}()}}}},9323:function(s,e,t){t.r(e),t.d(e,{texts:function(){return a}});const a=[{value:"\u72B6\u6001\u3002",paraId:0,tocIndex:0}]},55983:function(s,e){e.Z=`import { Divider, Space } from 'antd'
import React from 'react'

import { StatusText } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Space split={<Divider type="vertical" />}>
      <StatusText status="primary" text="primary" />
      <StatusText status="danger" text="danger" />
      <StatusText status="success" text="success" />
      <StatusText
        status="warning"
        text="warning"
        onClick={() => {
          alert('?')
        }}
      />
      <StatusText status="cancelled" text="cancelled" />
    </Space>
  )
}

export default Demo
`}}]);
