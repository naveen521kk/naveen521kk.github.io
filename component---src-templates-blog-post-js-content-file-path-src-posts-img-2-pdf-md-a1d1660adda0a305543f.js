"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[508],{137:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var n=t(1151),s=t(7294);function l(e){const a=Object.assign({p:"p",em:"em",h1:"h1",a:"a",span:"span",h2:"h2"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"Img2Pdf is an ",s.createElement(a.em,null,"CLI")," for converting images in a folder into a PDF file.\nThis has a capability of adding borders around the image and finally converts it to PDF files using PIL."),"\n",s.createElement(a.p,null,"Made with ❤ By Naveen"),"\n",s.createElement(a.h1,{id:"installing-img2pdf-cli",style:{position:"relative"}},s.createElement(a.a,{href:"#installing-img2pdf-cli","aria-label":"installing img2pdf cli permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Installing Img2Pdf CLI"),"\n",s.createElement(a.h2,{id:"installing-using-pip",style:{position:"relative"}},s.createElement(a.a,{href:"#installing-using-pip","aria-label":"installing using pip permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Installing Using Pip"),"\n",s.createElement(a.p,null,"Img2pdf can be installed using ",s.createElement(a.a,{href:"https://pypi.org/project/imgtopdfeasy/"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">pip</code>'}})," "),". For that you would need Python installed adding it to Path and also see ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">pip</code>'}})," installed. See ",s.createElement(a.a,{href:"https://pip.pypa.io/en/stable/installing/"},"PyPi documentation")," on how to do that."),"\n",s.createElement(a.p,null,"After you have, installed it. Open you teminal/Command Prompt and type the following command."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">pip <span class="token function">install</span> imgtopdfeasy</code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"installing-from-source",style:{position:"relative"}},s.createElement(a.a,{href:"#installing-from-source","aria-label":"installing from source permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Installing From Source"),"\n",s.createElement(a.p,null,"You would need ",s.createElement(a.a,{href:"https://git-scm.com"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">git</code>'}}))," for installing that. First,clone the repository."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone https://github.com/naveen521kk/img2pdf.git\n<span class="token builtin class-name">cd</span> img2pdf</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Then you would need ",s.createElement(a.a,{href:"https://python-poetry.org"},"poetry")," for doing editable installs. Then install using"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">poetry <span class="token function">install</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"Activate your poetry venv and the start working. ;-)"),"\n",s.createElement(a.h1,{id:"using-img2pdf",style:{position:"relative"}},s.createElement(a.a,{href:"#using-img2pdf","aria-label":"using img2pdf permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Using Img2Pdf"),"\n",s.createElement(a.p,null,"Img2Pdf can be simply used by below syntax"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">img2pdf <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>Path-to-folder<span class="token operator">></span> <span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>Path-to-output-file<span class="token operator">></span> <span class="token parameter variable">-ext</span> <span class="token operator">&lt;</span>extension-of-image-to-add<span class="token operator">></span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"The following options are available."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">usage: img2pdf <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token parameter variable">-i</span> INPUT <span class="token parameter variable">-o</span> OUTPUT <span class="token parameter variable">-ext</span> EXTENSION <span class="token punctuation">[</span>--border<span class="token punctuation">]</span>\n               <span class="token punctuation">[</span>--border_size BORDER_SIZE<span class="token punctuation">]</span> <span class="token punctuation">[</span>--border_color BORDER_COLOR<span class="token punctuation">]</span>\n\nConverts Images To Pdf\n\noptional arguments:\n  -h, <span class="token parameter variable">--help</span>            show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>\n  <span class="token parameter variable">-i</span> INPUT, <span class="token parameter variable">--input</span> INPUT\n                        Input <span class="token function">file</span> folder full path. Realtive or abosolute\n  <span class="token parameter variable">-o</span> OUTPUT, <span class="token parameter variable">--output</span> OUTPUT\n                        Output <span class="token function">file</span> name,No pdf required\n  <span class="token parameter variable">-ext</span> EXTENSION, <span class="token parameter variable">--extension</span> EXTENSION\n                        File extension of image to add.\n  <span class="token parameter variable">--border</span>              Add border to Images\n  <span class="token parameter variable">--border_size</span> BORDER_SIZE\n                        Size of border of Images\n  <span class="token parameter variable">--border_color</span> BORDER_COLOR\n                        Colour of Border of Images\n\nMade with ❤ By Naveen</code></pre></div>'}}))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?s.createElement(a,e,s.createElement(l,e)):l(e)},i=t(4160),o=t(1321),c=t(9680),p=t(2808),m=t(3217),d=t(2548),g=t(4970),h=t(1272),u=t(9647);const b=e=>{let{data:a,location:t,children:n}=e;const{mdx:l}=a,{frontmatter:r,tableOfContents:b}=l,{tags:f}=r,v={"@context":"https://schema.org","@type":"BlogPosting",headline:r.title,author:{"@type":"Person",name:"Naveen M K",url:"http://www.naveenmk.me",image:"https://avatars.githubusercontent.com/u/49693820"},name:r.title,abstract:r.description,image:r.image,description:r.description,copyrightYear:(new Date).getFullYear(),copyrightHolder:"Naveen M K"};(0,o.Z)(r.slug);return s.createElement("div",null,s.createElement(c.Z,{title:r.title,description:r.description,image:r.image,article:!0,isGiscusEnabled:!0}),s.createElement(p.h,{data:v}),s.createElement(m.Z),s.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},s.createElement("div",{className:h.GM},s.createElement("aside",null,s.createElement("nav",null,s.createElement("h2",{className:h.D_},"Table of Contents"),b.items&&b.items.map(((e,a)=>s.createElement("a",{href:e.url,className:h.e5,key:a},e.title)))),s.createElement(u.Z,{className:"adsbygoogle",style:{display:"block"},client:"ca-pub-7183740147103241",slot:"6635102288",format:"auto",responsive:"true"})),s.createElement("div",{className:h.FH},s.createElement("div",{className:h.Tx+" blog-post"},s.createElement("header",null,s.createElement("h1",{className:"py-2",itemProp:"headline"},r.title),s.createElement("small",null,"Published on ",r.date,r.updated_date?" · Updated on "+r.updated_date:""),s.createElement("div",{className:h.r_},f.map((e=>s.createElement(i.rU,{to:"/tags/"+e,key:e},s.createElement("span",{key:e,className:h._q},e))))),s.createElement(u.Z,{className:"adsbygoogle",style:{display:"block"},client:"ca-pub-7183740147103241",slot:"8700645384",format:"auto",responsive:"true"}),s.createElement("img",{src:r.image,alt:r.title+" image",className:h.al})),s.createElement("section",{className:"flex flex-col blog-post-content pt-3 mx-auto justify-center",id:"blog-start",itemProp:"articleBody"},n),s.createElement(u.Z,{className:"adsbygoogle",style:{display:"block"},client:"ca-pub-7183740147103241",slot:"6074482043",format:"auto",responsive:"true"}))))),s.createElement("div",{className:h.FH+" "+h.k},s.createElement(g.Z)),s.createElement(d.Z))};function f(e){return s.createElement(b,e,s.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-src-posts-img-2-pdf-md-a1d1660adda0a305543f.js.map