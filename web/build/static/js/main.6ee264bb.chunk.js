(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{1021:function(e,t,n){"use strict";n.r(t);var r,a,c=n(2),o=n(0),s=n.n(o),i=n(11),u=n.n(i),l=n(15),h=n(13),d=n(14),m=n(10),j=n(1068),b=n(1064),v=n(1069),f=n(21);!function(e){e[e.showEmotes=0]="showEmotes",e[e.showName=1]="showName",e[e.showTimestamp=2]="showTimestamp",e[e.twitchChatMode=3]="twitchChatMode"}(a||(a={}));var g=new URL(window.location.href),O={state:{queryCache:new l.a,apiBaseUrl:null!==(r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL)&&void 0!==r?r:window.location.protocol+"//"+window.location.host,settings:{showEmotes:{displayName:"Show Emotes",value:!0},showName:{displayName:"Show Name",value:!0},showTimestamp:{displayName:"Show Timestamp",value:!0},twitchChatMode:{displayName:"Twitch Chat Mode",value:!1}},currentChannel:g.searchParams.get("channel"),currentUsername:g.searchParams.get("username"),showSwagger:g.searchParams.has("swagger"),error:!1},setState:function(e){},setCurrents:function(){},setSettings:function(e){},setShowSwagger:function(e){}},p=Object(o.createContext)(O),x=p.Provider,w=function(e){var t=e.children,n=function(e,t){var n=Object(o.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),s(t),t}})),r=Object(f.a)(n,2),a=r[0],c=r[1],s=function(t){try{var n=t instanceof Function?t(a):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}},i=a;return"object"===typeof t&&(i=Object(m.a)(Object(m.a)({},t),a)),[i,s]}("justlog:settings",O.state.settings),r=Object(f.a)(n,2),a=r[0],s=r[1],i=Object(o.useState)(Object(m.a)(Object(m.a)({},O.state),{},{settings:a})),u=Object(f.a)(i,2),l=u[0],h=u[1];return Object(c.jsx)(x,{value:{state:l,setState:h,setSettings:function(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];"undefined"===typeof O.state.settings[r]&&delete e[r]}s(e),h(Object(m.a)(Object(m.a)({},l),{},{settings:e}))},setCurrents:function(){var e,t,n,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;a=null!==(e=null===(t=a)||void 0===t?void 0:t.toLowerCase().trim())&&void 0!==e?e:null,c=null!==(n=null===(r=c)||void 0===r?void 0:r.toLowerCase().trim())&&void 0!==n?n:null,h(Object(m.a)(Object(m.a)({},l),{},{currentChannel:a,currentUsername:c,error:!1}));var o=new URL(window.location.href);a&&o.searchParams.set("channel",a),c&&o.searchParams.set("username",c),window.history.replaceState({},"justlog",o.toString())},setShowSwagger:function(e){var t=new URL(window.location.href);e?t.searchParams.set("swagger",""):t.searchParams.delete("swagger"),window.history.replaceState({},"justlog",t.toString()),h(Object(m.a)(Object(m.a)({},l),{},{showSwagger:e}))}},children:t})},y={staleTime:5e4};var C=n(267),S=n.n(C),N=n(1056),L=n(243);n(1006);function E(){var e=Object(h.a)(["\n    position: absolute;\n    top: 0;\n    background: var(--bg);\n    left: 0;\n    right: 0;\n    margin-top: 90px;\n    z-index: 999;\n    padding-bottom: 90px;\n\n    .swagger-ui {\n        background: var(--bg);\n        \n        .scheme-container {\n            background: var(--bg-bright);\n        }\n    }\n"]);return E=function(){return e},e}function k(){var e=Object(h.a)(["\n\n"]);return k=function(){return e},e}var U=d.a.div(k());function P(){var e=Object(o.useContext)(p),t=e.state,n=e.setShowSwagger;return Object(c.jsxs)(U,{children:[Object(c.jsx)(N.a,{"aria-controls":"docs","aria-haspopup":"true",onClick:function(){n(!t.showSwagger)},size:"small",color:t.showSwagger?"primary":"default",children:Object(c.jsx)(S.a,{})}),Object(c.jsx)(T,{show:t.showSwagger})]})}var M=d.a.div(E());function T(e){var t=e.show,n=Object(o.useContext)(p).state,r=new URL(n.apiBaseUrl);return u.a.createPortal(Object(c.jsx)(M,{style:{display:t?"block":"none"},children:Object(c.jsx)(L.a,{url:"/swagger.json",requestInterceptor:function(e){if(e.url.includes("swagger.json"))return e;var t=new URL(e.url);return t.host=r.host,t.protocol=r.protocol,t.port=r.port,e.url=t.toString(),e}})}),document.body)}var z=n(107),R=n(1070),D=n(271),H=n(1059),_=n(1060),Y=n(1061);function F(){var e=Object(h.a)(["\n\t\n"]);return F=function(){return e},e}var I=d.a.div(F());function A(){for(var e=Object(o.useContext)(p),t=e.state,n=e.setSettings,r=Object(o.useState)(null),a=Object(f.a)(r,2),s=a[0],i=a[1],u=[],l=function(){var e=Object(f.a)(d[h],2),r=e[0],a=e[1];u.push(Object(c.jsxs)(R.a,{onClick:function(){return function(e,r){var a=Object(m.a)(Object(m.a)({},r),{},{value:!r.value});n(Object(m.a)(Object(m.a)({},t.settings),{},Object(z.a)({},e,a)))}(r,a)},children:[a.value?Object(c.jsx)(H.a,{}):Object(c.jsx)(_.a,{}),"\xa0\xa0",a.displayName]},r))},h=0,d=Object.entries(t.settings);h<d.length;h++)l();return Object(c.jsxs)(I,{children:[Object(c.jsx)(N.a,{"aria-controls":"settings","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},size:"small",children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)(D.a,{id:"settings",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){i(null)},children:u})]})}function B(){var e=Object(h.a)(["\n    text-align: center;\n"]);return B=function(){return e},e}function W(){var e=Object(h.a)(["\n    display: inline-flex;\n    align-items: center;\n    padding: 15px;\n    background: var(--bg-bright);\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n\tmargin: 0 auto;\n    z-index: 99;\n\n    > * {\n        margin-right: 15px !important;    \n\n        &:last-child {\n            margin-right: 0 !important;\n        }\n    }\n"]);return W=function(){return e},e}var K=d.a.form(W()),V=d.a.div(B());function q(){var e=Object(o.useContext)(p),t=e.setCurrents,n=e.state,r=Object(l.d)(),a=function(){var e=Object(o.useContext)(p).state,t=Object(l.c)("channels",(function(){var t=new URL("".concat(e.apiBaseUrl,"/channels"));return fetch(t.toString()).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){return e.channels}))}),{refetchOnWindowFocus:!1,refetchOnReconnect:!1}).data;return null!==t&&void 0!==t?t:[]}();return Object(c.jsx)(V,{children:Object(c.jsxs)(K,{onSubmit:function(e){if(e.preventDefault(),e.target instanceof HTMLFormElement){var n=new FormData(e.target),a=n.get("channel"),c=n.get("username");r.invalidateQueries(["log",{channel:null===a||void 0===a?void 0:a.toLowerCase(),username:null===c||void 0===c?void 0:c.toLowerCase()}]),t(a,c)}},action:"none",children:[Object(c.jsx)(v.a,{id:"autocomplete-channels",options:a.map((function(e){return e.name})),style:{width:225},defaultValue:n.currentChannel,getOptionLabel:function(e){return e},clearOnBlur:!1,renderInput:function(e){return Object(c.jsx)(j.a,Object(m.a)(Object(m.a)({},e),{},{name:"channel",label:"channel",variant:"filled",autoFocus:null===n.currentChannel}))}}),Object(c.jsx)(j.a,{error:n.error,name:"username",label:"username",variant:"filled",autoComplete:"off",defaultValue:n.currentUsername,autoFocus:null!==n.currentChannel&&null===n.currentUsername}),Object(c.jsx)(b.a,{variant:"contained",color:"primary",size:"large",type:"submit",children:"load"}),Object(c.jsx)(A,{}),Object(c.jsx)(P,{})]})})}function J(e){return e.startsWith("id:")}function Q(e){return e.replace("id:","")}function G(){return Object(c.jsxs)("svg",{className:"txt",height:32,viewBox:"0 0 32 32",width:32,children:[Object(c.jsx)("title",{}),Object(c.jsx)("path",{d:"M21 26v2.003A1.995 1.995 0 0119.003 30H3.997A2 2 0 012 27.993V5.007C2 3.898 2.9 3 4.009 3H14v6.002c0 1.111.898 1.998 2.006 1.998H21v2h-8.993A3.003 3.003 0 009 15.999V23A2.996 2.996 0 0012.007 26H21zM15 3v5.997c0 .554.451 1.003.99 1.003H21l-6-7zm-3.005 11C10.893 14 10 14.9 10 15.992v7.016A2 2 0 0011.995 25h17.01C30.107 25 31 24.1 31 23.008v-7.016A2 2 0 0029.005 14h-17.01zM14 17v6h1v-6h2v-1h-5v1h2zm6 2.5L18 16h1l1.5 2.625L22 16h1l-2 3.5 2 3.5h-1l-1.5-2.625L19 23h-1l2-3.5zm6-2.5v6h1v-6h2v-1h-5v1h2z",fill:"#929292",fillRule:"evenodd"})]})}var X=n(1071),Z=n(1065),$=n(23);function ee(e,t,n,r){var a=Object(o.useContext)(p).state,c=Object(l.c)(["log",{channel:e,username:t,year:n,month:r}],(function(){if(e&&t){var c=J(e),o=J(t);c&&(e=Q(e)),o&&(t=Q(t));var s=new URL("".concat(a.apiBaseUrl,"/channel").concat(c?"id":"","/").concat(e,"/user").concat(o?"id":"","/").concat(t,"/").concat(n,"/").concat(r,"?reverse&json"));return fetch(s.toString()).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){var t,n=[],r=Object($.a)(e.messages);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(Object(m.a)(Object(m.a)({},a),{},{timestamp:new Date(a.timestamp),emotes:te(a.text,a.tags.emotes)}))}}catch(c){r.e(c)}finally{r.f()}return n}))}return[]}),{refetchOnWindowFocus:!1,refetchOnReconnect:!1}).data;return null!==c&&void 0!==c?c:[]}function te(e,t){var n=[];if(!t)return n;var r,a=t.split("/"),c=Object($.a)(a);try{for(c.s();!(r=c.n()).done;){var o,s=r.value.split(":"),i=Object(f.a)(s,2),u=i[0],l=i[1].split(","),h=Object($.a)(l);try{for(h.s();!(o=h.n()).done;){var d=o.value.split("-"),m=Object(f.a)(d,2),j=m[0],b=m[1],v=Number(j),g=Number(b)+1;n.push({id:u,startIndex:v,endIndex:g,code:e.substr(v,g-v)})}}catch(O){h.e(O)}finally{h.f()}}}catch(O){c.e(O)}finally{c.f()}return n}var ne=n(31),re=n.n(ne),ae=n(48);function ce(e){return[].concat(Object(ae.a)(function(e){var t=Object(l.c)(["bttv:channel",{channelId:e}],(function(){return""===e?Promise.resolve({sharedEmotes:[],channelEmotes:[]}):fetch("https://api.betterttv.net/3/cached/users/twitch/".concat(e)).then((function(e){return e.json()}))}),y),n=t.isLoading,r=t.error,a=t.data;if(n)return[];if(r)return console.error(r),[];for(var c=[],o=0,s=[].concat(Object(ae.a)(null!==(i=null===a||void 0===a?void 0:a.channelEmotes)&&void 0!==i?i:[]),Object(ae.a)(null!==(u=null===a||void 0===a?void 0:a.sharedEmotes)&&void 0!==u?u:[]));o<s.length;o++){var i,u,h=s[o];c.push({id:h.id,code:h.code,urls:{small:"https://cdn.betterttv.net/emote/".concat(h.id,"/1x"),medium:"https://cdn.betterttv.net/emote/".concat(h.id,"/2x"),big:"https://cdn.betterttv.net/emote/".concat(h.id,"/3x")}})}return c}(e)),Object(ae.a)(function(e){var t=Object(l.c)(["ffz:channel",{channelId:e}],(function(){return""===e?Promise.resolve({sets:{}}):fetch("https://api.frankerfacez.com/v1/room/id/".concat(e)).then((function(e){return e.json()}))}),y),n=t.isLoading,r=t.error,a=t.data;if(n||!(null===a||void 0===a?void 0:a.sets))return[];if(r)return console.error(r),[];var c,o=[],s=Object($.a)(Object.values(a.sets));try{for(s.s();!(c=s.n()).done;){var i,u=c.value,h=Object($.a)(u.emoticons);try{for(h.s();!(i=h.n()).done;){var d=i.value;o.push({id:String(d.id),code:d.name,urls:{small:d.urls[1],medium:d.urls[2],big:d.urls[4]}})}}catch(m){h.e(m)}finally{h.f()}}}catch(m){s.e(m)}finally{s.f()}return o}(e)),Object(ae.a)(function(){var e=Object(l.c)("bttv:global",(function(){return fetch("https://api.betterttv.net/3/cached/emotes/global").then((function(e){return e.json()}))}),y),t=e.isLoading,n=e.error,r=e.data;if(t||!r)return[];if(n)return console.error(n),[];var a,c=[],o=Object($.a)(r);try{for(o.s();!(a=o.n()).done;){var s=a.value;c.push({id:s.id,code:s.code,urls:{small:"https://cdn.betterttv.net/emote/".concat(s.id,"/1x"),medium:"https://cdn.betterttv.net/emote/".concat(s.id,"/2x"),big:"https://cdn.betterttv.net/emote/".concat(s.id,"/3x")}})}}catch(i){o.e(i)}finally{o.f()}return c}()),Object(ae.a)(function(){var e=Object(l.c)("ffz:global",(function(){return fetch("https://api.frankerfacez.com/v1/set/global").then((function(e){return e.json()}))}),y),t=e.isLoading,n=e.error,r=e.data;if(t||!(null===r||void 0===r?void 0:r.sets))return[];if(n)return console.error(n),[];var a,c=[],o=Object($.a)(Object.values(r.sets));try{for(o.s();!(a=o.n()).done;){var s,i=a.value,u=Object($.a)(i.emoticons);try{for(u.s();!(s=u.n()).done;){var h=s.value;c.push({id:String(h.id),code:h.name,urls:{small:h.urls[1],medium:h.urls[2],big:h.urls[4]}})}}catch(d){u.e(d)}finally{u.f()}}}catch(d){o.e(d)}finally{o.f()}return c}()))}var oe=n(270),se=n.n(oe);function ie(){var e=Object(h.a)(["\n\tmax-height: 18px;\n\tmargin: 0 2px;\n\tmargin-bottom: -2px;\n\twidth: auto;\n"]);return ie=function(){return e},e}function ue(){var e=Object(h.a)(["\n\n\ta {\n\t\tmargin: 0 2px;\n\t\tcolor: var(--theme2);\n\t\ttext-decoration: none;\n\n\t\t&:hover, &:active, &:focus {\n\t\t\tcolor: var(--theme2-bright);\n\t\t}\n\t}\n"]);return ue=function(){return e},e}var le=d.a.div(ue()),he=d.a.img(ie());function de(e){var t,n=e.message,r=e.thirdPartyEmotes,a=Object(o.useContext)(p).state,s=[],i="",u=n.text,l="";n.tags["system-msg"]&&(u=u.replace(n.tags["system-msg"]+" ",""),l="".concat(n.tags["system-msg"]," "));for(var h=0;h<=u.length;h++){var d=u[h];if(t=!1,a.settings.showEmotes.value){var m,j=Object($.a)(n.emotes);try{for(j.s();!(m=j.n()).done;){var b=m.value;if(b.startIndex===h){t=!0,s.push(Object(c.jsx)(he,{className:"emote",alt:b.code,src:"https://static-cdn.jtvnw.net/emoticons/v1/".concat(b.id,"/1.0")},h)),h+=b.endIndex-b.startIndex-1;break}}}catch(x){j.e(x)}finally{j.f()}}if(!t){if(" "!==d&&h!==u.length){i+=d;continue}var v,f=!1,g=Object($.a)(r);try{for(g.s();!(v=g.n()).done;){var O=v.value;if(i.trim()===O.code){s.push(Object(c.jsx)(he,{className:"emote",alt:O.code,src:O.urls.small},h)),f=!0,i="";break}}}catch(x){g.e(x)}finally{g.f()}f||(s.push(Object(c.jsx)(se.a,{componentDecorator:function(e,t,n){return Object(c.jsx)("a",{target:"__blank",href:e,children:t},n)},children:i},h)),i=""),s.push(d)}}return Object(c.jsxs)(le,{className:"message",children:[l,s]})}function me(){var e=Object(h.a)(["\n\tdisplay: inline;\n"]);return me=function(){return e},e}var je=d.a.div.attrs((function(e){return{style:{color:e.color}}}))(me());function be(e){var t=e.displayName,n=e.color,r=""!==n?n:"grey";return Object(c.jsxs)(je,{color:r,className:"user",children:[t,":"]})}var ve=n(120),fe=n.n(ve),ge=n(121),Oe=n.n(ge);function pe(){var e=Object(h.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n    margin-bottom: 1px;\n\n    .timestamp {\n        color: var(--text-dark);\n        user-select: none;\n        font-family: monospace;\n        white-space: nowrap;\n        line-height: 1.1rem;\n    }\n\n    .user {\n        margin-left: 5px;\n        user-select: none;\n        font-weight: bold;\n        line-height: 1.1rem;\n    }\n\n    .message {\n        margin-left: 5px;\n        line-height: 1.1rem;\n    }\n"]);return pe=function(){return e},e}re.a.extend(fe.a),re.a.extend(Oe.a),re.a.tz.guess();var xe=d.a.li(pe());function we(e){var t=e.message,n=Object(o.useContext)(p).state;return n.settings.showEmotes.value?Object(c.jsx)(ye,{message:t}):Object(c.jsxs)(xe,{className:"logLine",children:[n.settings.showTimestamp.value&&Object(c.jsx)("span",{className:"timestamp",children:re()(t.timestamp).format("YYYY-MM-DD HH:mm:ss")}),n.settings.showName.value&&Object(c.jsx)(be,{displayName:t.displayName,color:t.tags.color}),Object(c.jsx)(de,{message:t,thirdPartyEmotes:[]})]})}function ye(e){var t=e.message,n=ce(t.tags["room-id"]),r=Object(o.useContext)(p).state;return Object(c.jsxs)(xe,{className:"logLine",children:[r.settings.showTimestamp.value&&Object(c.jsx)("span",{className:"timestamp",children:re()(t.timestamp).format("YYYY-MM-DD HH:mm:ss")}),r.settings.showName.value&&Object(c.jsx)(be,{displayName:t.displayName,color:t.tags.color}),Object(c.jsx)(de,{message:t,thirdPartyEmotes:n})]})}var Ce=n(272);function Se(){var e=Object(h.a)(["\n    padding: 0;\n    margin: 0;\n    position: relative;\n\n    .search {\n        position: absolute;\n        top: -52px;\n        width: 320px;\n        left: 0;\n    }\n\n    .logLine {\n        white-space: nowrap;\n    }\n\n    .list {\n        scrollbar-color: dark;\n    }\n"]);return Se=function(){return e},e}var Ne=d.a.ul(Se());function Le(e){var t,n,r=e.year,a=e.month,s=Object(o.useContext)(p),i=s.state,u=s.setState,l=Object(o.useState)(""),h=Object(f.a)(l,2),d=h[0],b=h[1],v=ee(null!==(t=i.currentChannel)&&void 0!==t?t:"",null!==(n=i.currentUsername)&&void 0!==n?n:"",r,a).filter((function(e){return e.text.toLowerCase().includes(d.toLowerCase())})),g=Object(o.useRef)(null);return Object(o.useEffect)((function(){u(Object(m.a)(Object(m.a)({},i),{},{activeSearchField:g.current}))}),[]),Object(c.jsxs)(Ne,{onMouseEnter:function(){u(Object(m.a)(Object(m.a)({},i),{},{activeSearchField:g.current}))},children:[Object(c.jsx)(j.a,{className:"search",label:"Search",inputRef:g,onChange:function(e){return b(e.target.value)},size:"small",InputProps:{startAdornment:Object(c.jsx)(X.a,{position:"start",children:Object(c.jsx)(Z.a,{})})}}),Object(c.jsx)(Ce.a,{className:"list",height:600,itemCount:v.length,itemSize:20,width:"100%",children:function(e){var t=e.index,n=e.style;return Object(c.jsx)("div",{style:n,children:Object(c.jsx)(we,{message:v[t]},v[t].id?v[t].id:t)})}})]})}function Ee(){var e=Object(h.a)(["\n\talign-items: flex-start;\n    margin-bottom: 1px;\n    padding: 5px 20px;\n\n    .timestamp {\n        color: var(--text-dark);\n        user-select: none;\n        font-family: monospace;\n        white-space: nowrap;\n        margin-right: 5px;\n        line-height: 1.1rem;\n    }\n\n    .user {\n        display: inline-block;\n        margin-right: 5px;\n        user-select: none;\n        font-weight: bold;\n        line-height: 1.1rem;\n    }\n\n    .message {\n        display: inline;\n        line-height: 20px;\n\n        a {\n            word-wrap: break-word;\n        }\n\n        .emote {\n            max-height: 28px;\n            margin: 0 2px;\n            margin-bottom: -10px;\n            width: auto;\n        }\n    }\n"]);return Ee=function(){return e},e}re.a.extend(fe.a),re.a.extend(Oe.a),re.a.tz.guess();var ke=d.a.li(Ee());function Ue(e){var t=e.message,n=Object(o.useContext)(p).state;return n.settings.showEmotes.value?Object(c.jsx)(Pe,{message:t}):Object(c.jsxs)(ke,{className:"logLine",children:[n.settings.showTimestamp.value&&Object(c.jsx)("span",{className:"timestamp",children:re()(t.timestamp).format("YYYY-MM-DD HH:mm:ss")}),n.settings.showName.value&&Object(c.jsx)(be,{displayName:t.displayName,color:t.tags.color}),Object(c.jsx)(de,{message:t,thirdPartyEmotes:[]})]})}function Pe(e){var t=e.message,n=ce(t.tags["room-id"]),r=Object(o.useContext)(p).state;return Object(c.jsxs)(ke,{className:"logLine",children:[r.settings.showTimestamp.value&&Object(c.jsx)("span",{className:"timestamp",children:re()(t.timestamp).format("YYYY-MM-DD HH:mm:ss")}),r.settings.showName.value&&Object(c.jsx)(be,{displayName:t.displayName,color:t.tags.color}),Object(c.jsx)(de,{message:t,thirdPartyEmotes:n})]})}function Me(){var e=Object(h.a)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    width: 340px;\n"]);return Me=function(){return e},e}var Te=d.a.ul(Me());function ze(e){var t,n,r=e.year,a=e.month,s=Object(o.useContext)(p).state,i=ee(null!==(t=s.currentChannel)&&void 0!==t?t:"",null!==(n=s.currentUsername)&&void 0!==n?n:"",r,a);return Object(c.jsx)(Te,{children:i.map((function(e,t){return Object(c.jsx)(Ue,{message:e},e.id?e.id:t)}))})}function Re(){var e=Object(h.a)(["\n\n"]);return Re=function(){return e},e}function De(){var e=Object(h.a)(["\n    position: relative;\n    background: var(--bg-bright);\n    border-radius: 3px;\n    padding: 0.5rem;\n    margin-top: 3rem;\n\n    .txt {\n        position: absolute;\n        top: 5px;\n        right: 15px;\n        opacity: 0.9;\n        cursor: pointer;\n        z-index: 999;\n\n        &:hover {\n            opacity: 1;\n        }\n    }\n"]);return De=function(){return e},e}var He=d.a.div(De());function _e(e){var t=e.year,n=e.month,r=e.initialLoad,a=void 0!==r&&r,s=Object(o.useContext)(p).state,i=Object(o.useState)(a),u=Object(f.a)(i,2),l=u[0],h=u[1];if(!l)return Object(c.jsx)(He,{children:Object(c.jsx)(Fe,{year:t,month:n,onLoad:function(){return h(!0)}})});var d="".concat(s.apiBaseUrl);return s.currentChannel&&J(s.currentChannel)?d+="/channelid/".concat(Q(s.currentChannel)):d+="/channel/".concat(s.currentChannel),s.currentUsername&&J(s.currentUsername)?d+="/userid/".concat(Q(s.currentUsername)):d+="/user/".concat(s.currentUsername),d+="/".concat(t,"/").concat(n,"?reverse"),Object(c.jsxs)(He,{children:[Object(c.jsx)("a",{className:"txt",target:"__blank",href:d,rel:"noopener noreferrer",children:Object(c.jsx)(G,{})}),!s.settings.twitchChatMode.value&&Object(c.jsx)(Le,{year:t,month:n}),s.settings.twitchChatMode.value&&Object(c.jsx)(ze,{year:t,month:n})]})}var Ye=d.a.div(Re());function Fe(e){var t=e.year,n=e.month,r=e.onLoad;return Object(c.jsx)(Ye,{children:Object(c.jsxs)(b.a,{variant:"contained",color:"primary",size:"large",onClick:r,children:["load ",t,"/",n]})})}function Ie(){var e=Object(h.a)(["\n    color: white;\n    padding: 2rem;\n    padding-top: 0;\n    width: 100%;\n"]);return Ie=function(){return e},e}var Ae=d.a.div(Ie());function Be(){var e=Object(o.useContext)(p).state,t=navigator.platform.toUpperCase().indexOf("MAC")>=0?"metaKey":"ctrlKey";Object(o.useEffect)((function(){var n=function(n){"f"===n.key&&n[t]&&!e.settings.twitchChatMode.value&&(n.preventDefault(),e.activeSearchField&&e.activeSearchField.focus())};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e.activeSearchField,e.settings.twitchChatMode.value,t]);var n=function(e,t){var n=Object(o.useContext)(p),r=n.state,a=n.setState,c=Object(l.c)(["availableLogs",{channel:e,username:t}],(function(){if(e&&t){var n=J(e),c=J(t);n&&(e=Q(e)),c&&(t=Q(t));var o=new URL("".concat(r.apiBaseUrl,"/list"));return o.searchParams.append("channel".concat(n?"id":""),e),o.searchParams.append("user".concat(c?"id":""),t),fetch(o.toString()).then((function(e){if(e.ok)return e;throw Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){return e.availableLogs})).catch((function(){return a(Object(m.a)(Object(m.a)({},r),{},{error:!0})),[]}))}return[]}),{refetchOnWindowFocus:!1,refetchOnReconnect:!1}).data;return null!==c&&void 0!==c?c:[]}(e.currentChannel,e.currentUsername);return Object(c.jsx)(Ae,{children:n.map((function(e,t){return Object(c.jsx)(_e,{year:e.year,month:e.month,initialLoad:0===t},"".concat(e.year,":").concat(e.month))}))})}function We(){var e=Object(h.a)(["\n\t\n"]);return We=function(){return e},e}var Ke=d.a.div(We());function Ve(){return Object(c.jsxs)(Ke,{children:[Object(c.jsx)(q,{}),Object(c.jsx)(Be,{})]})}var qe=n(1066),Je=n(1067),Qe=Object(qe.a)({palette:{type:"dark"}});function Ge(){var e=Object(o.useContext)(p).state;return Object(c.jsx)(l.b,{queryCache:e.queryCache,children:Object(c.jsx)(Ve,{})})}u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(w,{children:Object(c.jsx)(Je.a,{theme:Qe,children:Object(c.jsx)(Ge,{})})})}),document.getElementById("root"))},997:function(e,t){},999:function(e,t){}},[[1021,1,2]]]);
//# sourceMappingURL=main.6ee264bb.chunk.js.map