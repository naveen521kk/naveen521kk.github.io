"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[470],{1863:function(n,a,e){e.r(a),e.d(a,{default:function(){return w}});var s=e(8453),t=e(6540),p="xor-ops-module--line--34c66",l="xor-ops-module--textDiv--32cff";const o=n=>(n>>>0).toString(2),c=()=>t.createElement("div",{className:"xor-ops-module--tableDiv--3d9e1"},t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"A"),t.createElement("th",null,"B"),t.createElement("th",null,"A XOR B"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,"1"),t.createElement("td",null,"1"),t.createElement("td",null,"0")),t.createElement("tr",null,t.createElement("td",null,"1"),t.createElement("td",null,"0"),t.createElement("td",null,"1")),t.createElement("tr",null,t.createElement("td",null,"0"),t.createElement("td",null,"1"),t.createElement("td",null,"1")),t.createElement("tr",null,t.createElement("td",null,"0"),t.createElement("td",null,"0"),t.createElement("td",null,"0"))))),r=n=>{let{defaultFirstNumber:a,defaultSecondNumber:e}=n;const[s,c]=t.useState(a),[r,u]=t.useState(e);return t.createElement("div",{className:"xor-ops-module--outerDiv--d65cb"},t.createElement("div",{className:"xor-ops-module--mainDiv--664ad"},t.createElement("div",{className:l},t.createElement("div",null,t.createElement("label",null,"First Number:"," ",t.createElement("input",{type:"number",name:"firstNumber",value:s,onChange:n=>c(Number(n.target.value))}))),t.createElement("div",null,t.createElement("label",null,"Second Number:"," ",t.createElement("input",{type:"number",name:"secondNumber",value:r,onChange:n=>u(Number(n.target.value))})))),t.createElement("div",{className:l},s," ^ ",r," ="," ",s^r),t.createElement("div",{className:"xor-ops-module--sumDiv--a92f1"},t.createElement("div",{className:"xor-ops-module--innerDiv--f1eec"},t.createElement("div",null,o(s).padStart(4,"0")),t.createElement("div",null,o(r).padStart(4,"0")),t.createElement("div",{className:p}),t.createElement("div",null,o(s^r).padStart(4,"0")),t.createElement("div",{className:p}))),t.createElement("p",null,t.createElement("em",null,"Try changing the input fields")," 😉")))};function u(n){const a=Object.assign({p:"p",blockquote:"blockquote",span:"span",h3:"h3",a:"a",h5:"h5"},(0,s.RP)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"Recently, while learning about the XOR operation, I came across an interesting property of XOR operation. The property is as follows:"),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"XOR of a number with itself cancels out the number"),"\n"),"\n",t.createElement(a.p,null,"For example, if we take the number ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">5</code>'}})," and XOR it with itself, we get ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">0</code>'}})," as the result. That is ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">5 ^ 5 = 0</code>'}}),"."),"\n",t.createElement(r,{defaultFirstNumber:5,defaultSecondNumber:5}),"\n",t.createElement(a.p,null,"If you are confused how the above operation works, you can check out the truth table below:"),"\n",t.createElement(c),"\n",t.createElement(a.h3,{id:"problem-statement",style:{position:"relative"}},t.createElement(a.a,{href:"#problem-statement","aria-label":"problem statement permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Problem Statement"),"\n",t.createElement(a.p,null,"If you have been given a array ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">arr = [1, 2, 3, 11, 1, 2, 3]</code>'}})," then find the unique number. Note then all the numbers are repeated twice and a unique is only available once in the given array. Note that the array is not sorted and the numbers are not in any particular order."),"\n",t.createElement(a.h3,{id:"solution",style:{position:"relative"}},t.createElement(a.a,{href:"#solution","aria-label":"solution permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Solution"),"\n",t.createElement(a.p,null,"If we XOR each element in the array with each other then the duplicates would be canceled out giving us the remaining unique number. See the below code in Python."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="py"><pre class="language-py"><code class="language-py"><span class="token operator">>></span><span class="token operator">></span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token operator">>></span><span class="token operator">></span> unique <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">for</span> num <span class="token keyword">in</span> arr<span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     unique <span class="token operator">^</span><span class="token operator">=</span> num\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">>></span><span class="token operator">></span> unique\n<span class="token number">11</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"This is the efficient solution to the problem. The time complexity of the solution is ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">O(n)</code>'}})," and the space complexity is ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">O(1)</code>'}}),"."),"\n",t.createElement(a.h3,{id:"code",style:{position:"relative"}},t.createElement(a.a,{href:"#code","aria-label":"code permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Code"),"\n",t.createElement(a.p,null,"I’ve written the code in multiple languages. You can check out the code below:"),"\n",t.createElement(a.h5,{id:"cc",style:{position:"relative"}},t.createElement(a.a,{href:"#cc","aria-label":"cc permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"C/C++"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> unique <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        unique <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span> unique<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h5,{id:"java",style:{position:"relative"}},t.createElement(a.a,{href:"#java","aria-label":"java permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Java"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="java"><pre class="language-java"><code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> unique <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            unique <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>unique<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h5,{id:"python",style:{position:"relative"}},t.createElement(a.a,{href:"#python","aria-label":"python permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Python"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="py"><pre class="language-py"><code class="language-py">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\nunique <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">for</span> num <span class="token keyword">in</span> arr<span class="token punctuation">:</span>\n    unique <span class="token operator">^</span><span class="token operator">=</span> num\n<span class="token keyword">print</span><span class="token punctuation">(</span>unique<span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h5,{id:"javascript",style:{position:"relative"}},t.createElement(a.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> unique <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    unique <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>unique<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}))}var i=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.RP)(),n.components);return a?t.createElement(a,n,t.createElement(u,n)):u(n)},m=e(4810),k=e(5909),d=e(2125),h=e(4224),g=e(304),b=e(9964),v=e(6849),E=e(7207),y=e(6969);const f=n=>{let{data:a,location:e,children:s}=n;const{mdx:p}=a,{frontmatter:l,tableOfContents:o}=p,{tags:c}=l,r={"@context":"https://schema.org","@type":"BlogPosting",headline:l.title,author:{"@type":"Person",name:"Naveen M K",url:"http://www.naveenmk.me",image:"https://avatars.githubusercontent.com/u/49693820"},name:l.title,abstract:l.description,image:l.image,description:l.description,copyrightYear:(new Date).getFullYear(),copyrightHolder:"Naveen M K"};(0,k.A)(l.slug);return t.createElement("div",null,t.createElement(d.A,{title:l.title,description:l.description,image:l.image,article:!0,isGiscusEnabled:!0}),t.createElement(h.Z,{data:r}),t.createElement(g.A),t.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},t.createElement("div",{className:E.Cc},t.createElement("aside",null,t.createElement("nav",null,t.createElement("h2",{className:E.Z8},"Table of Contents"),o.items&&o.items.map(((n,a)=>t.createElement("a",{href:n.url,className:E.g_,key:a},n.title)))),t.createElement(y.A,{className:"adsbygoogle",style:{display:"block"},client:"ca-pub-7183740147103241",slot:"6635102288",format:"auto",responsive:"true"})),t.createElement("div",{className:E.v6},t.createElement("div",{className:E.mD+" blog-post"},t.createElement("header",null,t.createElement("h1",{className:"py-2",itemProp:"headline"},l.title),t.createElement("small",null,"Published on ",l.date,l.updated_date?" · Updated on "+l.updated_date:""),t.createElement("div",{className:E.A8},c.map((n=>t.createElement(m.N_,{to:`/tags/${n}`,key:n},t.createElement("span",{key:n,className:E.Tc},n))))),t.createElement(y.A,{className:"adsbygoogle",style:{display:"block"},client:"ca-pub-7183740147103241",slot:"8700645384",format:"auto",responsive:"true"}),t.createElement("img",{src:l.image,alt:l.title+" image",className:E.F0})),t.createElement("section",{className:"flex flex-col blog-post-content pt-3 mx-auto justify-center",id:"blog-start",itemProp:"articleBody"},s),t.createElement(y.A,{className:"adsbygoogle",style:{display:"block"},client:"ca-pub-7183740147103241",slot:"6074482043",format:"auto",responsive:"true"}))))),t.createElement("div",{className:E.v6+" "+E.sR},t.createElement(v.A)),t.createElement(b.A))};function w(n){return t.createElement(f,n,t.createElement(i,n))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-src-posts-xor-unique-index-mdx-ac3d2eff3bc2cb53a2e7.js.map