"use strict";(self.webpackChunk_fruits_chain_react_bailu=self.webpackChunk_fruits_chain_react_bailu||[]).push([[8467],{20974:function(h,i,e){e.r(i);var _=e(75627),r=e(66480),m=e(44583),d=e(67294),o=e(31081),s=e(49775),a=e(85893),p=[{request:{query:s.I6,variables:{}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(l,t){return{value:t,label:"\u65E0\u53C2\u6570".concat(t)}})}}},{request:{query:s.I6,variables:{page:{pageCurrent:2}}},result:{data:{demoAsyncSelect:new Array(10).fill(0).map(function(l,t){return{value:t,label:"\u6709\u53C2\u6570".concat(t)}})}}}],c=function(){return(0,a.jsx)(m.g,{mocks:p,children:(0,a.jsxs)(o.Card.Group,{children:[(0,a.jsx)(r.Z,{children:(0,a.jsx)(r.Z.Item,{name:"test",label:"\u6D4B\u8BD5",children:(0,a.jsx)(o.AsyncSelect,{remote:{gql:s.I6,gqlKey:"demoAsyncSelect"}})})}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(r.Z.Item,{name:"test",label:"\u643A\u5E26\u8BF7\u6C42\u53C2\u6570",children:(0,a.jsx)(o.AsyncSelect,{remote:{gql:s.I6,gqlKey:"demoAsyncSelect",extraParams:{page:{pageCurrent:2}}}})})})]})})};i.default=c},49775:function(h,i,e){e.d(i,{GQ:function(){return g},Hj:function(){return b},I6:function(){return v},LQ:function(){return P},Ue:function(){return O},jr:function(){return f}});var _=e(97857),r=e.n(_),m=e(68400),d=e.n(m),o=e(68806),s=e(16748),a=e(73359),p,c,l,t={},v=(0,o.Ps)(p||(p=d()([`
  query demoAsyncSelect($page: Page) {
    demoAsyncSelect(page: $page) {
      label
      value
    }
  }
`])));function g(u){var n=r()(r()({},t),u);return s.a(v,n)}function E(u){var n=_objectSpread(_objectSpread({},t),u);return Apollo.useLazyQuery(v,n)}var P=(0,o.Ps)(c||(c=d()([`
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
`])));function y(u){var n=_objectSpread(_objectSpread({},t),u);return Apollo.useQuery(P,n)}function O(u){var n=r()(r()({},t),u);return a.t(P,n)}var f=(0,o.Ps)(l||(l=d()([`
  query demoList1($input: Paging1Input) {
    demoList1(input: $input) {
      id
      name
    }
  }
`])));function M(u){var n=_objectSpread(_objectSpread({},t),u);return Apollo.useQuery(f,n)}function b(u){var n=r()(r()({},t),u);return a.t(f,n)}},73359:function(h,i,e){e.d(i,{t:function(){return a}});var _=e(97582),r=e(67294),m=e(14012),d=e(16748),o=e(66252),s=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function a(p,c){var l,t=r.useRef(),v=r.useRef(),g=r.useRef(),E=(0,m.J)(c,t.current||{}),P=(l=E==null?void 0:E.query)!==null&&l!==void 0?l:p;v.current=E,g.current=P;var y=(0,d.A)((0,o.x)(c&&c.client),P),O=y.useQuery((0,_.pi)((0,_.pi)({},E),{skip:!t.current})),f=O.observable.options.initialFetchPolicy||y.getDefaultFetchPolicy(),M=Object.assign(O,{called:!!t.current}),b=r.useMemo(function(){for(var n={},j=function(L){var I=M[L];n[L]=function(){return t.current||(t.current=Object.create(null),y.forceUpdateState()),I.apply(this,arguments)}},D=0,A=s;D<A.length;D++){var C=A[D];j(C)}return n},[]);Object.assign(M,b);var u=r.useCallback(function(n){t.current=n?(0,_.pi)((0,_.pi)({},n),{fetchPolicy:n.fetchPolicy||f}):{fetchPolicy:f};var j=(0,m.J)(v.current,(0,_.pi)({query:g.current},t.current)),D=y.executeQuery((0,_.pi)((0,_.pi)({},j),{skip:!1})).then(function(A){return Object.assign(A,b)});return D.catch(function(){}),D},[]);return[u,M]}}}]);
