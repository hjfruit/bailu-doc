"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8852],{77230:function(y,t,e){e.r(t),e.d(t,{demos:function(){return m}});var l=e(15009),n=e.n(l),D=e(99289),i=e.n(D),u=e(67294),m={"async-select-demo-base":{component:u.memo(u.lazy(function(){return e.e(8467).then(e.bind(e,20974))})),asset:{type:"BLOCK",id:"async-select-demo-base",refAtomIds:["async-select"],dependencies:{"index.tsx":{type:"FILE",value:e(49249).Z},"@apollo/client/testing":{type:"NPM"},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"@fruits-chain/react-bailu":{type:"NPM",value:"0.3.0"},"../../__test__/graphql/operations/__generated__/demo.ts":{type:"FILE",value:e(2046).Z},"@apollo/client":{type:"NPM",value:"3.10.3"}},entry:"index.tsx"},context:{"@apollo/client/testing":e(51267),antd:e(37436),react:e(67294),"@fruits-chain/react-bailu":e(31081),"../../__test__/graphql/operations/__generated__/demo.ts":e(49775),"@apollo/client":e(82446)},renderOpts:{compile:function(){var p=i()(n()().mark(function _(){var c,r=arguments;return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(7335).then(e.bind(e,37335));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,r));case 3:case"end":return s.stop()}},_)}));function d(){return p.apply(this,arguments)}return d}()}}}},49775:function(y,t,e){e.r(t),e.d(t,{DemoAsyncSelectDocument:function(){return g},DemoList1Document:function(){return Q},DemoPaging1Document:function(){return b},useDemoAsyncSelectLazyQuery:function(){return P},useDemoAsyncSelectQuery:function(){return s},useDemoList1LazyQuery:function(){return h},useDemoList1Query:function(){return L},useDemoPaging1LazyQuery:function(){return f},useDemoPaging1Query:function(){return A}});var l=e(97857),n=e.n(l),D=e(68400),i=e.n(D),u=e(68806),m=e(71641),p=e(73359),d,_,c,r={},g=(0,u.Ps)(d||(d=i()([`
  query demoAsyncSelect($page: Page) {
    demoAsyncSelect(page: $page) {
      label
      value
    }
  }
`])));function s(o){var a=n()(n()({},r),o);return m.a(g,a)}function P(o){var a=n()(n()({},r),o);return p.t(g,a)}var b=(0,u.Ps)(_||(_=i()([`
  query demoPaging1($page: Page, $input: Paging1Input) {
    demoPaging1(page: $page, input: $input) {
      records {
        id
        name
      }
      pageSize
      pageCurrent
      totalRecords
    }
  }
`])));function A(o){var a=n()(n()({},r),o);return m.a(b,a)}function f(o){var a=n()(n()({},r),o);return p.t(b,a)}var Q=(0,u.Ps)(c||(c=i()([`
  query demoList1($input: Paging1Input) {
    demoList1(input: $input) {
      id
      name
    }
  }
`])));function L(o){var a=n()(n()({},r),o);return m.a(Q,a)}function h(o){var a=n()(n()({},r),o);return p.t(Q,a)}},3938:function(y,t,e){e.r(t),e.d(t,{texts:function(){return l}});const l=[{value:"\u8BF7\u4F7F\u7528 ",paraId:0},{value:"ProField.Select",paraId:0},{value:" \u6216 ",paraId:0},{value:"ProForm.ItemSelect",paraId:0},{value:"\u3002",paraId:0},{value:"\u9009\u9879\u4E3A\u5F02\u6B65\u6570\u636E\u65F6",paraId:1,tocIndex:1},{value:"select \u6240\u9009\u9879\u53D8\u66F4\u65F6\u9700\u8981\u628A options \u6570\u636E\u5F80\u5916\u66B4\u9732",paraId:1,tocIndex:1},{value:"\u57FA\u4E8E Select \u7684 Props\uFF0C\u6269\u5C55\u5982\u4E0B props",paraId:2,tocIndex:3}]},2046:function(y,t){t.Z=`import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type DemoAsyncSelectQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>
}>

export type DemoAsyncSelectQuery = {
  demoAsyncSelect?: Array<{
    __typename?: 'OptionData'
    label?: string
    value?: number
  }>
}

export type DemoPaging1QueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>
  input?: SchemaTypes.InputMaybe<SchemaTypes.Paging1Input>
}>

export type DemoPaging1Query = {
  demoPaging1: {
    __typename?: 'Paging1Data'
    pageSize: number
    pageCurrent: number
    totalRecords: number
    records: Array<{ __typename?: 'Paging1'; id: number; name: string }>
  }
}

export type DemoList1QueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.Paging1Input>
}>

export type DemoList1Query = {
  demoList1: Array<{ __typename?: 'Paging1'; id: number; name: string }>
}

