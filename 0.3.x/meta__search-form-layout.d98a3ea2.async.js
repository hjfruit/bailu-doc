"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[1893],{47765:function(m,t,n){n.r(t),n.d(t,{demos:function(){return d}});var u=n(15009),a=n.n(u),i=n(99289),y=n.n(i),r=n(67294),d={"src-search-form-layout-demo-demos":{component:r.memo(r.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,54576))})),asset:{type:"BLOCK",id:"src-search-form-layout-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(24839).Z},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{antd:n(88096),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var l=y()(a()().mark(function F(){var o,s=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,s));case 3:case"end":return e.stop()}},F)}));function c(){return l.apply(this,arguments)}return c}()}},"src-search-form-layout-demo-from":{component:r.memo(r.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,14940))})),asset:{type:"BLOCK",id:"src-search-form-layout-demo-from",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(57152).Z},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{antd:n(88096),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var l=y()(a()().mark(function F(){var o,s=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,s));case 3:case"end":return e.stop()}},F)}));function c(){return l.apply(this,arguments)}return c}()}}}},2696:function(m,t,n){n.r(t),n.d(t,{texts:function(){return u}});const u=[{value:"\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u91C7\u7528 ",paraId:0},{value:"ProForm.SearchForm",paraId:0},{value:" \u4EE3\u66FF\u3002",paraId:0},{value:"\u5728 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7684\u6805\u683C\u5E03\u5C40 ",paraId:1},{value:"Row",paraId:1},{value:"\u3001",paraId:1},{value:"Col",paraId:1},{value:" \u7EC4\u4EF6\u4E0A\u6DFB\u52A0\u4E00\u4E9B\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5F62\u6210\u7EDF\u4E00\u7684\u98CE\u683C",paraId:1},{value:"SearchFormLayout.Row\u3001SearchFormLayout.Col\u3001SearchFormLayout.Space \u7EC4\u4EF6\u548C\u539F Antd \u7684 Row\u3001Col\u3001Space \u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\u4FDD\u6301\u4E00\u81F4\u3002",paraId:2},{value:"SearchFormLayout.Form \u7531 Form\u3001SearchFormLayout.Row \u7EC4\u5408\u800C\u6210\uFF0CSearchFormLayout.FormItem \u7531 Form.Item\u3001SearchFormLayout.Col \u7EC4\u5408\u800C\u6210\u3002",paraId:3},{value:"\u65B0\u7A97\u53E3\u6253\u5F00\u770B DEMO \u66F4\u4F73",paraId:4,tocIndex:1},{value:"0.1.0+",paraId:5}]},57152:function(m,t){t.Z=`import { Button, Form, Input, DatePicker, TimePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import React, { useCallback } from 'react'

import {
  Card,
  SearchFormLayout,
  Layout,
  Provider,
} from '@fruits-chain/react-bailu'

type FormValues = {
  test1: string
  test2: Dayjs
  test3: Dayjs
  test4: [Dayjs, Dayjs]
  test5: string
}

const Demo: React.FC = () => {
  const [form] = Form.useForm<FormValues>()

  const onClickSubmit = useCallback(() => {
    form.validateFields().then(values => {
      console.log(values)
    })
  }, [form])

  const onClickReset = useCallback(() => {
    form.resetFields()
  }, [form])

  return (
    <Provider>
      <Layout.Content>
        <Card.Group>
          <Card.Search title="\u57FA\u7840\u7528\u6CD5">
            <SearchFormLayout.Form form={form}>
              <SearchFormLayout.FormItem label="\u6D4B\u8BD51" name="test1">
                <Input />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem label="\u6D4B\u8BD5\u6D4B\u8BD52" name="test2">
                <DatePicker />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem label="\u6D4B\u8BD5\u6D4B\u8BD53" name="test3">
                <TimePicker />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem label="\u6D4B\u8BD5\u6D4B\u8BD54" name="test4">
                <DatePicker.RangePicker />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem label="\u6D4B\u8BD55" name="test5">
                <Input />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem>
                <SearchFormLayout.Space>
                  <Button type="primary" onClick={onClickSubmit}>
                    \u641C\u7D22
                  </Button>
                  <Button type="default" onClick={onClickReset}>
                    \u91CD\u7F6E
                  </Button>
                </SearchFormLayout.Space>
              </SearchFormLayout.FormItem>
            </SearchFormLayout.Form>
          </Card.Search>

          <Card.Search title="\u5206\u6BB5:\u8F93\u5165\u533A\u57DF\u9700\u8981\u4E0B\u8FB9\u8DDD">
            <SearchFormLayout.Form marginBottom>
              <SearchFormLayout.FormItem label="\u6D4B\u8BD51" name="test1">
                <Input />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem label="\u6D4B\u8BD5\u6D4B\u8BD52" name="test2">
                <DatePicker />
              </SearchFormLayout.FormItem>

              <SearchFormLayout.FormItem label="\u6D4B\u8BD5\u6D4B\u8BD53" name="test3">
                <TimePicker />
              </SearchFormLayout.FormItem>
            </SearchFormLayout.Form>

            <SearchFormLayout.Space>
              <Button type="primary">\u641C\u7D22</Button>
              <Button type="default">\u91CD\u7F6E</Button>
            </SearchFormLayout.Space>
          </Card.Search>
        </Card.Group>
      </Layout.Content>
    </Provider>
  )
}

export default Demo
`},24839:function(m,t){t.Z=`import { Button, Form, Input, DatePicker, TimePicker } from 'antd'
import React from 'react'

import {
  Card,
  SearchFormLayout,
  Layout,
  Provider,
} from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Provider>
      <Layout.Content>
        <Card.Group>
          <Card title="\u57FA\u7840\u7528\u6CD5">
            <Form>
              <SearchFormLayout.Row>
                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD51" name="test1">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD5\u6D4B\u8BD5" name="test2">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD5\u6D4B\u8BD52" name="test3">
                    <DatePicker />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item>
                    <SearchFormLayout.Space>
                      <Button type="primary">\u641C\u7D22</Button>
                      <Button type="default">\u91CD\u7F6E</Button>
                    </SearchFormLayout.Space>
                  </Form.Item>
                </SearchFormLayout.Col>
              </SearchFormLayout.Row>
            </Form>
          </Card>

          <Card title="\u5F88\u591A\u6761\u4EF6">
            <Form>
              <SearchFormLayout.Row>
                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD51" name="test1">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD5\u6D4B\u8BD5" name="test2">
                    <DatePicker.RangePicker />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD53" name="test3">
                    <TimePicker />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD54" name="test4">
                    <DatePicker />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD55" name="test5">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item>
                    <SearchFormLayout.Space>
                      <Button type="primary">\u641C\u7D22</Button>
                      <Button type="default">\u91CD\u7F6E</Button>
                    </SearchFormLayout.Space>
                  </Form.Item>
                </SearchFormLayout.Col>
              </SearchFormLayout.Row>
            </Form>
          </Card>

          <Card title="\u5206\u6BB5:\u8F93\u5165\u533A\u57DF\u9700\u8981\u4E0B\u8FB9\u8DDD">
            <Form>
              <SearchFormLayout.Row marginBottom>
                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD51" name="test1">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD5\u6D4B\u8BD5" name="test2">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD53" name="test3">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD54" name="test4">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>

                <SearchFormLayout.Col>
                  <Form.Item label="\u6D4B\u8BD55" name="test5">
                    <Input />
                  </Form.Item>
                </SearchFormLayout.Col>
              </SearchFormLayout.Row>

              <SearchFormLayout.Space>
                <Button type="primary">\u641C\u7D22</Button>
                <Button type="default">\u91CD\u7F6E</Button>
              </SearchFormLayout.Space>
            </Form>
          </Card>
        </Card.Group>
      </Layout.Content>
    </Provider>
  )
}

export default Demo
`}}]);
