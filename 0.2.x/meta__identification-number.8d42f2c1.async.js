"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[1776],{14126:function(a,e,n){n.r(e),n.d(e,{demos:function(){return u}});var r=n(15009),o=n.n(r),d=n(99289),l=n.n(d),s=n(67294),u={"identification-number-demo-base":{component:s.memo(s.lazy(function(){return n.e(3877).then(n.bind(n,71133))})),asset:{type:"BLOCK",id:"identification-number-demo-base",refAtomIds:["identification-number"],dependencies:{"index.tsx":{type:"FILE",value:n(9065).Z},"@apollo/client/testing":{type:"NPM"},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.26"},"../gql.ts":{type:"FILE",value:n(95838).Z},"@apollo/client":{type:"NPM",value:"3.10.3"}},entry:"index.tsx",description:"\u67E5\u8BE2\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u67E5\u8BE2",title:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u67E5\u8BE2"},context:{"@apollo/client/testing":n(51267),antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081),"../gql.ts":n(49158),"@apollo/client":n(82446)},renderOpts:{compile:function(){var m=l()(o()().mark(function c(){var i,y=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,y));case 3:case"end":return t.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}}}},82437:function(a,e,n){n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"0.2.26+",paraId:0},{value:"\u7528\u4E8E\u67E5\u8BE2\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u573A\u666F\u3002",paraId:1,tocIndex:0}]},9065:function(a,e){e.Z=`import { MockedProvider } from '@apollo/client/testing'
import { Button, Form } from 'antd'
import React from 'react'

import { Card, IdentificationNumber, Layout } from '@fruits-chain/react-bailu'

import { CorpBaseDocument, CorpDetailDocument } from '../gql'
const mocks = [
  {
    request: {
      query: CorpBaseDocument,
      variables: {
        input: {
          keyword: '12',
        },
      },
    },
    result: {
      data: {
        CorpBase: {
          creditCode: '2213123',
          name: 'name',
          no: 'no',
          operName: '\u4EBAname',
        },
      },
    },
  },
  {
    request: {
      query: CorpDetailDocument,
      variables: {
        input: {
          keyword: '12',
        },
      },
    },
    result: {
      data: {
        CorpDetail: {
          address: 'address',
          annualAddress: 'address',
          area: {
            city: 'address',
            county: 'address',
            province: 'address',
          },
          bankInfo: {
            address: 'address',
            bank: 'address',
            bankAccount: 'address',
            creditCode: 'address',
            name: 'address',
            tel: 'address',
          },
          contactInfo: {
            email: 'address',
            moreEmailList: [
              {
                email: 'address',
                source: 'address',
              },
            ],
            moreTelList: [
              {
                source: 'address',
                tel: 'address',
              },
            ],
            tel: 'address',
            webSiteList: ['address'],
          },
          creditCode: 'address',
          englishName: 'address',
          longLat: {
            latitude: 'address',
            longitude: 'address',
          },
          name: 'address',
          no: 'address',
          operName: 'address',
          registCapi: 'address',
          scope: 'address',
          startDate: 'address',
          status: 'address',
          taxNo: 'address',
          taxpayerType: 'address',
        },
      },
    },
  },
]
const Demo: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <MockedProvider mocks={mocks}>
      <Layout.Content>
        <Card.Group>
          <Card.Table>
            <Form form={form} layout="vertical">
              <Form.Item name="identificationNumber">
                <IdentificationNumber
                  defaultValue="12"
                  style={{ width: '220px' }}
                  onGetCorpBase={data => {
                    console.log('base', data)
                  }}
                  onGetCorpDetail={data => {
                    console.log('detail', data)
                  }}
                />
              </Form.Item>
              <Form.Item name="identificationNumber1">
                <IdentificationNumber
                  onGetCorpBase={data => {
                    console.log('base', data)
                  }}
                  onGetCorpDetail={data => {
                    console.log('detail', data)
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
    </MockedProvider>
  )
}

