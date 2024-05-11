"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[6607],{74310:function(r,e,n){n.r(e),n.d(e,{demos:function(){return s}});var a=n(15009),d=n.n(a),i=n(99289),u=n.n(i),o=n(67294),s={"head-anchor-demo-base":{component:o.memo(o.lazy(function(){return n.e(5760).then(n.bind(n,64807))})),asset:{type:"BLOCK",id:"head-anchor-demo-base",refAtomIds:["head-anchor"],dependencies:{"index.tsx":{type:"FILE",value:n(27666).Z},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:null,title:"\u57FA\u7840\u7684\u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6"},context:{react:n(67294),"@fruits-chain/react-bailu":n(31081)},renderOpts:{compile:function(){var m=u()(d()().mark(function c(){var l,_=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,_));case 3:case"end":return t.stop()}},c)}));function C(){return m.apply(this,arguments)}return C}()}}}},49946:function(r,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u9002\u7528\u4E8E\u8BE6\u60C5\u9875\u9762\u9876\u90E8\u951A\u70B9\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u7528\u8BE6\u60C5\u9875\u9762\u9876\u90E8\u7684\u951A\u70B9\u7EC4\u4EF6",paraId:1,tocIndex:1}]},27666:function(r,e){e.Z=`import React from 'react'

import { Card, Layout, Table, HeadAnchor } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <div
      id="scrollContent"
      style={{
        height: '600px',
        overflow: 'auto',
      }}>
      <HeadAnchor
        list={[
          { key: 'Card1', title: 'Card1' },
          { key: 'Card2', title: 'Card2' },
          { key: 'Card3', title: 'Card3' },
          { key: 'Card4', title: 'Card4' },
          { key: 'Card5', title: 'Card5' },
          { key: 'Card6', title: 'Card6' },
        ]}
        getContainer={() =>
          document.getElementById('scrollContent') as HTMLElement
        }
        getContent={() => document.getElementById('content') as HTMLElement}
        offsetTop={62}
      />
      <div id="content">
        <Layout.Content>
          <Card.Group>
            <Card id="Card1" title="Card1" extra={<a>\u64CD\u4F5C\u533A\u57DF</a>}>
              <p>\u8FD9\u5C31\u662F body</p>
            </Card>

            <Card id="Card2" title="Card2" gray extra={<a>\u64CD\u4F5C\u533A\u57DF</a>}>
              <Card title="\u67D0\u4E2A Form.List \u7684\u533A\u57DF:formList" formList>
                <p>\u8FD9\u5C31\u662F body</p>
              </Card>
              <p>\u8FD9\u5C31\u662F body</p>
            </Card>

            <Card id="Card3" title="Card3" extra={<a>\u64CD\u4F5C\u6309\u94AE</a>} concise>
              <p>\u8FD8\u6CA1\u6709\u5916\u90E8\u5DE6\u53F3\u8FB9\u8DDD</p>
            </Card>

            <Card
              id="Card4"
              title="Card4"
              extra={<a>\u64CD\u4F5C\u6309\u94AE</a>}
              type="subtype"
              bodyPadding={false}>
              <p>title \u6837\u5F0F\u4E0D\u4E00\u6837\uFF0C\u901A\u5E38\u7528\u4E8E\u5D4C\u5957\u5F97\u5230 Card \u5185\u90E8\u4F7F\u7528</p>
            </Card>

            <Card
              id="Card5"
              title="Card5"
              extra={<a>\u64CD\u4F5C\u6309\u94AE</a>}
              bodyPadding={{
                left: false,
                right: false,
                top: false,
                bottom: true,
              }}>
              <Card
                title="\u8C03\u5165\u65B9\u8FD0\u6742\u8D39"
                type="subtype"
                concise
                bodyPadding={false}>
                <Table
                  bordered
                  columns={[
                    {
                      title: '\u8D39\u7528\u7C7B\u578B',
                      width: 180,
                    },
                    {
                      title: '\u4F9B\u5E94\u5546',
                      width: 180,
                    },
                    {
                      title: '\u7ED3\u7B97\u65B9\u5F0F',
                      width: 120,
                    },
                    {
                      title: '\u8F66\u724C\u53F7',
                      width: 120,
                    },
                    {
                      title: '\u8054\u7CFB\u7535\u8BDD',
                      width: 120,
                    },
                    {
                      title: '\u5907\u6CE8',
                    },
                    {
                      title: '\u91D1\u989D\uFF08\u5143\uFF09',
                      width: 180,
                    },
                  ]}
                />
              </Card>

              <Card
                id="Card6"
                title="Card6"
                type="subtype"
                concise
                bodyPadding={false}>
                <Table bordered />
              </Card>
            </Card>
          </Card.Group>
        </Layout.Content>
      </div>
    </div>
  )
}

export default Demo
`}}]);
