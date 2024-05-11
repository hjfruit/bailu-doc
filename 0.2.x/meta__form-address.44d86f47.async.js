"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[4771],{83227:function(a,e,n){n.r(e),n.d(e,{demos:function(){return t}});var s=n(67294),t={}},29327:function(a,e,n){n.r(e),n.d(e,{demos:function(){return t}});var s=n(67294),t={}},81181:function(a,e,n){n.r(e),n.d(e,{demos:function(){return v}});var s=n(15009),t=n.n(s),p=n(99289),c=n.n(p),d=n(67294),v={"src-form-address-demo-auto":{component:d.memo(d.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,58952))})),asset:{type:"BLOCK",id:"src-form-address-demo-auto",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(6830).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u8F93\u5165\u5173\u952E\u8BCD\u8054\u60F3\u5730\u5740",title:"\u5730\u5740\u8BE6\u60C5"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=c()(t()().mark(function i(){var o,m=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7335).then(n.bind(n,37335));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,m));case 3:case"end":return r.stop()}},i)}));function l(){return u.apply(this,arguments)}return l}()}},"src-form-address-demo-base":{component:d.memo(d.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,4519))})),asset:{type:"BLOCK",id:"src-form-address-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(76538).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u9009\u62E9\u533A\u57DF\u548C\u8F93\u5165\u5730\u5740\u8054\u52A8\u3002",title:"\u6240\u5728\u5730\u5740"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=c()(t()().mark(function i(){var o,m=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7335).then(n.bind(n,37335));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,m));case 3:case"end":return r.stop()}},i)}));function l(){return u.apply(this,arguments)}return l}()}},"src-form-address-demo-form-list":{component:d.memo(d.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,7192))})),asset:{type:"BLOCK",id:"src-form-address-demo-form-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(27314).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u9009\u62E9\u533A\u57DF\u548C\u8F93\u5165\u5730\u5740\u8054\u52A8\u3002",title:"Form.List"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=c()(t()().mark(function i(){var o,m=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7335).then(n.bind(n,37335));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,m));case 3:case"end":return r.stop()}},i)}));function l(){return u.apply(this,arguments)}return l}()}}}},18376:function(a,e,n){n.r(e),n.d(e,{texts:function(){return s}});const s=[]},38215:function(a,e,n){n.r(e),n.d(e,{texts:function(){return s}});const s=[]},39613:function(a,e,n){n.r(e),n.d(e,{texts:function(){return s}});const s=[{value:"0.1.13+",paraId:0},{value:"\u7528\u4E8E\u7F16\u8F91\u5730\u5740\u4E1A\u52A1\u573A\u666F\u3002",paraId:1,tocIndex:0}]},6830:function(a,e){e.Z=`import { Button } from 'antd'
import React, { useState } from 'react'

import { FormAddress, Card, Layout } from '@fruits-chain/react-bailu'

const request = (_: string, input: string) =>
  new Promise<{ location?: number[]; name: string }[]>(resolve => {
    setTimeout(() => {
      resolve(
        new Array(10).fill(0).map((__, index) => ({
          name: \`\${input}\u2014\u2014\${index}\`,
          location: [index, index],
        })),
      )
    }, 300)
  })

const Demo: React.FC = () => {
  const [value, setValue] = useState<{ address: string; coordinate: number[] }>(
    {
      address: '111',
      coordinate: [],
    },
  )

  return (
    <Layout.Content>
      <Card.Group>
        <Card>
          <FormAddress.AddressAutoComplete
            request={request}
            areaId={434}
            placeholder="\u8BF7\u8F93\u5165\u5730\u5740"
            onChange={v => {
              console.log('v => ', v)
            }}
          />
        </Card>

        <Card>
          <p>
            <Button
              onClick={() => {
                setValue({
                  address: '',
                  coordinate: [],
                })
              }}>
              \u91CD\u7F6E
            </Button>
          </p>
          <FormAddress.AddressAutoComplete
            request={request}
            areaId={434}
            placeholder="\u8BF7\u8F93\u5165\u5730\u5740"
            value={value}
            onChange={v => {
              console.log('v => ', v)
              setValue(v)
            }}
          />
        </Card>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`},76538:function(a,e){e.Z=`import { Button, Form } from 'antd'
import React from 'react'

import { FormAddress, Card, Layout } from '@fruits-chain/react-bailu'

const requestArea = (parentId: string, index: number) =>
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

const requestAddress = (areaId: string, input: string) =>
  new Promise<{ location?: number[]; name: string }[]>(resolve => {
    console.log('areaId => ', areaId)
    setTimeout(() => {
      resolve(
        new Array(10).fill(0).map((__, index) => ({
          name: \`\${input}\u2014\u2014\${index}\`,
          location: [index, index],
        })),
      )
    }, 300)
  })

const Demo: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Layout.Content>
      <Card.Group>
        <Card.Table
          toolBar={
            <Button
              type="primary"
              onClick={() => {
                console.log(form.getFieldsValue())
                form.validateFields().then(values => {
                  console.log('values => ', values)
                })
              }}>
              \u68C0\u6D4B\u503C
            </Button>
          }>
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              area1: ['null_2', 'null_2_102', 'null_2_102_202'],
            }}>
            <FormAddress
              requestArea={requestArea}
              requestAddress={requestAddress}
              areaProps={{
                name: 'area1',
                rules: [
                  { required: true, message: '\u8BF7\u9009\u62E9' },
                  FormAddress.buildAreaRequired('\u8BF7\u9009\u62E9\u5B8C\u6574'),
                ],
              }}
              addressProps={{
                placeholder: '\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740',
                name: 'address1',
                rules: [
                  {
                    required: true,
                    message: '\u8BF7\u586B\u5199',
                  },
                  FormAddress.buildAddressRequired('\u8BF7\u586B\u5199\u5B8C\u6574'),
                ],
              }}
            />

            <FormAddress
              requestArea={requestArea}
              requestAddress={requestAddress}
              areaProps={{
                name: 'area',
                rules: [
                  { required: true, message: '\u8BF7\u9009\u62E9' },
                  FormAddress.buildAreaRequired('\u8BF7\u9009\u62E9\u5B8C\u6574'),
                ],
              }}
              addressProps={{
                placeholder: '\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740',
                name: 'address',
                rules: [
                  {
                    required: true,
                    message: '\u8BF7\u586B\u5199',
                  },
                  FormAddress.buildAddressRequired('\u8BF7\u586B\u5199\u5B8C\u6574'),
                ],
              }}
            />
          </Form>
        </Card.Table>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`},27314:function(a,e){e.Z=`import { Button, Form } from 'antd'
import React from 'react'

import { FormAddress, Card, Layout } from '@fruits-chain/react-bailu'

const requestArea = (parentId: string, index: number) =>
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

const requestAddress = (areaId: string, input: string) =>
  new Promise<{ location?: number[]; name: string }[]>(resolve => {
    console.log('areaId => ', areaId)
    setTimeout(() => {
      resolve(
        new Array(10).fill(0).map((__, index) => ({
          name: \`\${input}\u2014\u2014\${index}\`,
          location: [index, index],
        })),
      )
    }, 300)
  })

const Demo: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Layout.Content>
      <Card.Group>
        <Card.Table
          toolBar={
            <Button
              type="primary"
              onClick={() => {
                console.log(form.getFieldsValue())
                form.validateFields().then(values => {
                  console.log('values => ', values)
                })
              }}>
              \u68C0\u6D4B\u503C
            </Button>
          }>
          <Form form={form} layout="vertical">
            <div style={{ width: 300 }}>
              <Form.List name="list">
                {(fields, { add, remove }) => {
                  return (
                    <>
                      {fields.map(field => {
                        return (
                          <div key={field.key}>
                            <Button
                              onClick={() => {
                                remove(field.name)
                              }}>
                              \u5220\u9664
                            </Button>
                            <FormAddress
                              areaPrefixNamePath="list"
                              requestArea={requestArea}
                              requestAddress={requestAddress}
                              areaProps={{
                                name: [field.name, 'area'],
                                rules: [
                                  { required: true, message: '\u8BF7\u9009\u62E9' },
                                  FormAddress.buildAreaRequired('\u8BF7\u9009\u62E9\u5B8C\u6574'),
                                ],
                              }}
                              addressProps={{
                                placeholder: '\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740',
                                name: [field.name, 'address'],
                                rules: [
                                  {
                                    required: true,
                                    message: '\u8BF7\u586B\u5199',
                                  },
                                  FormAddress.buildAddressRequired(
                                    '\u8BF7\u586B\u5199\u5B8C\u6574',
                                  ),
                                ],
                              }}
                              stepSelectProps={{ wrap: true }}
                            />
                          </div>
                        )
                      })}

                      <Button
                        onClick={() => {
                          add({})
                        }}>
                        \u65B0\u589E
                      </Button>
                    </>
                  )
                }}
              </Form.List>
            </div>
          </Form>
        </Card.Table>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`}}]);
