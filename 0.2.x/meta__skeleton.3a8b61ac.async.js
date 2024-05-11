"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[4311],{68998:function(l,t,n){n.r(t),n.d(t,{demos:function(){return o}});var a=n(67294),o={}},35016:function(l,t,n){n.r(t),n.d(t,{demos:function(){return o}});var a=n(67294),o={}},80568:function(l,t,n){n.r(t),n.d(t,{demos:function(){return v}});var a=n(15009),o=n.n(a),f=n(99289),p=n.n(f),s=n(67294),v={"src-skeleton-demo-app":{component:s.memo(s.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,65783))})),asset:{type:"BLOCK",id:"src-skeleton-demo-app",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(68649).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u901A\u8FC7 loading \u63A7\u5236\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5C4F\u3002",title:"\u5E94\u7528\u9AA8\u67B6\u5C4F"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var d=p()(o()().mark(function u(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},u)}));function i(){return d.apply(this,arguments)}return i}()}},"src-skeleton-demo-layout":{component:s.memo(s.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,71243))})),asset:{type:"BLOCK",id:"src-skeleton-demo-layout",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(47937).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u5934\u90E8\u3001\u4FA7\u8FB9\u680F\u90FD\u53EF\u4EE5\u63A7\u5236\u662F\u5426\u663E\u793A\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u5D4C\u5165\u573A\u666F\u3002",title:"\u5E94\u7528\u9AA8\u67B6\u5C4F\u5E03\u5C40"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var d=p()(o()().mark(function u(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},u)}));function i(){return d.apply(this,arguments)}return i}()}},"src-skeleton-demo-detail-page":{component:s.memo(s.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,24162))})),asset:{type:"BLOCK",id:"src-skeleton-demo-detail-page",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(69304).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u5728\u8BE6\u60C5\u9875\u4E2D\u4F7F\u7528\u3002",title:"\u8BE6\u60C5\u9875\u52A0\u8F7D\u63D0\u793A"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var d=p()(o()().mark(function u(){var r,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},u)}));function i(){return d.apply(this,arguments)}return i}()}}}},93636:function(l,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[]},37742:function(l,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[]},82642:function(l,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"\u7B49\u5F85\u9884\u52A0\u8F7D\u6570\u636E\u65F6\u7684\u7AD9\u4F4D\u3002",paraId:0,tocIndex:0},{value:"\u542F\u52A8\u5E94\u7528\u65F6\u9884\u52A0\u8F7D\u7528\u6237\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u61D2\u52A0\u8F7D\u8DEF\u7531\u7EC4\u4EF6",paraId:1,tocIndex:1}]},68649:function(l,t){t.Z=`import { Button, Divider, Row, Col } from 'antd'
import React, { useState } from 'react'

import { Skeleton, Card, Layout } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Button type="primary" onClick={() => setLoading(v => !v)}>
        \u5207\u6362 loading
      </Button>

      <Divider />

      <Row gutter={24}>
        <Col span={12}>
          <div style={{ height: 600 }}>
            <Skeleton.App loading={loading} sidebarWidth={120}>
              <p>\u771F\u5B9E\u5E94\u7528A</p>
            </Skeleton.App>
          </div>
        </Col>
        <Col span={12}>
          <Skeleton.App loading={loading} sidebarWidth={100}>
            <p>\u771F\u5B9E\u5E94\u7528B</p>
          </Skeleton.App>
        </Col>
      </Row>

      <Divider />

      <p>\u5404\u90E8\u4EF6\u5355\u72EC\u4F7F\u7528</p>

      <Layout.Content>
        <Card.Group>
          <Skeleton.Header />

          <Skeleton.Sidebar />

          <Skeleton.SearchForm />

          <Skeleton.Table columns={9} />
        </Card.Group>
      </Layout.Content>
    </>
  )
}

export default Demo
`},69304:function(l,t){t.Z=`import { Divider, Button, Space } from 'antd'
import React, { useState } from 'react'

import { Skeleton, Layout, Card } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [fail, setFail] = useState(true)

  return (
    <>
      <Card.Group>
        <Space>
          <Button
            onClick={() => {
              setLoading(v => !v)
            }}>
            loading \u5207\u6362
          </Button>

          <Button
            onClick={() => {
              setFail(v => !v)
            }}>
            fail \u5207\u6362
          </Button>
        </Space>

        <Layout.Content>
          <Skeleton.DetailPage
            loading={loading}
            fail={fail}
            onClickReload={() => {
              setLoading(v => !v)
            }}>
            <Card title="\u5185\u5BB9">
              <p>\u5185\u5FC3</p>
            </Card>
          </Skeleton.DetailPage>
        </Layout.Content>
      </Card.Group>

      <Divider />

      <p>\u5404\u90E8\u4EF6\u5355\u72EC\u4F7F\u7528</p>

      <Layout.Content>
        <Skeleton.Card />
      </Layout.Content>
    </>
  )
}

export default Demo
`},47937:function(l,t){t.Z=`import { Divider } from 'antd'
import React from 'react'

import { Skeleton } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <>
      <Skeleton.App loading showHeader={false}>
        <p>\u771F\u5B9E\u5E94\u7528</p>
      </Skeleton.App>

      <Divider />

      <Skeleton.App loading showSidebar={false}>
        <p>\u771F\u5B9E\u5E94\u7528</p>
      </Skeleton.App>

      <Divider />

      <Skeleton.App loading showHeader={false} showSidebar={false}>
        <p>\u771F\u5B9E\u5E94\u7528</p>
      </Skeleton.App>

      <Divider />

      <div style={{ border: '1px solid #000' }}>
        <Skeleton.App
          loading
          showHeader={false}
          showSidebar={false}
          ctxMargin="0">
          <p>\u771F\u5B9E\u5E94\u7528</p>
        </Skeleton.App>
      </div>
    </>
  )
}

export default Demo
`}}]);
