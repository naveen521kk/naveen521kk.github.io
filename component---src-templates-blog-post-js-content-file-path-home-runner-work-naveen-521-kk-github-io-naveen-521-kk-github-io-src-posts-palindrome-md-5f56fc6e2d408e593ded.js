"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[507],{7261:function(n,a,e){function s(n){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(n)}function t(n){var a=function(n,a){if("object"!==s(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,a||"default");if("object"!==s(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(n)}(n,"string");return"symbol"===s(a)?a:String(a)}function o(n,a,e){return(a=t(a))in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}e.d(a,{Zo:function(){return k},ah:function(){return i}});var p=e(7294);function l(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,s)}return e}function c(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){o(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}var r=p.createContext({});function i(n){var a=p.useContext(r);return p.useMemo((function(){return"function"==typeof n?n(a):c(c({},a),n)}),[a,n])}var u={};function k(n){var a,e=n.components,s=n.children;return a=n.disableParentContext?"function"==typeof e?e({}):e||u:i(e),p.createElement(r.Provider,{value:a},s)}},9602:function(n,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=e(7261),t=e(7294);function o(n){var a=Object.assign({p:"p",code:"code",h2:"h2",a:"a",div:"div",ol:"ol",li:"li"},(0,s.ah)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"Given a number, write a algorithm, flowchart, pseudocode to check if it is palindrome or not."),"\n",t.createElement(a.p,null,"A string is said to be palindrome if reverse of the string is same as string. For example, ",t.createElement(a.code,null,"1221")," is palindrome, but ",t.createElement(a.code,null,"1223")," is not palindrome."),"\n",t.createElement(a.p,null,"We will follow a method where we get each numbers using mathematical operations."),"\n",t.createElement(a.h2,{id:"logic",style:{position:"relative"}},t.createElement(a.a,{href:"#logic","aria-label":"logic permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Logic"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Get the number to check and store it in ",t.createElement(a.code,null,"n"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Create empty variables ",t.createElement(a.code,null,"r = 0"),", ",t.createElement(a.code,null,"s = 0")," and",t.createElement(a.code,null,"t = n"),". Here, ",t.createElement(a.code,null,"s")," will become the reversed number, ",t.createElement(a.code,null,"t")," will be a reference to original number, ",t.createElement(a.code,null,"r")," will be a temporary variable."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Start a while loop checking whether the ",t.createElement(a.code,null,"n != 0"),"(if n is 0 exit the while loop)."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Inside the while loop do the following operations."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python">r <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">10</span>\ns <span class="token operator">=</span> s <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> r\nn <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"First get the last digit of ",t.createElement(a.code,null,"n")," by dividing the given number(",t.createElement(a.code,null,"n"),") by 10 and finding the remainder(the ",t.createElement(a.code,null,"%")," operator) and store it in ",t.createElement(a.code,null,"r"),". Then, add ",t.createElement(a.code,null,"r")," to ",t.createElement(a.code,null,"s")," after multiplying it by previous stored value of ",t.createElement(a.code,null,"s")," by 10. And finally divide ",t.createElement(a.code,null,"n")," by 10 and store it again in ",t.createElement(a.code,null,"n"),". This way the number is reversed and stored in ",t.createElement(a.code,null,"s"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"After the loop ends, check whether ",t.createElement(a.code,null,"s == t"),"(whether the original number is same as reversed number)."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"If ",t.createElement(a.code,null,"s == t"),", display that ",t.createElement(a.code,null,"n")," palindrome, else display ",t.createElement(a.code,null,"n")," is not a palindrome."),"\n"),"\n"),"\n",t.createElement(a.h2,{id:"flowchart",style:{position:"relative"}},t.createElement(a.a,{href:"#flowchart","aria-label":"flowchart permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Flowchart"),"\n",t.createElement(a.p,null,"WIP, have a look ",t.createElement(a.a,{href:"https://mermaid-js.github.io/mermaid-live-editor/view/#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBKChTdGFydCkpIC0tPiBCWy9SZWFkIE51bWJlciB0byBjaGVjayBhcyBuL107XG4gICAgQiAtLT4gQ1tBc3NpZ24gcz0wLCB0ID0gbl07XG4gICAgQyAtLT4gRHsgV2hpbGUgbiE9MCB9OyBcbiAgICBEIC0tIFRydWUgLS0-IEVbXCJyID0gbiAlIDEwIDxicj5zID0gcyAqIDEwICsgcjxicj5uID0gbiAvIDEwXCJdIC0tPiBEXG4gICAgRCAtLSBGYWxzZSAtLT4gRntJcyBuID09IHQ_fVxuICAgIEYgLS0gWWVzIC0tPiBHWy9QcmludCBuIGlzIHBhbGluZHJvbWUvXSAtLT4gSVtTdG9wXTtcbiAgICBGIC0tIE5vIC0tPiBIWy9QcmludCBuIGlzIG5vdCBhIHBhbGluZHJvbWUvXSAtLT4gSSgoU3RvcCkpOyIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkYXJrXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOnRydWUsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjp0cnVlfQ"},"here"),"."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">graph <span class="token constant">TD</span>\n    <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Start<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">B</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Read Number to check as n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token constant">B</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">C</span><span class="token punctuation">[</span>Assign s<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> t <span class="token operator">=</span> n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token constant">C</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">D</span><span class="token punctuation">{</span> While n<span class="token operator">!=</span><span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> \n    <span class="token constant">D</span> <span class="token operator">--</span> True <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">E</span><span class="token punctuation">[</span><span class="token string">"r = n % 10 &lt;br>s = s * 10 + r&lt;br>n = n / 10"</span><span class="token punctuation">]</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">D</span>\n    <span class="token constant">D</span> <span class="token operator">--</span> False <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">F</span><span class="token punctuation">{</span>Is n <span class="token operator">==</span> t<span class="token operator">?</span><span class="token punctuation">}</span>\n    <span class="token constant">F</span> <span class="token operator">--</span> Yes <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">G</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Print n is palindrome</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">I</span><span class="token punctuation">[</span>Stop<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token constant">F</span> <span class="token operator">--</span> No <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">H</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Print n is not a palindrome</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token constant">I</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Stop<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"pseudocode",style:{position:"relative"}},t.createElement(a.a,{href:"#pseudocode","aria-label":"pseudocode permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Pseudocode"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="pseudocode"><pre class="language-pseudocode"><code class="language-pseudocode">BEGIN\nREAD number to check as n\nSET s = 0\nSET t = n\nWHILE n != 0 DO\n\tr = n % 10\n\ts = s * 10 + r\n\tn = n / 10\nENDWHILE\nIF n == t\n\tDISPLAY n is palindrome\nELSE\n\tDISPLAY n is not a palindrome\nENDIF\nEND</code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"implementation",style:{position:"relative"}},t.createElement(a.a,{href:"#implementation","aria-label":"implementation permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Implementation"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"In C:"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token comment">/* Function to check if n is Palindrome*/</span>\n<span class="token keyword">int</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> t <span class="token operator">=</span> n<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        r <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>\n        s <span class="token operator">=</span> s <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> r<span class="token punctuation">;</span>\n        n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// Check if rev_n and n are same or not.</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> t<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">int</span> tocheck <span class="token operator">=</span> <span class="token number">1221</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> op <span class="token operator">=</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span>to_check<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>op <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is a palindrome"</span><span class="token punctuation">,</span> tocheck<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is not a palindrome"</span><span class="token punctuation">,</span> tocheck<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"In Python:"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">def</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span>\n    s <span class="token operator">=</span> <span class="token number">0</span>\n    t <span class="token operator">=</span> n\n    r <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">while</span> n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        r <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">10</span>\n        s <span class="token operator">=</span> s <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> r\n        n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span>\n    <span class="token keyword">if</span> t <span class="token operator">==</span> s<span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token boolean">True</span>\n   \t<span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token boolean">False</span>\nnumber <span class="token operator">=</span> <span class="token number">1001</span>\npalim <span class="token operator">=</span> is_palindrom<span class="token punctuation">(</span>number<span class="token punctuation">)</span>\n<span class="token keyword">if</span> palim<span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string"> is a palindrom"</span></span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string"> is not a palindrom"</span></span><span class="token punctuation">)</span></code></pre></div>'}}),"\n"),"\n"))}var p=function(n){void 0===n&&(n={});var a=Object.assign({},(0,s.ah)(),n.components).wrapper;return a?t.createElement(a,n,t.createElement(o,n)):o(n)},l=e(3771),c=e(7682),r=e(4165),i=e(9255),u=e(4497),k=function(n){return t.createElement("code",{className:"language-text"},n.children)},d=function(n){var a=n.data,e=(n.location,n.children),o=a.mdx.frontmatter,p={"@context":"https://schema.org","@type":"BlogPosting",headline:o.title,author:{"@type":"Person",name:"Naveen M K",url:"http://www.naveenmk.me",image:"https://avatars.githubusercontent.com/u/49693820"},name:o.title,abstract:o.description,image:o.image,description:o.description,copyrightYear:(new Date).getFullYear(),copyrightHolder:"Naveen M K"},d={code:k};return t.createElement("div",null,t.createElement(l.Z,{title:o.title,description:o.description,image:o.image,article:!0}),t.createElement(c.h,{data:p}),t.createElement(r.Z),t.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.image?t.createElement(i.Z,{img_loc:o.image}):t.createElement("div"),t.createElement("div",{className:u.F},t.createElement("div",{className:u.T+" blog-post"},t.createElement("header",null,t.createElement("h1",{className:"py-2",itemProp:"headline"},o.title),t.createElement("small",null,"Published on ",o.date,o.updated_date?" · Updated on "+o.updated_date:"")),t.createElement("section",{className:"flex flex-col blog-post-content pt-3 mx-auto justify-center",id:"blog-start",itemProp:"articleBody"},t.createElement(s.Zo,{components:d},e))))))};function m(n){return t.createElement(d,n,t.createElement(p,n))}},9255:function(n,a,e){e.d(a,{Z:function(){return l}});var s=e(7294),t="bgphoto-module--base_container--3f935",o="bgphoto-module--inner_container--2454f",p="bgphoto-module--top_container--83622";function l(n){var a={backgroundImage:"url("+n.img_loc+")"};return s.createElement("div",{className:t+" "+p},s.createElement("div",{className:t+" "+o,style:a}))}},7682:function(n,a,e){e.d(a,{h:function(){return t}});var s=e(7294),t=function(n){var a=n.data;return s.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a)}})}},4497:function(n,a,e){e.d(a,{F:function(){return t},T:function(){return s}});var s="posts-style-module--core_blog_post--f38d0",t="posts-style-module--outer_class--bc1ef"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-home-runner-work-naveen-521-kk-github-io-naveen-521-kk-github-io-src-posts-palindrome-md-5f56fc6e2d408e593ded.js.map