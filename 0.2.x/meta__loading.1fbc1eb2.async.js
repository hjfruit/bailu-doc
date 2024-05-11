"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[6927],{31402:function(l,t,n){n.r(t),n.d(t,{demos:function(){return f}});var i=n(15009),r=n.n(i),c=n(99289),p=n.n(c),o=n(67294),f={"loading-demo-base":{component:o.memo(o.lazy(function(){return n.e(7205).then(n.bind(n,63194))})),asset:{type:"BLOCK",id:"loading-demo-base",refAtomIds:["loading"],dependencies:{"index.tsx":{type:"FILE",value:n(59387).Z},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u663E\u793A loading \u72B6\u6001\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=p()(r()().mark(function d(){var a,m=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,m));case 3:case"end":return e.stop()}},d)}));function s(){return u.apply(this,arguments)}return s}()}},"loading-demo-layout":{component:o.memo(o.lazy(function(){return n.e(7205).then(n.bind(n,45882))})),asset:{type:"BLOCK",id:"loading-demo-layout",refAtomIds:["loading"],dependencies:{"index.tsx":{type:"FILE",value:n(63094).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u652F\u6301 Flex \u5E03\u5C40",title:"\u5E03\u5C40"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=p()(r()().mark(function d(){var a,m=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,m));case 3:case"end":return e.stop()}},d)}));function s(){return u.apply(this,arguments)}return s}()}}}},203:function(l,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"\u7B49\u5F85\u9884\u52A0\u8F7D\u6570\u636E\u65F6\u7684\u7AD9\u4F4D\u3002",paraId:0,tocIndex:0},{value:"\u7B49\u5F85\u5F02\u6B65\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u61D2\u52A0\u8F7D\u8DEF\u7531\u7EC4\u4EF6",paraId:1,tocIndex:1}]},59387:function(l,t){t.Z=`import React from 'react'

import { Loading } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return <Loading />
}

export default Demo
`},63094:function(l,t){t.Z=`import { Row, Col, Space } from 'antd'
import React from 'react'

import { Loading } from '@fruits-chain/react-bailu'

const Wrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...props} style={{ height: 100, backgroundColor: '#f5f5f5' }} />
}

const Demo: React.FC = () => {
  return (
    <Row gutter={8}>
      <Col span={6}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Wrapper>
            <Loading justify="flex-start" />
          </Wrapper>
          <Wrapper>
            <Loading />
          </Wrapper>
          <Wrapper>
            <Loading justify="flex-end" />
          </Wrapper>
        </Space>
      </Col>

      <Col span={6}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Wrapper>
            <Loading align="self-start" />
          </Wrapper>
          <Wrapper>
            <Loading />
          </Wrapper>
          <Wrapper>
            <Loading align="self-end" />
          </Wrapper>
        </Space>
      </Col>
    </Row>
  )
}

export default Demo
`}}]);
