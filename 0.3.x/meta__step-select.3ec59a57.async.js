"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[5026],{42460:function(u,e,n){n.r(e),n.d(e,{demos:function(){return i}});var a=n(15009),r=n.n(a),s=n(99289),d=n.n(s),l=n(67294),i={"step-select-demo-base":{component:l.memo(l.lazy(function(){return n.e(8038).then(n.bind(n,37246))})),asset:{type:"BLOCK",id:"step-select-demo-base",refAtomIds:["step-select"],dependencies:{"index.tsx":{type:"FILE",value:n(39928).Z},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.1"}},entry:"index.tsx"},context:{antd:n(37436),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var m=d()(r()().mark(function c(){var o,v=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,v));case 3:case"end":return t.stop()}},c)}));function _(){return m.apply(this,arguments)}return _}()}}}},42005:function(u,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"0.1.12+",paraId:0},{value:"\u53EF\u4EE5\u7528\u4F5C\u5C42\u7EA7\u9009\u62E9\uFF0C\u4F8B\u5982\u7EC4\u7EC7\u5C42\u7EA7\u3001\u7701\u5E02\u533A\u3002",paraId:1,tocIndex:1}]},39928:function(u,e){e.Z=`import { Button } from 'antd'
import React, { useState } from 'react'

import { Card, Layout, StepSelect } from '@fruits-chain/react-bailu'

const request = (parentId: string, index: number) =>
  new Promise<{ value: string; label: string }[]>(resolve => {
    console.log('request id => ', parentId)
    setTimeout(() => {
      resolve(
        index === 3
          ? []
          : new Array(20).fill(0).map((__, i) => ({
              value: \`\${parentId}_\${index * 100 + i}\`,
              label: \`\u9009\u9879\${index}_\${i}\`,
            })),
      )
    }, 300)
  })

const _value = ['null_2', 'null_2_101', 'null_2_101_201']

const Demo: React.FC = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <Layout.Content>
      <Card.Group>
        <Card>
          <Card.Group>
            <div style={{ width: 300, overflow: 'hidden' }}>
              <StepSelect
                selectWidth={90}
                defaultValue={_value}
                request={request}
                onChange={(v, o) => {
                  console.log('v => ', v)
                  console.log('o => ', o)
                }}
              />
            </div>

            <StepSelect
              request={request}
              onChange={(v, o) => {
                console.log('v => ', v)
                console.log('o => ', o)
              }}
            />
          </Card.Group>
        </Card>

        <Card>
          <Button
            onClick={() => {
              setValue([])
            }}>
            \u91CD\u7F6E
          </Button>
          <p>{JSON.stringify(value)}</p>
          <StepSelect
            value={value}
            request={request}
            onChange={v => {
              setValue(v)
            }}
          />
        </Card>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`}}]);
