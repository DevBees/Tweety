(this.webpackJsonptweety=this.webpackJsonptweety||[]).push([[0],{74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(21),i=s.n(n),r=(s(74),s(75),s(76),s(77),s(3));var j=function(e){var t=e.active,s=e.Icon,c=e.title;return Object(r.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption__active"),children:[Object(r.jsx)(s,{}),Object(r.jsx)("h2",{children:c})]})},o=s(41),l=s.n(o),d=s(46),b=s.n(d),x=s(35),h=s.n(x),O=s(47),u=s.n(O),p=s(48),m=s.n(p),_=s(49),f=s.n(_),N=s(50),v=s.n(N),w=s(51),g=s.n(w),y=s(52),B=s.n(y),I=s(107);var C=function(){return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsxs)("a",{href:"https://tweety-e5e48.web.app/",children:[Object(r.jsx)(l.a,{className:"sidebar__twitterIcon"})," "]}),Object(r.jsx)(j,{active:!0,Icon:b.a,title:"Home"}),Object(r.jsx)(j,{Icon:h.a,title:"Explore"}),Object(r.jsx)(j,{Icon:u.a,title:"Notifications"}),Object(r.jsx)(j,{Icon:m.a,title:"Messages"}),Object(r.jsx)(j,{Icon:f.a,title:"Bookmarks"}),Object(r.jsx)(j,{Icon:v.a,title:"Lists"}),Object(r.jsx)(j,{Icon:g.a,title:"Profile"}),Object(r.jsx)(j,{Icon:B.a,title:"More"}),Object(r.jsx)(I.a,{className:"sidebar__TweetButton",fullWidth:!0,children:"Tweet"})]})},S=s(18),T=(s(84),s(85),s(108)),k=s(53),F=s.n(k),D=s(54),E=s.n(D),L=s(55),M=s.n(L),R=s(56),z=s.n(R),H=s(57),P=s.n(H),W=s(36),q=W.a.initializeApp({apiKey:"AIzaSyBR1oJhcX9sumG6ytShtvIKzYXdMYFzg-8",authDomain:"tweety-e5e48.firebaseapp.com",projectId:"tweety-e5e48",storageBucket:"tweety-e5e48.appspot.com",messagingSenderId:"803754162193",appId:"1:803754162193:web:0d5a4c962f9145fc5159b0"}).firestore();var A=function(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(S.a)(n,2),j=i[0],o=i[1],l=Object(c.useState)(""),d=Object(S.a)(l,2),b=d[0],x=d[1];return Object(r.jsx)("div",{className:"tweetBox",children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"tweetBox__input",children:[Object(r.jsx)(T.a,{src:"https://i.pinimg.com/originals/11/05/0c/11050c5daab38e515f788abbf474e795.jpg"}),Object(r.jsx)("input",{required:!0,onChange:function(e){return a(e.target.value)},value:s,placeholder:"What's happening?",type:"text"}),Object(r.jsx)("input",{required:!0,onChange:function(e){return o(e.target.value)},value:j,placeholder:"Enter your name",type:"text"}),Object(r.jsx)("input",{required:!0,onChange:function(e){return x(e.target.value)},value:b,placeholder:"Enter your username ",type:"text"})]}),Object(r.jsxs)("div",{className:"tweetBox__icons",children:[Object(r.jsx)(F.a,{className:"tweetBox__icon"}),Object(r.jsx)(E.a,{className:"tweetBox__icon"}),Object(r.jsx)(M.a,{className:"tweetBox__icon"}),Object(r.jsx)(z.a,{className:"tweetBox__icon"}),Object(r.jsx)(P.a,{className:"tweetBox__icon"}),Object(r.jsx)("div",{className:"tweetBox__ButtonDiv",children:Object(r.jsx)(I.a,{type:"submit",onClick:function(e){e.preventDefault(),""===s||""===b||""===j?alert("Please enter all the fields"):(q.collection("posts").add({displayName:j,userName:"@"+b,verified:!1,text:s,avatar:"https://i.pinimg.com/originals/11/05/0c/11050c5daab38e515f788abbf474e795.jpg",timeStamp:W.a.firestore.FieldValue.serverTimestamp()}),a(""),o(""),x(""))},className:"tweetBox__Button",children:"Tweet"})})]})]})})},J=s(66),Y=s.n(J),K=(s(90),s(58)),X=s.n(K),G=s(59),V=s.n(G),Z=s(61),$=s.n(Z),Q=s(63),U=s.n(Q),ee=s(64),te=s.n(ee),se=s(65),ce=s.n(se),ae=s(62),ne=s.n(ae),ie=s(60),re=s.n(ie),je=Object(c.forwardRef)((function(e,t){var s=e.displayName,a=e.userName,n=e.verified,i=e.text,j=e.avatar,o=Object(c.useState)(!1),l=Object(S.a)(o,2),d=l[0],b=l[1],x=Object(c.useState)(!1),h=Object(S.a)(x,2),O=h[0],u=h[1];return Object(r.jsxs)("div",{className:"post",ref:t,children:[Object(r.jsx)("div",{className:"post__avatar",children:Object(r.jsx)(T.a,{src:j})}),Object(r.jsxs)("div",{className:"post__body",children:[Object(r.jsxs)("div",{className:"post__header",children:[Object(r.jsx)("h3",{children:s}),n&&Object(r.jsx)(X.a,{className:"post__verified"}),Object(r.jsx)("h4",{children:a})]}),Object(r.jsxs)("div",{className:"post__text",children:[Object(r.jsx)("p",{children:i}),Object(r.jsxs)("div",{className:"post__footer",children:[Object(r.jsx)(V.a,{className:"post__footerIcon"}),O?Object(r.jsx)(re.a,{onClick:function(e){return u(!1)},className:"post__footerReTweet"}):Object(r.jsx)($.a,{onClick:function(e){return u(!0)},className:"post__footerReTweet"}),d?Object(r.jsx)(ne.a,{onClick:function(e){return b(!1)},className:"post__footerLike"}):Object(r.jsx)(U.a,{onClick:function(e){return b(!0)},className:"post__footerLike"}),Object(r.jsx)(te.a,{className:"post__footerIcon"}),Object(r.jsx)(ce.a,{className:"post__footerIcon"})]})]})]})]})})),oe=s(67);var le=function(){var e=Object(c.useState)([]),t=Object(S.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){q.collection("posts").orderBy("timeStamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(r.jsxs)("div",{className:"feed",children:[Object(r.jsxs)("div",{className:"feed__sticky",children:[Object(r.jsxs)("div",{className:"feed__header",children:[Object(r.jsx)("h1",{children:"Home"}),Object(r.jsx)(Y.a,{className:"feed__sparkle"})]}),Object(r.jsx)(A,{})]}),Object(r.jsx)(oe.a,{children:s.map((function(e){var t=e.id,s=e.data,c=s.displayName,a=s.userName,n=s.verified,i=s.text,j=s.avatar;return Object(r.jsx)(je,{displayName:c,userName:a,verified:n,text:i,avatar:j},t)}))})]})};s(91);var de=function(){return Object(r.jsxs)("div",{className:"widgets",children:[Object(r.jsxs)("div",{className:"widgets__input",children:[Object(r.jsx)(h.a,{className:"widgets__searchIcon"}),Object(r.jsx)("input",{className:"widgets__inputBox",placeholder:"Search Twitter",type:"text"})]}),Object(r.jsxs)("div",{className:"widgets__widgetContainer",children:[Object(r.jsx)("h2",{children:"What's Happening?"}),Object(r.jsxs)("div",{className:"widgets__widgetNews",children:[Object(r.jsx)("h4",{children:"Technology . Huge News"}),Object(r.jsx)("h3",{children:"Chandran creates Tweety"}),Object(r.jsx)("p",{children:"Does absolutely nothing.Again!!"})]}),Object(r.jsxs)("div",{className:"widgets__widgetNews",children:[Object(r.jsx)("h4",{children:"Sports . Cricket"}),Object(r.jsx)("h3",{children:"NZ are WT Champs"}),Object(r.jsx)("p",{children:"They beat India in a rain spoiled match"})]}),Object(r.jsxs)("div",{className:"widgets__widgetNews",children:[Object(r.jsx)("h4",{children:"Finance . News"}),Object(r.jsx)("h3",{children:"El Salvador accepting BTC"}),Object(r.jsx)("p",{children:"BTC may go upto $100k"})]}),Object(r.jsxs)("div",{className:"widgets__widgetNews",children:[Object(r.jsx)("h4",{children:"Crypto . News"}),Object(r.jsx)("h3",{children:"Scammers banned on TikTok"}),Object(r.jsx)("p",{children:"Crypto scammers are banned on it"})]}),Object(r.jsxs)("div",{className:"widgets__widgetNews",children:[Object(r.jsx)("h4",{children:"YouTube . Channel  News"}),Object(r.jsx)("h3",{children:"DevBees growing popular"}),Object(r.jsx)("p",{children:"The Flutter-React channel blows up!"})]}),Object(r.jsx)("h4",{className:"widgets__widgetShow",children:"Show More"})]})]})};var be=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(C,{}),Object(r.jsx)(le,{}),Object(r.jsx)(de,{})]})},xe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,109)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(be,{})}),document.getElementById("root")),xe()}},[[93,1,2]]]);
//# sourceMappingURL=main.d6912ef6.chunk.js.map