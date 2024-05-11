"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[4358],{47897:function(l,a,n){n.r(a),n.d(a,{demos:function(){return m}});var t=n(15009),r=n.n(t),u=n(99289),i=n.n(u),d=n(67294),m={"id-card-validity-demo-base":{component:d.memo(d.lazy(function(){return n.e(5162).then(n.bind(n,30996))})),asset:{type:"BLOCK",id:"id-card-validity-demo-base",refAtomIds:["id-card-validity"],dependencies:{"index.tsx":{type:"FILE",value:n(10689).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\u9009\u62E9",title:"\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\u9009\u62E9"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var s=i()(r()().mark(function I(){var o,_=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,_));case 3:case"end":return e.stop()}},I)}));function c(){return s.apply(this,arguments)}return c}()}}}},20972:function(l,a,n){n.r(a),n.d(a,{texts:function(){return t}});const t=[{value:"\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\u9009\u62E9 ",paraId:0,tocIndex:0},{value:"0.2.26+",paraId:1,tocIndex:0},{value:"\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\u9009\u62E9\u7EC4\u4EF6\uFF0C\u5206\u4E3A ",paraId:2,tocIndex:0},{value:"\u56FA\u5B9A\u671F\u9650",paraId:2,tocIndex:0},{value:" \u548C ",paraId:2,tocIndex:0},{value:"\u957F\u671F",paraId:2,tocIndex:0},{value:" \uFF0C ",paraId:2,tocIndex:0},{value:"\u957F\u671F",paraId:2,tocIndex:0},{value:" \u65F6\u8FD4\u56DE\u7684\u6570\u7EC4\u540E\u9762\u4E00\u4F4D\u4E3Anull,\u5982 ",paraId:2,tocIndex:0},{value:"[1703579408981,null]",paraId:2,tocIndex:0},{value:"\u9700\u8981\u9009\u62E9\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\u65F6\u4F7F\u7528\u3002",paraId:3,tocIndex:1}]},10689:function(l,a){a.Z=`import { Button, Form } from 'antd'
import React from 'react'

import { Card, IdCardValidity, Layout } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Layout.Content>
      <Card.Group>
        <Card.Table>
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              idCardValidity: [1702458879846, 1702631679846],
              idCardValidity1: [1702458879846, null],
            }}>
            <Form.Item name="idCardValidity" label="\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\uFF1A\u6709\u9ED8\u8BA4\u503C">
              <IdCardValidity
                onChange={val => {
                  console.log(val)
                }}
              />
            </Form.Item>
            <Form.Item
              name="idCardValidity1"
              label="\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F\uFF1A\u9ED8\u8BA4\u503C\u4E3A\u957F\u671F">
              <IdCardValidity
                onChange={val => {
                  console.log(val)
                }}
              />
            </Form.Item>
            <Form.Item label="\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F,\u7981\u7528">
              <IdCardValidity disabled={true} value={[1702458879846, null]} />
              <br />
              <br />
              <IdCardValidity
                disabled={true}
                value={[1702458879846, 1702458879866]}
              />
            </Form.Item>
            <Form.Item name="idCardValidity2" label="\u8EAB\u4EFD\u8BC1\u6709\u6548\u671F">
              <IdCardValidity
                onChange={val => {
                  console.log(val)
                }}
              />
            </Form.Item>

            <Button
              type="primary"
              onClick={() => {
                form.validateFields().then(values => {
                  console.log('values => ', values)
                })
              }}>
              \u63D0\u4EA4
            </Button>
          </Form>
        </Card.Table>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`}}]);
