"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[3416],{66033:function(a,e,n){n.r(e),n.d(e,{demos:function(){return m}});var t=n(15009),u=n.n(t),l=n(99289),d=n.n(l),o=n(67294),m={"error-boundary-demo-base":{component:o.memo(o.lazy(function(){return n.e(5441).then(n.bind(n,18218))})),asset:{type:"BLOCK",id:"error-boundary-demo-base",refAtomIds:["error-boundary"],dependencies:{"index.tsx":{type:"FILE",value:n(93699).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.0"}},entry:"index.tsx"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var i=d()(u()().mark(function c(){var s,f=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7335).then(n.bind(n,37335));case 2:return r.abrupt("return",(s=r.sent).default.apply(s,f));case 3:case"end":return r.stop()}},c)}));function _(){return i.apply(this,arguments)}return _}()}}}},753:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u4E00\u822C\u7528\u4E8E\u5E94\u7528\u6839\u7EC4\u4EF6\uFF0C\u6355\u83B7 React \u5185\u4EA7\u751F\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u4F60\u8BA4\u4E3A\u53EF\u80FD\u6709\u9519\u8BEF\u7684\u5730\u65B9\u3002",paraId:1,tocIndex:1}]},93699:function(a,e){e.Z=`import React, { useMemo } from 'react'

import { ErrorBoundary } from '@fruits-chain/react-bailu'

const ErrorApp = () => {
  const randomData = useMemo(() => {
    if (Math.random() > 0.5) {
      return {
        text: '\u663E\u793A\u4E86\u5185\u5BB9',
      }
    }
    return null
  }, [])

  return <p>{randomData!.text}</p>
}

const Demo: React.FC = () => {
  return (
    <div style={{ height: 600 }}>
      <ErrorBoundary>
        <ErrorApp />
      </ErrorBoundary>
    </div>
  )
}

export default Demo
`}}]);
