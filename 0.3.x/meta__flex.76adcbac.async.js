"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8674],{39625:function(r,e,n){n.r(e),n.d(e,{demos:function(){return l}});var t=n(67294),l={}},22674:function(r,e,n){n.r(e),n.d(e,{demos:function(){return l}});var t=n(67294),l={}},93933:function(r,e,n){n.r(e),n.d(e,{demos:function(){return d}});var t=n(15009),l=n.n(t),a=n(99289),i=n.n(a),s=n(67294),d={"src-flex-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,23175))})),asset:{type:"BLOCK",id:"src-flex-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(88503).Z},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{antd:n(88096),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var m=i()(l()().mark(function f(){var o,C=arguments;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(7335).then(n.bind(n,37335));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,C));case 3:case"end":return u.stop()}},f)}));function c(){return m.apply(this,arguments)}return c}()}}}},49128:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},62181:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},68280:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},88503:function(r,e){e.Z=`import { Button } from 'antd'
import React from 'react'

import { Card, Flex } from '@fruits-chain/react-bailu'

const Circle = (props: { size?: number }) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <div style={style} />
}

const BasicFlex: React.FC = () => {
  return (
    <Card.Group>
      <Card title="\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411">
        <Card.Group>
          <span>direction=row:\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF</span>

          <Flex>
            <Flex.Item style={{ paddingRight: 4 }}>
              <Button>\u6309\u94AE1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button>\u6309\u94AE2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4 }}>
              <Button>\u6309\u94AE3</Button>
            </Flex.Item>
          </Flex>

          <span>direction=column:\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF</span>

          <Flex direction="column">
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button>\u6309\u94AE1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button>\u6309\u94AE2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button>\u6309\u94AE3</Button>
            </Flex.Item>
          </Flex>
        </Card.Group>
      </Card>

      <Card title="\u5BF9\u9F50\u65B9\u5F0F">
        <Card.Group>
          <span>justify=start:\u5DE6\u5BF9\u9F50</span>
          <Flex justify="start">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>

          <span>justify=center:\u5C45\u4E2D</span>

          <Flex justify="center">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>

          <span>justify=end:\u53F3\u5BF9\u9F50</span>

          <Flex justify="end">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </Card.Group>
      </Card>

      <Card title="\u7EC4\u5408\u4F7F\u7528">
        <Flex justify="between">
          <Circle />

          <Flex align="center">
            <Circle />
            <Circle size={40} />
          </Flex>
        </Flex>
      </Card>
    </Card.Group>
  )
}

export default BasicFlex
`}}]);
