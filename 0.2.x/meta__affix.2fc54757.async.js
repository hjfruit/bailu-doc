"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[168],{27700:function(r,n,e){e.r(n),e.d(n,{demos:function(){return s}});var a=e(15009),u=e.n(a),l=e(99289),i=e.n(l),o=e(67294),s={"affix-demo-base":{component:o.memo(o.lazy(function(){return e.e(8859).then(e.bind(e,1702))})),asset:{type:"BLOCK",id:"affix-demo-base",refAtomIds:["affix"],dependencies:{"index.tsx":{type:"FILE",value:e(42140).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u4E0D\u540C\u7684\u72B6\u6001\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:e(26868),react:e(67294),"@fruits-chain/react-bailu":e(31081)},renderOpts:{compile:function(){var m=i()(u()().mark(function _(){var d,f=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,f));case 3:case"end":return t.stop()}},_)}));function c(){return m.apply(this,arguments)}return c}()}}}},64895:function(r,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"0.1.11+",paraId:0},{value:"\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002",paraId:1,tocIndex:0},{value:"\u539F\u7EC4\u4EF6\u91C7\u7528 ",paraId:2,tocIndex:0},{value:"target",paraId:2,tocIndex:0},{value:" \u9ED8\u8BA4\u503C\u662F ",paraId:2,tocIndex:0},{value:"() => window",paraId:2,tocIndex:0},{value:"\uFF0C\u73B0\u4FEE\u6539\u4E3A ",paraId:2,tocIndex:0},{value:"() => (document.querySelector(",paraId:2,tocIndex:0},{value:"#${CONTENT_SCROLL_ID}",paraId:2,tocIndex:0},{value:") as HTMLElement) ?? window",paraId:2,tocIndex:0},{value:"\u3002",paraId:2,tocIndex:0},{value:"\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002",paraId:3,tocIndex:1},{value:"\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002",paraId:4,tocIndex:1}]},42140:function(r,n){n.Z=`import { Button } from 'antd'
import React from 'react'

import { Layout, Affix } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <div style={{ height: 500, overflow: 'hidden', display: 'flex' }}>
      <Layout.Content>
        <div style={{ height: 100 }}>
          <p>header</p>
        </div>

        <Affix>
          <Button>\u6309\u94AE</Button>
        </Affix>

        <div style={{ height: 500 }} />

        <div style={{ height: 100 }}>
          <p>footer</p>
        </div>
      </Layout.Content>
    </div>
  )
}

export default Demo
`}}]);
