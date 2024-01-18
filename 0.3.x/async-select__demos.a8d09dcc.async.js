"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8467],{20974:function(P,c,e){e.r(c);var d=e(44583),n=e(36954),E=e(67294),o=e(52532),r=e(49775),a=e(85893),i=[{request:{query:r.I6,variables:{}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(s,u){return{value:u,label:"\u65E0\u53C2\u6570".concat(u)}})}}},{request:{query:r.I6,variables:{page:{pageCurrent:2}}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(s,u){return{value:u,label:"\u6709\u53C2\u6570".concat(u)}})}}}],m=function(){return(0,a.jsx)(d.g,{mocks:i,children:(0,a.jsxs)(o.Card.Group,{children:[(0,a.jsx)(n.Z,{children:(0,a.jsx)(n.Z.Item,{name:"test",label:"\u6D4B\u8BD5",children:(0,a.jsx)(o.AsyncSelect,{remote:{gql:r.I6,gqlKey:"demoAsyncSelect"}})})}),(0,a.jsx)(n.Z,{children:(0,a.jsx)(n.Z.Item,{name:"test",label:"\u643A\u5E26\u8BF7\u6C42\u53C2\u6570",children:(0,a.jsx)(o.AsyncSelect,{remote:{gql:r.I6,gqlKey:"demoAsyncSelect",extraParams:{page:{pageCurrent:2}}}})})})]})})};c.default=m},49775:function(P,c,e){e.d(c,{GQ:function(){return b},Hj:function(){return A},I6:function(){return p},LQ:function(){return D},Ue:function(){return y},jr:function(){return g}});var d=e(97857),n=e.n(d),E=e(68400),o=e.n(E),r=e(68806),a=e(16748),i=e(73359),m,s,u,l={},p=(0,r.Ps)(m||(m=o()([`
  query demoAsyncSelect($page: Page) {
    demoAsyncSelect(page: $page) {
      label
      value
    }
  }
`])));function b(t){var _=n()(n()({},l),t);return a.a(p,_)}function v(t){var _=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(p,_)}var D=(0,r.Ps)(s||(s=o()([`
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
`])));function j(t){var _=_objectSpread(_objectSpread({},l),t);return Apollo.useQuery(D,_)}function y(t){var _=n()(n()({},l),t);return i.t(D,_)}var g=(0,r.Ps)(u||(u=o()([`
  query demoList1($input: Paging1Input) {
    demoList1(input: $input) {
      id
      name
    }
  }
`])));function O(t){var _=_objectSpread(_objectSpread({},l),t);return Apollo.useQuery(g,_)}function A(t){var _=n()(n()({},l),t);return i.t(g,_)}}}]);
