"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[4903],{72607:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(67294),o={}},92921:function(a,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(67294),o={}},61591:function(a,e,n){n.r(e),n.d(e,{demos:function(){return i}});var t=n(15009),o=n.n(t),r=n(99289),d=n.n(r),s=n(67294),i={"src-top-tabs-demo-base":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1734),n.e(4550),n.e(2433)]).then(n.bind(n,24108))})),asset:{type:"BLOCK",id:"src-top-tabs-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(4339).Z},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u9002\u7528\u4E8E\u9875\u5934\u5207\u6362\u9875\u9762\u6216\u53C2\u6570\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var m=d()(o()().mark(function f(){var l,v=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(7335).then(n.bind(n,37335));case 2:return u.abrupt("return",(l=u.sent).default.apply(l,v));case 3:case"end":return u.stop()}},f)}));function c(){return m.apply(this,arguments)}return c}()}}}},57010:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},10141:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"0.1.0+",paraId:0}]},25303:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"antd@^4.23.0",paraId:0},{value:"\u9002\u7528\u4E8E\u9875\u5934\u5207\u6362\u9875\u9762\u6216\u53C2\u6570\u3002",paraId:1}]},4339:function(a,e){e.Z=`import React, { useState } from 'react'

import { TopTabs, Card, Layout } from '@fruits-chain/react-bailu'

const options = [
  { value: '/1', label: '\u9009\u98791' },
  { value: '/2', label: '\u9009\u98792' },
  { value: '/3', label: '\u9009\u98793' },
]

const options2 = [
  { value: '/1', label: '\u9009\u98791' },
  { value: '/2', label: '\u9009\u98792', badgeCount: 999 },
  { value: '/3', label: '\u9009\u98793' },
]

const Demo: React.FC = () => {
  const [value, setValue] = useState(options[2].value)

  return (
    <Layout.Content>
      <Card.Group>
        <TopTabs options={options} />

        <TopTabs options={options2} defaultValue={options2[1].value} />

        <TopTabs options={options} value={value} />

        <TopTabs options={options} value={value} onChange={setValue} />
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`}}]);
