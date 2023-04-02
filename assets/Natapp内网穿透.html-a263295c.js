import{_ as s,M as t,p as i,q as c,R as a,t as n,N as l,a1 as p}from"./framework-5866ffd3.js";const o={},r=a("h1",{id:"natapp",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#natapp","aria-hidden":"true"},"#"),n(" Natapp")],-1),d=a("h2",{id:"_1-打开网址",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-打开网址","aria-hidden":"true"},"#"),n(" 1.打开网址")],-1),m={href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="_2-登录注册" tabindex="-1"><a class="header-anchor" href="#_2-登录注册" aria-hidden="true">#</a> 2.登录注册</h2><h3 id="_2-1实名认证" tabindex="-1"><a class="header-anchor" href="#_2-1实名认证" aria-hidden="true">#</a> 2.1实名认证</h3><h2 id="_3-购买隧道" tabindex="-1"><a class="header-anchor" href="#_3-购买隧道" aria-hidden="true">#</a> 3.购买隧道</h2><ol><li>选择产品</li></ol><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200853.png" alt="image.png"></p><ol start="2"><li>免费购买</li></ol><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200838.png" alt="image.png"></p><p><a name="eLMGJ"></a></p><h2 id="_4-配置" tabindex="-1"><a class="header-anchor" href="#_4-配置" aria-hidden="true">#</a> 4.配置</h2><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200814.png" alt="image.png"><br><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200759.png" alt="image.png"></p><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200727.png" alt="image.png"><a name="Q4cZi"></a></p><h2 id="_5-下载客户端" tabindex="-1"><a class="header-anchor" href="#_5-下载客户端" aria-hidden="true">#</a> 5.下载客户端</h2><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200708.png" alt="image.png"><br>解压后</p><ol><li>创建 config.ini 复制进去</li></ol><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">#将本文件放置于natapp同级目录 程序将读取 [default] 段</span>
<span class="token comment">#在命令行参数模式如 natapp -authtoken=xxx 等相同参数将会覆盖掉此配置</span>
<span class="token comment">#命令行参数 -config= 可以指定任意config.ini文件</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">default</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">authtoken</span><span class="token punctuation">=</span>                      <span class="token value attr-value">#对应一条隧道的authtoken</span>
<span class="token key attr-name">clienttoken</span><span class="token punctuation">=</span>                    <span class="token value attr-value">#对应客户端的clienttoken,将会忽略authtoken,若无请留空,</span>
<span class="token key attr-name">log</span><span class="token punctuation">=</span><span class="token value attr-value">none                        #log 日志文件,可指定本地文件, none=不做记录,stdout=直接屏幕输出 ,默认为none</span>
<span class="token key attr-name">loglevel</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR                  #日志等级 DEBUG, INFO, WARNING, ERROR 默认为 DEBUG</span>
<span class="token key attr-name">http_proxy</span><span class="token punctuation">=</span>                     <span class="token value attr-value">#代理设置 如 http://10.123.10.10:3128 非代理上网用户请务必留空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200648.png" alt="image.png"><a name="eUdRs"></a></p><h2 id="_6-启动" tabindex="-1"><a class="header-anchor" href="#_6-启动" aria-hidden="true">#</a> 6.启动</h2><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200636.png" alt="image.png"><br><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312200619.png" alt="image.png"></p>`,18);function h(u,k){const e=t("ExternalLinkIcon");return i(),c("div",null,[r,d,a("p",null,[a("a",m,[n("https://natapp.cn/"),l(e)])]),g])}const _=s(o,[["render",h],["__file","Natapp内网穿透.html.vue"]]);export{_ as default};
