"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[275],{9536:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(1151),l=t(7294);var o=e=>{let{children:n}=e;return l.createElement("div",{className:"note-block-module--admonition--19c6e"},l.createElement("p",{className:"note-block-module--admonition_title--cd69c"},"Note"),l.createElement("div",{className:"note-block-module--inner_div--73a9c"},n))};function r(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",h3:"h3",ol:"ol",li:"li",img:"img",strong:"strong",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"installing-manim",style:{position:"relative"}},l.createElement(n.a,{href:"#installing-manim","aria-label":"installing manim permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Installing Manim"),"\n",l.createElement(n.p,null,"Follow the instruction in the ",l.createElement(n.a,{href:"https://docs.manim.community/en/stable/installation.html#installing-manim-locally"},"Installation Page")," on the official documentation. After installing Manim get back here for configuring the virtual environment. In my case, I use Windows; I used chocolatey to install Manim (",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">choco install manimce</code>'}}),")."),"\n",l.createElement(n.h3,{id:"configuring-the-virtual-environment",style:{position:"relative"}},l.createElement(n.a,{href:"#configuring-the-virtual-environment","aria-label":"configuring the virtual environment permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Configuring the Virtual Environment"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Open a Terminal (say ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cmd</code>'}})," on Windows) on the project directory. The project directory can be anywhere including a folder on your desktop. For me it’s ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">C:\\dev\\manim-project</code>'}}),". I opened a PowerShell window by doing ",l.createElement("kbd",null,"Shift"),"+",l.createElement("kbd",null,"Right Click")," and then clicked on ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Open PowerShell window here</code>'}}),". (On windows 11 you would need to click ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Show more options</code>'}}),")"),"\n",l.createElement(n.img,{src:"/assets/manim-vscode/powershell_start_screen.png",alt:"powershell screen C:\\dev\\manim-project"}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Create a new virtual environment"),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">python <span class="token parameter variable">-m</span> venv .venv</code></pre></div>'}}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Activate the Virtual Environment."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"On Windows: ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.venv\\Scripts\\activate</code>'}})," (should work on cmd, also)"),"\n",l.createElement(n.li,null,"On macOS/Linux/WSL: ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">source .venv/bin/activate</code>'}})," (this will include Git Bash users on Windows also).\n",l.createElement(n.img,{src:"/assets/manim-vscode/powershell_install_and_activate_venv.png",alt:"powershell screen create venv"})),"\n"),"\n"),"\n"),"\n",l.createElement(o,null,l.createElement(n.p,null,"On powershell, you may see an error like below when activating the virtual environment."),l.createElement("img",{src:"/assets/manim-vscode/powershell_set_execution_error.png"}),l.createElement(n.p,null,"In which case, you can run the command"),l.createElement("pre",{className:"language-text"},l.createElement("code",{className:"language-text"},"Set-ExecutionPolicy Bypass -Scope CurrentUser")),l.createElement(n.p,null,"Also doing so could introduce security issues, have a look at the ",l.createElement("a",{href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies"},"docs")," before running this command.")),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Install Manim using ",l.createElement(n.strong,null,"pip"),":"),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> manim</code></pre></div>'}}),"\n",l.createElement(n.img,{src:"/assets/manim-vscode/powershell_pip_install_manim_op.png",alt:"powershell pip install manim"}),"\n"),"\n"),"\n",l.createElement(n.p,null,"If you followed the steps correctly you should see the version of manim when running ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">manim --version</code>'}})," in that terminal. Just don’t close the terminal yet, that will be used in the next steps."),"\n",l.createElement(n.h3,{id:"initializing-a-manim-project",style:{position:"relative"}},l.createElement(n.a,{href:"#initializing-a-manim-project","aria-label":"initializing a manim project permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Initializing a Manim project"),"\n",l.createElement(n.p,null,"To initialize a manim project run:"),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">manim init project <span class="token operator">&lt;</span>project-name<span class="token operator">></span></code></pre></div>'}}),"\n",l.createElement(n.p,null,"where ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&lt;project-name></code>'}})," should be replaced by the directory where you need to create a project (introduced in manim ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">v0.16.0</code>'}}),").\nManim asks for some questions and creates the project accordingly with configuration files."),"\n",l.createElement(n.img,{src:"/assets/manim-vscode/powershell_manim_init.png",alt:"powershell manim init"}),"\n",l.createElement(n.p,null,"This should create 2 files ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">main.py</code>'}})," and ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">manim.cfg</code>'}})," inside the ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&lt;project-name></code>'}})," folder."),"\n",l.createElement(n.img,{src:"/assets/manim-vscode/file_explorer_manim_init_op.png",alt:"file explorer manim init output"}),"\n",l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">manim.cfg</code>'}})," contains the configuration files necessary for Manim. They can be overridden by command line flags. ",l.createElement(n.a,{href:"https://docs.manim.community/en/stable/guides/configuration.html"},"See the documentation for a tutorial on using them"),"."),"\n",l.createElement(n.p,null,"You would need to ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cd</code>'}})," into ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&lt;project-name></code>'}})," directory before continuing next steps."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">></span></code></pre></div>'}}),"\n",l.createElement(n.h2,{id:"configuring-visual-studio-code",style:{position:"relative"}},l.createElement(n.a,{href:"#configuring-visual-studio-code","aria-label":"configuring visual studio code permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Configuring Visual Studio Code"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Open VSCode. Typing ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">code .</code>'}})," in the same terminal should do the trick."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Click “Yes” in the dialog box. (This is needed so that other extensions work correctly)\n",l.createElement(n.img,{src:"/assets/manim-vscode/code_confirmation.png",alt:"code manim workspace confirmation"})),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://code.visualstudio.com/docs/editor/extension-marketplace"},"Install the following extensions.")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.python"},"Python")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance"},"Pylance")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter"},"Jupyter")," (optional, for using manim on Jupyter)"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap"},"Jupyter Keymap")," (optional, ignore if you like visual studio’s keymaps)"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"},"Color Highlight")," (optional, if you don’t want a color picker for colors)"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets"},"Rainbow Brackets")," (optional, if you don’t want all brackets to be of same color)"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=Rickaym.manim-sideview"},"Manim Sideview")," (optional, if you don’t want live preview of code video you generate)"),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Select the Python interpreter by clicking ",l.createElement("kbd",null,"F1")," and searching for ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Python: Select Interpreter</code>'}}),". Select the virtual environment previously created.\n",l.createElement(n.img,{src:"/assets/manim-vscode/code_choose_python.png",alt:"vscode select python interpreter manim"})),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"If everything is configured correctly pressing ",l.createElement("kbd",null,"Ctrl")," + ",l.createElement("kbd",null,"Click")," should get to the corresponding definition of that class. Also, there would be no yellow swiggly lines.\n",l.createElement(n.img,{src:"/assets/manim-vscode/vscode_manim_defn.png",alt:"vscode manim show definition hover"})),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"If you want to use Jupyter for working with Manim, then open the same terminal and run"),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> manim<span class="token punctuation">[</span>jupyterlab<span class="token punctuation">]</span></code></pre></div>'}}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"You can open a terminal in VSCode ",l.createElement("kbd",null,"Ctrl")," + ",l.createElement("kbd",null,"`")," and run manim commands there."),"\n"),"\n"),"\n",l.createElement(n.p,null,"Hope this helps you in configuring Visual Studio Code to work with Manim. If you have an error, or found something to difficult to understand, jump over to ",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">#help-form</code>'}})," on ",l.createElement(n.a,{href:"https://manim.community/discord"},"Manim’s Discord server"),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},s=t(9680),c=t(7682),m=t(8799),u=t(1086),d=t(1272);const p=e=>{let{data:n,location:t,children:a}=e;const{mdx:o}=n,{frontmatter:r}=o,i={"@context":"https://schema.org","@type":"BlogPosting",headline:r.title,author:{"@type":"Person",name:"Naveen M K",url:"http://www.naveenmk.me",image:"https://avatars.githubusercontent.com/u/49693820"},name:r.title,abstract:r.description,image:r.image,description:r.description,copyrightYear:(new Date).getFullYear(),copyrightHolder:"Naveen M K"};return l.createElement("div",null,l.createElement(s.Z,{title:r.title,description:r.description,image:r.image,article:!0}),l.createElement(c.h,{data:i}),l.createElement(m.Z),l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.image?l.createElement(u.Z,{img_loc:r.image}):l.createElement("div"),l.createElement("div",{className:d.F},l.createElement("div",{className:d.T+" blog-post"},l.createElement("header",null,l.createElement("h1",{className:"py-2",itemProp:"headline"},r.title),l.createElement("small",null,"Published on ",r.date,r.updated_date?" · Updated on "+r.updated_date:"")),l.createElement("section",{className:"flex flex-col blog-post-content pt-3 mx-auto justify-center",id:"blog-start",itemProp:"articleBody"},a)))))};function h(e){return l.createElement(p,e,l.createElement(i,e))}},1086:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),l="bgphoto-module--base_container--3f935",o="bgphoto-module--inner_container--2454f",r="bgphoto-module--top_container--83622";function i(e){let{img_loc:n}=e;var t={backgroundImage:"url("+n+")"};return a.createElement("div",{className:l+" "+r},a.createElement("div",{className:l+" "+o,style:t}))}},7682:function(e,n,t){t.d(n,{h:function(){return l}});var a=t(7294);const l=e=>{let{data:n}=e;return a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}})}},1272:function(e,n,t){t.d(n,{F:function(){return l},T:function(){return a}});var a="posts-style-module--core_blog_post--f38d0",l="posts-style-module--outer_class--bc1ef"},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-home-runner-work-naveen-521-kk-github-io-naveen-521-kk-github-io-src-posts-manim-vscode-md-fbbb38656453f084e337.js.map