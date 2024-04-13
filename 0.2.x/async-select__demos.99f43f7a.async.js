"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8467],{20974:function(j,i,e){e.r(i);var _=e(75627),r=e(66480),m=e(30631),d=e(67294),o=e(31081),c=e(49775),a=e(85893),v=[{request:{query:c.I6,variables:{}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(s,t){return{value:t,label:"\u65E0\u53C2\u6570".concat(t)}})}}},{request:{query:c.I6,variables:{page:{pageCurrent:2}}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(s,t){return{value:t,label:"\u6709\u53C2\u6570".concat(t)}})}}}],l=function(){return(0,a.jsx)(m.g,{mocks:v,children:(0,a.jsxs)(o.Card.Group,{children:[(0,a.jsx)(r.Z,{children:(0,a.jsx)(r.Z.Item,{name:"test",label:"\u6D4B\u8BD5",children:(0,a.jsx)(o.AsyncSelect,{remote:{gql:c.I6,gqlKey:"demoAsyncSelect"}})})}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(r.Z.Item,{name:"test",label:"\u643A\u5E26\u8BF7\u6C42\u53C2\u6570",children:(0,a.jsx)(o.AsyncSelect,{remote:{gql:c.I6,gqlKey:"demoAsyncSelect",extraParams:{page:{pageCurrent:2}}}})})})]})})};i.default=l},49775:function(j,i,e){e.d(i,{GQ:function(){return g},Hj:function(){return b},I6:function(){return p},LQ:function(){return E},Ue:function(){return O},jr:function(){return P}});var _=e(97857),r=e.n(_),m=e(68400),d=e.n(m),o=e(68806),c=e(44818),a=e(73359),v,l,s,t={},p=(0,o.Ps)(v||(v=d()([`
  query demoAsyncSelect($page: Page) {
    demoAsyncSelect(page: $page) {
      label
      value
    }
  }
`])));function g(u){var n=r()(r()({},t),u);return c.a(p,n)}function D(u){var n=_objectSpread(_objectSpread({},t),u);return Apollo.useLazyQuery(p,n)}var E=(0,o.Ps)(l||(l=d()([`
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
`])));function y(u){var n=_objectSpread(_objectSpread({},t),u);return Apollo.useQuery(E,n)}function O(u){var n=r()(r()({},t),u);return a.t(E,n)}var P=(0,o.Ps)(s||(s=d()([`
  query demoList1($input: Paging1Input) {
    demoList1(input: $input) {
      id
      name
    }
  }
`])));function M(u){var n=_objectSpread(_objectSpread({},t),u);return Apollo.useQuery(P,n)}function b(u){var n=r()(r()({},t),u);return a.t(P,n)}},73359:function(j,i,e){e.d(i,{t:function(){return a}});var _=e(97582),r=e(73914),m=e(14012),d=e(44818),o=e(66252),c=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function a(v,l){var s,t=r.useRef(),p=r.useRef(),g=r.useRef(),D=(0,m.J)(l,t.current||{}),E=(s=D==null?void 0:D.query)!==null&&s!==void 0?s:v;p.current=l,g.current=E;var y=(0,d.A)((0,o.x)(l&&l.client),E),O=y.useQuery((0,_.pi)((0,_.pi)({},D),{skip:!t.current})),P=O.observable.options.initialFetchPolicy||y.getDefaultFetchPolicy(),M=Object.assign(O,{called:!!t.current}),b=r.useMemo(function(){for(var n={},h=function(L){var I=M[L];n[L]=function(){return t.current||(t.current=Object.create(null),y.forceUpdateState()),I.apply(this,arguments)}},f=0,A=c;f<A.length;f++){var C=A[f];h(C)}return n},[]);Object.assign(M,b);var u=r.useCallback(function(n){t.current=n?(0,_.pi)((0,_.pi)({},n),{fetchPolicy:n.fetchPolicy||P}):{fetchPolicy:P};var h=(0,m.J)(p.current,(0,_.pi)({query:g.current},t.current)),f=y.executeQuery((0,_.pi)((0,_.pi)({},h),{skip:!1})).then(function(A){return Object.assign(A,b)});return f.catch(function(){}),f},[]);return[u,M]}}}]);
