(this["webpackJsonpjust-calling-random-api"]=this["webpackJsonpjust-calling-random-api"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(14),r=c.n(a),i=(c(20),c(21),c.p+"static/media/github.b5d4c591.svg"),o=c(0);function l(e){return Object(o.jsxs)("div",{className:"mx-4 my-8",children:[Object(o.jsxs)("div",{className:"flex items-baseline ",children:[Object(o.jsx)("a",{className:"flex-auto",href:"/",children:Object(o.jsx)("h1",{className:"my-2 text-4xl font-bold font-sans px-4 font-bold",children:"Just Calling Random APIs"})}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("a",{href:"https://github.com/vedangj044/just-calling-random-api",target:"blank",class:"inline-block",children:Object(o.jsx)("embed",{class:"h-8 w-8 pointer-events-none",src:i})})})]}),Object(o.jsx)("hr",{})]})}function d(e){return Object(o.jsx)("div",{className:"grid place-items-center mx-4 my-8",children:Object(o.jsxs)("div",{className:"flex flex-col bg-blue-100 rounded-md md:px-16 px-4 max-w-2xl",children:[Object(o.jsx)("h2",{className:"text-4xl pt-8 font-light",children:"Why this page exists? "}),Object(o.jsxs)("p",{className:"text-lg py-4 pb-4 font-regular",children:["This page is for anyone around the globe who wants to start their open-source journey with ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{className:"text-green-900 font-semibold",href:"https://hacktoberfest.digitalocean.com/",target:"blank",children:" Hacktoberfest "})}),". All you have to do is choose any publically available API, create a react component which calls your chosen API and display its response on the main page. You can find all the details and step-by-step procedures to make your first PR. Let's get going!"]}),Object(o.jsx)("div",{className:"flex pb-5",children:Object(o.jsx)("button",{className:"bg-blue-500 rounded-md p-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50",children:Object(o.jsx)("a",{href:"https://github.com/vedangj044/just-calling-random-api",target:"blank",children:"Start Here"})})})]})})}var j=c(3);function b(e){return Object(o.jsx)("a",{href:"https://github.com/"+e.username,target:"blank",children:Object(o.jsxs)("div",{className:"inline-flex items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer",children:[Object(o.jsx)("img",{className:"rounded-full h-8 w-8",src:e.profilePic,alt:"Contributor's avatar"}),Object(o.jsx)("h1",{className:"px-2 text-xl",children:e.username})]})})}function u(e){return Object(o.jsx)("a",{href:e.apiUrl,target:"blank",children:Object(o.jsxs)("div",{className:"inline-flex items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer",children:[Object(o.jsx)("img",{className:"rounded-full h-8 w-8",src:"https://static.thenounproject.com/png/1429392-200.png",alt:"Hyperlink icon"}),Object(o.jsx)("h1",{className:"px-2 text-xl",children:e.apiName})]})})}function h(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){return a(e.content)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"Random Quotes API"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:n}),Object(o.jsx)(b,{username:"vedangj044",profilePic:"https://avatars.githubusercontent.com/u/43697446?v=4"}),Object(o.jsx)(u,{apiUrl:"https://github.com/lukePeavey/quotable",apiName:"Quotable"})]})}function m(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("https://api.adviceslip.com/advice").then((function(e){return e.json()})).then((function(e){return a(e.slip.advice)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"Random Advice API"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-6",children:n}),Object(o.jsx)(b,{username:"ashutoshkrris",profilePic:"https://avatars.githubusercontent.com/u/47353498?v=4"}),Object(o.jsx)(u,{apiUrl:"https://api.adviceslip.com/",apiName:"Advice Slip"})]})}var p=c(15),x=c.n(p),f=function(){var e=Object(s.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){x.a.get("https://animechan.vercel.app/api/random/").then((function(e){console.log(e.data),n(e.data)}))}),[]),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2 text-purple-700 font-bold",children:"Random Anime Quotes"}),Object(o.jsx)("h1",{className:"text-2xl font-medium pb-4",children:c.quote}),Object(o.jsxs)("p",{className:"text-blue-600 font-semibold",children:["- ",c.character]}),Object(o.jsxs)("p",{className:"text-red-600",children:["in ",c.anime]}),Object(o.jsx)(b,{username:"apoorvcodes",profilePic:"https://avatars.githubusercontent.com/u/75479355?s=400&u=2b406b118766febb2515a268559e7d3fb9529ace&v=4"}),Object(o.jsx)(u,{apiUrl:"hhttps://github.com/rocktimsaikia/anime-chan",apiName:"Anime-chan"})]})})};function O(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("https://swapi.dev/api/people/".concat(Math.floor(50*Math.random()),"?format=json")).then((function(e){return e.json()})).then((function(e){return a(e.name)}))}),[]),Object(o.jsxs)("div",{className:"mx-4 my-8 rounded-md p-4 border-2 border-grey-300 md:px-4",children:[Object(o.jsx)("h1",{className:"text-xl py-2",children:"The Star Wars API"}),Object(o.jsxs)("h1",{className:"text-2xl font-medium pb-6",children:["Random Star Wars character: ",n]}),Object(o.jsx)(b,{username:"DiFronzo",profilePic:"https://storage.ko-fi.com/cdn/useruploads/d3dceedd-102c-4380-80e9-3a748287882c.png"}),Object(o.jsx)(u,{apiUrl:"https://swapi.dev/",apiName:"SWAPI"})]})}var g=function(){return Object(o.jsxs)("div",{className:"mx-0 xl:mx-40 font-body",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{}),Object(o.jsx)(h,{}),Object(o.jsx)(m,{}),Object(o.jsx)(f,{}),Object(o.jsx)(O,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.72b1032a.chunk.js.map