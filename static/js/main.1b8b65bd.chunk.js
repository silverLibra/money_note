(this.webpackJsonpmoney_note=this.webpackJsonpmoney_note||[]).push([[0],{27:function(e,t,a){},39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(44),a(45),a(46),a(47),a(29)),i=a(2),u="set user",s="clear user",m={nickName:"",email:"",isLogin:!1},p=a(18),f="set users",d=[],b="show white popup and set content",g="hide white popup and clear content",h={isShow:!1,type:"content",title:"",titleColor:"black",content:"",contentColor:"black",defaultButton:{type:"close",clickHandle:null,color:"#bae1ff"},buttonGroups:[]},E="set pageInfo",v="set pageInfo leftSideMenu",y={isLoading:!1,leftSideMenuInfo:{show:!1}},w=Object(o.b)(Object(o.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),t.value);case s:return m;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)(t.value);default:return e}},whitePop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)(Object(i.a)({},h),{},{isShow:!0},t.value),{},{defaultButton:Object(i.a)(Object(i.a)({},e.defaultButton),t.value.defaultButton)});case g:return Object(i.a)({},h);default:return e}},pageInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(i.a)(Object(i.a)({},e),t.value);case v:return Object(i.a)(Object(i.a)({},e),{},{leftSideMenuInfo:Object(i.a)({},t.value)});default:return e}}})),C=a(6);var k=function(e){return r.a.createElement(C.a.Provider,{value:w},e.children)},j=a(4),O=a.n(j),N=a(7),x=a(11),I=a(16),B=a(3),R=a(19),L=a.n(R);a(50),a(52);L.a.initializeApp({apiKey:"AIzaSyBLwOpH5VcTHxMvViFpd3Jdukx9FJCoqrE",authDomain:"silvermoney-c0a9b.firebaseapp.com",databaseURL:"https://silvermoney-c0a9b.firebaseio.com",projectId:"silvermoney-c0a9b",storageBucket:"silvermoney-c0a9b.appspot.com",messagingSenderId:"893386586316",appId:"1:893386586316:web:5dd91e591a6cf426fc2a69",measurementId:"G-VCXVRB3QEL"});var S=L.a.auth(),P=L.a.firestore(),T=(L.a,w.dispatch),D=function(e){return T({type:E,value:{isLoading:e}})},M=function(){return T({type:v,value:{show:!0}})},Y=function(){return T({type:v,value:{show:!1}})},_=w.dispatch,z=function(e){_({type:b,value:e})},A={type:{title:"title",content:"content",titleContent:"title - content"},actionType:{logout:"logout",reloadPage:"reloadPage",toMainPage:"redirect to mainPage",close:"close",custom:"custom"}},F=w.dispatch,H=function(){var e=Object(N.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,P.collection("users").doc(t).get();case 5:return a=e.sent,console.log(a.data()),e.abrupt("return",Object(i.a)({uid:t},a.data()));case 10:e.prev=10,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(N.a)(O.a.mark((function e(t,a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=P.collection("users").doc(t.uid),e.next=5,n.get();case 5:if(e.sent.exists){e.next=16;break}return r=t.email,e.prev=8,e.next=11,n.set(Object(i.a)({email:r},a));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",H(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,a){return e.apply(this,arguments)}}(),G=function(){var e=Object(N.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.abrupt("return",S.signInWithEmailAndPassword(t,a).then((function(e){return q(e.user).then((function(e){return e&&F({type:u,value:{email:e.email,nickName:e.nickName,isLogin:!0}}),!0}))})).catch((function(e){D(!1),z({content:"Error signing in with password and email!"}),console.error("Error signing in with password and email",e)})).finally((function(){D(!1)})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),J=function(){var e=Object(N.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.abrupt("return",S.signOut().then((function(){return F({type:s}),!0})).finally((function(){D(!1),Y()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=(a(55),a(56),a(57),a(1)),W=function(e){var t=e.Left,a=e.Center,n=e.Right;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.Toolbar,null,r.a.createElement("div",{className:"left"},t||(!1!==t?r.a.createElement(V.ToolbarButton,{onClick:M},r.a.createElement(V.Icon,{size:20,icon:"align-justify"})):" ")),r.a.createElement("div",{className:"center",style:{textAlign:"center"}},a||"Money Note"),r.a.createElement("div",{className:"right"},n||(!1!==n?r.a.createElement(I.b,{to:"/changelog"},r.a.createElement(V.ToolbarButton,null,r.a.createElement(V.Icon,{size:20,icon:"question-circle"}))):" "))))},K=function(){return r.a.createElement(V.Page,{className:"sign-page",modifier:"material",renderToolbar:function(){return r.a.createElement(W,{Left:!1,Right:!1})}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(V.Icon,{size:200,icon:"fa-grav",style:{color:"#9cbddb"},"fixed-width":!0})),r.a.createElement("p",{style:{textAlign:"center"}},"Loading..."))},Q=(a(65),function(e){var t=Object(n.useState)(e),a=Object(x.a)(t,2),r=a[0],c=a[1];return{value:r,onChange:Object(n.useCallback)((function(e){c(e.currentTarget.value)}),[])}}),U=function(){return r.a.createElement(W,{Left:!1,Right:!1})},X=function(){var e=Q(""),t=Q("");return r.a.createElement(V.Page,{className:"sign-page",modifier:"material",renderToolbar:function(){return r.a.createElement(U,null)},contentStyle:{backgroundColor:"white"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(V.Icon,{size:200,icon:"fa-grav",style:{color:"#9cbddb"},"fixed-width":!0})),r.a.createElement("div",{style:{padding:"0 10%"}},r.a.createElement("div",null,r.a.createElement(V.Input,Object.assign({float:!0,style:{width:"100%"},modifier:"material"},e,{placeholder:"\u5e33\u865f"}))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(V.Input,Object.assign({float:!0,type:"password",style:{width:"100%"},modifier:"material"},t,{placeholder:"\u5bc6\u78bc"}))),r.a.createElement("br",null),r.a.createElement(V.Button,{modifier:"large--cta",onClick:function(a){a.preventDefault(),G(e.value,t.value)}},"\u767b\u5165")))},$=(a(66),function(e){var t=r.a.createElement(V.BackButton,{onClick:function(){e.history.push("/")}},"Back");return r.a.createElement(W,{Left:t,Center:"\u66f4\u65b0\u8a0a\u606f",Right:!1})}),Z=function(e){return r.a.createElement(V.Page,{className:"sign-page",modifier:"material",renderToolbar:function(){return r.a.createElement($,e)},contentStyle:{backgroundColor:"white"}},"ChangeLog...")},ee=(a(27),function(e){return r.a.createElement(W,null)}),te=Object(B.f)((function(e){return r.a.createElement(V.BottomToolbar,null,r.a.createElement("div",{className:"tabbar tabbar--top tabbar--material"},[{title:"\u65b0\u589e\u8cc7\u6599",icon:"pencil-square-o",link:"/"},{title:"\u8cc7\u6599\u8a73\u60c5",icon:"list-alt"},{title:"\u8cc7\u6599\u7d71\u8a08",icon:"dashboard",link:"/changelog"}].map((function(t,a){return r.a.createElement("label",{key:"tab-"+a,className:"tabbar__item tabbar--material__item"},r.a.createElement("input",{type:"radio",name:"tarber_bottom",onClick:function(){t.link&&e.history.push(t.link)}}),r.a.createElement("button",{className:"tabbar__button tabbar--material__button"},r.a.createElement(V.Icon,{size:18,className:"tabbar__icon ",icon:t.icon}),r.a.createElement("div",{className:"tabbar__label "},t.title)))}))))})),ae=a(21),ne=a(12),re=a.n(ne),ce=function(){var e=Object(C.b)(Object(n.useCallback)((function(e){return{user:e.user,users:e.users}}),[])),t=e.user,a=e.users,c=Q("0"),l=Q(re()(new Date).format("YYYY-MM-DD")),o=Q(""),u=Object(n.useState)(t.email),s=Object(x.a)(u,2),m=s[0],p=s[1],f=Object(n.useState)({}),d=Object(x.a)(f,2),b=d[0],g=d[1],h=function(){var e=Object(N.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),n=new Date,r=P.collection("dataYear").doc(re()(n).format("YYYY")).collection("dataMonth").doc(re()(n).format("MM")).collection("dataDay").doc(re()(n).format("DD")).collection("cost"),e.next=6,r.add({type:"cost",cost:Number(c.value),toCost:a.filter((function(e){return e.email===m})).map((function(e){return e.email})).join(""),costBelongs:a.filter((function(e){return!b[e.email]})).map((function(e){return e.email})),remark:o.value,createdAt:new Date});case 6:e.sent,D(!1),z({type:A.type.titleContent,title:"\u65b0\u589e\u6210\u529f",content:["\u50f9\u683c:<br/>"+c.value,"\u65e5\u671f:<br/>"+l.value,"\u8ab0\u82b1\u9322:<br/>"+a.filter((function(e){return e.email===m})).map((function(e){return e.nickName})),"\u5c6c\u65bc\u8ab0:<br/>"+a.filter((function(e){return!b[e.email]})).map((function(e){return e.nickName})).join(" \\ "),"\u5099\u8a3b:<br/>"+o.value].join("<br/>.....<br/>")});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(V.Page,{className:"createManagement-page",modifier:"material",contentStyle:{padding:"1rem 1rem"}},r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u91d1\u984d :"),r.a.createElement(V.Col,null,r.a.createElement(V.Input,Object.assign({style:{width:"90%"},className:"textInput textInputRight"},c,{type:"number",modifier:"transparent"})))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u65e5\u671f :"),r.a.createElement(V.Col,null,r.a.createElement(V.Input,Object.assign({style:{width:"90%"},className:"textInput"},l,{type:"date",modifier:"transparent"})))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u51fa\u9322\u8005 :"),r.a.createElement(V.Col,null,r.a.createElement(V.Row,null,a.map((function(e,t){return r.a.createElement(V.Col,{key:"toCost-"+t,width:"50%",className:"center"},r.a.createElement(V.Radio,{value:e.email,name:"toCost",onChange:function(e){p(e.target.value)},checked:m===e.email,style:{marginRight:".4rem"},inputId:"toCost-"+t,modifier:"material"}),r.a.createElement("label",{style:{marginRight:".4rem"},htmlFor:"toCost-"+t},e.nickName))}))))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u5c6c\u65bc\u8ab0 :"),r.a.createElement(V.Col,null,r.a.createElement(V.Row,null,a.map((function(e,t){return r.a.createElement(V.Col,{key:"costBelongs-"+t,width:"50%",className:"center"},r.a.createElement(V.Checkbox,{checked:!b[e.email],onChange:function(e){g((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(ae.a)({},e.target.value,!t[e.target.value]))}))},style:{marginRight:".6rem"},value:e.email,inputId:"costBelongs-"+t,modifier:"material"}),r.a.createElement("label",{style:{marginRight:".4rem"},htmlFor:"costBelongs-"+t},e.nickName))}))))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u5099\u8a3b :"),r.a.createElement(V.Col,null,r.a.createElement("textarea",Object.assign({},o,{className:"textarea",rows:"3",placeholder:"\u8acb\u9ede\u64ca\u8f38\u5165"})))),r.a.createElement(V.Button,{modifier:"large--cta",onClick:h},"\u9001\u51fa"))},le=function(){var e=Object(C.b)(Object(n.useCallback)((function(e){return{user:e.user,users:e.users}}),[])),t=e.user,a=e.users,c=Q("0"),l=Q(re()(new Date).format("YYYY-MM-DD")),o=Q(""),i=Object(n.useState)(t.email),u=Object(x.a)(i,2),s=u[0],m=u[1],p=function(){var e=Object(N.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),n=new Date,r=P.collection("dataYear").doc(re()(n).format("YYYY")).collection("dataMonth").doc(re()(n).format("MM")).collection("dataDay").doc(re()(n).format("DD")).collection("transfer"),e.next=6,r.add({type:"transfer",cost:Number(c.value),toCost:a.filter((function(e){return e.email===s})).map((function(e){return e.email})).join(""),remark:o.value,createdAt:new Date});case 6:e.sent,D(!1),z({type:A.type.titleContent,title:"\u65b0\u589e\u6210\u529f",content:["\u91d1\u984d:<br/>"+c.value,"\u65e5\u671f:<br/>"+l.value,"\u8ab0\u8f49\u9322:<br/>"+a.filter((function(e){return e.email===s})).map((function(e){return e.nickName})),"\u5099\u8a3b:<br/>"+o.value].join("<br/>.....<br/>")});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(V.Page,{className:"createManagement-page",modifier:"material",contentStyle:{padding:"1rem 1rem"}},r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u91d1\u984d :"),r.a.createElement(V.Col,null,r.a.createElement(V.Input,Object.assign({style:{width:"90%"},className:"textInput textInputRight"},c,{type:"number",modifier:"transparent"})))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u65e5\u671f :"),r.a.createElement(V.Col,null,r.a.createElement(V.Input,Object.assign({style:{width:"90%"},className:"textInput"},l,{type:"date",modifier:"transparent"})))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u51fa\u9322\u8005 :"),r.a.createElement(V.Col,null,r.a.createElement(V.Row,null,a.map((function(e,t){return r.a.createElement(V.Col,{key:"transfer-toCost-"+t,width:"50%",className:"center"},r.a.createElement(V.Radio,{value:e.email,name:"transfer-toCost",onChange:function(e){m(e.target.value)},checked:s===e.email,style:{marginRight:".4rem"},inputId:"transfer-toCost-"+t,modifier:"material"}),r.a.createElement("label",{style:{marginRight:".4rem"},htmlFor:"transfer-toCost-"+t},e.nickName))}))))),r.a.createElement(V.Row,{style:{marginBottom:"1.5rem"}},r.a.createElement(V.Col,{width:"30%",className:"inputLabel"},"\u5099\u8a3b :"),r.a.createElement(V.Col,null,r.a.createElement("textarea",Object.assign({},o,{className:"textarea",rows:"3",placeholder:"\u8acb\u9ede\u64ca\u8f38\u5165"})))),r.a.createElement(V.Button,{modifier:"large--cta",onClick:p},"\u9001\u51fa"))},oe=function(e){var t=Object(n.useState)(0),a=Object(x.a)(t,2),c=a[0],l=a[1];return r.a.createElement(V.Page,{className:"createManagement-page",modifier:"material",swipeable:!0,renderToolbar:function(){return r.a.createElement(ee,null)},renderBottomToolbar:function(){return r.a.createElement(te,null)}},r.a.createElement(V.Tabbar,{onPreChange:function(e){var t=e.index;return l(t)},onPostChange:function(){return console.log("postChange")},onReactive:function(){return console.log("postChange")},position:"top",index:c,renderTabs:function(e,t){return[{content:r.a.createElement(ce,{title:"Home",active:0===e,tabbar:t}),tab:r.a.createElement(V.Tab,{label:"\u652f\u51fa",icon:"speakap"})},{content:r.a.createElement(le,{title:"Settings",active:1===e,tabbar:t}),tab:r.a.createElement(V.Tab,{label:"\u8f49\u5e33",icon:"chain"})}]}}))},ie=function(e){var t=Object(C.b)(Object(n.useCallback)((function(e){return e.user}),[]));return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.Card,null,r.a.createElement(V.Row,null,r.a.createElement(V.Col,{width:"60px"},r.a.createElement(V.Icon,{size:50,icon:"user-circle"})),r.a.createElement(V.Col,null,r.a.createElement("h5",{style:{margin:"0.5rem 0 0.2em 0"}},"Hi,"),r.a.createElement("p",null,t.nickName)))),r.a.createElement(V.ListItem,{tappable:!0,modifier:"chevron longdivider"},r.a.createElement("div",{className:"left"},r.a.createElement(V.Icon,{size:30,icon:"heart"})),r.a.createElement("div",{className:"center"},"\u5206\u985e\u7ba1\u7406")),r.a.createElement(V.ListItem,{tappable:!0,modifier:"chevron longdivider"},r.a.createElement("div",{className:"left"},r.a.createElement(V.Icon,{size:30,icon:"question-circle"})),r.a.createElement("div",{className:"center"},"\u66f4\u65b0\u8a0a\u606f")),r.a.createElement(V.ListItem,{tappable:!0,modifier:"chevron longdivider",onClick:function(){z({type:A.type.title,title:"\u78ba\u5b9a\u767b\u51fa",defaultButton:{type:A.actionType.logout}})}},r.a.createElement("div",{className:"left"},r.a.createElement(V.Icon,{size:30,icon:"sign-out"})),r.a.createElement("div",{className:"center"},"\u767b\u51fa")))};var ue=function(e){var t=Object(C.b)(Object(n.useCallback)((function(e){return e.pageInfo.leftSideMenuInfo.show}),[]));return r.a.createElement(V.Splitter,null,r.a.createElement(V.SplitterSide,{style:{boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},side:"left",width:"80%",isOpen:t,collapse:!0,swipeable:!0,onClose:Y},r.a.createElement(V.Page,null,r.a.createElement(ie,null))),r.a.createElement(V.SplitterContent,null,e.children))},se=[r.a.createElement(B.a,{key:"route-1",path:"/",exact:!0,component:function(){return Object(C.b)(Object(n.useCallback)((function(e){return e.user}),[])).isLogin?r.a.createElement(ue,null,r.a.createElement(oe,null)):r.a.createElement(X,null)}}),r.a.createElement(B.a,{key:"route-2",path:"/changelog",component:Z})],me=w.dispatch,pe=function(){var e=Object(N.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.collection("users").get();case 3:return t=e.sent,a=[],t.forEach((function(e){a.push(e.data())})),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.error("Error fetching users",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();var fe=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){S.onAuthStateChanged(function(){var e=Object(N.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=t,q(a).then((function(e){e&&F({type:u,value:{email:e.email,nickName:e.nickName,isLogin:!0}})}))).then((function(){pe().then((function(e){var t=w.getState().user.email,a=[].concat(Object(p.a)(e.filter((function(e){return e.email===t}))),Object(p.a)(e.filter((function(e){return e.email!==t}))));me({type:f,value:a})})).then((function(){c(!1)}))}));case 1:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement(I.a,null,a?r.a.createElement(K,null):r.a.createElement(B.c,null,se))},de=(a(68),function(){var e=Object(C.b)(Object(n.useCallback)((function(e){return e.whitePop}),[])),t=e.isShow,a=e.type,c=e.title,l=e.titleColor,o=e.content,u=e.contentColor,s=e.defaultButton,m=e.buttonGroups,p=l?{color:l}:{},f=u?{color:u}:{},d=function(e){e&&(e.preventDefault(),e.stopPropagation()),_({type:g})},b=function(e,t){switch(e.preventDefault(),e.stopPropagation(),t.actionType){case A.actionType.logout:return J(),void d();case A.actionType.reloadPage:return void window.location.reload(!1);case A.actionType.toMainPage:case A.actionType.close:return void d();case A.actionType.custom:return void("function"===typeof t.clickHandle?t.clickHandle(d):d());default:return}};return r.a.createElement(V.AlertDialog,{isOpen:t,isCancelable:!1,className:"whitePop"},r.a.createElement("div",{className:"alert-dialog-title",style:Object(i.a)({},p)},[A.type.title,A.type.titleContent].includes(a)&&c&&c.toString().split("<br/>").map((function(e,t){return r.a.createElement("p",{key:"whitePop-title_"+t},e)}))),r.a.createElement("div",{className:"alert-dialog-content",style:Object(i.a)({},f)},[A.type.content,A.type.titleContent].includes(a)&&o&&o.toString().split("<br/>").map((function(e,t){return r.a.createElement("p",{key:"whitePop-content_"+t},e)}))),r.a.createElement("div",{className:"alert-dialog-footer"},m&&m.length?m.map((function(e,t){return r.a.createElement("div",{className:"btn-block",key:"buttonGroup"+t},e.map((function(e,t){var a=e.color?{color:e.color}:{};return r.a.createElement("div",{key:"button"+t,className:"btn",style:a,onClick:function(t){return b(t,e)}},e.text?e.text:"\u6211\u77e5\u9053\u4e86")})))})):r.a.createElement(V.Button,{onClick:function(e){return b(e,{actionType:s.type})},className:"alert-dialog-button"},"\u6211\u77e5\u9053\u4e86")))}),be=function(){return Object(C.b)(Object(n.useCallback)((function(e){return e.pageInfo.isLoading}),[]))&&r.a.createElement(V.Modal,{isOpen:!0}," ",r.a.createElement(V.Icon,{spin:!0,icon:"spinner"})," Loading ...")};var ge=function(){return r.a.createElement(k,null,r.a.createElement(fe,null),r.a.createElement(de,null),r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);