(this.webpackJsonpphasmofinder=this.webpackJsonpphasmofinder||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(13),c=t.n(r),s=(t(35),t(9)),o=t(12),d=(t(36),t(59)),l=t(6),u="Freezing Temperatures",h="Fingerprints",f="Spirit Box",v="EMF Level 5",g="Ghost Writing",m="Ghost Orb",j="D.O.T.S. Projector",b=t(2);function p(e){switch(e){case v:return Object(b.jsx)(l.f,{className:"ghost-evidence"},e);case f:return Object(b.jsx)(l.e,{className:"ghost-evidence"},e);case g:return Object(b.jsx)(l.d,{className:"ghost-evidence"},e);case u:return Object(b.jsx)(l.a,{className:"ghost-evidence"},e);case m:return Object(b.jsx)(l.g,{className:"ghost-evidence"},e);case h:return Object(b.jsx)(l.c,{className:"ghost-evidence"},e);case j:return Object(b.jsx)(l.b,{className:"ghost-evidence"},e);default:return null}}var O=function(e){var n=e.evidence,t=e.currentEvidence,a=e.ruledOutEvidence,i=e.remainingEvidence,r=e.toggleEvidence;return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{variant:"outlined",startIcon:p(n),className:"evidence-btn ".concat(t.includes(n)&&"selected"," ").concat(a.includes(n)&&"ruled-out"),onClick:r,disabled:!(i.includes(n)||t.includes(n)||a.includes(n)),children:n})})},w=t(60);t(42);var y=function(e){var n=e.ghost,t=e.currentEvidence;return Object(b.jsxs)("div",{className:"ghost",children:[Object(b.jsx)("h4",{className:"ghost-name",children:n.name}),Object(b.jsx)("div",{children:Object(b.jsx)("small",{children:n.evidence.map((function(e){return function(e,n){switch(e){case v:return Object(b.jsx)(l.f,{className:"ghost-evidence ".concat(n&&"found")},e);case f:return Object(b.jsx)(l.e,{className:"ghost-evidence ".concat(n&&"found")},e);case g:return Object(b.jsx)(l.d,{className:"ghost-evidence ".concat(n&&"found")},e);case u:return Object(b.jsx)(l.a,{className:"ghost-evidence ".concat(n&&"found")},e);case m:return Object(b.jsx)(l.g,{className:"ghost-evidence ".concat(n&&"found")},e);case h:return Object(b.jsx)(l.c,{className:"ghost-evidence ".concat(n&&"found")},e);case j:return Object(b.jsx)(l.b,{className:"ghost-evidence ".concat(n&&"found")},e);default:return null}}(e,t.includes(e))}))})})]})},x=t(20);var k=t(61);function N(e,n){return S().filter((function(t){return function(e,n){var t,a=Object(x.a)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(!e.includes(i))return!1}}catch(r){a.e(r)}finally{a.f()}return!0}(t.evidence,e)&&function(e,n){var t,a=Object(x.a)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(e.includes(i))return!1}}catch(r){a.e(r)}finally{a.f()}return!0}(t.evidence,n)}))}function S(){return[{id:1,name:"Spirit",evidence:[v,f,g],traits:["Can't hunt for 180 seconds after smudging (normally 90)"]},{id:2,name:"Wraith",evidence:[v,f,j],traits:["Can teleport near a player while not hunting","Can't leave footprints","Increased ghost activity when stepping in salt"]},{id:3,name:"Phantom",evidence:[f,h,j],traits:["Taking a photo makes it disappear","Sanity drops quickly while looking at the ghost","Stays invisible longer during the hunt (only visible every 1 to 2 seconds)"]},{id:4,name:"Poltergeist",evidence:[f,h,g],traits:["Can throw multiple items at once","Sanity decreases faster when multiple items are thrown"]},{id:5,name:"Banshee",evidence:[h,m,j],traits:["It will target a single player during hunts (ignores others)","Navigates to target and will hunt if it sees it's target for long enough","Crucifixes have a wider effective radius"]},{id:6,name:"Jinn",evidence:[v,h,u],traits:["Runs faster while further from a player","Can lower all players sanity by 25%","Can't use abilities if the power is off"]},{id:7,name:"Mare",evidence:[f,m,g],traits:["Increased hunt chance if in a dark room","Can't turn on lights"]},{id:8,name:"Revenant",evidence:[m,g,u],traits:["Runs faster if it can see a player","Runs slower if it can't see a player"]},{id:9,name:"Shade",evidence:[v,g,u],traits:["Less active when multiple players are in the room","More likely to hunt when players are alone"]},{id:10,name:"Demon",evidence:[h,g,u],traits:["Can hunt when sanity is high","Successful ouija board answers take 40% sanity instead of 50%"]},{id:11,name:"Yurei",evidence:[m,u,j],traits:["Sanity drops faster during ghost events or when near the ghost in a hunt","Roams less when smudge sticks are used"]},{id:12,name:"Oni",evidence:[v,u,j],traits:["More active when multiple players are in the room","Can throw objects further"]},{id:13,name:"Hantu",evidence:[h,m,u],traits:["Moves faster in cold rooms during hunts"]},{id:14,name:"Yokai",evidence:[f,m,j],traits:["Can hunt when sanity is high if players are talking","Can only hear close voices during hunts"]},{id:15,name:"Goryo",evidence:[v,h,j],traits:["D.O.T.S only shows through video cameras","Does not roam much"]},{id:16,name:"Myling",evidence:[v,h,g],traits:["Can be detected by the parabolic mic more than other ghosts","Footsteps can only be heard up close during a hunt (equal to flashlight flicker distance)"]},{id:17,name:"Onryo",evidence:[f,m,u],traits:["Increased hunt chance when a flame is extinguished","Increased hunt change after each player death"]},{id:18,name:"The Twins",evidence:[v,f,u],traits:["Interactions around the map and in a specific room","Multiple interactions at the same time"]},{id:19,name:"Raiju",evidence:[v,m,j],traits:["Runs faster when near electronics","Can hunt early when near active electronics"]},{id:20,name:"Obake",evidence:[v,h,m],traits:["Can have a 6 finger fingerprint"]}].sort((function(e,n){return e.name.localeCompare(n.name)}))}var C=function(){var e=[u,h,f,v,g,m,j],n=Object(a.useState)([]),t=Object(o.a)(n,2),i=t[0],r=t[1],c=Object(a.useState)(e),d=Object(o.a)(c,2),l=d[0],p=d[1],C=Object(a.useState)([]),E=Object(o.a)(C,2),W=E[0],M=E[1],I=Object(a.useState)(S()),R=Object(o.a)(I,2),T=R[0],P=R[1],A=function(e,n){P(N(e,n)),p(function(e,n){return t=function(e){var n,t=new Set,a=Object(x.a)(e);try{for(a.s();!(n=a.n()).done;){var i=n.value;t.add(i)}}catch(d){a.e(d)}finally{a.f()}var r,c=[],s=Object(x.a)(t);try{for(s.s();!(r=s.n()).done;){var o=r.value;c.push(o)}}catch(d){s.e(d)}finally{s.f()}return c}(N(e,n).flatMap((function(e){return e.evidence}))),a=[].concat(Object(s.a)(e),Object(s.a)(n)),t.filter((function(e){return!a.includes(e)}));var t,a}(e,n))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phasmofinder"}),Object(b.jsxs)("div",{id:"entry",children:[e.map((function(e){return Object(b.jsx)(O,{evidence:e,currentEvidence:i,ruledOutEvidence:W,remainingEvidence:l,toggleEvidence:function(){return function(e){var n=i,t=W;i.includes(e)?(t=[].concat(Object(s.a)(W),[e]),n=i.filter((function(n){return n!==e})),M(t),r(n)):W.includes(e)?(t=W.filter((function(n){return n!==e})),M(t)):(n=[].concat(Object(s.a)(i),[e]),r(n)),A(n,t)}(e)}},e)})),Object(b.jsx)(w.a,{onClick:function(){r([]),p(e),M([]),P(S())},className:"clear-btn",children:Object(b.jsx)(k.a,{})})]}),Object(b.jsx)("div",{className:"ghost-section",children:T.map((function(e){return Object(b.jsx)(y,{ghost:e,currentEvidence:i},e.id)}))})]})},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(n,e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.ff38b3cd.chunk.js.map