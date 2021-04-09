webpackJsonp([1],{34:function(e,n,t){t(77);var r=t(20)(t(36),t(87),"data-v-418e55a1",null);e.exports=r.exports},36:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(21),o=t.n(r),i=t(41),s=t.n(i),a=t(40),l=t.n(a),u=t(85),c=t.n(u),d=t(84),m=t.n(d),p=t(75);t.n(p);n.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:10,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hello everyone,\n* My name is Tommy Jiang\n* I am a Web Developer.\n* Having passion for keeping up with the latest technology in all aspects of web development..\n* I'm going to build my CV right now!\n*/\n\n/* First, Let's add a animating for everything */\n/*{\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* Black on white is really boring,so let's do something about it. */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/*They are too close. */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* Let's make it even more readable. */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* Add some 3D transition */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* We need a editor! */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* Okey,I'm going to write my CV now! */\n\n\n","\n/* We still need something\n * Got it,Using Markdown will be better!\n * Let's do it~!\n */\n",'\n/* Adding styles to HTML */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"TOMMY JIANG\n----\n\nFront-end Developer,PHP Web Developer,Linux Systems Administrator.\n\n\nSkill List\n----\n\n1. __Web development__:  PHP/Node/Java SE/C#\n2. __Web framework__:  Laravel/WordPress/Opencart/Express\n3. __Front-end framework__:  AngularJS/Vue2.X/Bootstrap/HTML5/JQUERY\n4. __Front-end tools__:  Bower/Gulp/Webpack/Sass/Less\n5. __Database-related__:  MySQL/SQLite/SQL Server/MongoDB\n6. __Deployment tools__: Svn/Git/Composer\n7. __Operation System__: FreeBSD/Centos/Ubuntu\n8. __Runtime Environment__: Apache/Nginx/Tomcat/IIS7\n9. __Other Tools__: Axure RP/Ps/Ai\n\nWork Experience\n----\n\n* __Web Developer__\n\n3A IT SOLUTIONS LTD. (1 year)\n\n* __Linux Systems Administrator__\n\nKC Partners LTD.  (3 months)\n\n链接\n----\n\n* [Linkedin](https://www.linkedin.com/in/tommy-jiang-a38529129/)\n* [Portfolio](http://tommy.cf/)\n\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function e(){return n.apply(this,arguments)}var n=l()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.progressivelyShowStyle(0);case 2:return e.next=4,this.progressivelyShowResume();case 4:return e.next=6,this.progressivelyShowStyle(1);case 6:return e.next=8,this.showHtml();case 8:return e.next=10,this.progressivelyShowStyle(2);case 10:case"end":return e.stop()}},e,this)}));return e}(),showHtml:function(){var e=this;return new o.a(function(n,t){e.enableHtml=!0,n()})},progressivelyShowStyle:function(e){var n=this;return new o.a(function(t,r){var o=n.interval,i=l()(s.a.mark(function n(){var r,a,l,u,c,d=this;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=this.fullStyle[e]){n.next=3;break}return n.abrupt("return");case 3:a=this.fullStyle.filter(function(n,t){return t<=e}).map(function(e){return e.length}).reduce(function(e,n){return e+n},0),l=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return n.stop()}},n,this)})).bind(n);i()})},progressivelyShowResume:function(){var e=this;return new o.a(function(n,t){var r=e.fullMarkdown.length,o=e.interval;!function t(){if(e.currentMarkdown.length<r){e.currentMarkdown=e.fullMarkdown.substring(0,e.currentMarkdown.length+1);var i=(e.currentMarkdown[e.currentMarkdown.length-1],e.currentMarkdown[e.currentMarkdown.length-2]);console.log(i),"\n"===i&&e.$refs.resumeEditor&&e.$nextTick(function(){return e.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else n()}()})}}}},37:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(79),o=t.n(r);n.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},38:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(80),o=t.n(r);n.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},39:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(35),o=t(34),i=t.n(o);new r.a({el:"#app",render:function(e){return e(i.a)}})},75:function(e,n){},76:function(e,n){},77:function(e,n){},78:function(e,n){},84:function(e,n,t){t(76);var r=t(20)(t(37),t(86),"data-v-17202d13",null);e.exports=r.exports},85:function(e,n,t){t(78);var r=t(20)(t(38),t(88),"data-v-913b2b16",null);e.exports=r.exports},86:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:e.enableHtml}},[e.enableHtml?t("div",{domProps:{innerHTML:e._s(e.result)}}):t("pre",[e._v(e._s(e.result))])])},staticRenderFns:[]}},87:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:e.currentStyle}}),e._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:e.currentMarkdown,enableHtml:e.enableHtml}})],1)},staticRenderFns:[]}},88:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:e._s(e.codeInStyleTag)}}),e._v(" "),t("pre",{domProps:{innerHTML:e._s(e.highlightedCode)}})])},staticRenderFns:[]}}},[39]);
//# sourceMappingURL=app.4e6f756d02912e77edbe.js.map