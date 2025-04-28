"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[1892],{39093:function(o,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const l=a(e(13447));function a(n){return n&&n.__esModule?n:{default:n}}const r=l;t.default=r,o.exports=r},13447:function(o,t,e){var l=e(95868).default,a=e(72093).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(e(98041)),n=l(e(67294)),d=a(e(26498)),i=a(e(92074)),c=function(m,v){return n.createElement(i.default,(0,r.default)({},m,{ref:v,icon:d.default}))},s=n.forwardRef(c),f=t.default=s},47175:function(o,t,e){e.r(t),e.d(t,{demos:function(){return i}});var l=e(15009),a=e.n(l),r=e(99289),n=e.n(r),d=e(67294),i={"pro-tooltip-demo-base":{component:d.memo(d.lazy(function(){return e.e(8491).then(e.bind(e,3915))})),asset:{type:"BLOCK",id:"pro-tooltip-demo-base",refAtomIds:["pro-tooltip"],dependencies:{"index.tsx":{type:"FILE",value:e(23553).Z},"@ant-design/icons":{type:"NPM",value:"5.6.1"},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.2"}},entry:"index.tsx"},context:{"@ant-design/icons/UpCircleOutlined":e(39093),antd:e(88096),react:e(67294),"@fruits-chain/react-bailu":e(31081)},renderOpts:{compile:function(){var c=n()(a()().mark(function f(){var p,m=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(7335).then(e.bind(e,37335));case 2:return u.abrupt("return",(p=u.sent).default.apply(p,m));case 3:case"end":return u.stop()}},f)}));function s(){return c.apply(this,arguments)}return s}()}}}},26498:function(o,t){Object.defineProperty(t,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"};t.default=e},20477:function(o,t,e){e.r(t),e.d(t,{texts:function(){return l}});const l=[{value:"0.2.0+",paraId:0},{value:"\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002",paraId:1,tocIndex:0},{value:"\u9F20\u6807\u79FB\u5165\u5219\u663E\u793A\u63D0\u793A\uFF0C\u79FB\u51FA\u6D88\u5931\uFF0C\u6C14\u6CE1\u6D6E\u5C42\u4E0D\u627F\u8F7D\u590D\u6742\u6587\u672C\u548C\u64CD\u4F5C\u3002",paraId:2,tocIndex:1},{value:"\u53EF\u7528\u6765\u4EE3\u66FF\u7CFB\u7EDF\u9ED8\u8BA4\u7684 ",paraId:3,tocIndex:1},{value:"title",paraId:3,tocIndex:1},{value:" \u63D0\u793A\uFF0C\u63D0\u4F9B\u4E00\u4E2A ",paraId:3,tocIndex:1},{value:"\u6309\u94AE/\u6587\u5B57/\u64CD\u4F5C",paraId:3,tocIndex:1},{value:" \u7684\u6587\u6848\u89E3\u91CA\u3002",paraId:3,tocIndex:1},{value:"\u5176\u4ED6\u5C5E\u6027\u4E0E ",paraId:4,tocIndex:3},{value:"Tooltip",paraId:4,tocIndex:3},{value:" \u4FDD\u6301\u4E00\u81F4\uFF0C\u8BE6\u60C5\u8BF7\u770B ",paraId:4,tocIndex:3},{value:"Tooltip \u6587\u5B57\u63D0\u793A",paraId:4,tocIndex:3}]},23553:function(o,t){t.Z=`import UpCircleOutlined from '@ant-design/icons/UpCircleOutlined'
import { Space } from 'antd'
import React from 'react'

import { Card, ProTooltip } from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  return (
    <Card.Group>
      <Space>
        <ProTooltip placement="topLeft" title="Prompt Text">
          <span style={{ color: '#098' }}>Align edge / \u8FB9\u7F18\u5BF9\u9F50</span>
        </ProTooltip>

        <ProTooltip title="Prompt Text" iconPosition="left">
          Align edge / \u8FB9\u7F18\u5BF9\u9F50
        </ProTooltip>
      </Space>

      <Space>
        <ProTooltip
          placement="topLeft"
          title="Prompt Text"
          icon={<UpCircleOutlined />}>
          Align edge / \u8FB9\u7F18\u5BF9\u9F50
        </ProTooltip>
      </Space>
    </Card.Group>
  )
}

export default Demo
`}}]);
