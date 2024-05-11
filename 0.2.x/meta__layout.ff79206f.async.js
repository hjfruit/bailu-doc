"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8115],{51469:function(p,e,n){n.r(e),n.d(e,{demos:function(){return y}});var i=n(15009),a=n.n(i),f=n(99289),c=n.n(f),o=n(67294),y={"src-layout-demo-demo1":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,99990))})),asset:{type:"BLOCK",id:"src-layout-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(94614).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u4E3B\u4F53\u5185\u5BB9\u57FA\u672C\u5E03\u5C40\u3002",title:"\u666E\u901A\u5E03\u5C40"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=c()(a()().mark(function m(){var r,l=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},m)}));function d(){return u.apply(this,arguments)}return d}()}},"src-layout-demo-demo2":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,66068))})),asset:{type:"BLOCK",id:"src-layout-demo-demo2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(46812).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u6709\u4FA7\u8FB9\u680F\u7684\u5E03\u5C40\u3002",title:"\u6709\u4FA7\u8FB9\u680F"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=c()(a()().mark(function m(){var r,l=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},m)}));function d(){return u.apply(this,arguments)}return d}()}},"src-layout-demo-demo3":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9542),n.e(4550),n.e(2433)]).then(n.bind(n,40225))})),asset:{type:"BLOCK",id:"src-layout-demo-demo3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(46490).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"}},entry:"index.tsx",description:"\u4E3B\u4F53\u5185+\u5E95\u90E8Bar\u7684\u5BB9\u57FA\u672C\u5E03\u5C40\u3002",title:"\u5E95\u90E8Bar\u5E03\u5C40"},context:{antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var u=c()(a()().mark(function m(){var r,l=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},m)}));function d(){return u.apply(this,arguments)}return d}()}}}},18332:function(p,e,n){n.r(e),n.d(e,{texts:function(){return i}});const i=[{value:"\u7528\u4E8E\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u7684\u5217\u8868\u9875\u548C\u8BE6\u60C5\u9875\u4E3B\u4F53\u5185\u5BB9\u7684\u5E03\u5C40",paraId:0,tocIndex:0},{value:"\u5176\u4ED6\u5C5E\u6027\u4E0E ",paraId:1,tocIndex:6},{value:"Breadcrumb",paraId:1,tocIndex:6},{value:" \u4FDD\u6301\u4E00\u81F4\uFF0C\u8BE6\u60C5\u8BF7\u770B ",paraId:1,tocIndex:6},{value:"Breadcrumb\u9762\u5305\u5C51",paraId:1,tocIndex:6}]},94614:function(p,e){e.Z=`import { Breadcrumb } from 'antd'
import React from 'react'

import { Layout, Card } from '@fruits-chain/react-bailu'

const Demo1: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', border: '1px solid #f2f2f2' }}>
      <Layout.Breadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Layout.Breadcrumb>

      <Layout.Content>
        <Card.Group>
          <Card title="\u6807\u9898">
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
          </Card>

          <Card title="\u6807\u9898">
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
          </Card>
        </Card.Group>
      </Layout.Content>
    </div>
  )
}

export default Demo1
`},46812:function(p,e){e.Z=`import { Breadcrumb } from 'antd'
import React from 'react'

import { Layout, Card } from '@fruits-chain/react-bailu'

const Demo2: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', border: '1px solid #f2f2f2' }}>
      <Layout.Breadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Layout.Breadcrumb>

      <Layout.Content sider={<div>\u4FA7\u8FB9\u680F\u533A\u57DF</div>}>
        <Card.Group>
          <Card title="\u6807\u9898">
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
          </Card>

          <Card title="\u6807\u9898">
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
          </Card>
        </Card.Group>
      </Layout.Content>
    </div>
  )
}

export default Demo2
`},46490:function(p,e){e.Z=`import { Breadcrumb } from 'antd'
import React from 'react'

import { Layout, Card } from '@fruits-chain/react-bailu'

const Demo1: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', border: '1px solid #f2f2f2' }}>
      <Layout.Breadcrumb>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Layout.Breadcrumb>

      <Layout.Content
        bottomBar={<p>\u6211\u662F\u5E95\u90E8Bar</p>}
        bottomBarStyle={{ backgroundColor: '#fff' }}>
        <Card.Group>
          <Card title="\u6807\u9898">
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
          </Card>

          <Card title="\u6807\u9898">
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
            <p>\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF</p>
          </Card>
        </Card.Group>
      </Layout.Content>
    </div>
  )
}

export default Demo1
`}}]);