export default Demo
`},95838:function(a,e){e.Z=`import { gql } from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: number
  Date: number
  DateTime: number
  Instant: any
  Long: number
  Object: any
  Short: any
}

export const enum CorpRegisterStatus {
  /** \u5F02\u5E38 */
  Abnormal = 'ABNORMAL',
  /** \u6CE8\u9500 */
  Logout = 'LOGOUT',
  /** \u5B58\u7EED */
  Subsist = 'SUBSIST',
  /** \u672A\u77E5 */
  Unrecognized = 'UNRECOGNIZED',
}

export const enum TaxpayerClassEnum {
  /** \u4E00\u822C\u7EB3\u7A0E\u4EBA */
  GeneralTaxpayers = 'GENERAL_TAXPAYERS',
  /** \u589E\u503C\u7A0E\u5C0F\u89C4\u6A21\u7EB3\u7A0E\u4EBA */
  SmallScaleTaxpayers = 'SMALL_SCALE_TAXPAYERS',
  /** \u672A\u77E5 */
  Unrecognized = 'UNRECOGNIZED',
}

export type CorpDetailInput = {
  /** \u641C\u7D22\u5173\u952E\u5B57\uFF08\u4F01\u4E1A\u540D\u79F0\u3001\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u3001\u6CE8\u518C\u53F7\uFF09 */
  keyword?: InputMaybe<Scalars['String']>
}

export type CorpBaseQuery = {
  CorpBase?: {
    __typename?: 'CorpBasePayload'
    creditCode?: string
    name?: string
    no?: string
    operName?: string
  }
}

export type CorpBaseQueryVariables = Exact<{
  input?: InputMaybe<CorpDetailInput>
}>

export type CorpDetailQuery = {
  CorpDetail?: {
    __typename?: 'CorpDetailPayload'
    address?: string
    annualAddress?: string
    creditCode?: string
    englishName?: string
    name?: string
    no?: string
    operName?: string
    registCapi?: string
    scope?: string
    startDate?: number
    status?: CorpRegisterStatus
    taxNo?: string
    taxpayerType?: TaxpayerClassEnum
    area?: {
      __typename?: 'CorpArea'
      city?: string
      county?: string
      province?: string
    }
    bankInfo?: {
      __typename?: 'CorpBackInfo'
      address?: string
      bank?: string
      bankAccount?: string
      creditCode?: string
      name?: string
      tel?: string
    }
    contactInfo?: {
      __typename?: 'CorpContactInfo'
      email?: string
      tel?: string
      webSiteList?: Array<string>
      moreEmailList?: Array<{
        __typename?: 'CorpEmail'
        email?: string
        source?: string
      }>
      moreTelList?: Array<{
        __typename?: 'CorpTel'
        source?: string
        tel?: string
      }>
    }
    longLat?: {
      __typename?: 'CorpLongLat'
      latitude?: number
      longitude?: number
    }
  }
}

export type CorpDetailQueryVariables = Exact<{
  input?: InputMaybe<CorpDetailInput>
}>

export const CorpBaseDocument = gql\`
  query CorpBase($input: CorpBaseInput) {
    CorpBase(input: $input) {
      creditCode
      name
      no
      operName
    }
  }
\`

export const CorpDetailDocument = gql\`
  query CorpDetail($input: CorpDetailInput) {
    CorpDetail(input: $input) {
      address
      annualAddress
      area {
        city
        county
        province
      }
      bankInfo {
        address
        bank
        bankAccount
        creditCode
        name
        tel
      }
      contactInfo {
        email
        moreEmailList {
          email
          source
        }
        moreTelList {
          source
          tel
        }
        tel
        webSiteList
      }
      creditCode
      englishName
      longLat {
        latitude
        longitude
      }
      name
      no
      operName
      registCapi
      scope
      startDate
      status
      taxNo
      taxpayerType
    }
  }
\`
`}}]);
