webpackJsonp([0xc23565d713b7],{88:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"],["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"]),c=n(2),d=a(c),s=n(24),f=a(s),p=n(14),m=a(p),h=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.children;return d.default.createElement(f.default,{style:{border:"none"},to:this.props.to},d.default.createElement(g,null,e))},t}(c.Component);t.default=h;var g=m.default.div(u,function(e){return e.theme.brand},function(e){return e.theme.brand},function(e){return e.theme.accent},function(e){return e.theme.brand});e.exports=t.default},48:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=a(i),c=n(18),d=a(c),s=n(15),f=a(s),p=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,a=e.postSEO,r=e.language,o=void 0,l=void 0,i=void 0,c=void 0;if(a){var s=t.frontmatter;o=s.title,l=s.description?s.description:t.excerpt,c=f.default.siteUrl+f.default.pathPrefix+n}else o=f.default.siteTitle,l=f.default.siteDescription,i=f.default.siteLogo;var p="/"===f.default.pathPrefix?"":f.default.pathPrefix;i=f.default.siteUrl+p+i;var m=f.default.siteUrl+f.default.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:o,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt[r]:""}];return a&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:o,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:o,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt.en_uk:"",headline:o,image:{"@type":"ImageObject",url:i},description:l}]),u.default.createElement(d.default,null,u.default.createElement("meta",{name:"description",content:l}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),u.default.createElement("meta",{property:"og:url",content:a?c:m}),a?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:o}),u.default.createElement("meta",{property:"og:description",content:l}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:f.default.siteFBAppID?f.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:f.default.userTwitter?f.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:o}),u.default.createElement("meta",{name:"twitter:description",content:l}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(i.Component);t.default=p,e.exports=t.default},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"],["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"]),c=r(["\n  padding: ",";  \n  background: ",";    \n"],["\n  padding: ",";  \n  background: ",";    \n"]),d=r(["\npadding: ",";  \npadding-bottom: 16rem;\n"],["\npadding: ",";  \npadding-bottom: 16rem;\n"]),s=r(["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"]),f=r(["\nmargin: 0 auto;\nmax-width: ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\n"]),p=n(2),m=a(p),h=n(18),g=a(h),y=n(14),b=a(y),E=n(24),v=(a(E),n(48)),w=a(v),_=n(15),x=a(_),k=n(47),T=a(k),O=n(88),j=a(O),P=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return m.default.createElement("div",{className:"index-container"},m.default.createElement(g.default,{title:x.default.siteTitle}),m.default.createElement(w.default,{postEdges:e,language:"en_uk"}),m.default.createElement("main",{style:{display:"flex",flexDirection:"column"}},m.default.createElement("span",{style:{flex:1,minHeight:"65vh"}},m.default.createElement(T.default,{isMain:!0,siteTitleAlt:x.default.siteTitleAlt.en_uk,siteTitle:x.default.siteTitle,siteDescription:x.default.siteDescription,location:this.props.location,logo:x.default.siteLogo,language:"en_uk"})),m.default.createElement(S,null,m.default.createElement(M,null,m.default.createElement("h2",null,"Nact is redux but for the server."),m.default.createElement("p",null,"Servers today are very different from those even 10 years ago. So why are we still programming like it's the 90s?"),m.default.createElement("p",null,"Inspired by the approaches taken by Akka and Erlang, nact is an open source Node.js framework which enables you to take control of your state to:"),m.default.createElement(A,null,m.default.createElement("li",null,"more effectively use memory"),m.default.createElement("li",null,"improve application resiliance"),m.default.createElement("li",null,"increase performance"),m.default.createElement("li",null,"reduce coupling")),m.default.createElement("p",null,"With out of the box support for event sourcing, and a considered implementation of the actor model, nact can work across a wide variety of domains."),m.default.createElement("p",null,"Nact is no silver bullet, but it is evolving to tackle ever more demanding use cases. Perhaps one of them is yours?"))),m.default.createElement(L,null,m.default.createElement(N,null,m.default.createElement("h2",null,"Getting Started"),m.default.createElement("p",null,"Both the ReasonML and JS libraries are 1",m.default.createElement("sup",null,"st")," class citizens. This means 100% unit test coverage, full documentation and support by project maintainers."),m.default.createElement("p",null,"Learning the ins and outs of the framework should not take more than an evening. The hello world example in particular should take less than 15 minutes."),m.default.createElement(j.default,{to:"/en_uk/lesson/reasonml/introduction"},m.default.createElement("img",{style:{height:"2.5rem"},src:"/logos/language-logo_reason-inverted.svg"})," REASONML"),m.default.createElement(j.default,{to:"/en_uk/lesson/javascript/introduction"},m.default.createElement("img",{style:{height:"2.5rem"},src:"/logos/language-logo_js-inverted.svg"})," JAVASCRIPT")))))},t}(m.default.Component);t.default=P;var A=b.default.ul(u),S=b.default.div(c,function(e){return e.theme.sitePadding},function(e){return e.theme.brand}),L=b.default.div(d,function(e){return e.theme.sitePadding}),M=b.default.div(s,function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accent}),N=b.default.div(f,function(e){return e.theme.contentWidthLaptop});t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-269805a62356937795e2.js.map