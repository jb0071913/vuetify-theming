(function(t){function e(e){for(var r,i,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ae7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("side-bar"),n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-spacer")],1),n("v-content",[n("v-container",{attrs:{id:"main-container"}},[n("v-card",{attrs:{height:"600"}},[n("router-view")],1)],1)],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",color:"primary",dark:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Vuetify Starter ")]),n("v-list-item-subtitle",[t._v(" Testing theming with Vuetify ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)},l=[],s={data:function(){return{items:[{title:"Form",icon:"mdi-card-text",link:"/form"},{title:"Settings",icon:"mdi-cog",link:"/settings"}],right:null}},name:"SideBar"},u=s,d=n("2877"),p=n("6544"),v=n.n(p),f=n("ce7e"),h=n("132d"),m=n("8860"),b=n("da13"),g=n("5d23"),k=n("34c3"),x=n("f774"),_=Object(d["a"])(u,c,l,!1,null,"ecd47cd6",null),y=_.exports;v()(_,{VDivider:f["a"],VIcon:h["a"],VList:m["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:k["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:x["a"]});var V={components:{"side-bar":y},name:"App"},w=V,C=(n("7c55"),n("7496")),S=n("40dc"),O=n("b0af"),T=n("a523"),j=n("a75b"),$=n("2fa4"),P=Object(d["a"])(w,o,i,!1,null,null,null),A=P.exports;v()(P,{VApp:C["a"],VAppBar:S["a"],VCard:O["a"],VContainer:T["a"],VContent:j["a"],VSpacer:$["a"]});var L=n("f309");r["a"].use(L["a"]);var I=new L["a"]({theme:{options:{customProperties:!0},themes:{light:{card:null,text:null},dark:{card:null,text:null}}}}),M=n("bc3a"),D=n.n(M);r["a"].use(L["a"]);var B=function(){var t=D.a.get("http://localhost:8000").then((function(t){return t.data}));return t},E=B,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"form-container"},[n("v-row",[n("v-text-field",{attrs:{color:"text",placeholder:"Name",hint:"Name goes here",label:"Name"}}),n("v-spacer"),n("v-text-field",{attrs:{color:"text",placeholder:"Age",hint:"Age goes here",label:"Age"}})],1),n("v-row",[n("v-select",{attrs:{items:t.gender,label:"Gender"}})],1),n("v-row",[n("v-text-field",{attrs:{color:"text",placeholder:"Address",hint:"Address goes here",label:"Address"}})],1),n("v-row",[n("v-btn",{on:{click:function(e){t.snackbar=!0}}},[t._v("Submit")])],1),n("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Submitted "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],1)},N=[],J={data:function(){return{gender:["Male","Female"],snackbar:!1}},methods:{submit:function(){}}},R=J,U=(n("ac0e"),n("8336")),G=n("0fd9"),q=n("b974"),z=n("2db4"),H=n("8654"),K=Object(d["a"])(R,F,N,!1,null,"6d8dc1c5",null),Q=K.exports;v()(K,{VBtn:U["a"],VContainer:T["a"],VRow:G["a"],VSelect:q["a"],VSnackbar:z["a"],VSpacer:$["a"],VTextField:H["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h3",[t._v("Change Theme")]),n("v-row",[n("v-btn-toggle",{attrs:{rounded:""}},[n("v-btn",{on:{click:t.setLightTheme}},[t._v("Light")]),n("v-btn",{on:{click:t.setDarkTheme}},[t._v("Dark")])],1)],1),n("h3",[t._v("Change Colours")]),n("v-row",[n("v-spacer"),n("colour-picker",{attrs:{"on-update":t.updateTextColour,title:"Change Text Colour"}}),n("v-spacer"),n("colour-picker",{attrs:{"on-update":t.updateCardColour,title:"Change Card Colour"}}),n("v-spacer")],1)],1)},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v(t._s(t.title))]),n("chrome-picker",{on:{input:t.updateValue},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)},Z=[],tt=n("c345"),et={components:{"chrome-picker":tt["Chrome"]},data:function(){return{color:"white"}},methods:{updateValue:function(){this.onUpdate(this.color.hex)}},name:"ColourPicker",props:{onUpdate:Function,title:String}},nt=et,rt=Object(d["a"])(nt,Y,Z,!1,null,"184133df",null),at=rt.exports;function ot(t,e){var n=this.$vuetify.theme.isDark?"dark":"light";this.$vuetify.theme.themes[n][e]=t}var it={components:{"colour-picker":at},data:function(){return{}},methods:{setDarkTheme:function(){this.$vuetify.theme.dark=!0},setLightTheme:function(){this.$vuetify.theme.dark=!1},updateCardColour:function(t){ot.call(this,t,"card")},updateTextColour:function(t){ot.call(this,t,"text")}},name:"MainContainer"},ct=it,lt=n("a609"),st=Object(d["a"])(ct,W,X,!1,null,"6ab93f72",null),ut=st.exports;v()(st,{VBtn:U["a"],VBtnToggle:lt["a"],VContainer:T["a"],VRow:G["a"],VSpacer:$["a"]}),r["a"].config.productionTip=!1;var dt=[{path:"/form",component:Q},{path:"/settings",component:ut},{path:"/",redirect:"/settings"}],pt=new a["a"]({routes:dt});r["a"].use(a["a"]),new r["a"]({vuetify:I,router:pt,render:function(t){return t(A)},beforeMount:function(){var t=this,e=new Promise((function(e){E().then((function(n){t.$vuetify.theme.themes.light.card=n.light.card,t.$vuetify.theme.themes.light.text=n.light.text,t.$vuetify.theme.themes.dark.card=n.dark.card,t.$vuetify.theme.themes.dark.text=n.dark.text,e()}))}));return e}}).$mount("#app")},"6f08":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("6f08"),a=n.n(r);a.a},ac0e:function(t,e,n){"use strict";var r=n("2ae7"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0833f087.js.map