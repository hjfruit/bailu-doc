"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[9065],{59253:function(s,t,n){n.r(t),n.d(t,{demos:function(){return P}});var l=n(15009),o=n.n(l),c=n(99289),p=n.n(c),a=n(67294),P={"src-pro-modal-demo-open-with-request":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,83339))})),asset:{type:"BLOCK",id:"src-pro-modal-demo-open-with-request",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(11876).Z},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.1"}},entry:"index.tsx",description:"\u9002\u7528\u4E8E\u5C55\u793A\u8BE6\u60C5\u5BF9\u8BDD\u6846\u3002",title:"ProModal.openWithRequest"},context:{antd:n(37436),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var i=p()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function u(){return i.apply(this,arguments)}return u}()}},"src-pro-modal-demo-open-with-form":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,70244))})),asset:{type:"BLOCK",id:"src-pro-modal-demo-open-with-form",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(58884).Z},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.1"}},entry:"index.tsx",description:"\u9002\u7528\u4E8E\u5185\u90E8\u6709\u8868\u5355\u7684\u5BF9\u8BDD\u6846\u3002",title:"ProModal.openWithForm"},context:{antd:n(37436),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var i=p()(o()().mark(function d(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},d)}));function u(){return i.apply(this,arguments)}return u}()}}}},33973:function(s,t,n){n.r(t),n.d(t,{texts:function(){return l}});const l=[{value:"0.2.6+",paraId:0},{value:"\u6A21\u6001\u5BF9\u8BDD\u6846\u3002",paraId:1,tocIndex:0},{value:"\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"Modal",paraId:2,tocIndex:1},{value:" \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002",paraId:2,tocIndex:1},{value:"\u53E6\u5916\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:3,tocIndex:1},{value:"Modal.confirm()",paraId:3,tocIndex:1},{value:" \u7B49\u8BED\u6CD5\u7CD6\u65B9\u6CD5\u3002",paraId:3,tocIndex:1},{value:"\u76F8\u5BF9\u4E8E\u539F ",paraId:4,tocIndex:1},{value:"Modal",paraId:4,tocIndex:1},{value:" \u7EC4\u4EF6\u65B0\u589E ",paraId:4,tocIndex:1},{value:"open",paraId:4,tocIndex:1},{value:"\u3001",paraId:4,tocIndex:1},{value:"openWithRequest",paraId:4,tocIndex:1},{value:"\u3001",paraId:4,tocIndex:1},{value:"openWithForm",paraId:4,tocIndex:1},{value:" \u8BED\u6CD5\u7CD6\u65B9\u6CD5\u3002",paraId:4,tocIndex:1},{value:"\u5176\u4ED6\u5C5E\u6027\u4E0E ",paraId:5,tocIndex:5},{value:"Modal",paraId:5,tocIndex:5},{value:" \u4FDD\u6301\u4E00\u81F4\uFF0C\u8BE6\u60C5\u8BF7\u770B ",paraId:5,tocIndex:5},{value:"Modal \u6309\u94AE",paraId:5,tocIndex:5}]},58884:function(s,t){t.Z=`import { message } from 'antd'
import React from 'react'

import {
  ProButton,
  ProModal,
  ProSpace,
  ProForm,
  Layout,
  Provider,
} from '@fruits-chain/react-bailu'

type FormValues = {
  username: string
  password: string
}

const sleep = () =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

const formJSX = (
  <>
    <ProForm.ItemText
      label="\u7528\u6237\u540D"
      name="username"
      required
      rules={[
        {
          required: true,
          message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
        },
      ]}
    />
    <ProForm.ItemText
      label="\u7528\u6237\u5BC6\u7801"
      name="password"
      required
      rules={[
        {
          required: true,
          message: '\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801',
        },
      ]}
    />
  </>
)

const Demo: React.FC = () => {
  const [form] = ProForm.useForm()
  const [form2] = ProForm.useForm()

  return (
    <Provider>
      <Layout.Content>
        <ProSpace>
          <ProButton
            type="primary"
            onClick={() => {
              ProModal.openWithForm<FormValues>({
                title: '\u67D0\u4E2A\u65B0\u589E\u8868\u5355',
                form: form,
                request: values => {
                  if (values.username !== 'admin') {
                    message.error('\u67D0\u4E2A\u9879\u76EE\u90E8\u6B63\u786E')
                    return Promise.reject(new Error('\u67D0\u4E2A\u9879\u76EE\u90E8\u6B63\u786E'))
                  }

                  return sleep()
                },
                content: <ProForm form={form}>{formJSX}</ProForm>,
              })
            }}>
            \u65B0\u589E
          </ProButton>

          <ProButton
            type="primary"
            onClick={() => {
              ProModal.openWithForm<FormValues>({
                title: '\u67D0\u4E2A\u7F16\u8F91\u8868\u5355',
                form: form2,
                preheat: () =>
                  sleep().then(() => {
                    return {
                      username: 'admin',
                      password: '434',
                    }
                  }),
                request: values => {
                  if (values.username !== 'admin') {
                    message.error('\u67D0\u4E2A\u9879\u76EE\u90E8\u6B63\u786E')
                    return Promise.reject(new Error('\u67D0\u4E2A\u9879\u76EE\u90E8\u6B63\u786E'))
                  }

                  return sleep()
                },
                content: <ProForm form={form2}>{formJSX}</ProForm>,
              })
            }}>
            \u7F16\u8F91
          </ProButton>
        </ProSpace>
      </Layout.Content>
    </Provider>
  )
}

export default Demo
`},11876:function(s,t){t.Z=`import { Descriptions, Spin } from 'antd'
import React from 'react'

import {
  ProButton,
  ProModal,
  ProSpace,
  Layout,
  Provider,
} from '@fruits-chain/react-bailu'

const sleep = () =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

const renderContent = (d: { title: string }) => (
  <Descriptions column={1}>
    <Descriptions.Item label="UserName">{d.title}</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
)

const Demo: React.FC = () => {
  return (
    <Provider>
      <Layout.Content>
        <p>ProModal.open\uFF0C\u5982\u679C\u51FA\u73B0\u72B6\u6001\u53D8\u5316\uFF0CModal \u5C31\u4F1A\u5931\u53BB\u4ECE\u70B9\u51FB\u5143\u7D20\u5F39\u51FA</p>
        <ProSpace>
          <ProButton
            type="primary"
            onClick={() => {
              ProModal.open({
                title: '\u8BE6\u60C5',
                content: renderContent({ title: '\u6709\u6548\u679C' }),
              })
            }}>
            \u67E5\u770B\u8BE6\u60C5\uFF08\u6709\u6548\u679C\uFF09
          </ProButton>
          <ProButton
            type="primary"
            action={async () => {
              await sleep()
              ProModal.open({
                title: '\u8BE6\u60C5',
                content: renderContent({ title: '\u65E0\u6548\u679C' }),
              })
            }}>
            \u67E5\u770B\u8BE6\u60C5\uFF08\u65E0\u6548\u679C\uFF09
          </ProButton>
        </ProSpace>

        <p />

        <p>ProModal.openWithRequest\uFF0C\u5F39\u51FA\u7684\u8FC7\u7A0B\u4E2D\u8BF7\u6C42\u63A5\u53E3</p>

        <ProSpace>
          <ProButton
            type="primary"
            onClick={() => {
              ProModal.openWithRequest({
                title: '\u8BE6\u60C5',
                request: async () => {
                  await sleep()

                  return { title: '\u6807\u9898' }
                },
                renderContent: renderContent,
              })
            }}>
            \u67E5\u770B\u8BE6\u60C5
          </ProButton>

          <ProButton
            type="primary"
            onClick={() => {
              ProModal.openWithRequest({
                title: '\u8BE6\u60C5',
                request: async () => {
                  await sleep()

                  return { title: '\u6807\u9898' }
                },
                renderContent: renderContent,
                skeleton: <Spin spinning />,
              })
            }}>
            \u67E5\u770B\u8BE6\u60C5\uFF08\u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F\uFF09
          </ProButton>
        </ProSpace>
      </Layout.Content>
    </Provider>
  )
}

export default Demo
`}}]);
