"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8467],{20974:function(P,s,e){e.r(s);var g=e(75627),t=e(66480),d=e(44583),c=e(67294),u=e(38543),o=e(49775),_=e(85893),i=[{request:{query:o.I6,variables:{}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(l,n){return{value:n,label:"\u65E0\u53C2\u6570".concat(n)}})}}},{request:{query:o.I6,variables:{page:{pageCurrent:2}}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(l,n){return{value:n,label:"\u6709\u53C2\u6570".concat(n)}})}}}],m=function(){return(0,_.jsx)(d.g,{mocks:i,children:(0,_.jsxs)(u.Card.Group,{children:[(0,_.jsx)(t.Z,{children:(0,_.jsx)(t.Z.Item,{name:"test",label:"\u6D4B\u8BD5",children:(0,_.jsx)(u.AsyncSelect,{remote:{gql:o.I6,gqlKey:"demoAsyncSelect"}})})}),(0,_.jsx)(t.Z,{children:(0,_.jsx)(t.Z.Item,{name:"test",label:"\u643A\u5E26\u8BF7\u6C42\u53C2\u6570",children:(0,_.jsx)(u.AsyncSelect,{remote:{gql:o.I6,gqlKey:"demoAsyncSelect",extraParams:{page:{pageCurrent:2}}}})})})]})})};s.default=m},49775:function(P,s,e){e.d(s,{GQ:function(){return y},Hj:function(){return A},I6:function(){return p},LQ:function(){return D},Ue:function(){return b},jr:function(){return E}});var g=e(97857),t=e.n(g),d=e(68400),c=e.n(d),u=e(68806),o=e(16748),_=e(73359),i,m,l,n={},p=(0,u.Ps)(i||(i=c()([`
  query demoAsyncSelect($page: Page) {
    demoAsyncSelect(page: $page) {
      label
      value
    }
  }
`])));function y(a){var r=t()(t()({},n),a);return o.a(p,r)}function v(a){var r=_objectSpread(_objectSpread({},n),a);return Apollo.useLazyQuery(p,r)}var D=(0,u.Ps)(m||(m=c()([`
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
`])));function O(a){var r=_objectSpread(_objectSpread({},n),a);return Apollo.useQuery(D,r)}function b(a){var r=t()(t()({},n),a);return _.t(D,r)}var E=(0,u.Ps)(l||(l=c()([`
  query demoList1($input: Paging1Input) {
    demoList1(input: $input) {
      id
      name
    }
  }
`])));function f(a){var r=_objectSpread(_objectSpread({},n),a);return Apollo.useQuery(E,r)}function A(a){var r=t()(t()({},n),a);return _.t(E,r)}}}]);