export const DemoAsyncSelectDocument = gql\`
  query demoAsyncSelect($page: Page) {
    demoAsyncSelect(page: $page) {
      label
      value
    }
  }
\`

/**
 * __useDemoAsyncSelectQuery__
 *
 * To run a query within a React component, call \`useDemoAsyncSelectQuery\` and pass it any options that fit your needs.
 * When your component renders, \`useDemoAsyncSelectQuery\` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemoAsyncSelectQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useDemoAsyncSelectQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DemoAsyncSelectQuery,
    DemoAsyncSelectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DemoAsyncSelectQuery, DemoAsyncSelectQueryVariables>(
    DemoAsyncSelectDocument,
    options,
  )
}
export function useDemoAsyncSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DemoAsyncSelectQuery,
    DemoAsyncSelectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    DemoAsyncSelectQuery,
    DemoAsyncSelectQueryVariables
  >(DemoAsyncSelectDocument, options)
}
export type DemoAsyncSelectQueryHookResult = ReturnType<
  typeof useDemoAsyncSelectQuery
>
export type DemoAsyncSelectLazyQueryHookResult = ReturnType<
  typeof useDemoAsyncSelectLazyQuery
>
export type DemoAsyncSelectQueryResult = Apollo.QueryResult<
  DemoAsyncSelectQuery,
  DemoAsyncSelectQueryVariables
>
export const DemoPaging1Document = gql\`
  query demoPaging1($page: Page, $input: Paging1Input) {
    demoPaging1(page: $page, input: $input) {
      records {
        id
        name
      }
      pageSize
      pageCurrent
      totalRecords
    }
  }
\`

/**
 * __useDemoPaging1Query__
 *
 * To run a query within a React component, call \`useDemoPaging1Query\` and pass it any options that fit your needs.
 * When your component renders, \`useDemoPaging1Query\` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemoPaging1Query({
 *   variables: {
 *      page: // value for 'page'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDemoPaging1Query(
  baseOptions?: Apollo.QueryHookOptions<
    DemoPaging1Query,
    DemoPaging1QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DemoPaging1Query, DemoPaging1QueryVariables>(
    DemoPaging1Document,
    options,
  )
}
export function useDemoPaging1LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DemoPaging1Query,
    DemoPaging1QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DemoPaging1Query, DemoPaging1QueryVariables>(
    DemoPaging1Document,
    options,
  )
}
export type DemoPaging1QueryHookResult = ReturnType<typeof useDemoPaging1Query>
export type DemoPaging1LazyQueryHookResult = ReturnType<
  typeof useDemoPaging1LazyQuery
>
export type DemoPaging1QueryResult = Apollo.QueryResult<
  DemoPaging1Query,
  DemoPaging1QueryVariables
>
export const DemoList1Document = gql\`
  query demoList1($input: Paging1Input) {
    demoList1(input: $input) {
      id
      name
    }
  }
\`

/**
 * __useDemoList1Query__
 *
 * To run a query within a React component, call \`useDemoList1Query\` and pass it any options that fit your needs.
 * When your component renders, \`useDemoList1Query\` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemoList1Query({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDemoList1Query(
  baseOptions?: Apollo.QueryHookOptions<
    DemoList1Query,
    DemoList1QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DemoList1Query, DemoList1QueryVariables>(
    DemoList1Document,
    options,
  )
}
export function useDemoList1LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DemoList1Query,
    DemoList1QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DemoList1Query, DemoList1QueryVariables>(
    DemoList1Document,
    options,
  )
}
export type DemoList1QueryHookResult = ReturnType<typeof useDemoList1Query>
export type DemoList1LazyQueryHookResult = ReturnType<
  typeof useDemoList1LazyQuery
>
export type DemoList1QueryResult = Apollo.QueryResult<
  DemoList1Query,
  DemoList1QueryVariables
>
`},49249:function(y,t){t.Z=`import { MockedProvider } from '@apollo/client/testing'
import { Form } from 'antd'
import React from 'react'

import { AsyncSelect, Card } from '@fruits-chain/react-bailu'

import { DemoAsyncSelectDocument } from '../../__test__/graphql/operations/__generated__/demo.generated'

const mocks = [
  {
    request: {
      query: DemoAsyncSelectDocument,
      variables: {},
    },
    result: {
      data: {
        demoAsyncSelect: new Array(10).fill(0).map((_, index) => ({
          value: index,
          label: \`\u65E0\u53C2\u6570\${index}\`,
        })),
      },
    },
  },
  {
    request: {
      query: DemoAsyncSelectDocument,
      variables: { page: { pageCurrent: 2 } },
    },
    result: {
      data: {
        demoAsyncSelect: new Array(10).fill(0).map((_, index) => ({
          value: index,
          label: \`\u6709\u53C2\u6570\${index}\`,
        })),
      },
    },
  },
]

const AsyncSelectDemo: React.FC = () => {
  return (
    <MockedProvider mocks={mocks}>
      <Card.Group>
        <Form>
          <Form.Item name="test" label="\u6D4B\u8BD5">
            <AsyncSelect
              remote={{
                gql: DemoAsyncSelectDocument,
                gqlKey: 'demoAsyncSelect',
              }}
            />
          </Form.Item>
        </Form>

        <Form>
          <Form.Item name="test" label="\u643A\u5E26\u8BF7\u6C42\u53C2\u6570">
            <AsyncSelect
              remote={{
                gql: DemoAsyncSelectDocument,
                gqlKey: 'demoAsyncSelect',
                extraParams: {
                  page: {
                    pageCurrent: 2,
                  },
                },
              }}
            />
          </Form.Item>
        </Form>
      </Card.Group>
    </MockedProvider>
  )
}

export default AsyncSelectDemo
`}}]);
