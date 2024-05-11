"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[7319],{9893:function(i,n,e){e.r(n),e.d(n,{demos:function(){return u}});var a=e(15009),o=e.n(a),r=e(99289),s=e.n(r),l=e(67294),u={"src-preview-demo-base":{component:l.memo(l.lazy(function(){return Promise.all([e.e(1734),e.e(4550),e.e(2433)]).then(e.bind(e,12901))})),asset:{type:"BLOCK",id:"src-preview-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(46382).Z},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"}},entry:"index.tsx",description:"\u652F\u6301\u7EC4\u4EF6\u8C03\u7528\uFF0C\u51FD\u6570\u5F0F\u8C03\u7528",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:e(26868),react:e(67294),"@fruits-chain/react-bailu":e(31081)},renderOpts:{compile:function(){var c=s()(o()().mark(function p(){var d,m=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,m));case 3:case"end":return t.stop()}},p)}));function f(){return c.apply(this,arguments)}return f}()}}}},78219:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"0.2.25+",paraId:0},{value:"\u57FA\u4E8E Upload \u7EC4\u4EF6\uFF0C\u652F\u6301\u6240\u6709 Upload \u7EC4\u4EF6\u7684\u7279\u6027",paraId:1,tocIndex:1},{value:" video \u9884\u89C8",paraId:2,tocIndex:2},{value:" excel \u9884\u89C8?",paraId:2,tocIndex:2},{value:" doc \u9884\u89C8?",paraId:2,tocIndex:2}]},46382:function(i,n){n.Z=`import { Button } from 'antd'
import React, { useState } from 'react'

import {
  BailuConfigProvider,
  Preview,
  ProSpace,
} from '@fruits-chain/react-bailu'

const Demo: React.FC = () => {
  const [files1] = useState<any[]>([
    {
      direction: 'JUST',
      fileId: 'c6b06d2f0364787bacd365403091c159.jpeg',
      fileUploadTime: 0,
      fileUrl:
        'https://test-resource.iwubida.com/retail/2020/05/181032553589768192.png',
      filename: '26362957.jpeg',
    },
    {
      direction: 'JUST',
      fileId: 'c6b06d2f0364787bacd365403091c159.jpeg',
      fileUploadTime: 0,
      fileUrl:
        'https://www.sony.com.cn/etc/designs/sonyportal/image/index/sonyLogo20131220.jpg',
      filename: '26362957.jpeg',
    },
  ])

  return (
    <BailuConfigProvider
      token="kktJLMPhAtduLA0Jl5dXqull5LtuDGmM9saoDkA++mc6rA25bzpb5i88C80r9uzFVDafKHPU4GhVAKk9Dy11sQscFeXg+8jEFXYHTurYJvwxOX2SbtTMTavm+dqihGKf"
      uploadHost="https://boss-test.hjfruit.cn">
      <ProSpace direction="vertical">
        <p>\u666E\u901A\u7684</p>
        <Preview data={files1?.map(v => ({ ...v, url: v?.fileUrl }))} />
        <p>\u53EA\u5C55\u793A\u7B2C\u4E00\u5F20</p>
        <Preview
          data={files1?.map(v => ({ ...v, url: v?.fileUrl }))}
          multiple={false}
        />
        <p>\u81EA\u52A8\u83B7\u53D6\u9274\u6743\u8FC7\u540E\u7684\u8D44\u6E90</p>
        <Preview
          autoGetAuthorized
          data={[
            {
              uid: 'rc-upload-1702912048034-13',
              lastModified: 1689055463903,
              lastModifiedDate: '2023-07-11T06:04:23.903Z',
              name: '26362957.jpeg',
              size: 16003,
              type: 'image/jpeg',
              percent: 100,
              originFileObj: {
                uid: 'rc-upload-1702912048034-13',
              },
              status: 'done',
              response: {
                fileId: 'c6b06d2f0364787bacd365403091c159.jpeg',
                fileUrl:
                  'https://file-007.obs.cn-southwest-2.myhuaweicloud.com/c6b06d2f0364787bacd365403091c159.jpeg',
                filename: '26362957.jpeg',
              },
              filename: '26362957.jpeg',
              fileUrl:
                'https://file-007.obs.cn-southwest-2.myhuaweicloud.com/c6b06d2f0364787bacd365403091c159.jpeg',
              fileId: 'c6b06d2f0364787bacd365403091c159.jpeg',
              url: 'https://file-007.obs.cn-southwest-2.myhuaweicloud.com/c6b06d2f0364787bacd365403091c159.jpeg',
            },
            {
              uid: 'rc-upload-1702912048034-15',
              lastModified: 1690868693431,
              lastModifiedDate: '2023-08-01T05:44:53.431Z',
              name: '\u5706\u5F62 25.png',
              size: 566,
              type: 'image/png',
              percent: 100,
              originFileObj: {
                uid: 'rc-upload-1702912048034-15',
              },
              status: 'done',
              response: {
                fileId: '45af99e61680bcf9ae349e799da6afd2.png',
                fileUrl:
                  'https://file-007.obs.cn-southwest-2.myhuaweicloud.com/45af99e61680bcf9ae349e799da6afd2.png',
                filename: '\u5706\u5F62 25.png',
              },
              filename: '\u5706\u5F62 25.png',
              fileUrl:
                'https://file-007.obs.cn-southwest-2.myhuaweicloud.com/45af99e61680bcf9ae349e799da6afd2.png',
              fileId: '45af99e61680bcf9ae349e799da6afd2.png',
              url: 'https://file-007.obs.cn-southwest-2.myhuaweicloud.com/45af99e61680bcf9ae349e799da6afd2.png',
            },
          ]}
        />
        <Button
          onClick={() => {
            Preview.openPreview({
              data: {
                url: 'https://test-resource.iwubida.com/retail/2020/05/181032553589768192.png',
              },
            })
          }}>
          \u51FD\u6570\u5F0F\u8C03\u7528
        </Button>

        <br />
      </ProSpace>
    </BailuConfigProvider>
  )
}

export default Demo
`}}]);
