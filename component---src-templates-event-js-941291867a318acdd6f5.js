(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0Et+":function(e,t,a){var l=a("FdF9");function n(e){return l.createElement("svg",e,l.createElement("path",{id:"ic_event_note_24px",d:"M17,10H7v2H17Zm2-7H18V1H16V3H8V1H6V3H5A1.991,1.991,0,0,0,3.01,5L3,19a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Zm0,16H5V8H19Zm-5-5H7v2h7Z",transform:"translate(-3 -1)",fill:"#131313"}))}n.defaultProps={width:"18",height:"20",viewBox:"0 0 18 20"},e.exports=n,n.default=n},"2aCq":function(e,t,a){e.exports={image:"events-module--image--29wyQ",details:"events-module--details--1ZDBY",date:"events-module--date--3o1ju",calendar:"events-module--calendar--tMVnQ",location:"events-module--location--3Pz0P",pin:"events-module--pin--DHN8p",icon:"events-module--icon--1dehF",downloads:"events-module--downloads--r5Bw3",button:"events-module--button--h12gC"}},OL5a:function(e,t,a){var l=a("FdF9");function n(e){return l.createElement("svg",e,l.createElement("path",{id:"ic_place_24px",d:"M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z",transform:"translate(-5 -2)",fill:"#131313"}))}n.defaultProps={width:"14",height:"20",viewBox:"0 0 14 20"},e.exports=n,n.default=n},t3XT:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return v}));var l=a("FdF9"),n=a("Zttt"),d=a("SKAc"),i=a("7E26"),o=a("7Cbv"),c=a("OL5a"),m=a.n(c),r=a("0Et+"),s=a.n(r),u=a("2aCq"),f=a.n(u),v="19461765";t.default=function(e){var t=e.data.allPrismicEvent.edges[0].node.data,a=null;return t.body[0]&&t.body[0].items&&(a=t.body[0].items.map((function(e){return l.default.createElement(d.a,{key:Object(o.a)(),className:f.a.button,to:e.file.url,download:!0,s:!0},e.filename.text)}))),l.default.createElement(n.a,null,l.default.createElement(i.a,{claim:t.name,imageLeft:{alt:t.image.alt,fluid:t.image.localFile.childImageSharp.fluid},imageRight:{alt:t.image_right.alt,fluid:t.image_right.localFile.childImageSharp.fluid}}),l.default.createElement(d.b,{narrow:!0},l.default.createElement("div",{className:f.a.details},l.default.createElement(d.e,{className:f.a.date},l.default.createElement("div",{className:f.a.icon},l.default.createElement(s.a,{className:f.a.calendar})),t.date.text),l.default.createElement(d.e,{className:f.a.location},l.default.createElement("div",{className:f.a.icon},l.default.createElement(m.a,{className:f.a.pin})),t.location.text),l.default.createElement(d.e,{className:f.a.description},t.description.text)),!!a&&l.default.createElement("div",{className:f.a.downloads},a)))}}}]);
//# sourceMappingURL=component---src-templates-event-js-941291867a318acdd6f5.js.map