"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[718],{23608:function(r,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(15009),u=e.n(a),s=e(99289),d=e.n(s),l=e(67294),i={"src-calendar-demo-base":{component:l.memo(l.lazy(function(){return Promise.all([e.e(9542),e.e(4550),e.e(2433)]).then(e.bind(e,67523))})),asset:{type:"BLOCK",id:"src-calendar-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(68242).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u4E0D\u540C\u7684\u72B6\u6001\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:e(26868),react:e(67294),"@fruits-chain/react-bailu":e(31081)},renderOpts:{compile:function(){var m=d()(u()().mark(function _(){var o,f=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,f));case 3:case"end":return t.stop()}},_)}));function c(){return m.apply(this,arguments)}return c}()}}}},90288:function(r,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"0.1.0+",paraId:0},{value:"\u6309\u7167\u65E5\u5386\u5F62\u5F0F\u5C55\u793A\u6570\u636E\u7684\u5BB9\u5668\u3002",paraId:1,tocIndex:0},{value:"\u539F\u7EC4\u4EF6\u91C7\u7528 Moment \u65F6\u95F4\u5DE5\u5177\uFF0C\u73B0\u4F7F\u7528 dayjs\uFF0C\u5176\u4ED6\u4E0E\u539F\u7EC4\u4EF6\u76F8\u540C\u3002",paraId:2,tocIndex:0},{value:"\u5F53\u6570\u636E\u662F\u65E5\u671F\u6216\u6309\u7167\u65E5\u671F\u5212\u5206\u65F6\uFF0C\u4F8B\u5982\u65E5\u7A0B\u3001\u8BFE\u8868\u3001\u4EF7\u683C\u65E5\u5386\u7B49\uFF0C\u519C\u5386\u7B49\u3002\u76EE\u524D\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002",paraId:3,tocIndex:1}]},68242:function(r,n){n.Z=`import { Space } from 'antd'
import React from 'react'

import { Calendar } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Calendar
        onChange={v => {
          console.log(v)
        }}
      />
    </Space>
  )
}

export default Demo
`}}]);
