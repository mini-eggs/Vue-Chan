webpackJsonp([1],{100:function(n,e,t){e=n.exports=t(89)(!0),e.push([n.i,"#thread-set>div{border:0 solid #3f51b5;border-left-width:10px}#thread-set>div:first-of-type{border-left-width:0}","",{version:3,sources:["/Users/evanjones/evansapps/vue-chan/src/components/threadSet.css"],names:[],mappings:"AAAA,gBACE,uBAAwB,AACxB,sBAAwB,CACzB,AAED,8BACE,mBAAqB,CACtB",file:"threadSet.css",sourcesContent:["#thread-set > div {\n  border: 0 #3f51b5 solid;\n  border-left-width: 10px;\n}\n\n#thread-set > div:first-of-type {\n  border-left-width: 0;\n}"],sourceRoot:""}])},101:function(n,e,t){"use strict";function i(){}function o(){}var r=t(102),a=t(105),s=(t.n(a),function(){return{}}),A={"x-image":r.a},d=["item","disableButtons","view"],m={replyLink:function(){var n=this.item;return"http://boards.4chan.org/"+n.board+"/thread/"+n.thread}},c={handleLinkClick:function(n){var e=n.target.href;console.log("user clicked on HTML a tag with link of "+e),n.stopPropagation(),n.preventDefault()},getThreaLink:function(n){return"/"+this.$route.params.board+"/"+n.thread}};e.a={name:"x-single",props:d,components:A,data:s,computed:m,mounted:i,beforeDestroy:o,methods:c,template:'\n  <div id="single">\n    <md-card>\n\n      \x3c!--IMAGE--\x3e\n      <x-image :item="item"></x-image>\n      \n      \x3c!--NAME & TIME--\x3e\n      \x3c!--\n      <md-card-header>\n        <div class="md-title">{{ item.name }}</div>\n        <div class="md-subhead">{{ item.time }}</div>\n      </md-card-header>\n      --\x3e\n      \n      \x3c!-- CONTENT --\x3e\n      <md-card-content>\n        <div class="html-container" v-html="item.com"></div>\n      </md-card-content>\n      \n      \x3c!--BUTTONS--\x3e\n      <md-card-actions v-if="!disableButtons" >\n\n        \x3c!--CHAT--\x3e\n        <a class="md-button no-link md-no-button" @click.stop :href="replyLink" target="_blank">\n          <md-icon>chat</md-icon>\n        </a>\n\n        \x3c!--VIEW--\x3e\n        <router-link class="default-margin-left pointer" v-if="view" tag="span" :to="getThreaLink(item)">\n          <md-icon>arrow_forward</md-icon>\n        </router-link>\n\n      </md-card-actions>\n    </md-card>\n  </div>\n'}},102:function(n,e,t){"use strict";var i=t(103),o=(t.n(i),["item"]),r=function(){return{showImage:!1}},a={loadImage:function(){this.showImage=!0}};e.a={name:"x-image",props:o,data:r,methods:a,template:'\n  <div id="image" v-if="item.image">\n  \n    \x3c!--BUTTON--\x3e\n    <div v-if="!showImage" class="button-container" :style="{ backgroundImage: \'url(\' + item.thumbnail + \')\' }">\n      <md-button class="md-primary md-raised" @click.stop="loadImage">\n        <md-icon >visibility_on</md-icon>\n      </md-button>\n    </div>\n\n    \x3c!--IMAGE--\x3e\n    <div v-else>\n    \n      <video v-if="item.ext === \'.webm\' " controls autoplay muted>\n        <source :src="item.image" type="video/mp4">\n        <source :src="item.image" type="video/ogg">\n        Your browser does not support the video tag.\n      </video>\n\n      <a v-else :href="item.image" target="_blank">\n        <img :src="item.image" />\n      </a>\n\n    </div>\n\n  </div>\n'}},103:function(n,e,t){var i=t(104);"string"===typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(90)(i,o);i.locals&&(n.exports=i.locals)},104:function(n,e,t){e=n.exports=t(89)(!0),e.push([n.i,'#image img{width:100%}#image .button-container{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:20vh;position:relative;background-size:cover;background-position:50%}#image .button-container:before{content:" ";background-color:grey;opacity:.5;position:absolute;top:0;left:0;width:100%;height:100%}#image video{width:100%}',"",{version:3,sources:["/Users/evanjones/evansapps/vue-chan/src/components/image.css"],names:[],mappings:"AAGA,WACE,UAAY,CACb,AAED,yBACE,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,YAAa,AACb,kBAAmB,AACnB,sBAAuB,AACvB,uBAAmC,CACpC,AAED,gCACE,YAAa,AACb,sBAAuB,AACvB,WAAa,AACb,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,WAAa,CACd,AAED,aACE,UAAY,CACb",file:"image.css",sourcesContent:['#image {\n}\n\n#image img {\n  width: 100%;\n}\n\n#image .button-container {\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 20vh;\n  position: relative;\n  background-size: cover;\n  background-position: center center;\n}\n\n#image .button-container:before {\n  content: " ";\n  background-color: grey;\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n#image video {\n  width: 100%;\n}\n'],sourceRoot:""}])},105:function(n,e,t){var i=t(106);"string"===typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(90)(i,o);i.locals&&(n.exports=i.locals)},106:function(n,e,t){e=n.exports=t(89)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"single.css",sourceRoot:""}])},122:function(n,e,t){"use strict";function i(){return m(this.$route)}function o(){this.requestPosts(this.board,this.thread),this.$bus.$on("refresh",this.refresh)}function r(){this.$bus.$off("refresh",this.refresh)}function a(){this.clearPosts(this.board,this.thread)}var s=t(123),A=(t.n(s),t(98)),d=t(95),m=function(n){var e=n.params;return{board:e.board,thread:e.thread}},c={"x-thread-set":A.a,"x-loader":d.a},l={$route:function(n){Object.assign(this.$data,m(n))}},u={refresh:function(){this.refreshPosts(this.board,this.thread)}};e.a={name:"x-posts",components:c,watch:l,data:i,mounted:o,beforeDestroy:r,destroyed:a,methods:u,template:'\n  <div id="posts">\n\n    \x3c!--LOADER--\x3e\n    <x-loader v-if="( threads[thread] || [] ).length === 0" ></x-loader>\n\n    \x3c!--LIST--\x3e\n    <div v-for="(item, index) in threads[thread]" :key="index">\n      <x-thread-set :view="false" :items="item" ></x-thread-set>\n    </div>\n\n  </div>\n'}},123:function(n,e,t){var i=t(124);"string"===typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(90)(i,o);i.locals&&(n.exports=i.locals)},124:function(n,e,t){e=n.exports=t(89)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"posts.css",sourceRoot:""}])},94:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(21),o=t(26),r=t(122),a=function(n){return{threads:n.Posts.threads}},s=function(n){return{requestPosts:function(e,t){return n(Object(o.e)(e,t))},refreshPosts:function(e,t){return n(Object(o.d)(e,t))},clearPosts:function(e,t){return n(Object(o.c)(e,t))}}};e.default=Object(i.b)(a,s)(r.a)},95:function(n,e,t){"use strict";var i=t(96);t.n(i);e.a={name:"x-loader",template:'\n  <div id="loader">\n    <span>\n      <md-icon>refresh</md-icon>\n    </span>\n  </div>\n'}},96:function(n,e,t){var i=t(97);"string"===typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(90)(i,o);i.locals&&(n.exports=i.locals)},97:function(n,e,t){e=n.exports=t(89)(!0),e.push([n.i,"#loader{text-align:center;padding:50px 0;overflow:hidden}#loader span{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:XSpin;animation-name:XSpin;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;display:block;margin:0 auto}@-webkit-keyframes XSpin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes XSpin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}","",{version:3,sources:["/Users/evanjones/evansapps/vue-chan/src/components/loader.css"],names:[],mappings:"AAAA,QACE,kBAAmB,AACnB,eAAgB,AAChB,eAAiB,CAClB,AAED,aACE,8BAA+B,AACvB,sBAAuB,AAC/B,iCAAkC,AAC1B,yBAA0B,AAClC,2CAA4C,AACpC,mCAAoC,AAC5C,yCAA0C,AAClC,iCAAkC,AAC1C,6BAA8B,AACtB,qBAAsB,AAC9B,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,cAAe,AACf,aAAe,CAChB,AAED,yBACE,GACE,+BAA2C,AACnC,sBAAmC,CAC5C,AACD,GACE,gCAA6C,AACrC,uBAAqC,CAC9C,CACF,AAED,iBACE,GACE,+BAA2C,AACnC,sBAAmC,CAC5C,AACD,GACE,gCAA6C,AACrC,uBAAqC,CAC9C,CACF",file:"loader.css",sourcesContent:["#loader {\n  text-align: center;\n  padding: 50px 0;\n  overflow: hidden;\n}\n\n#loader span {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-name: XSpin;\n          animation-name: XSpin;\n  -webkit-transform-origin: center;\n      -ms-transform-origin: center;\n          transform-origin: center;\n  display: block;\n  margin: 0 auto;\n}\n\n@-webkit-keyframes XSpin {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n  }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n            transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n\n@keyframes XSpin {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n  }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n            transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n"],sourceRoot:""}])},98:function(n,e,t){"use strict";var i=t(99),o=(t.n(i),t(101)),r={"x-single":o.a},a=["items","view"];e.a={name:"x-thread-set",components:r,props:a,template:'\n  <div id="thread-set">\n    <div v-for="(item, index) in items" :key="index">\n      <x-single :view="view" :item="item"></x-single>\n    </div>\n  </div>\n'}},99:function(n,e,t){var i=t(100);"string"===typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(90)(i,o);i.locals&&(n.exports=i.locals)}});
//# sourceMappingURL=1.61390cc1.chunk.js.map