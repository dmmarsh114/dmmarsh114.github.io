(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),i=t.n(r),l=(t(82),t(83),t(84),t(149)),o=t(23),m=t(30),s=t(40),A=t(26),p=t.n(A),u=function(e){return c.a.createElement("div",{id:"home",className:"header"},c.a.createElement("div",{className:"headerLayer"}),c.a.createElement("div",{className:"titleText"},c.a.createElement("h1",{style:{marginBottom:"5px",fontSize:"2.5em"}},"Daniel Marsh"),c.a.createElement("h3",{style:{marginTop:"0px",marginBottom:"50px"}},"Web Developer"),c.a.createElement(l.a,{title:"View my Github profile!",arrow:!0},c.a.createElement("a",{id:"link",href:e.gitHub,target:"blank"},c.a.createElement(o.a,{icon:m.a}))),c.a.createElement(l.a,{title:"Contact me on LinkedIn!",arrow:!0,placement:"top"},c.a.createElement("a",{id:"link",href:e.linkedIn,target:"blank"},c.a.createElement(o.a,{icon:m.b}))),c.a.createElement(l.a,{title:"Download my resume!",arrow:!0},c.a.createElement("a",{id:"link",href:p.a,download:!0},c.a.createElement(o.a,{icon:s.a,size:"sm",style:{paddingBottom:"2px"}})))))},d=(t(91),t(146)),E=t(147),h=function(e){return c.a.createElement("div",{id:"contactSection",className:"contact"},c.a.createElement("h1",{className:"sectionHeader"},"Contact Me!"),c.a.createElement("hr",{className:"sectionHr",id:"contactHr"}),c.a.createElement("div",{className:"contactLinkContainer"},c.a.createElement(l.a,{title:"View my Github profile!",arrow:!0},c.a.createElement("a",{className:"contactLink",href:e.gitHub,target:"blank"},c.a.createElement(o.a,{icon:m.a}))),c.a.createElement(l.a,{title:"Contact me on LinkedIn!",arrow:!0,placement:"top"},c.a.createElement("a",{className:"contactLink",href:e.linkedIn,target:"blank"},c.a.createElement(o.a,{icon:m.b}))),c.a.createElement(l.a,{title:"Download my resume!",arrow:!0},c.a.createElement("a",{className:"contactLink",href:p.a,download:!0},c.a.createElement(o.a,{icon:s.a,size:"sm",style:{paddingBottom:"2px"}})))),c.a.createElement("form",{action:"https://formspree.io/dmmarsh114@gmail.com",method:"POST"},c.a.createElement("div",{className:"contactForm"},c.a.createElement("div",{className:"contactStack"},c.a.createElement(d.a,{id:"nameInput",margin:"normal",label:"Name",name:"name",variant:"outlined"}),c.a.createElement(d.a,{id:"emailInput",margin:"normal",label:"Email",name:"_replyto",variant:"outlined"})),c.a.createElement("div",{className:"contactMessage"},c.a.createElement(d.a,{multiline:!0,margin:"normal",fullWidth:!0,rows:5,name:"message",id:"messageInput",label:"Message",variant:"outlined"})),c.a.createElement("div",null,c.a.createElement(E.a,{id:"sendButton",variant:"contained",type:"submit"},"send")))))},g=(t(92),t(93),t(137)),b=t(138),f=t(139),N=t(57),v=t.n(N),w=t(58),k=t.n(w),S=t(59),R=t.n(S),B=t(60),C=t.n(B),I=t(61),j=t.n(I),x=function(){var e=[{name:"React",icon:v.a},{name:"TypeScript",icon:k.a},{name:"C#",icon:R.a},{name:"Node.js",icon:C.a},{name:"SQL",icon:j.a}];return c.a.createElement("div",{id:"aboutSection",className:"aboutTotal"},c.a.createElement("div",{className:"about"},c.a.createElement("h1",{className:"sectionHeader"},"Introduction"),c.a.createElement("hr",{className:"sectionHr"}),c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,null,c.a.createElement("div",{className:"aboutText"},c.a.createElement("p",null,"Hello, I\u2019m Daniel Marsh!"),c.a.createElement("p",null,"I am a full-stack developer who has been training nearly full-time since January. I have completed a Web Development course at ",c.a.createElement("a",{href:"https://elevenfifty.org/about/",target:"blank",className:"aboutLink"},"the Eleven Fifty Academy"),", as well as Salesforce\u2019s Pathfinder program. I am currently taking a Software Development course at Eleven Fifty."))),c.a.createElement(f.a,null,c.a.createElement("div",{className:"skills"},c.a.createElement("ul",null,e.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{className:"skillIcon",src:e.icon}),c.a.createElement("p",{className:"skillName"},e.name," "))})))))))))},y=t(32),F=(t(94),t(140)),D=t(141),V=t(142),J=t(150),L=t(143),U=t(144),Y=t(145),W=function(){var e="transparent",a=Object(n.useState)(e),t=Object(y.a)(a,2),r=t[0],i=t[1],l=Object(n.useState)("white"),o=Object(y.a)(l,2),m=o[0],s=o[1],A={background:r,color:m};window.addEventListener("scroll",(function(){window.pageYOffset>0?(i("var(--header-font-color)"),s("white"),h(!0)):(i(e),s("white"),h(!1))}));var u=Object(n.useState)(!1),d=Object(y.a)(u,2),E=d[0],h=d[1],g=Object(n.useState)(!1),b=Object(y.a)(g,2),f=b[0],N=b[1];return c.a.createElement("div",null,c.a.createElement(F.a,{style:A,dark:!0,expand:"md",className:"position-fixed myNavbar"},E?c.a.createElement(D.a,{href:"#home"},"Daniel Marsh"):null,c.a.createElement(V.a,{onClick:function(){return N(!f)},className:"ml-auto"}),c.a.createElement(J.a,{isOpen:f,navbar:!0}," ",c.a.createElement(L.a,{className:"ml-auto",navbar:!0},c.a.createElement(U.a,null,c.a.createElement(Y.a,{href:p.a,download:!0},"Resume")),c.a.createElement(U.a,null,c.a.createElement(Y.a,{href:"#aboutSection"},"About")),c.a.createElement(U.a,null,c.a.createElement(Y.a,{href:"#projectSection"},"Projects")),c.a.createElement(U.a,null,c.a.createElement(Y.a,{href:"#contactSection"},"Contact"))))))},z=(t(101),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"\xa9 Daniel Marsh 2020"))}),M=(t(102),t(69)),G=t.n(M),O=t(62),H=t.n(O),K=t(63),T=t.n(K),P=t(64),Q=t.n(P),Z=t(65),q=t.n(Z),X=t(66),$=t.n(X),_=t(67),ee=t.n(_),ae=t(68),te=t.n(ae),ne=function(){H.a,T.a,Q.a;var e=[{title:"TicketApprentice",date:"November 2020",desc:"An API that users can use to view, manage, and buy tickets to events at a variety of venues.",githubLink:"https://github.com/Brian-Winter/TicketApprentice",projectLink:"https://github.com/Brian-Winter/TicketApprentice",pic:q.a},{title:"Pirate Emporium",date:"September 2020",desc:"A static storefront built to showcase my incredible HTML/CSS skills.",githubLink:"https://github.com/dmmarsh114/Static-Store-Front",projectLink:"https://dmmarsh114.github.io/Static-Store-Front/",pic:$.a},{title:"Gold Badge Challenges",date:"October 2020",desc:"A suite of simple (but fun!) console apps for handling rudimentary business logic.",githubLink:"https://github.com/dmmarsh114/SD-Gold-Badge-Challenges",projectLink:"https://github.com/dmmarsh114/SD-Gold-Badge-Challenges",pic:ee.a},{title:"CSS Creature",date:"September 2020",desc:"A simple little cartoon made only with HTML and CSS. Made in Codepen.",githubLink:"https://codepen.io/dmmarsh4/pen/gOrPQeJ",projectLink:"https://codepen.io/dmmarsh4/pen/gOrPQeJ",pic:te.a}];return c.a.createElement("div",{id:"projectSection",className:"projectTotal"},c.a.createElement("div",{className:"projects"},c.a.createElement("h1",{className:"sectionHeader"},"Projects"),c.a.createElement("hr",{className:"sectionHr"}),c.a.createElement("br",null),c.a.createElement("div",{className:"projectCardContainer"},e.map((function(e,a){return c.a.createElement("div",{key:a,className:"projectCard"},c.a.createElement("div",{style:{height:"100%"}},c.a.createElement("div",{className:a%2===0?"projectMedia right":"projectMedia left"},c.a.createElement("a",{href:e.projectLink,target:"blank"},c.a.createElement("div",{className:"projectPicLayer"}," ",c.a.createElement("p",null,"Try it out!"))),c.a.createElement("img",{src:e.pic,alt:"project screenshot"})),c.a.createElement("div",{className:a%2===0?"projectDesc left":"projectDesc right"},c.a.createElement("h3",{className:"projectTitle"},e.title),c.a.createElement("h5",{className:"projectTitle"},e.date),c.a.createElement("p",null,e.desc),c.a.createElement(l.a,{title:"Show me the code!",placement:"top",arrow:!0},c.a.createElement("a",{href:e.githubLink,target:"blank",id:"projectLink",className:a%2===0?"right":"left"},c.a.createElement(G.a,{fontSize:"small"}))),c.a.createElement("a",{href:e.projectLink,target:"blank",id:"projectLink",className:a%2===0?"right":"left"},"Try it out!"))))})))))},ce="https://www.linkedin.com/in/dmmarsh114/";var re=function(){return c.a.createElement("div",null,c.a.createElement(W,null),c.a.createElement(u,{gitHub:"https://github.com/dmmarsh114",linkedIn:ce}),c.a.createElement(ne,null),c.a.createElement(x,null),c.a.createElement(h,{gitHub:"https://github.com/dmmarsh114",linkedIn:ce}),c.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(105);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,a,t){e.exports=t.p+"static/media/Daniel-Marsh-Resume.a40dc2c3.pdf"},57:function(e,a){e.exports="data:image/png;base64,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"},58:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACIElEQVRoge3YvWsUQRjH8U+CL5WCNmoRkIiNIBaiGBBjpZ0W/gMpBG0sFAULW4uIYGMhKGJjaWMhWEiMImohGrBRCQEbXwIqimhUPIs5ub3N3bp7t7e7hv3CwM48s888v92Z2WeWmpqamv+JoQTbeWwrKpCUzOBkJ8OyhJu2Y+8goumDrvEOFxnFIEl6I1Gu4eEA40hiDBP/6pRWyLQgpgx+SCFkyUytWkjVqIVUjVpI1aiFVI0lIyRtipLECJan7PsBn3IYcxF5CLmL0ZR9z+AsNuCIkBCOCjPjK+bwAOeyBpGHkKzswG2s6WDb2iylCHmOj7FgVjSvX2M+YnuDK1oiGriDWazHOL7lEFMbU82BGlKk0RHmIvcdjdlGIrYGjsfsK3Eg1jYR6T/VbdCid63VsfrLWH0BN3txXLSQWfyK1C9idx6OixbyHVcj9Y24Lyz+nf04LuODeMriub4Pj3BZWCeZKUPIZ+zHaXyJtA/hMK734rSsFOUnJrEJF4QfDH85JGzDmSg715rHCRyMte/K6qhoIWuxp0P7Pe272UJWx0WnKKuEf2TTuIEXwsM8FovlaVbHZeRahDXQbR08FrbkTBQ9tRbwPsF+S0hRfmd1PIg3ckkrKYxPkbdYh83Y0rwexjs8E/K0nhiEkMkUfV41S26Uvf3mRto3Mq51xiiasX4dRM8jVSmVOY8MjKSp9UT717YKzJQdQE1NTU0+/AGEh3pIhKjnzAAAAABJRU5ErkJggg=="},59:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEHUlEQVRoge3aW4iVVRQH8J/iWDnThW5UVlSgU2M3mxKzCwi+9BAGUT0EgVbSS/RUPpZpZEXoZBE9WNBDRC8JvaVBpUEQFVZiEQSWZkTZbXTE0ulh7a/vm+OZc/acOTNzhvzD5hzWt/e6fHvttdde++ME/j9YjC34LbUtiTZtcCFexzEM12nv4LIp0y4Dp2E9hoTCB7EWl6a2NtGGU5/1aUzHYCbuw09CyWN4C5fU6TsXr+Cf1PcXPIJZk6FoIyzDTqXbfIwlGeP68X5l3G7cNTEqNsblwtcLRfaIWZkxRj6349sKn624un1qjo6zMIC/k+ADWI2TxsGzC6vwc+J5VASL88al6SiYLXz59yTsiPD1c9so40wRAA4nGYN4Aqe0g/kM4bvfGTn9V7aD+SiYJ4JFIe8HMWMzW2W4CDsqDHfhtnGrmY+l+Kwi/xPcMlYmzyk3tH1YIf+N9Ip1s01Eo0HhLvvxHtbg2kxeM5PsfcrQ/mzmWKuU62ANujPH9Qvl6+3m9dp23JzJu1uslyNp7IM5g75KnVdkCpmFTcoZ/BWbsVzMTjdOxRW4E2/gL+Ubfln+gl6Zxn2R07mwek5G3zOEuwzjENbJSzvOFgYUO/xHiVczzFF6S1MUU98Ms5SutA835DCvwVJlSN+Bk9uoX3bHTcrwOLfm2QJsEG46mNrnYsbOr+n7UEXm5jbql9WxX/j3IVxXoc8WBhYuU68dFJvrRWK9FGtrD+6ZbEMKl1pXY8RWZZq+UexF3ejBjXhRuQYLYw+KiJSzJnP1y+rYq4xO1YVddbVGid9C/Chm4k1c3EB2PV3aZshqx/vzAvGGh+Rlr724NUP2hBpSuM/yCm1Dom3MEdBAZrOWo99xTEfDN+n5/AptV6Ityte9rsxJNaTYlXua0FpBy67VSmpcz8isNzSRaMWQ/en3ggrt+/Tb16IezWaiqTu1Ykg9pd9Nv/e2wG/C0Mz6x9LzVyu0PhF+D+OaDBkdEX7nKzfE0yv0AeWG2MiYfh2yIVLuJU9VaF3CxYbFzLwgar094jyyBC/poBSFSBSPip38+gq9S8xMo6RxEA/rkKSR0pX2isJ1FX14Hl+KPeZPfIonHV+vmtI0npEHq71GzkwuluGPxONDeYW+bEPGetStpu5PGxkARsM5Rhazt2eOG9NRtyg+rMzpLGZmQKyZYVFGfQ13iBpxsdj7cLeIVIOp7zFxRsk54sL9aVxW8aHVctBCZdTKaR/gpkze3UmXoub8QOa4cRXo5uFRYdRusdiHEp+teBxXZfKqV6B7JnPsf+jEkmm9bCALU1HEnq/NRewqpv21Qi2m/UVPLSbq6m2bvOy57WjXZejXpugytIpWrqeLzbNjrqermPYfDNRi2n/CUYvFeFt8UHMg/Z9WH9WcwHjwL2yV9cyul6xpAAAAAElFTkSuQmCC"},60:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEGUlEQVRoge3aW4hVVRgH8N+MOlNmFDMaIxFDwUAJYTDdKMrCS1YkVEg+TEnBVPRSD10RopdCKIh66PKQDwZJPYhNgVDIBJkVWNlV1LKbRlJpN+9T08N3DrPPPmfPnNt2Jjh/WHBY+9vfZa/1Xda3Di200MJ4aMuZfycuxSg+wLGc5TUd7RjEz8KIUfyEOwrP/he4RHz90YzxEa6YNO2qQC9eVar0v1iPDRXm1+GsSdE0AzPxEP5SquzHuDJBtwCfpGgOYTVmnUB9y9CG5fhOqXK/4l5Mq/BOO25T6juj2FOYzzv4lKEf76aUOYZncFoV78/CYziS4vGhiHK5Yy5exEhKgbcxrw5+fXhNuf+sRU8T9C3DDLFd/kgJ3YHrm8B/ET5P8f5brFpnE/iDG/B1Ssh+4eAdzRIiPtad+CUla5fwxboxDa+kmI7gOXQ3wngCzMELyrfvWnUm07tTjDbh/GZoWiXmYzilw131MBpKMBholnZ1YGVCj6EsovHi9jCuKvyeIZY6C0/iahzGUhxMybgM14kV7RYOfAB7sQ2v49sM3icV+MI7BTk1Ibms0yegTeaUZNjsw/tKt0el8Q9eElVCJUOKdMNZCkykYCOYi804IzU/IhJhsixpF5VxL5aIXFIT8iypHzFmxF5RgvSIkH2q2F7z8ZRYEViIW5qtSKNb64vE3LIJ3n88Qbsh9ayqrZXniiT3+9EJaJ83Fkz66hGWp4/swNmF3+uEMw/jS/wgvnARe8TZZKYog5qKRrfWYuG0laLUIXE2eRkPCN/Iqqmq2lp5GgIrsE9lY9Ljdzyh3KApYUhRkZvwNDZit4hSWQZtVJqop4whldCJ80RlvVp5db0gQTupUWsJthbGigrPj2I73sDDOBdbEs/7axWYlyHdQpl+3F4F/YgwrIiaz+55GbLFWJmxCDdOQN+rNGl+WqvAvPLI9+JQNiA+1nq8Vxj78JvY+124CNcYS6CfqdOps9Cos5+Ct2RHp0pjt/LM3rCz/5n4vVLt+/ag+NIDYiXGO898g0dFEbkrMd+m9FCX1KlqDCr9WptxYQbttgTd7Ayak0Vf+FrRTFguDm5nZtD3F2QmdRis0QbEaq1JMSoegJK54mJjjYIjGve7noKMdNJco8HgtBRfpZgexpuiaZ3s+W5qQE4HHlTeO9te0KEpKDbo9st21BH1XxcsE76R5HcA9xVkNx2zsUo4Z1LoTtFcqBXzlEe2EXE+yfK1pqJNhMl+nFPH+114FseVGjEsItek4nRxttiJ+1XeEtNxj7h6SOePm0+MmuNjDn5U7qSLEzQLVW5UrxJJb8qgS/SF0z3bIVHlJueKVwdZOWRK4ALll0DJsRWXT5p2NaINt4p+VtGAXK/X8r6z61D6h4HjOctroYUWMvAfa2CllLHuPMAAAAAASUVORK5CYII="},61:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC10lEQVRoge3ay29MYRjH8c+IoEFVXRISNhrismDntrCV2LqEJUFTfwJb7LBD2LvskJC4JS6xtBVh61qJtoJKOBbvOzrtnGnPmZ7pTOR8k5NJz3nO+/7e88x7fs/bdyqmz3psRh/WxM/lmIcFWBjjRvANP/ERb+PxBi/xqgAtuViCftzEByQFHR9wA8djH7mo5IjdjSPYgzk15z/hBV4LT/cN3uEHhoUsELLTjS6sFDLXh7XYJmSxyi/cwRXczTOgydiGZ8ae3G/cF57choL6qMS2+vEg9lHt71nU0DRduIw/scFBnMSq6TSakVU4FftMooYLmJ23oW5jWfiJ01hUmMzs9OAMRqOWe1FbJirC9zMR3i47WiAwLzsFLQluyzi3D8QbRoSJ2CmsFTQl2JflhscxuL+FopplQND2MEvwUAzuaaWiJlksaPs68cKslODMk6kNVOdG3YsnbSBVDrVGy7Q4mCe4akSdPNmTLDfU1j+fsatVynKwXX1dNyXVwAfxc1QwpXZM/h6cNWaI9zUxkNk4X/P3oFA2rC5ebx2rjS9REpyLmnIPpMoOPK85/1t4jw9go3wVdCMq2BTbfKS+aNw+ib5/DUwkaXBtNw4LZfzcmvOD0sv474In1ZbxizAfK9SX8Utr2hwVyqSr6sv4RvpSBzJZ6npxDNfx3vgJOJ3jHa7haOwjl748GWnEOmwRlrnVpe4yYRnQLWSCkJlhYcH1Sf1S93XG/nJnpBNLlF4NMlI6exsonb109gIond2EwLRrpbNnPEpnnyywdPYWUzp76ewFUTq7lMDS2ZXOXoyzDwmOvFjKf71TmEln78WXqHHKl89jYcQDGRqeaU4I2jLtj+zX+Ya4N8sNFWGfLhH27Xa2TFp2avcQb8nxpuzGU51niE80sRHVhUvG77O3yxD/4KLw+5amSfvlw0wa4lNszdJAVjrFEAuj3YaYShFfi5le6v7f/AUuSfDOgXwVlAAAAABJRU5ErkJggg=="},62:function(e,a,t){e.exports=t.p+"static/media/spaceVisualizerPic.912a0903.png"},63:function(e,a,t){e.exports=t.p+"static/media/bitsySitePic2.955831af.png"},64:function(e,a,t){e.exports=t.p+"static/media/distortion.500051bb.png"},65:function(e,a,t){e.exports=t.p+"static/media/ticketApprentice.61819995.png"},66:function(e,a,t){e.exports=t.p+"static/media/SD Static Store Front.a9dd56a8.png"},67:function(e,a,t){e.exports=t.p+"static/media/SD Gold Badge Challenges.462c9b40.png"},68:function(e,a,t){e.exports=t.p+"static/media/SD CSS Creature.78ee7c29.png"},77:function(e,a,t){e.exports=t(106)},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.06d102e1.chunk.js.map