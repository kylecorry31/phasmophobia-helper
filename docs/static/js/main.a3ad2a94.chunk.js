(this.webpackJsonpphasmofinder=this.webpackJsonpphasmofinder||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(13),c=t.n(r),s=(t(35),t(8)),o=t(12),l=(t(36),t(59)),d="Freezing Temperatures",u="Fingerprints",h="Spirit Box",f="EMF Level 5",v="Ghost Writing",m="Ghost Orb",g="D.O.T.S. Projector",j=t(11),b=t(2),p=function(e){var n=e.evidence,t=e.className;switch(n){case f:return Object(b.jsx)(j.f,{className:"ghost-evidence ".concat(t)},n);case h:return Object(b.jsx)(j.e,{className:"ghost-evidence ".concat(t)},n);case v:return Object(b.jsx)(j.d,{className:"ghost-evidence ".concat(t)},n);case d:return Object(b.jsx)(j.a,{className:"ghost-evidence ".concat(t)},n);case m:return Object(b.jsx)(j.g,{className:"ghost-evidence ".concat(t)},n);case u:return Object(b.jsx)(j.c,{className:"ghost-evidence ".concat(t)},n);case g:return Object(b.jsx)(j.b,{className:"ghost-evidence ".concat(t)},n);default:return null}},w=function(e){var n=e.evidence,t=e.currentEvidence,i=e.ruledOutEvidence,a=e.remainingEvidence,r=e.toggleEvidence;return Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{variant:"outlined",startIcon:Object(b.jsx)(p,{evidence:n}),className:"evidence-btn ".concat(t.includes(n)&&"selected"," ").concat(i.includes(n)&&"ruled-out"),onClick:r,disabled:!(a.includes(n)||t.includes(n)||i.includes(n)),children:n})})},O=t(60),y=(t(42),function(e){var n=e.ghost,t=e.currentEvidence;return Object(b.jsxs)("div",{className:"ghost",onClick:function(){return alert(n.name+"\n\n"+n.traits.map((function(e){return"- "+e})).join("\n\n"))},children:[Object(b.jsx)("h4",{className:"ghost-name",children:n.name}),Object(b.jsx)("div",{children:Object(b.jsx)("small",{children:n.evidence.map((function(e){return Object(b.jsx)(p,{evidence:e,className:t.includes(e)&&"found"},e)}))})})]})}),x=t(20);var k=t(61);function C(e,n){return S().filter((function(t){return function(e,n){var t,i=Object(x.a)(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(!e.includes(a))return!1}}catch(r){i.e(r)}finally{i.f()}return!0}(t.evidence,e)&&function(e,n){var t,i=Object(x.a)(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(e.includes(a))return!1}}catch(r){i.e(r)}finally{i.f()}return!0}(t.evidence,n)}))}function S(){return[{id:1,name:"Spirit",evidence:[f,h,v],traits:["Can't hunt for 180 seconds after smudging (normally 90)"]},{id:2,name:"Wraith",evidence:[f,h,g],traits:["Can teleport near a player while not hunting","Can't leave footprints","Increased ghost activity when stepping in salt"]},{id:3,name:"Phantom",evidence:[h,u,g],traits:["Taking a photo makes it disappear","Sanity drops quickly while looking at the ghost","Stays invisible longer during the hunt (only visible every 1 to 2 seconds)"]},{id:4,name:"Poltergeist",evidence:[h,u,v],traits:["Can throw multiple items at once","Sanity decreases faster when multiple items are thrown"]},{id:5,name:"Banshee",evidence:[u,m,g],traits:["It will target a single player during hunts (ignores others)","Navigates to target and will hunt if it sees it's target for long enough","Crucifixes have a wider effective radius"]},{id:6,name:"Jinn",evidence:[f,u,d],traits:["Runs faster while further from a player","Can lower all players sanity by 25%","Can't use abilities if the power is off"]},{id:7,name:"Mare",evidence:[h,m,v],traits:["Increased hunt chance if in a dark room","Can't turn on lights"]},{id:8,name:"Revenant",evidence:[m,v,d],traits:["Runs faster if it can see a player","Runs slower if it can't see a player"]},{id:9,name:"Shade",evidence:[f,v,d],traits:["Less active when multiple players are in the room","More likely to hunt when players are alone"]},{id:10,name:"Demon",evidence:[u,v,d],traits:["Can hunt when sanity is high","Successful ouija board answers take 40% sanity instead of 50%"]},{id:11,name:"Yurei",evidence:[m,d,g],traits:["Sanity drops faster during ghost events or when near the ghost in a hunt","Roams less when smudge sticks are used"]},{id:12,name:"Oni",evidence:[f,d,g],traits:["More active when multiple players are in the room","Can throw objects further"]},{id:13,name:"Hantu",evidence:[u,m,d],traits:["Moves faster in cold rooms during hunts"]},{id:14,name:"Yokai",evidence:[h,m,g],traits:["Can hunt when sanity is high if players are talking","Can only hear close voices during hunts"]},{id:15,name:"Goryo",evidence:[f,u,g],traits:["D.O.T.S only shows through video cameras","Does not roam much"]},{id:16,name:"Myling",evidence:[f,u,v],traits:["Can be detected by the parabolic mic more than other ghosts","Footsteps can only be heard up close during a hunt (equal to flashlight flicker distance)"]},{id:17,name:"Onryo",evidence:[h,m,d],traits:["Increased hunt chance when a flame is extinguished","Increased hunt change after each player death"]},{id:18,name:"The Twins",evidence:[f,h,d],traits:["Interactions around the map and in a specific room","Multiple interactions at the same time"]},{id:19,name:"Raiju",evidence:[f,m,g],traits:["Runs faster when near electronics","Can hunt early when near active electronics"]},{id:20,name:"Obake",evidence:[f,u,m],traits:["Can have a 6 finger fingerprint"]}].sort((function(e,n){return e.name.localeCompare(n.name)}))}var N=function(){var e=[d,u,h,f,v,m,g],n=Object(i.useState)([]),t=Object(o.a)(n,2),a=t[0],r=t[1],c=Object(i.useState)(e),l=Object(o.a)(c,2),j=l[0],p=l[1],N=Object(i.useState)([]),E=Object(o.a)(N,2),W=E[0],M=E[1],I=Object(i.useState)(S()),R=Object(o.a)(I,2),T=R[0],P=R[1];return Object(i.useEffect)((function(){P(C(a,W)),p(function(e,n){return t=function(e){var n,t=new Set,i=Object(x.a)(e);try{for(i.s();!(n=i.n()).done;){var a=n.value;t.add(a)}}catch(l){i.e(l)}finally{i.f()}var r,c=[],s=Object(x.a)(t);try{for(s.s();!(r=s.n()).done;){var o=r.value;c.push(o)}}catch(l){s.e(l)}finally{s.f()}return c}(C(e,n).flatMap((function(e){return e.evidence}))),i=[].concat(Object(s.a)(e),Object(s.a)(n)),t.filter((function(e){return!i.includes(e)}));var t,i}(a,W))}),[a,W]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phasmofinder"}),Object(b.jsxs)("div",{id:"entry",children:[e.map((function(e){return Object(b.jsx)(w,{evidence:e,currentEvidence:a,ruledOutEvidence:W,remainingEvidence:j,toggleEvidence:function(){return function(e){a.includes(e)?(M([].concat(Object(s.a)(W),[e])),r(a.filter((function(n){return n!==e})))):W.includes(e)?M(W.filter((function(n){return n!==e}))):r([].concat(Object(s.a)(a),[e]))}(e)}},e)})),Object(b.jsx)(O.a,{onClick:function(){r([]),p(e),M([]),P(S())},className:"clear-btn",children:Object(b.jsx)(k.a,{})})]}),Object(b.jsx)("div",{className:"ghost-section",children:T.map((function(e){return Object(b.jsx)(y,{ghost:e,currentEvidence:a},e.id)}))})]})},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(n,e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.a3ad2a94.chunk.js.map