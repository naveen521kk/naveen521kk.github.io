(self.webpackChunksite=self.webpackChunksite||[]).push([[989],{1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),a=r(8416),l=r(7071),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),p=r(4983).mdx,d=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),s=d(t),f=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return u.createElement(f,i({},a))}},2853:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),o=r(1955),a=r(3771),l=function(e){var t=e.data;return n.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})},c=r(2640),s="bgphoto-module--base_container--P5NTL";function i(e){var t={backgroundImage:"url("+e.img_loc+")"};return n.createElement("div",{className:s+" bgphoto-module--top_container--g2Ij4"},n.createElement("div",{className:s+" bgphoto-module--inner_container--JFT-s",style:t}))}var u=function(e){var t=e.data,r=(e.location,t.mdx),s=r.frontmatter,u=r.body,p={"@context":"https://schema.org","@type":"BlogPosting",headline:s.title,author:{"@type":"Person",name:"Naveen M K",url:"http://naveen521kk.github.io",image:"https://avatars.githubusercontent.com/u/49693820"},name:s.title,abstract:s.description,image:s.image,description:s.description,copyrightYear:(new Date).getFullYear(),copyrightHolder:"Naveen M K"};return n.createElement("div",null,n.createElement(a.Z,{title:s.title,description:s.description,image:s.image,article:!0}),n.createElement(l,{data:p}),n.createElement(c.Z,null),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},s.image?n.createElement(i,{img_loc:s.image}):n.createElement("div",null),n.createElement("div",{className:"posts-style-module--outer_class--vB78V"},n.createElement("div",{className:"posts-style-module--core_blog_post--840Od blog-post"},n.createElement("header",null,n.createElement("h1",{className:"py-2",itemProp:"headline"},s.title),n.createElement("small",null,"Published on ",s.date,s.updated_date?" · Updated on "+s.updated_date:"")),n.createElement("section",{className:"flex flex-col blog-post-content pt-3 mx-auto justify-center",id:"blog-start",itemProp:"articleBody"},n.createElement(o.MDXRenderer,null,u))))))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function a(t,r,l){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),l=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4f8e7d495ae239593f60.js.map