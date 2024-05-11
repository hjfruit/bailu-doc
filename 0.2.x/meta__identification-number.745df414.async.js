"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[1776],{14126:function(o,e,n){n.r(e),n.d(e,{demos:function(){return l}});var a=n(15009),r=n.n(a),p=n(99289),u=n.n(p),s=n(67294),l={"identification-number-demo-base":{component:s.memo(s.lazy(function(){return n.e(3877).then(n.bind(n,71133))})),asset:{type:"BLOCK",id:"identification-number-demo-base",refAtomIds:["identification-number"],dependencies:{"index.tsx":{type:"FILE",value:n(9065).Z},"@apollo/client/testing":{type:"NPM"},antd:{type:"NPM",value:"4.24.12"},react:{type:"NPM",value:"18.1.0"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.2.25"},"../graphql/operations/__generated__/identification-number.ts":{type:"FILE",value:n(91889).Z},"@apollo/client":{type:"NPM",value:"3.10.3"}},entry:"index.tsx",description:"\u67E5\u8BE2\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u67E5\u8BE2",title:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u67E5\u8BE2"},context:{"@apollo/client/testing":n(51267),antd:n(26868),react:n(67294),"@fruits-chain/react-bailu":n(31081),"../graphql/operations/__generated__/identification-number.ts":n(96272),"@apollo/client":n(82446)},renderOpts:{compile:function(){var d=u()(r()().mark(function y(){var i,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,c));case 3:case"end":return t.stop()}},y)}));function m(){return d.apply(this,arguments)}return m}()}}}},82437:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"0.2.26+",paraId:0},{value:"\u7528\u4E8E\u67E5\u8BE2\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\u573A\u666F\u3002",paraId:1,tocIndex:0}]},9065:function(o,e){e.Z=`import { MockedProvider } from '@apollo/client/testing'
import { Button, Form } from 'antd'
import React from 'react'

import { Card, IdentificationNumber, Layout } from '@fruits-chain/react-bailu'

import {
  CorpBaseDocument,
  CorpDetailDocument,
} from '../graphql/operations/__generated__/identification-number.generated'
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
`},91889:function(o,e){e.Z=`import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type CorpBaseQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CorpBaseInput>
}>

export type CorpBaseQuery = {
  CorpBase?: {
    __typename?: 'CorpBasePayload'
    creditCode?: string
    name?: string
    no?: string
    operName?: string
  }
}

export type CorpDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CorpDetailInput>
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
    status?: SchemaTypes.CorpRegisterStatus
    taxNo?: string
    taxpayerType?: SchemaTypes.TaxpayerClassEnum
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

/**
 * __useCorpBaseQuery__
 *
 * To run a query within a React component, call \`useCorpBaseQuery\` and pass it any options that fit your needs.
 * When your component renders, \`useCorpBaseQuery\` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCorpBaseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCorpBaseQuery(
  baseOptions?: Apollo.QueryHookOptions<CorpBaseQuery, CorpBaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CorpBaseQuery, CorpBaseQueryVariables>(
    CorpBaseDocument,
    options,
  )
}
export function useCorpBaseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CorpBaseQuery,
    CorpBaseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CorpBaseQuery, CorpBaseQueryVariables>(
    CorpBaseDocument,
    options,
  )
}
export type CorpBaseQueryHookResult = ReturnType<typeof useCorpBaseQuery>
export type CorpBaseLazyQueryHookResult = ReturnType<
  typeof useCorpBaseLazyQuery
>
export type CorpBaseQueryResult = Apollo.QueryResult<
  CorpBaseQuery,
  CorpBaseQueryVariables
>
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

/**
 * __useCorpDetailQuery__
 *
 * To run a query within a React component, call \`useCorpDetailQuery\` and pass it any options that fit your needs.
 * When your component renders, \`useCorpDetailQuery\` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCorpDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCorpDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CorpDetailQuery,
    CorpDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CorpDetailQuery, CorpDetailQueryVariables>(
    CorpDetailDocument,
    options,
  )
}
export function useCorpDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CorpDetailQuery,
    CorpDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CorpDetailQuery, CorpDetailQueryVariables>(
    CorpDetailDocument,
    options,
  )
}
export type CorpDetailQueryHookResult = ReturnType<typeof useCorpDetailQuery>
export type CorpDetailLazyQueryHookResult = ReturnType<
  typeof useCorpDetailLazyQuery
>
export type CorpDetailQueryResult = Apollo.QueryResult<
  CorpDetailQuery,
  CorpDetailQueryVariables
>
`}}]);
