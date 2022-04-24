(function(){"use strict";var t={4238:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container",staticStyle:{border:"1px solid black"}},[n("v-row",{staticClass:"main-units"},[n("v-col",[n("workers-item",{attrs:{workers:t.workers},on:{updateFlightsForWorker:t.updateFlightsForWorker}})],1)],1),n("v-divider",{attrs:{vertical:""}}),n("v-row",{staticClass:"main-units",staticStyle:{height:"100%"}},[n("v-col",[n("flights-item",{attrs:{flightItem:t.flightItem},on:{customChange:t.updateFlightIndex}})],1)],1),n("v-row",{staticClass:".main-units"},[n("v-col",[n("flight-information",{attrs:{flightInfo:t.flightItem.items.length?t.flightItem.items[t.activeFlightIndex].info:void 0}})],1)],1)],1)},a=[],o=n(4479),u=n(6198),s=n(3796),c=n(4367),l=(n(5666),n(1539),n(1249),n(4747),n(7941),n(2479),n(4916),n(5306),n(2222),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:".container"},[n("v-row",{staticClass:".main-units"},[n("v-col",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.flightItem.headers,items:t.localItems,"items-per-page":5},on:{"click:row":t.handleClick}})],1)],1)],1)}),f=[],h=(n(8862),{name:"FlightsItem",props:["flightItem"],data:function(){return{itemIndex:0}},methods:{handleClick:function(t){var e=this.localItems.map((function(t){return JSON.stringify(t)}));this.itemIndex=e.indexOf(JSON.stringify(t)),this.$emit("customChange",this.itemIndex)}},computed:{localItems:function(){return this.flightItem.items.map((function(t){return t.item}))}}}),m=h,d=n(1001),p=n(3453),g=n.n(p),v=n(7024),w=n(5234),k=n(4885),I=n(7894),b=(0,d.Z)(m,l,f,!1,null,"42f36b1a",null),x=b.exports;g()(b,{VCol:v.Z,VContainer:w.Z,VDataTable:k.Z,VRow:I.Z});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(Object.keys(t.flightInfo),(function(e,r){return n("p",{key:r,staticClass:"flight-info-class"},[t._v(" "+t._s(e)+": "+t._s(t.flightInfo[e])+" ")])})),0)},y=[],_={name:"FlightInformation",props:{flightInfo:{type:Object,default:function(){return{}}}}},O=_,C=(0,d.Z)(O,Z,y,!1,null,"56dff6e2",null),F=C.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"list-wrapper",attrs:{flat:""}},[n("v-subheader",[t._v("Workers")]),t._l(t.workers,(function(e,r){return n("div",{key:r,staticClass:"list-item"},[n("p",{on:{click:function(n){return t.sendWorkerIdBackToParent(e.id)}}},[t._v(" "+t._s(e.name)+" ")])])}))],2)},R=[],W={name:"WorkersItem",props:{workers:{type:Array,required:!0,default:function(){return[]}}},methods:{sendWorkerIdBackToParent:function(t){this.$emit("updateFlightsForWorker",t)}}},j=W,T=n(2026),S=n(6975),V=(0,d.Z)(j,D,R,!1,null,"139e5660",null),E=V.exports;g()(V,{VCard:T.Z,VSubheader:S.Z});var P=n(9669),$="https://625ea343873d6798e2ab226c.mockapi.io",A=P.get($+"/workers").then((function(t){return t.data})).catch((function(t){console.log(t)})),M=function(){var t=(0,u.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.get($+"/workers/".concat(e,"/flights")).then((function(t){return t.data})).catch((function(t){console.log(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B={tableData:{from:"Origin",from_date:"Origin date",from_gate:"Origin gate",num:"Flight number",to:"Destination"},flightInfoData:{to_date:"Destination date",to_gate:"Destination gate",plane:"Plane number",duration:"Duration of the flight"}},J=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(e,n){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},n,t[n]))}),{})},N={name:"App",components:{FlightsItem:x,WorkersItem:E,FlightInformation:F},data:function(){return{activeWorkerId:"",activeFlightIndex:0,nIntervId:0,workers:[],flightItem:{headers:[],items:[]}}},created:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getWorkers();case 2:return t.activeWorkerId=t.workers[0].id,e.next=5,t.updateTablesData();case 5:return e.next=7,t.timeout();case 7:case"end":return e.stop()}}),e)})))()},methods:{getFlight:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M(t.activeWorkerId);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getWorkers:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A;case 2:t.workers=e.sent;case 3:case"end":return e.stop()}}),e)})))()},updateTablesData:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getFlight();case 2:n=e.sent.map((function(t){var e={};return Object.keys(t).forEach((function(n){e[B.tableData[n]||B.flightInfoData[n]]=t[n]})),e})),t.flightItem.headers=Object.values(B.tableData).map((function(t){return{text:t,value:t.toLowerCase().replace(/ /g,""),sortable:!1}})),t.flightItem.items=n.map((function(e){var n={},r=J.apply(void 0,[e].concat((0,o.Z)(Object.values(B.tableData))));return n.item={},t.flightItem.headers.forEach((function(t){n.item[t.value]=r[t.text]})),n.info=J.apply(void 0,[e].concat((0,o.Z)(Object.values(B.flightInfoData)))),n}));case 5:case"end":return e.stop()}}),e)})))()},timeout:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.nIntervId||(t.nIntervId=setInterval((function(){return t.updateTablesData()}),6e4));case 1:case"end":return e.stop()}}),e)})))()},updateFlightsForWorker:function(t){var e=this;return(0,u.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.activeWorkerId=t,n.next=3,e.updateTablesData();case 3:return n.next=5,e.timeout();case 5:case"end":return n.stop()}}),n)})))()},updateFlightIndex:function(t){this.activeFlightIndex=t}}},q=N,L=n(5596),z=(0,d.Z)(q,i,a,!1,null,"3e72968e",null),G=z.exports;g()(z,{VCol:v.Z,VContainer:w.Z,VDivider:L.Z,VRow:I.Z});var H=n(5121);r.Z.use(H.Z);var K=new H.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:K,render:function(t){return t(G)}}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],a=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,a<o&&(o=a));if(u){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],u=r[1],s=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var l=s(n)}for(e&&e(r);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkflights_app"]=self["webpackChunkflights_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4238)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.c8d8a4d3.js.map