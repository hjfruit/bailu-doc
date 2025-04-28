"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[1819],{35164:function(u,t,e){e.r(t),e.d(t,{demos:function(){return d}});var a=e(15009),r=e.n(a),o=e(99289),i=e.n(o),s=e(67294),d={"result-demo-base":{component:s.memo(s.lazy(function(){return e.e(597).then(e.bind(e,95870))})),asset:{type:"BLOCK",id:"result-demo-base",refAtomIds:["result"],dependencies:{"index.tsx":{type:"FILE",value:e(53824).Z},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{antd:e(88096),react:e(67294),"@fruits-chain/react-bailu":e(31081)},renderOpts:{compile:function(){var m=i()(r()().mark(function _(){var l,f=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,f));case 3:case"end":return n.stop()}},_)}));function c(){return m.apply(this,arguments)}return c}()}}}},49328:function(u,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u6709\u91CD\u8981\u64CD\u4F5C\u9700\u544A\u77E5\u7528\u6237\u5904\u7406\u7ED3\u679C\uFF0C\u4E14\u53CD\u9988\u5185\u5BB9\u8F83\u4E3A\u590D\u6742\u65F6\u4F7F\u7528\u3002",paraId:1,tocIndex:1}]},53824:function(u,t){t.Z=`import { Button, Divider, Space } from 'antd'
import React from 'react'

import { Result } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Result status="403" />
      <Divider />
      <Result status="404" />
      <Divider />
      <Result status="404" title="\u6CA1\u6709\u6743\u9650\u8BBF\u95EE" />
      <Divider />
      <div style={{ height: 500, backgroundColor: '#f5f5f5' }}>
        <Result status="404" title="\u5C45\u4E2D\u663E\u793A" />
      </div>
      <Divider />
      <div style={{ height: 500, backgroundColor: '#f5f5f5' }}>
        <Result
          status="404"
          title={
            <>
              <p style={{ marginTop: 24 }}>\u672A\u77E5\u95EE\u9898</p>
              <Button type="primary">\u8FD4\u56DE\u9996\u9875</Button>
            </>
          }
        />
      </div>
    </Space>
  )
}

export default Demo
`}}]);
