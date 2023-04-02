import{_ as a,p as s,q as n,a1 as e}from"./framework-5866ffd3.js";const p={},c=e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="一、docker" tabindex="-1"><a class="header-anchor" href="#一、docker" aria-hidden="true">#</a> 一、Docker</h2><h3 id="_1-1-docker是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-docker是什么" aria-hidden="true">#</a> 1.1 Docker是什么</h3><p>Docker:容器化引擎，新型虚拟机，相比传统虚拟机，性能更加卓越。可以更快速的搭建环境，底层基于Go语言，Docker搭建的软件就叫容器，容器之间具备隔离性。</p><h3 id="_1-2-docker好处" tabindex="-1"><a class="header-anchor" href="#_1-2-docker好处" aria-hidden="true">#</a> 1.2 Docker好处</h3><p>1.更高效的利用系统资源</p><p>​ 如果用传统虚拟机搭建，使用率特别低，而Docker需要的资源很小，这样使用率特别高</p><p>2.更快速的启动时间</p><p>​ 传统虚拟机搭建的，启动时间很长，而Docker搭建的启动时间很短</p><p>3.一致的运行环境</p><p>​ 开发环境、测试环境、生产环境，这三种环境需要一样，Docker只要搭建了一种环境，就可以具备移植性</p><p>4.持续交付和部署（CI&amp;CD）</p><p>​ 持续集成：Jinkins+Gitlab(Gitee)+Docker</p><h3 id="_1-3-docker组成" tabindex="-1"><a class="header-anchor" href="#_1-3-docker组成" aria-hidden="true">#</a> 1.3 Docker组成</h3><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/image-20230312194636171.png" alt="image-20230312194636171"></p><p>1.镜像（Image）:软件集合包，包含一套软件，比如Tomcat镜像，不仅仅包含Tomcat软件安装包，还包含对应的jdk</p><p>2.容器（Container）：软件，通过镜像安装之后，平时操作的就是容器，启动、停止等</p><p>3.网络（NetWork）：容器就有对应的虚拟机，都有自己的ip地址和端口号</p><p>4.数据卷（Data Volumes）：数据卷，虚拟机所使用的磁盘(虚拟)</p><h3 id="_1-4-linux安装docker" tabindex="-1"><a class="header-anchor" href="#_1-4-linux安装docker" aria-hidden="true">#</a> 1.4 Linux安装Docker</h3><p>Linux的操作系统，使用的Centos</p><p>1.下载并安装</p><p>2.验证安装是否成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/docker <span class="token operator">|</span> <span class="token function">sh</span>
<span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.基本操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>启动：systemctl start <span class="token function">docker</span>
停止：systemctl stop <span class="token function">docker</span>
重启：systemctl restart <span class="token function">docker</span>
查看状态：systemctl status <span class="token function">docker</span>
卸载docker
<span class="token number">1</span>.查看安装的docker文件
yum list installed <span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>
<span class="token number">2</span>.删除本机的docker文件
yum <span class="token parameter variable">-y</span> remove docker-engine-xxx
<span class="token number">3</span>.删除repo文件
<span class="token builtin class-name">cd</span> /etc/yum.repos.d 删除所有docker开头的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-docker配置镜像加速器" tabindex="-1"><a class="header-anchor" href="#_1-5-docker配置镜像加速器" aria-hidden="true">#</a> 1.5 Docker配置镜像加速器</h3><p>国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。Docker 官方和国</p><p>内很多云服务商都提供了国内加速器服务，例如：</p><p>Docker 官方提供的中国 registry mirror https://registry.docker-cn.com</p><p>七牛云加速器 https://reg-mirror.qiniu.com/</p><p>当配置某一个加速器地址之后，若发现拉取不到镜像，请切换到另一个加速器地址。</p><p>国内各大云服务商均提供了 Docker 镜像加速服务，建议根据运行 Docker 的云平台选择</p><p>对应的镜像加速服务。</p><p>实现步骤：</p><p>1.执行命令，设置加速地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json
输入内容：
<span class="token punctuation">{</span>
<span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://mirror.ccs.tencentyun.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token number">2</span>.重新加载配置
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、docker命令" tabindex="-1"><a class="header-anchor" href="#二、docker命令" aria-hidden="true">#</a> 二、Docker命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.docker images ：查看本地镜像文件
<span class="token number">2</span>.docker search 镜像名称 ：在镜像仓库搜索对应的镜像是否存在
<span class="token number">3</span>.docker pull 镜像名称:版本号  ：下载镜像
<span class="token number">4</span>.docker run  创建并运行容器，如果镜像不存在，会下载镜像，创建容器，运行容器
<span class="token number">5</span>.docker <span class="token function">ps</span> ：查看运行容器
<span class="token number">6</span>.docker <span class="token function">ps</span> <span class="token parameter variable">-a</span> ：查询安装的容器
<span class="token number">7</span>.docker start 容器名 ：启动容器
<span class="token number">8</span>.docker stop 容器名 ：停止容器
<span class="token number">9</span>.docker restart 容器名 ：重启容器
<span class="token number">10</span>.docker <span class="token function">rm</span> 容器名 ：删除容器（容器需要停止）
<span class="token number">11</span>.docker rmi 镜像名:版本号 ：删除镜像
<span class="token number">12</span>.docker inspect 容器名 ：查看容器的详细信息
<span class="token number">13</span>.docker <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器名 <span class="token function">bash</span> ：进入到容器内部
<span class="token number">14</span>.docker logs 容器名 ：查看容器日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> tomcat8081 <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 tomcat:9.0.65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p><p>-d 后台运行，不会阻塞页面</p><p>--name 容器名称（唯一）</p><p>-p 设置端口号，语法格式：-p 外界访问端口:软件本身端口(固定)</p><p>-v 设置数据卷，语法格式：-v Linux服务器的路径地址:软件默认的地址</p><p><em>ps</em>：如果容器出了问题，</p><p>需要先查看容器的⽇志：<em>docker logs</em> 容器名 查看是否error</p><h2 id="三、docker基于命令搭建环境" tabindex="-1"><a class="header-anchor" href="#三、docker基于命令搭建环境" aria-hidden="true">#</a> 三、Docker基于命令搭建环境</h2><h3 id="_3-1-docker搭建tomcat" tabindex="-1"><a class="header-anchor" href="#_3-1-docker搭建tomcat" aria-hidden="true">#</a> 3.1 Docker搭建Tomcat</h3><p>1.创建文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span>  /docker/tomcat/webapps8081
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.创建并运行容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> tomcat8081 <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 <span class="token parameter variable">-v</span> /docker/tomcat/webapps8081:/usr/local/tomcat/webapps/ tomcat:9.0.65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.设置主页</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/tomcat/webapps8081/ROOT
<span class="token function">vim</span> /docker/tomcat/webapps8081/ROOT/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.访问测试</p><p>如果不能访问，请检查防火墙或安全组，开放8081</p><h3 id="_3-2-docker搭建mysql" tabindex="-1"><a class="header-anchor" href="#_3-2-docker搭建mysql" aria-hidden="true">#</a> 3.2 Docker搭建Mysql</h3><p>1.执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span>  mysql3307 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.连接测试</p><p>注意：如果无法访问，请检查防火墙（安全组）开放3307</p><h2 id="四、docker-compose" tabindex="-1"><a class="header-anchor" href="#四、docker-compose" aria-hidden="true">#</a> 四、Docker-Compose</h2><h3 id="_4-1-docker-compose" tabindex="-1"><a class="header-anchor" href="#_4-1-docker-compose" aria-hidden="true">#</a> 4.1 Docker-Compose</h3><p>Docker-Compose：容器编排软件，是用于定义和运行多容器 Docker 应用程序的工具。通过 Docker-Compose，可以使用 YML 文件来配置应用程序需要的所有容器。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有容器。</p><p>Docker命令创建容器，只适合容器数量比较少，但是如果创建的容器比较多，那么就需要使用容器编排工具</p><p>市面上容器编排工具有：1.Docker-Compose 2.K8s</p><p>学习的-Docker-Compose：简单，好用</p><h3 id="_4-2-linux安装docker-compose" tabindex="-1"><a class="header-anchor" href="#_4-2-linux安装docker-compose" aria-hidden="true">#</a> 4.2 Linux安装Docker-Compose</h3><p>1.下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.授权</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.软连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span>  <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-docker-compose的工作步骤" tabindex="-1"><a class="header-anchor" href="#_4-3-docker-compose的工作步骤" aria-hidden="true">#</a> 4.3 Docker-Compose的工作步骤</h3><p>Docker-Compose也是用来创建容器，是通过yaml文件（有自己的语法格式），然后借助Docker-Compose实现创建</p><p>一次性可以创建多个容器</p><p>创建的过程，如下所示：</p><p><strong>1.创建容器对应的yaml文件（DockerFile文件），定义容器的信息</strong></p><p><strong>2.执行命令，加载yaml文件，通过文件内部的定义，实现容器的创建</strong></p><h2 id="五、docker-compose搭建环境" tabindex="-1"><a class="header-anchor" href="#五、docker-compose搭建环境" aria-hidden="true">#</a> 五、Docker-Compose搭建环境</h2><h3 id="_5-1-搭建tomcat" tabindex="-1"><a class="header-anchor" href="#_5-1-搭建tomcat" aria-hidden="true">#</a> 5.1 搭建Tomcat</h3><p>基于Docker-Compose创建3个Tomcat容器</p><p>实现步骤：</p><p><strong>1.创建文件夹</strong></p><blockquote><p>mkdir -p /docker/tomcat/webapps8081</p><p>mkdir -p /docker/tomcat/webapps8082</p><p>mkdir -p /docker/tomcat/webapps8083</p></blockquote><p>2.编写dockerfile文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/tomcat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入以下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">tomcat1</span><span class="token punctuation">:</span>  <span class="token comment">#服务名称，不是容器名，只是在文件中方便观看是按个服务</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  <span class="token comment"># 代表只要docker启动， 就会自动启动这个容器  相当于-restart参数</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>9.0.65  <span class="token comment">#依赖的镜像</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tomcat8081  <span class="token comment"># 容器名称  相当于 --name参数</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 8081<span class="token punctuation">:</span><span class="token number">8080</span>  <span class="token comment">#映射端口，可以指定多个，用多个-来写</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai  <span class="token comment">#指定时区</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /docker/tomcat/webapps8081/<span class="token punctuation">:</span>/usr/local/tomcat/webapps   <span class="token comment">#挂载数据卷</span>
    
  <span class="token key atrule">tomcat2</span><span class="token punctuation">:</span>  <span class="token comment">#服务名称，不是容器名，只是在文件中方便观看是按个服务</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  <span class="token comment"># 代表只要docker启动， 就会自动启动这个容器  相当于-restart参数</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>9.0.65  <span class="token comment">#依赖的镜像</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tomcat8082  <span class="token comment"># 容器名称  相当于 --name参数</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 8082<span class="token punctuation">:</span><span class="token number">8080</span>  <span class="token comment">#映射端口，可以指定多个，用多个-来写</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai  <span class="token comment">#指定时区</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /docker/tomcat/webapps8082/<span class="token punctuation">:</span>/usr/local/tomcat/webapps   <span class="token comment">#挂载数据卷</span>
    
  <span class="token key atrule">tomcat3</span><span class="token punctuation">:</span>  <span class="token comment">#服务名称，不是容器名，只是在文件中方便观看是按个服务</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  <span class="token comment"># 代表只要docker启动， 就会自动启动这个容器  相当于-restart参数</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>9.0.65  <span class="token comment">#依赖的镜像</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tomcat8083  <span class="token comment"># 容器名称  相当于 --name参数</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 8083<span class="token punctuation">:</span><span class="token number">8080</span>  <span class="token comment">#映射端口，可以指定多个，用多个-来写</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai  <span class="token comment">#指定时区</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /docker/tomcat/webapps8083/<span class="token punctuation">:</span>/usr/local/tomcat/webapps   <span class="token comment">#挂载数据卷</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.执行命令，创建容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> /usr/local/tomcat.yml   up  <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.查看 docker ps</p><h3 id="_5-2-搭建mysql" tabindex="-1"><a class="header-anchor" href="#_5-2-搭建mysql" aria-hidden="true">#</a> 5.2 搭建Mysql</h3><p>基于Docker-Compose创建2个Mysql容器</p><p>1.编写dockerfile文件</p><p>vim /usr/local/mysql.yml</p><p>文件内容，如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">mysql1</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql3308
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> zzjava
        <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 3308<span class="token punctuation">:</span><span class="token number">3306</span>

    <span class="token key atrule">mysql2</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql3309
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> zzjava
        <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 3309<span class="token punctuation">:</span><span class="token number">3306</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.执行命令，创建容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> /usr/local/mysql.yml   up  <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、宝塔面板快速部署网站" tabindex="-1"><a class="header-anchor" href="#六、宝塔面板快速部署网站" aria-hidden="true">#</a> 六、宝塔面板快速部署网站</h2><p>宝塔面板：https://www.bt.cn/admin/servers#wcu</p><p>Linux: Contens: 安装宝塔面板</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> install.sh https://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> install.sh ed8484bec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312220514.png" alt="img4"></p><p>外网面板地址: *</p><p>内网面板地址: *</p><p>username: *****</p><p>password: *</p><p><strong>切记开启端口号：32117</strong></p><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312220620.png" alt="img1"></p><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/20230312220736.png" alt="img2"></p><p><img src="https://cdn.staticaly.com/gh/Steven-kz/BlogImgs@master/imgaes/image-20230312220814184.png" alt="img3"></p>`,118),t=[c];function l(o,i){return s(),n("div",null,t)}const d=a(p,[["render",l],["__file","Docker.html.vue"]]);export{d as default};
