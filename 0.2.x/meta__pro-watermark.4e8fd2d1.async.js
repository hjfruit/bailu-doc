"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[7935],{51107:function(m,e,t){t.r(e),t.d(e,{demos:function(){return f}});var d=t(15009),a=t.n(d),h=t(99289),c=t.n(h),o=t(67294),f={"pro-watermark-demo-basic":{component:o.memo(o.lazy(function(){return t.e(2987).then(t.bind(t,15058))})),asset:{type:"BLOCK",id:"pro-watermark-demo-basic",refAtomIds:["pro-watermark"],dependencies:{"index.tsx":{type:"FILE",value:t(42477).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u6C34\u5370\u5728\u5143\u7D20\u4E0A\u9762",title:"\u57FA\u672C"},context:{antd:t(26868),react:t(67294),"@fruits-chain/react-bailu":t(31081)},renderOpts:{compile:function(){var i=c()(a()().mark(function l(){var r,s=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},l)}));function u(){return i.apply(this,arguments)}return u}()}},"pro-watermark-demo-multiline":{component:o.memo(o.lazy(function(){return t.e(2987).then(t.bind(t,16280))})),asset:{type:"BLOCK",id:"pro-watermark-demo-multiline",refAtomIds:["pro-watermark"],dependencies:{"index.tsx":{type:"FILE",value:t(72122).Z},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u901A\u8FC7 content \u8BBE\u7F6E \u5B57\u7B26\u4E32\u6570\u7EC4 \u6307\u5B9A\u591A\u884C\u6587\u5B57\u6C34\u5370\u5185\u5BB9\uFF0C\u6C34\u5370\u5728\u5143\u7D20\u4E0B\u9762\u3002",title:"\u591A\u884C\u6C34\u5370"},context:{react:t(67294),"@fruits-chain/react-bailu":t(31081)},renderOpts:{compile:function(){var i=c()(a()().mark(function l(){var r,s=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},l)}));function u(){return i.apply(this,arguments)}return u}()}},"pro-watermark-demo-img":{component:o.memo(o.lazy(function(){return t.e(2987).then(t.bind(t,81309))})),asset:{type:"BLOCK",id:"pro-watermark-demo-img",refAtomIds:["pro-watermark"],dependencies:{"index.tsx":{type:"FILE",value:t(2741).Z},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u901A\u8FC7 image \u6307\u5B9A\u56FE\u7247\u5730\u5740\u3002\u4E3A\u4FDD\u8BC1\u56FE\u7247\u9AD8\u6E05\u4E14\u4E0D\u88AB\u62C9\u4F38\uFF0C\u8BF7\u8BBE\u7F6E width \u548C height, \u5E76\u4E0A\u4F20\u81F3\u5C11\u4E24\u500D\u7684\u5BBD\u9AD8\u7684 logo \u56FE\u7247\u5730\u5740\u3002",title:"\u56FE\u7247\u6C34\u5370"},context:{react:t(67294),"@fruits-chain/react-bailu":t(31081)},renderOpts:{compile:function(){var i=c()(a()().mark(function l(){var r,s=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},l)}));function u(){return i.apply(this,arguments)}return u}()}}}},88682:function(m,e,t){t.r(e),t.d(e,{texts:function(){return d}});const d=[{value:"\u7ED9\u9875\u9762\u7684\u67D0\u4E2A\u533A\u57DF\u52A0\u4E0A\u6C34\u5370\u3002",paraId:0,tocIndex:0},{value:"\u9875\u9762\u9700\u8981\u6DFB\u52A0\u6C34\u5370\u6807\u8BC6\u7248\u6743\u65F6\u4F7F\u7528\u3002",paraId:1,tocIndex:1},{value:"\u9002\u7528\u4E8E\u9632\u6B62\u4FE1\u606F\u76D7\u7528\u3002",paraId:1,tocIndex:1}]},42477:function(m,e){e.Z=`import { Button } from 'antd'
import React from 'react'

import { ProWatermark } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <ProWatermark content="\u6211\u662F\u6C34\u5370">
      <div style={{ height: 500, backgroundColor: 'pink' }}>
        <Button
          onClick={() => {
            alert('\u63D0\u793A')
          }}>
          \u70B9\u51FB
        </Button>
        <div style={{ height: 200, width: 200, backgroundColor: 'white' }} />
      </div>
    </ProWatermark>
  )
}

export default Demo
`},2741:function(m,e){e.Z=`import React from 'react'

import { ProWatermark } from '@fruits-chain/react-bailu'

const App: React.FC = () => (
  <ProWatermark
    height={30}
    width={130}
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original">
    <div style={{ height: 500 }} />
  </ProWatermark>
)

export default App
`},72122:function(m,e){e.Z=`import React from 'react'

import { ProWatermark } from '@fruits-chain/react-bailu'

const App: React.FC = () => (
  <ProWatermark content={['Ant Design', 'Happy Working']} zIndex={9}>
    <div style={{ height: 500, position: 'relative', zIndex: 10 }}>
      <div style={{ height: 200, width: 200, backgroundColor: 'pink' }} />
    </div>
  </ProWatermark>
)

export default App
`}}]);
