(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{455:function(module,exports,__webpack_require__){__webpack_require__(456),__webpack_require__(611),__webpack_require__(612),__webpack_require__(805),__webpack_require__(806),__webpack_require__(807),__webpack_require__(808),__webpack_require__(809),__webpack_require__(804),__webpack_require__(810),__webpack_require__(811),module.exports=__webpack_require__(800)},523:function(module,exports){},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(188)},800:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(188).configure)([__webpack_require__(801),__webpack_require__(802)],module,!1)}).call(this,__webpack_require__(152)(module))},801:function(module,exports,__webpack_require__){var map={"./Introduction.story.mdx":803};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=801},802:function(module,exports,__webpack_require__){var map={"./Sheba.story.ts":812,"./URLfix.story.ts":813,"./hasPersian.story.ts":814,"./isPersian.story.ts":815,"./toPersianChars.story.ts":816};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=802},803:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(9),__webpack_require__(16),__webpack_require__(34),__webpack_require__(0);var esm=__webpack_require__(18),blocks=__webpack_require__(203),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",comments=(__webpack_require__.p,__webpack_require__.p+"static/media/comments.a3859089.svg"),repo=(__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p+"static/media/repo.6d496322.svg");__webpack_require__.p;function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.b,{title:"Introduction",mdxType:"Meta"}),Object(esm.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-bottom: 10px;\n  }\n\n  .tip-wrapper--first {\n    margin-top: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.b)("h1",{id:"welcome-to-vue-persian-tools"},"Welcome to Vue Persian Tools"),Object(esm.b)("p",null,"An anthology of a variety of tools for the Persian language in javascript"),Object(esm.b)("div",{className:"subheading"},"Learn"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://persian-tools.js.org/",target:"_blank"},Object(esm.b)("img",{src:repo,alt:"repo"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"documentation"),"Configure, customize, and extend")),Object(esm.b)("a",{className:"link-item",href:"https://github.com/persian-tools/vue-persian-tools",target:"_blank"},Object(esm.b)("img",{src:code_brackets,alt:"code"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.b)("a",{className:"link-item",href:"https://github.com/persian-tools",target:"_blank"},Object(esm.b)("img",{src:comments,alt:"comments"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Organization"),"Chat with maintainers and the community"))),Object(esm.b)("div",{className:"tip-wrapper tip-wrapper--first"},Object(esm.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.b)("code",null,"/stories/Introduction.story.mdx")),Object(esm.b)("div",{className:"tip-wrapper"},Object(esm.b)("span",{className:"tip"},"Contributing"),"Thank you for your interest in contributing! Please feel free to put up a PR for any issue or feature request."),Object(esm.b)("div",{className:"tip-wrapper"},Object(esm.b)("span",{className:"tip"},"License"),"This project is licensed under the MIT License"))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(blocks.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},811:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(34),__webpack_require__(49),__webpack_require__(798),__webpack_require__(37),__webpack_require__(799);var client_api=__webpack_require__(821),esm=__webpack_require__(6),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},812:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(9);var index_esm=__webpack_require__(42),persian_tools_module=__webpack_require__(70),getSlot_skip=__webpack_require__(82),tagPropMixin_skip=__webpack_require__(83),sheba=Object(index_esm.a)({name:"Sheba",mixins:[tagPropMixin_skip.a],props:{shebaCode:{type:String,requied:!0}},computed:{isValid:function isValid(){return new persian_tools_module.a(this.shebaCode).validate()},info:function info(){return new persian_tools_module.a(this.shebaCode).recognize()}},render:function render(){var __SLOTS__=Object(getSlot_skip.a)(this,{isValid:this.isValid,info:this.info});return Object(index_esm.b)(this.tag,__SLOTS__)}}),Default=function Template(args){return{components:{Sheba:sheba},setup:function setup(){return{code:args.val}},template:'\n    <Sheba :shebaCode="code" v-slot="{ isValid, info }">\n        is sheba valid: <b>{{ isValid }}</b>\n        <br />\n        <br />\n        <h3>info about sheba</h3>\n        <div v-if="info">\n            <p> nickname: {{ info.nickname }} </p>\n            <p> name: {{ info.name }} </p>\n            <p> persianName: {{ info.persianName }} </p>\n            <p> code: {{ info.code }} </p>\n            <p> accountNumberAvailable: {{ info.accountNumberAvailable }} </p>\n        </div>\n        <div v-else>\n            invalid\n        </div>\n    </Sheba>\n    '}}.bind({});Default.args={val:"IR820540102680020817909002"};__webpack_exports__.default={title:"Modules/Sheba",component:sheba,argTypes:{val:{name:"shebaCode",type:{name:"string",required:!0},defaultValue:null,description:"get info & validate iranian Sheba(IBAN)",table:{type:{summary:"string"},defaultValue:{summary:"null"}},control:{type:"text"}}}};Default.parameters=Object.assign({storySource:{source:'(args: any) => ({\n    components: { Sheba },\n    setup() {\n        return {\n            code: args.val\n        };\n    },\n    template: `\n    <Sheba :shebaCode="code" v-slot="{ isValid, info }">\n        is sheba valid: <b>{{ isValid }}</b>\n        <br />\n        <br />\n        <h3>info about sheba</h3>\n        <div v-if="info">\n            <p> nickname: {{ info.nickname }} </p>\n            <p> name: {{ info.name }} </p>\n            <p> persianName: {{ info.persianName }} </p>\n            <p> code: {{ info.code }} </p>\n            <p> accountNumberAvailable: {{ info.accountNumberAvailable }} </p>\n        </div>\n        <div v-else>\n            invalid\n        </div>\n    </Sheba>\n    `\n})'}},Default.parameters)},813:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(9);var index_esm=__webpack_require__(42),persian_tools_module=__webpack_require__(70),getSlot_skip=__webpack_require__(82),tagPropMixin_skip=__webpack_require__(83),URLfix=Object(index_esm.a)({name:"URLfix",mixins:[tagPropMixin_skip.a],props:{url:{type:String,requied:!0}},computed:{fixURL:function fixURL(){return Object(persian_tools_module.b)(this.url)}},render:function render(){var __SLOTS__=Object(getSlot_skip.a)(this,{url:this.fixURL});return Object(index_esm.b)(this.tag,__SLOTS__)}}),Default=function Template(args){return{components:{URLfix:URLfix},setup:function setup(){return{url:args.val}},template:'<URLfix :url="url" v-slot="{ url }">fixed URL: <b>{{ url }}</b></URLfix>'}}.bind({});Default.args={val:"https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js"};__webpack_exports__.default={title:"Modules/URLfix",component:URLfix,argTypes:{val:{name:"url",type:{name:"string",required:!0},defaultValue:null,description:"url that need to be fixed",table:{type:{summary:"string"},defaultValue:{summary:"null"}},control:{type:"text"}}}};Default.parameters=Object.assign({storySource:{source:'(args: any) => ({\n    components: { URLfix },\n    setup() {\n        return {\n            url: args.val\n        };\n    },\n    template: \'<URLfix :url="url" v-slot="{ url }">fixed URL: <b>{{ url }}</b></URLfix>\'\n})'}},Default.parameters)},814:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(9);var index_esm=__webpack_require__(42),persian_tools_module=__webpack_require__(70),getSlot_skip=__webpack_require__(82),tagPropMixin_skip=__webpack_require__(83),hasPersian=Object(index_esm.a)({name:"hasPersian",mixins:[tagPropMixin_skip.a],props:{str:{type:String,requied:!0}},computed:{hasPersianInText:function hasPersianInText(){return Object(persian_tools_module.c)(this.str)}},render:function render(){var __SLOTS__=Object(getSlot_skip.a)(this,{hasPersian:this.hasPersianInText});return Object(index_esm.b)(this.tag,__SLOTS__)}}),Default=function Template(args){return{components:{hasPersian:hasPersian},setup:function setup(){return{text:args.val}},template:'<hasPersian :str="text" v-slot="{ hasPersian }">is string contains persian chars: <b>{{ hasPersian }}</b></hasPersian>'}}.bind({});Default.args={val:"hello متن فارسی"};__webpack_exports__.default={title:"Modules/hasPersian",component:hasPersian,argTypes:{val:{name:"str",type:{name:"string",required:!0},defaultValue:null,description:"Check if string includes persian alphabet.",table:{type:{summary:"string"},defaultValue:{summary:"null"}},control:{type:"text"}}}};Default.parameters=Object.assign({storySource:{source:'(args: any) => ({\n    components: { hasPersian },\n    setup() {\n        return {\n            text: args.val\n        };\n    },\n    template: \'<hasPersian :str="text" v-slot="{ hasPersian }">is string contains persian chars: <b>{{ hasPersian }}</b></hasPersian>\'\n})'}},Default.parameters)},815:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(113),__webpack_require__(22),__webpack_require__(208),__webpack_require__(88),__webpack_require__(9);var index_esm=__webpack_require__(42),persian_tools_module=__webpack_require__(70),getSlot_skip=__webpack_require__(82),tagPropMixin_skip=__webpack_require__(83),isPersian=Object(index_esm.a)({name:"isPersian",mixins:[tagPropMixin_skip.a],props:{str:{type:String,requied:!0},trimPattern:{type:RegExp,default:/["'-+()؟\s.]/g}},computed:{isFa:function isFa(){return Object(persian_tools_module.d)(this.str,this.trimPattern)}},render:function render(){var __SLOTS__=Object(getSlot_skip.a)(this,{isPersian:this.isFa});return Object(index_esm.b)(this.tag,__SLOTS__)}}),Default=function Template(args){return{components:{isPersian:isPersian},setup:function setup(){var regex=function generateRegex(regString){var match=regString.match(new RegExp("^/(.*?)/([gimy]*)$"));return new RegExp(match[1],match[2])}(args.pattern);return{text:args.val,trim:regex}},template:'<is-persian :str="text" :trimPattern="trim" v-slot="{isPersian}">is given text persian: <b>{{ isPersian }}</b></is-persian>'}}.bind({});Default.args={val:"این یک متن فارسی است",pattern:"/[\"'-+()؟s.]/g"};__webpack_exports__.default={title:"Modules/isPersian",component:isPersian,argTypes:{val:{name:"str",type:{name:"string",required:!0},defaultValue:null,description:"checks if given value is persian or not",table:{type:{summary:"string"},defaultValue:{summary:"null"}},control:{type:"text"}},pattern:{name:"trimPattern",type:{name:"string",required:!1},defaultValue:null,description:"Pattern of characters which you want to trim from the string e.g. '-+. ()'",table:{type:{summary:"RegExp"},defaultValue:{summary:"null"}},control:{type:"text"}}}};Default.parameters=Object.assign({storySource:{source:'(args: any) => ({\n    components: { isPersian },\n    setup() {\n        const regex = generateRegex(args.pattern);\n        return {\n            text: args.val,\n            trim: regex\n        };\n    },\n    template: \'<is-persian :str="text" :trimPattern="trim" v-slot="{isPersian}">is given text persian: <b>{{ isPersian }}</b></is-persian>\'\n})'}},Default.parameters)},816:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(9);var index_esm=__webpack_require__(42),persian_tools_module=__webpack_require__(70),getSlot_skip=__webpack_require__(82),tagPropMixin_skip=__webpack_require__(83),toPersianChars=Object(index_esm.a)({name:"toPersianChars",mixins:[tagPropMixin_skip.a],props:{str:{type:String,requied:!0}},computed:{convertToPersianChar:function convertToPersianChar(){return Object(persian_tools_module.e)(this.str)}},render:function render(){var __SLOTS__=Object(getSlot_skip.a)(this,{text:this.convertToPersianChar});return Object(index_esm.b)(this.tag,__SLOTS__)}}),Default=function Template(args){return{components:{toPersianChars:toPersianChars},setup:function setup(){return{val:args.val}},template:'<toPersianChars :str="val" v-slot="{ text }">converted to: <b>{{ text }}</b></toPersianChars>'}}.bind({});Default.args={val:"علي"};__webpack_exports__.default={title:"Modules/toPersianChars",component:toPersianChars,argTypes:{val:{name:"str",type:{name:"string",required:!0},defaultValue:null,description:"Description: Replaces all instances of ي and ك withی and ک, respectively. It should not make any ch anges to Arabic text surrounded by appropriate templates.",table:{type:{summary:"string"},defaultValue:{summary:"null"}},control:{type:"text"}}}};Default.parameters=Object.assign({storySource:{source:'(args: any) => ({\n    components: { toPersianChars },\n    setup() {\n        return {\n            val: args.val\n        };\n    },\n    template: \'<toPersianChars :str="val" v-slot="{ text }">converted to: <b>{{ text }}</b></toPersianChars>\'\n})'}},Default.parameters)},82:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getSlot}));var vue_demi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(42);function getSlot(Vue,props){return vue_demi__WEBPACK_IMPORTED_MODULE_0__.c?Vue.$slots.default?Vue.$slots.default(props):void 0:Vue.$scopedSlots.default(props)}},83:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={props:{tag:{type:String,default:"span"}}}}},[[455,2,3]]]);