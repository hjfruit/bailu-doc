"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[4057],{77763:function(p,t,n){n.r(t),n.d(t,{demos:function(){return I}});var d=n(15009),s=n.n(d),D=n(99289),m=n.n(D),a=n(67294),I={"src-descriptions-demo-base":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,79971))})),asset:{type:"BLOCK",id:"src-descriptions-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(33194).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",description:"\u548C\u666E\u901A Descriptions \u4E00\u6837\u7684\u4F7F\u7528\u65B9\u5F0F\u3002",title:"\u5178\u578B\u5361\u7247"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var r=m()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,c));case 3:case"end":return e.stop()}},l)}));function o(){return r.apply(this,arguments)}return o}()}},"src-descriptions-demo-empty":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,99174))})),asset:{type:"BLOCK",id:"src-descriptions-demo-empty",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(77497).Z},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",description:"null\u3001undefined\u3001\u7A7A\u5B57\u7B26\u4E32\u663E\u793A\u5360\u4F4D\u7B26\u3002",title:"\u7A7A\u767D\u6570\u636E\u5360\u4F4D\u7B26"},context:{antd:n(88096),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var r=m()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,c));case 3:case"end":return e.stop()}},l)}));function o(){return r.apply(this,arguments)}return o}()}},"src-descriptions-demo-list":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,78984))})),asset:{type:"BLOCK",id:"src-descriptions-demo-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(41226).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var r=m()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,c));case 3:case"end":return e.stop()}},l)}));function o(){return r.apply(this,arguments)}return o}()}},"src-descriptions-demo-ellipsis":{component:a.memo(a.lazy(function(){return Promise.all([n.e(6566),n.e(4550),n.e(2433)]).then(n.bind(n,17549))})),asset:{type:"BLOCK",id:"src-descriptions-demo-ellipsis",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(39670).Z},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx",description:"\u5F53\u6587\u6848\u8FC7\u957F\u7684\u65F6\u5019\u51FA\u73B0\u7701\u7565\u53F7\uFF0C\u5E76\u4E14\u4F7F\u7528 Tooltip \u663E\u793A\u5B8C\u6574\u6587\u6848\u3002",title:"\u6587\u5B57\u7701\u7565"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var r=m()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,c));case 3:case"end":return e.stop()}},l)}));function o(){return r.apply(this,arguments)}return o}()}}}},3121:function(p,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"0.0.12+",paraId:0},{value:"\u6210\u7EC4\u5C55\u793A\u591A\u4E2A\u53EA\u8BFB\u5B57\u6BB5\u3002",paraId:1,tocIndex:0},{value:"\u5E38\u89C1\u4E8E\u8BE6\u60C5\u9875\u7684\u4FE1\u606F\u5C55\u793A\u3002",paraId:2,tocIndex:1},{value:`// antd >= 5.8.0 \u53EF\u7528\uFF0C\u63A8\u8350\u7684\u5199\u6CD5 \u2705

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: <p>Zhou Maomao</p>,
  },
  {
    key: '2',
    label: 'Telephone',
    children: <p>1810000000</p>,
  },
  {
    key: '3',
    label: 'Live',
    children: <p>Hangzhou, Zhejiang</p>,
  },
  {
    key: '4',
    label: 'Remark',
    children: <p>empty</p>,
  },
  {
    key: '5',
    label: 'Address',
    children: (
      <p>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</p>
    ),
  },
]

;<Descriptions title="User Info" items={items} />

// antd <5.8.0 \u53EF\u7528\uFF0Cantd >=5.8.0 \u65F6\u4E0D\u63A8\u8350 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F

;<Descriptions title="User Info">
  <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
  <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
  <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
  <Descriptions.Item label="Remark">empty</Descriptions.Item>
  <Descriptions.Item label="Address">
    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
  </Descriptions.Item>
</Descriptions>
`,paraId:3,tocIndex:1},{value:"0.0.13+",paraId:4},{value:"0.2.0+",paraId:5},{value:"0.2.15+",paraId:6},{value:"\u5728\u539F ",paraId:7,tocIndex:9},{value:"Descriptions",paraId:7,tocIndex:9},{value:" \u4E0A\u6DFB\u52A0\u4E86 ",paraId:7,tocIndex:9},{value:"Descriptions.Card",paraId:7,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u4E86\u7C7B\u4F3C\u5361\u7247\u7684\u7684\u6837\u5B50\u3002",paraId:7,tocIndex:9},{value:"Descriptions.List",paraId:8,tocIndex:9},{value:" \u65B0\u589E ",paraId:8,tocIndex:9},{value:"card",paraId:8,tocIndex:9},{value:"\u3001",paraId:8,tocIndex:9},{value:"cardProps",paraId:8,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:8,tocIndex:9},{value:"\u66F4\u591A\u8BE6\u7EC6 API \u8BF7\u67E5\u770B ",paraId:9,tocIndex:9},{value:"Descriptions \u63CF\u8FF0\u5217\u8868",paraId:9,tocIndex:9},{value:"\uFF0C\u4EE5\u4E0B\u4E3A\u6269\u5C55\u7684 API\u3002",paraId:9,tocIndex:9}]},33194:function(p,t){t.Z=`import React from 'react'

import {
  Descriptions,
  Layout,
  Card,
  ProTooltip,
} from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Layout.Content>
      <Card.Group>
        <Descriptions.Card
          title="Descriptions.Card"
          extra={<a>\u64CD\u4F5C\u6309\u94AE</a>}
          className="JUST_TEST_CLASS_NAME"
          labelWidth="90px">
          <Descriptions.Item label="JSX">
            Descriptions.Card\uFF0C\u9002\u5408\u72EC\u7ACB\u7684\u57FA\u7840\u4FE1\u606F\u6A21\u5757\uFF0C\u4E0B\u8FB9\u8DDD\u9700\u8981\u81EA\u5DF1\u5904\u7406
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <ProTooltip title="UserName \u662F\u5F88\u5947\u602A\u7684">UserName</ProTooltip>
            }
            labelWidth="120px">
            \u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341
          </Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="Test">
            \u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341
          </Descriptions.Item>
        </Descriptions.Card>

        <Descriptions
          showEmpty
          items={[
            {
              key: '1',
              label: (
                <ProTooltip title="UserName \u662F\u5F88\u5947\u602A\u7684">UserName</ProTooltip>
              ),
              labelWidth: '110px',
              children: (
                <p>
                  \u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341
                </p>
              ),
            },
            {
              key: '2',
              label: 'Telephone',
              children: undefined,
            },
            {
              key: '3',
              label: 'Live',
              children: <p>Hangzhou, Zhejiang</p>,
            },
            {
              key: '4',
              label: 'Remark',
              children: '',
            },
            {
              key: '5',
              label: 'Address',
              children: (
                <p>
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </p>
              ),
            },
          ]}
        />

        <Card title="\u5D4C\u5957\u7EC4\u5408" bodyPadding={{ left: 0, right: 0, bottom: 0 }}>
          <Descriptions>
            <Descriptions.Item label="JSX">
              Descriptions \u5D4C\u5957\u5728 Card \u5185\u90E8
            </Descriptions.Item>
            <Descriptions.Item label="UserName">
              \u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>

          <Descriptions.Card title="Descriptions.Card" type="subtype" concise>
            <Descriptions.Item label="JSX">
              {\`bodyPadding={{ bottom: 8, top: 4, left: 0, right: 0 }} type="subtype"\`}
            </Descriptions.Item>
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions.Card>
        </Card>

        <Descriptions.Card title="Descriptions.Card" bodyPadding={false}>
          <Descriptions.Item label="JSX">
            {\`bodyPadding={false}\`}
          </Descriptions.Item>
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions.Card>

        <Descriptions.Card title="Descriptions.Card" type="subtype">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions.Card>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`},39670:function(p,t){t.Z=`import React from 'react'

import { Descriptions, Layout, Card } from '@fruits-chain/react-bailu'

const content =
  '\u539F\u8C05\u6211 \u8FD9\u4E00\u9996 \u4E0D\u4E3A\u8C01\u800C\u4F5C\u7684\u6B4C \u611F\u89C9\u4E0A\u4EFF\u4F5B\u7A97\u5916\u7684\u591C\u8272 \u66FE\u7ECF\u6709 \u90A3\u4E00\u523B \u56DE\u5934\u7ADF\u7136\u8BA4\u4E0D\u5F97 \u9700\u8981 \u4ECE\u8BB0\u5FC6\u518D\u6478\u7D22 \u7684\u4EBA \u548C\u4ED6\u4EEC\u5173\u5FC3\u7684 \u7684\u5730\u65B9 \u548C\u90A3\u4E9B\u8D70\u8FC7\u7684 \u8BF7\u7B49\u4E00\u7B49 \u68A6\u4E3A\u52AA\u529B\u6D47\u4E86\u6C34 \u7231\u5728\u80CC\u540E\u5F80\u524D\u63A8 \u5F53\u6211\u62AC\u8D77\u5934\u624D\u53D1\u89C9 \u6211\u662F\u4E0D\u662F\u5FD8\u4E86\u8C01 \u7D2F\u5230\u6574\u591C\u4E0D\u80FD\u7761 \u591C\u8272\u54EA\u91CC\u90FD\u662F\u7F8E \u4E00\u5B9A\u6709\u4E2A\u4EBA\u4ED6 \u8EB2\u8FC7 \u907F\u8FC7 \u95EA\u8FC7 \u7792\u8FC7 \u4ED6\u662F\u8C01 \u4ED6\u662F\u8C01'

const Demo: React.FC = () => {
  return (
    <Layout.Content>
      <Card.Group>
        <Descriptions.Card title="\u6587\u5B57\u7701\u7565">
          <Descriptions.Item label="\u65E0\u7701\u7565">{content}</Descriptions.Item>
          <Descriptions.Item label="\u9ED8\u8BA4\u7701\u7565">
            <Descriptions.Ellipsis content={content} />
          </Descriptions.Item>
          <Descriptions.Item label="\u81EA\u5B9A\u4E49">
            <Descriptions.Ellipsis
              content={content}
              rows={1}
              placement="bottomLeft"
            />
          </Descriptions.Item>
        </Descriptions.Card>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`},77497:function(p,t){t.Z=`import { Switch } from 'antd'
import React, { useState } from 'react'

import { Descriptions, Layout, Card } from '@fruits-chain/react-bailu'

const TEXT_MAP: Record<string, string | null | undefined> = {
  a: 'asd',
  b: null,
  c: undefined,
  d: '',
}
const TEXT_MAP_REAL: Record<string, string | null | undefined> = {
  a: '\u4F60\u662F \u9065\u9065\u7684\u8DEF',
  b: '\u5C71\u91CE\u5927\u96FE\u91CC\u7684\u706F',
  c: '\u6211\u662F\u5B69\u7AE5\u554A \u8D70\u5728\u4F60\u7684\u773C\u7738',
  d: '\u4F60\u662F \u660E\u6708\u6E05\u98CE',
}

const Demo: React.FC = () => {
  const [texts, setTexts] = useState(TEXT_MAP)

  return (
    <Layout.Content>
      <Switch
        onChange={v => {
          setTexts(v ? TEXT_MAP_REAL : TEXT_MAP)
        }}
      />

      <Card.Group>
        <Descriptions.Card showEmpty title="\u4E00\u4E2A">
          <Descriptions.Item label="UserName">{texts.b}</Descriptions.Item>
        </Descriptions.Card>

        <Descriptions.Card showEmpty title="\u591A\u4E2A">
          <Descriptions.Item label="UserName">{texts.a}</Descriptions.Item>
          <Descriptions.Item label="Telephone">{texts.b}</Descriptions.Item>
          <Descriptions.Item label="Live">{texts.c}</Descriptions.Item>
          <Descriptions.Item label="Remark">{texts.d}</Descriptions.Item>
          <Descriptions.Item label="Remark2" empty="==>">
            {texts.d}
          </Descriptions.Item>
          <Descriptions.Item label="Remark3" showEmpty={false}>
            {texts.d}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="\u4E24\u4E2A\u5B57\u6BB5:\u9519\u8BEF">
            {texts.b}
            {texts.c}
          </Descriptions.Item>
          <Descriptions.Item label="\u4E24\u4E2A\u5B57\u6BB5:\u6B63\u786E">
            {\`\${texts.b || ''}\${texts.c || ''}\`}
          </Descriptions.Item>
          <Descriptions.Item label="\u771F\u7684\u5224\u65AD\u4E0D\u4E86">
            <a>{texts.b}</a>
          </Descriptions.Item>
        </Descriptions.Card>
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`},41226:function(p,t){t.Z=`import React from 'react'

import { Card, Descriptions, Layout } from '@fruits-chain/react-bailu'

const items = new Array(10).fill(0).map((_, index) => ({
  label: \`\u7B2C\${index}\u4E2A\u6807\u9898\`,
  children: \`\u7B2C\${index}\u4E2A\u5185\u5BB9\`,
  labelStyle: index === 1 ? { color: '#f30' } : undefined,
}))

const Demo: React.FC = () => {
  return (
    <Layout.Content>
      <Card.Group>
        <Descriptions.List items={items} />

        <Descriptions.List items={items} title="\u6807\u9898\u5462" />

        <Descriptions.List items={items} card title="\u6807\u9898\u5462" column={4} />
      </Card.Group>
    </Layout.Content>
  )
}

export default Demo
`}}]);
