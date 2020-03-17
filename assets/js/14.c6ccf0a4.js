(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{62:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"windows-下-mysql5-7-24的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-下-mysql5-7-24的安装"}},[s._v("#")]),s._v(" Windows 下 MySQL5.7.24的安装")]),s._v(" "),t("blockquote",[t("p",[s._v("MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性")])]),s._v(" "),t("h2",{attrs:{id:"下载mysql5-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载mysql5-7"}},[s._v("#")]),s._v(" 下载MySQL5.7")]),s._v(" "),t("p",[s._v("点击 "),t("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",title:"MySQL5.7.24",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL5.7.24"),t("OutboundLink")],1),s._v(" 的进入下载页面")]),s._v(" "),t("ul",[t("li",[s._v("根据自己的操作系统选择对应版本")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-40bf1818c9853640.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"版本选择",title:"MySQL版本选择"}})]),s._v(" "),t("ul",[t("li",[s._v("进入下载页面， 点击下面的 "),t("strong",[s._v("No thanks, just start my download.")]),s._v(" 不注册，直接下载")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-02db48bdca2bca7f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"下载",title:"MySQL下载"}})]),s._v(" "),t("ul",[t("li",[s._v("如果无法访问 "),t("strong",[s._v("MySQL官网")]),s._v(" 或者 下载龟速， 我这里提供了百度云的下载链接 "),t("a",{attrs:{href:"https://pan.baidu.com/s/18emOYA4e3bIvZPqT3k_AKw",title:"MySQL5.7.24",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL5.7.24"),t("OutboundLink")],1),s._v("  提取码为: "),t("em",[s._v("4guz")])])]),s._v(" "),t("p",[s._v("下载下来的文件为 "),t("strong",[s._v("mysql-5.7.24-winx64.zip")]),s._v(" 的压缩文件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("解压，并将解压后的文件夹，放置到平常软件的安装目录下 如： "),t("strong",[s._v("D:\\app\\mysql-5.7.24-winx64")])])]),s._v(" "),t("li",[t("p",[s._v("为 MySQL Server 配置环境变量")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-e3416620ba619dcb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/693/format/webp",alt:"环境变量",title:"MySQL环境变量"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-0a5dd53e21618fac.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/565/format/webp",alt:"环境变量",title:"MySQL环境变量"}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("注册 MySQL 服务")]),s._v(" "),t("ul",[t("li",[s._v("创建"),t("strong",[s._v("D:\\app\\mysql-5.7.24-winx64\\my.ini")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[mysqld]\ncharacter_set_server=utf8 #网上很多是default-character-set=utf8 ，容易出错\nport = 3306\nbasedir=D:\\\\app\\\\mysql-5.7.24-winx64\nmax_connections=200\ncharacter-set-server=utf8\ndefault-storage-engine=INNODB\n[mysql]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[t("p",[t("strong",[s._v("以管理员的身份运行cmd, 否则将安装mysqld 失败")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("cmd")]),s._v(" 进入 "),t("strong",[s._v("D:\\app\\mysql-5.7.24-winx64\\bin")]),s._v(" 执行 "),t("code",[s._v("mysqld -install")])])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mysql-5.7.24-winx64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mysqld -install\nService successfully installed.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("初始化，创建root账户")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqld --initialize --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root --console\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-192b40f770b5dfb8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/951/format/webp",alt:"mysql初始密码",title:"mysql初始密码"}})])]),s._v(" "),t("li",[t("p",[s._v("启动服务")])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("net start mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("登录")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mysql-5.7.24-winx64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mysql -u root -p\nEnter password: ************ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nGhqPrFwd9?C"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("修改密码")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("退出")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" quit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);