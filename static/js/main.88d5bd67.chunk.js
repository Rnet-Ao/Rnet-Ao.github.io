(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{42:function(e,t,a){e.exports=a(57)},47:function(e,t,a){},48:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(37),l=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(0),c=a.n(r),s=a(41),i=a(5),m=a(38),o=a(24),u=a(14),E=a(63),p=a(64),d=a(60),h=a(62),f=a(61);function x(e,t){var a=document.querySelector(".left-eye"),n=document.querySelector(".right-eye");if(a&&n)switch(e){case"big":a.style.transform="scale(1)",n.style.transform="scale(1)";break;case"small":a.style.transform="scale(0.6)",n.style.transform="scale(0.6)"}return t}function y(){var e=Object(r.useMemo)((function(){return new E.a}),[]);Object(r.useEffect)((function(){var t=Object(p.a)(1e3,4e3).pipe(Object(d.a)((function(e){return x("small",e)})),Object(h.a)(300),Object(d.a)((function(e){return x("big",e)})),Object(h.a)(300),Object(d.a)((function(e){return x("small",e)})),Object(h.a)(300),Object(d.a)((function(e){return x("big",e)})),Object(h.a)(300)).subscribe(),a=e.pipe(Object(d.a)((function(e){return{leftEyebrow:document.querySelector(".left-eyebrow"),rightEyebrow:document.querySelector(".right-eyebrow"),type:e}})),Object(f.a)((function(e){var t=e.leftEyebrow,a=e.rightEyebrow;return null!==t&&null!==a}))).subscribe((function(e){var t=e.type,a=e.leftEyebrow,n=e.rightEyebrow;null!==a&&null!==n&&("enter"===t?(a.style.transform="rotate(15deg)",n.style.transform="rotate(-15deg)"):(a.style.transform="",n.style.transform=""))}));return function(){a.unsubscribe(),t.unsubscribe()}}),[]);var t=Object(r.useCallback)((function(t){switch(t){case"enter":case"leave":e.next(t)}}),[]);return c.a.createElement("svg",{version:"1.1",id:"svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"50 0 250 400",width:"150px",height:"150px",xmlSpace:"preserve",onMouseEnter:function(){return t("enter")},onMouseLeave:function(){return t("leave")}},c.a.createElement("path",{className:"line",fill:"#f0f3f5",d:"M150 80 H200 L250 100 L270 150 L240 300 L200 320 H150 L110 300 L80 150 L100 100 L150 80 Z"}),c.a.createElement("path",{className:"line",fill:"#000",d:"M90 140 L140 160 L140 130 L190 160 L185 135 L240 155\n          L220 120 L270 150 L250 100 L200 80 L150 80 L100 100 L90 140Z"}),c.a.createElement("path",{className:"line",fill:"#f0f3f5",d:"M85 190 H66 L73 240 L100 250 Z"}),c.a.createElement("path",{className:"line",fill:"#f0f3f5",d:"M265 190 H284 L277 240 L250 250 Z"}),c.a.createElement("path",{className:"line",fill:"#fff",d:"M115 182 H160 V220 H115Z"}),c.a.createElement("path",{className:"line",fill:"#fff",d:"M190 182 H235 V220 H190Z"}),c.a.createElement("path",{className:"line",d:"M160 200 H190"}),c.a.createElement("path",{className:"line",d:"M115 200 L85 190"}),c.a.createElement("path",{className:"line",d:"M235 200 L265 190"}),c.a.createElement("path",{className:"left-eyebrow line",d:"M120 170 H150 Z",style:{transformOrigin:"150px 170px"}}),c.a.createElement("path",{className:"right-eyebrow line",d:"M200 170 H230 Z",style:{transformOrigin:"200px 170px"}}),c.a.createElement("circle",{className:"left-eye",cx:"135",cy:"200",r:"10",fill:"#000",style:{transformOrigin:"135px 200px"}}),c.a.createElement("circle",{className:"right-eye",cx:"215",cy:"200",r:"10",fill:"#000",style:{transformOrigin:"215px 200px"}}),c.a.createElement("path",{className:"line",d:"M160 250 H190"}),c.a.createElement("path",{className:"line",d:"M150 290 L200 285 Z"}),c.a.createElement("path",{className:"line",d:"M135 330 L50 350"}),c.a.createElement("path",{className:"line",d:"M215 330 L300 350"}),c.a.createElement("path",{className:"line",fill:"#f0f3f5",d:"M120 335 C 200 390 200 390 230 335"}),c.a.createElement("path",{className:"line",d:"M130 310 L140 350"}),c.a.createElement("path",{className:"line",d:"M220 310 L210 350"}))}a(47);var g=[{icon:"phone",text:"+86 176 2100 0163",isPhone:!0},{icon:"mail",text:"it17621000@163.com",isMail:!0},{icon:"earth",text:"howduudu.site",url:"http://howduudu.site",isUrl:!0},{icon:"github",text:"github",url:"https://github.com/zhenxianluo",isUrl:!0},{icon:"enviroment",text:"\u4e0a\u6d77(ShangHai)",url:"https://ditu.amap.com/search?query=%E4%B8%8A%E6%B5%B7",isUrl:!0}],b={name:"\u9879\u76ee\u5730\u5740\uff1aRnet-Ao/resume",url:"https://github.com/Rnet-Ao/resume",desc:"\u57fa\u4e8ecreate-react-app\u914d\u7f6e\u4e86TypeScript\u3001ESLint\u3001prettier\u3001precommit\u3001commitlint\uff0c\u4f7f\u7528RxJS\u548cSvg\u5236\u4f5c\u5934\u50cf\u53ca\u52a8\u753b\u3002",shark:"\u53ef\u57fa\u4e8e\u6b64\u9879\u76ee\u4e2a\u6027\u5316\u5b9a\u5236\u81ea\u5df1\u7684\u7b80\u5386, \u5982\u679c\u6709\u6240\u5e2e\u52a9\u6b22\u8fcestar ^_^"},N={title:"\u9648\u6ed4-\u524d\u7aef\u5f00\u53d1.pdf",url:"http://howduudu.site/files/%E9%99%88%E6%BB%94-%E5%89%8D%E7%AB%AF.pdf"},v=[{title:"\u8bcd\u6c47\u6ed1\u52a8\u6807\u8bb0",url:"/#/select-text"}],k=["\u5916\u5305\u52ff\u6270!"],w=[{title:"\u7a0b\u5e8f\u8bed\u8a00",lists:["ECMAScript 5+","JavaScript","TypeScript","Python","C++","HTML","CSS","Dart"]},{title:"\u524d\u7aef\u6846\u67b6",lists:["React","Vue","jQuery","Dva"]},{title:"\u540e\u7aef\u6846\u67b6",lists:["Express","Django","Flask","Scripy"]},{title:"\u6570\u636e\u5e93",lists:["PostgreSQL","Oracle","Redis","IndexDB"]}],S=[{type:"\u6d59\u6c5f\u7701\u7b2c\u5341\u4e09\u5c4a\u5927\u5b66\u751f\u7a0b\u5e8f\u8bbe\u8ba1\u7ade\u8d5b",name:"\u4e8c\u7b49\u5956(\u4e13\u79d1\u7ec4)",time:"2016.06"},{type:"\u8ba1\u7b97\u673a\u6280\u672f\u4e0e\u8f6f\u4ef6\u4e13\u4e1a\u6280\u672f\u8d44\u683c",name:"\u7a0b\u5e8f\u5458(\u521d\u7ea7)",time:"2016.05"},{type:"\u5168\u56fd\u8ba1\u7b97\u673a\u7b49\u7ea7\u8003\u8bd5",name:"C++\u8bed\u8a00\u7a0b\u5e8f\u8bbe\u8ba1(\u4e8c\u7ea7)",time:"2016.03"},{type:"\u5168\u56fd\u8ba1\u7b97\u673a\u7b49\u7ea7\u8003\u8bd5",name:"\u8ba1\u7b97\u673a\u57fa\u7840\u53caMS Office\u5e94\u7528(\u4e00\u7ea7)",time:"2015.03"}],L=[{name:"\u4e0a\u6d77\u82af\u4e0e\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8",url:"https://www.xinyusoft.com",start:"2018.05",end:"2019.10",title:"\u524d\u7aef\u5f00\u53d1",skills:["React","Redux","ES5+","WebWork","Socket","Less","ESLint","Antd","Canvas","linux"],experience:[{name:"\u80a1\u7968\u884c\u60c5\u7cfb\u7edf",url:"http://quote.cmschina.com",highlights:["\u57fa\u4e8eCreate-React-App\u811a\u624b\u67b6\u7684\u57fa\u672c\u6846\u67b6\u642d\u5efa\u5de5\u4f5c","\u5f15\u5165\u5e76\u914d\u7f6eRedux, \u8bbe\u8ba1\u524d\u7aef\u6570\u636e\u4ed3\u5e93\u7528\u4e8e\u6570\u636e\u9a71\u52a8\u89c6\u56fe, \u53ca\u4e0d\u5e38\u7528\u6570\u636e\u7684GC\u673a\u5236\u4e0e\u7ec4\u4ef6\u4f7f\u7528\u6570\u636e\u7684\u6ce8\u518c\u673a\u5236","\u53c2\u8003antd\u7ec4\u4ef6\u8bbe\u8ba1, \u901a\u8fc7\u4f20\u9012\u53c2\u6570\u63a7\u5236\u7ec4\u4ef6\u6e32\u67d3\u65b9\u5f0f, \u5b9e\u73b0\u7ec4\u4ef6\u5316\u4e0e\u6a21\u5757\u5316","\u5f15\u7528\u5f00\u6e90\u9879\u76eereact-stockcharts\u6e90\u4ee3\u7801\u5e76\u6df1\u5ea6\u5b9a\u5236\u5b9e\u73b0\u5206\u65f6K\u7ebf\u56fe\u8868","\u7814\u7a76\u901a\u8fbe\u4fe1\u6307\u6807\u8bed\u8a00, \u8fd0\u7528AST\u5b9e\u73b0\u6307\u6807\u89e3\u91ca\u5668(\u901a\u8fbe\u4fe1\u6307\u6807\u4ee3\u7801\u8f6c\u5316\u4e3aJS\u4ee3\u7801\u7684\u8f6c\u8bd1\u5de5\u5177)","\u57fa\u4e8e\u7ec4\u4ef6\u5316\u8bbe\u8ba1, \u8fd0\u7528CSS\u7edd\u5bf9\u5b9a\u4f4d, \u5b9e\u73b0\u53ef\u62d6\u52a8\u7ec4\u4ef6\u914d\u7f6e\u9875\u9762\u7684\u9875\u9762\u7f16\u8f91\u5668(\u81ea\u5b9a\u4e49\u9875\u9762)","\u57fa\u4e8eWebpack\u7684\u4e2a\u6027\u5316\u529f\u80fd, \u5982: \u751f\u6210\u591a\u4e3b\u9898css\u6587\u4ef6\u3001\u4ee3\u7801\u5207\u5272\u3001\u6253\u5305\u8fdb\u5ea6\u6761\u3001GZip\u538b\u7f29\u7b49","\u57fa\u4e8e\u9879\u76ee\u573a\u666f\u7684Python\u5de5\u5177\u811a\u672c\u5f00\u53d1, \u5982: \u4e0b\u8f7dGoogle fonts\u5b57\u4f53\u6587\u4ef6","\u9875\u9762\u7ec4\u4ef6\u5f00\u53d1: \u516c\u53f8\u8d44\u8baf\u7ec4\u4ef6\u3001\u5206\u7b14\u5206\u4ef7\u7ec4\u4ef6\u3001\u76d8\u53e3\u7ec4\u4ef6\u3001\u6da8\u8dcc\u5e45\u7ec4\u4ef6\u3001\u8868\u683c\u7ec4\u4ef6(\u5305\u62ec\u901a\u7528\u8868\u683c\u3001\u81ea\u9009\u80a1\u8868\u683c\u3001T\u578b\u62a5\u4ef7\u8868\u683c)\u3001\u8d44\u91d1\u6d41\u5411\u7ec4\u4ef6\u3001\u6309\u952e\u7cbe\u7075\u7ec4\u4ef6\u7b49","\u57fa\u4e8eAxios\u548cRESTfull\u89c4\u8303\u5b9e\u73b0\u7f51\u7edc\u8d44\u6e90\u7edf\u4e00\u7ba1\u7406\u53ca\u63d0\u4f9b\u6613\u7528\u7684\u65b9\u6cd5\u8c03\u7528\u63a5\u53e3","\u901a\u8fc7\u7b97\u6cd5\u4f18\u5316\u5bf9\u90e8\u5206\u641c\u7d22\u8def\u5f84\u51cf\u679d, \u5b9e\u73b0\u9ad8\u6548\u7684\u80a1\u7968\u4ee3\u7801\u641c\u7d22","\u901a\u8fc7\u5f15\u5165Express\u4e0eMockJS\u6a21\u62df\u6570\u636e\u53ca\u6a21\u62df\u540e\u7aef\u6570\u636e\u63a5\u53e3, \u63d0\u5347\u5f00\u53d1\u6548\u7387","\u901a\u8fc7\u6df1\u5ea6\u4f18\u5316shouldComponentUpdate\u751f\u547d\u5468\u671f, \u5b9e\u73b0\u9875\u9762\u9ad8\u6027\u80fd\u6e32\u67d3","\u901a\u8fc7\u5f15\u5165localforage\u5305\u64cd\u4f5cIndexDB, \u5b9e\u73b0\u6570\u636e\u7f13\u5b58\u4e0e\u9884\u6e32\u67d3, \u5927\u5e45\u5ea6\u51cf\u5c11\u7f51\u7ad9\u9996\u5c4f\u7b49\u5f85\u65f6\u95f4","\u901a\u8fc7\u5f15\u5165WebWork\u6280\u672f\u5c01\u88c5socket\u901a\u4fe1\u4e0e\u4e8c\u8fdb\u5236\u6570\u636e\u89e3\u7801, \u5927\u5e45\u5ea6\u63d0\u9ad8\u7f51\u9875\u4ea4\u4e92\u6574\u4f53\u6027\u80fd","\u901a\u8fc7\u5f15\u5165perfect-scrollbar\u5305\u5b9e\u73b0\u6eda\u52a8\u6761\u5728\u5404\u6d4f\u89c8\u5668\u663e\u793a\u53ca\u529f\u80fd\u4e00\u81f4\u7b49"]}]},{name:"\u4e0a\u6d77\u96c1\u5c55\u79fb\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8",url:"http://www.aispreadtech.com",start:"2017.06",end:"2018.05",title:"\u524d\u7aef\u5f00\u53d1\u3001\u6570\u636e\u91c7\u96c6",skills:["Python","React","Vue","Oracle","Kurento Client","Docker","Linux"],experience:[{name:"\u8fdc\u7a0b\u89c6\u9891\u52d8\u63a2\u4e0e\u4e8b\u6545\u5b9a\u635f\u7cfb\u7edf",url:"",highlights:["(\u6a21\u5757)\u767e\u5ea6\u5730\u56fe\u4e0e\u9ad8\u5fb7\u5730\u56fe\u9009\u578b\u4e0e\u96c6\u6210","(\u6a21\u5757)\u57fa\u4e8e\u5730\u56fe\u63d2\u4ef6\u7684\u529f\u80fd\u5c01\u88c5\u4e0e\u4e2a\u6027\u5316\u529f\u80fd\u5f00\u53d1, \u4e2a\u6027\u5316\u529f\u80fd\u5305\u62ec\u5730\u56fe\u56f4\u680f\u3001\u8def\u7a0b\u56de\u653e\u3001\u5730\u56fe\u6807\u7684\u7b49","(\u5927\u5c4f)\u72ec\u7acb\u9879\u76ee\u4e2a\u4eba\u5f00\u53d1\u7684\u89c6\u9891\u5168\u94fe\u8def\u5927\u5c4f\u5c55\u793a\u6a21\u5757","(\u5927\u5c4f)\u5c01\u88c5\u57fa\u4e8ekurentu-client(WebRTC\u5f00\u6e90\u9879\u76ee)\u7684\u57fa\u672c\u529f\u80fd","(\u5927\u5c4f)\u591a\u94fe\u8def\u5ba2\u670d\u89c6\u9891\u76d1\u63a7, \u652f\u63011\u30014\u30016\u30019\u8def\u89c6\u9891\u6295\u5f71","(\u5927\u5c4f)\u57fa\u4e8eRechart\u7684\u6570\u636e\u56fe\u5f62\u5c55\u793a\u7b49"]},{name:"\u7ecf\u8425\u5206\u6790\u5e73\u53f0(\u9886\u5bfc\u9a7e\u9a76\u8231)",url:"",highlights:["\u539f\u6709\u4e00\u671f\u57fa\u7840\u4e0a\u589e\u52a0\u4e8c\u671f\u529f\u80fd\u9875\u9762(\u90e8\u5206)","\u4f7f\u7528Python\u7684requests\u6a21\u5757\u5b8c\u6210\u5fae\u4fe1\u516c\u4f17\u53f7\u5f69\u8679\u4ff1\u4e50\u90e8\u548cE\u6d77\u901a\u8d22\u7684\u8fd0\u8425\u6570\u636e\u91c7\u96c6\u722c\u866b","\u57fa\u4e8eOracle\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\u4e0e\u57fa\u4e8e\u516c\u53f8\u81ea\u6709\u4e2d\u53f0\u4ea7\u54c1\u7684API\u5f00\u53d1","\u7a0b\u5e8f\u90e8\u7f72\u7ef4\u62a4\u4e0e\u6570\u636e\u7b97\u6cd5\u529f\u80fd\u7ef4\u62a4\u7b49"]},{name:"\u56fd\u9645\u521b\u6295\u4fe1\u606f\u7ba1\u7406\u7cfb\u7edf",url:"http://www.siicfm.cn",highlights:["PC\u7ad9\u70b9\u4f18\u5316\u53ca\u517c\u5bb9\u6027\u4f18\u5316","PC\u7aef\u90e8\u5206\u529e\u516c\u5ba1\u6279\u6d41\u7a0b","APP\u7aef\u90e8\u5206\u529e\u516c\u5ba1\u6279\u6d41\u7a0b"]}]},{name:"\u5b9e\u4e60",url:"",start:"2016.10",end:"2017.06",title:"\u524d\u7aef\u5f00\u53d1\u3001\u6570\u636e\u91c7\u96c6",skills:["Python","PostgreSQL","NodeJS","Docker","HTML","CSS","jQuery","SeaJS"],experience:[{name:"",url:"",highlights:["\u4f7f\u7528Fiddler\u3001BurpSuite\u7b49\u6293\u5305\u5de5\u5177\u6293\u53d6\u5e76\u5206\u6790\u6570\u636e\u5305","\u4f7f\u7528Python\u7684Requests\u3001lmxl\u3001BeautifulSoup\u7b49\u6a21\u5757\u6293\u53d6\u7f51\u9875\u53ca\u63a5\u53e3\u6570\u636e\u5e76\u89e3\u6790\u5165\u5e93","\u5bf9\u57fa\u4e8e\u4f7f\u7528\u5927\u6570\u636e\u6a2a\u5411\u6269\u5c55CitusData\u5f00\u6e90\u9879\u76ee\u7684\u6570\u636e\u5e93\u8bbe\u8ba1","\u4f7f\u7528PostgreSQL\u7684PL/SQL\u8bed\u8a00\u5b8c\u6210\u6570\u636e\u7684\u6e05\u6d17, \u53ca\u6839\u636e\u6e05\u6d17\u540e\u6570\u636e\u751f\u6210\u699c\u5355Excel\u6587\u4ef6","\u4eceRedis\u4e2d\u8bfb\u53d6\u7f13\u5b58\u6570\u636e\u540e\u7528Express\u5f00\u53d1\u6570\u636e\u63a5\u53e3\u5e76\u7528Chai+Mocha\u5b8c\u6210\u63a5\u53e3\u6d4b\u8bd5","\u4f7f\u7528Docker\u5b8c\u6210\u722c\u866b\u7a0b\u5e8f\u53ca\u63a5\u53e3\u7a0b\u5e8f\u7684\u90e8\u7f72"]},{name:"",url:"",highlights:["\u914d\u5408\u8bbe\u8ba1\u5e08\u53ca\u540e\u7aef\u53ca\u8fd0\u7528HTML+CSS\u76f8\u5173\u77e5\u8bc6\u5b8c\u6210\u7f51\u9875\u529f\u80fd\u5f00\u53d1","\u5f15\u5165SeaJS\u7ba1\u7406JavaScript\u63d2\u4ef6","\u5b8c\u6210\u57fa\u4e8ejQuery\u7684\u81ea\u5b9a\u4e49\u63d2\u4ef6, \u5982: \u7701\u5e02\u533a\u8054\u52a8\u63d2\u4ef6","\u5904\u7406\u6d4f\u89c8\u5668\u517c\u5bb9\u95ee\u9898, \u6d4f\u89c8\u5668\u517c\u5bb9\u5230IE6\u7b49"]}]}],I=[{name:"\u6280\u672f\u535a\u5ba2",skills:["React","Bootstrap","Redux","TypeScript","ES5+","ESLint","Sass","Docker"],url:"http://howduudu.site/#/blog"},{name:"\u6307\u6807\u8ba1\u7b97\u7cfb\u7edf",skills:["NodeJS","Express","PostgreSQL","Sequelize","Linux"],url:"http://howduudu.site/#/stock_index"},{name:"\u516c\u5f00\u8bfe\u624b\u673a\u7248",skills:["Framework7","jQuery","PostgreSQL","Express","Python","Docker"],url:"https://github.com/zhenxianluo/nsf7app"}];var O=function(){var e=g,t=w,a=L,n=I,l=S,r=N,s=k,i=b,E=v;return c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{xs:12},c.a.createElement("div",{className:"header text-center"},c.a.createElement("div",{className:"header-phone"},c.a.createElement(y,null)),c.a.createElement("div",{className:"header-text"},c.a.createElement("h1",null,"\u9648\u6ed4 / (Rnet-Ao)"),c.a.createElement("span",null,"\u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08"))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{xs:12,sm:12,md:4},c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-contacts"}),"\xa0contact"),e.map((function(e){return c.a.createElement(o.a,{key:e.icon,className:"contact-item"},c.a.createElement(u.a,{xs:2,className:"contact-item-icon"},c.a.createElement("i",{className:"anticon icon-".concat(e.icon)})),c.a.createElement(u.a,{className:"contact-item-content"},e.isMail&&c.a.createElement("a",{href:"mailto:".concat(e.text)},e.text),e.isUrl&&c.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.text),e.isPhone&&c.a.createElement("a",{href:"tel:".concat(e.text.replace(/ /g,""))},e.text)))}))),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-carryout"}),"\xa0skills"),c.a.createElement("ul",{className:"skills"},t.map((function(e){return c.a.createElement("li",{key:e.title},c.a.createElement("h4",null,e.title),e.lists.map((function(e){return c.a.createElement("span",{className:"category",key:e},e)})))})))),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-download"}),"\xa0download"),c.a.createElement("p",null,c.a.createElement("a",{href:r.url},r.title))),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-codesquareo"}),"\xa0codes"),E.map((function(e){var t=e.title,a=e.url;return c.a.createElement("p",{key:t,className:"text-primary"},c.a.createElement("a",{href:a},t))}))),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-exception1"}),"\xa0source"),c.a.createElement("a",{href:i.url},i.name),c.a.createElement("p",null,i.desc),c.a.createElement("p",null,i.shark)),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-exception1"}),"\xa0special"),s.map((function(e){return c.a.createElement("p",{key:e,className:"text-danger"},e)})))),c.a.createElement(u.a,{xs:12,sm:12,md:8},c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-layout"}),"\xa0work experience"),c.a.createElement("ul",{className:"works"},a.map((function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("header",null,c.a.createElement("h3",null,e.name),""!==e.url&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"anticon icon-earth"}),"\xa0\xa0",c.a.createElement("a",{href:e.url},e.url)),c.a.createElement("p",{className:"work-time"},"".concat(e.start," - ").concat(e.end))),c.a.createElement("div",{className:"works-details"},c.a.createElement("h4",null,e.title),c.a.createElement("p",null,e.skills.map((function(e){return c.a.createElement("span",{className:"category",key:e},e)}))),e.experience.map((function(e){return c.a.createElement(c.a.Fragment,null,""!==e.name&&c.a.createElement("h4",null,e.name),""!==e.url&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"anticon icon-earth"}),"\xa0\xa0",c.a.createElement("a",{href:e.url},e.url)),c.a.createElement("ul",{className:"highlight"},e.highlights.map((function(t,a){return c.a.createElement("li",{key:t},"".concat(t.replace(/, /g,"\uff0c")).concat(a===e.highlights.length-1?"\u3002":"\uff1b"))}))))}))))})))),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-disconnect"}),"\xa0self project"),c.a.createElement("ul",{className:"selfs"},n.map((function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("header",null,c.a.createElement("h3",null,e.name),""!==e.url&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"anticon icon-earth"}),"\xa0\xa0",c.a.createElement("a",{href:e.url},e.url)),c.a.createElement("p",null,e.skills.map((function(e){return c.a.createElement("span",{className:"category",key:e},e)})))))})))),c.a.createElement("section",{className:"box"},c.a.createElement("h2",null,c.a.createElement("i",{className:"anticon icon-Trophy"}),"\xa0award and certificate"),c.a.createElement("ul",{className:"award"},l.map((function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.type),c.a.createElement("p",{className:"award-name"},e.name),c.a.createElement("p",{className:"award-time"},e.time))})))))))},M=a(33),j=a(32),C=(a(48),a(31)),P=a(25),R=a(20),H="\u6bdb\u6cfd\u4e1c\uff081893\u5e7412\u670826\u65e5-1976\u5e749\u67089\u65e5\uff09\uff0c\u5b57\u6da6\u4e4b\uff08\u539f\u4f5c\u548f\u829d\uff0c\u540e\u6539\u6da6\n\u829d\uff09\uff0c\u7b14\u540d\u5b50\u4efb\u3002\u6e56\u5357\u6e58\u6f6d\u4eba\u3002\u4e2d\u56fd\u4eba\u6c11\u7684\u9886\u8896\uff0c\u4f1f\u5927\u7684\u9a6c\u514b\u601d\u4e3b\u4e49\u8005\uff0c\u65e0\u4ea7\u9636\u7ea7\u9769\u547d\u5bb6\u3001\u6218\n\u7565\u5bb6\u548c\u7406\u8bba\u5bb6\uff0c\u4e2d\u56fd\u5171\u4ea7\u515a\u3001\u4e2d\u56fd\u4eba\u6c11\u89e3\u653e\u519b\u548c\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u7684\u4e3b\u8981\u7f14\u9020\u8005\u548c\u9886\u5bfc\u4eba\uff0c\u8bd7\u4eba\n\uff0c\u4e66\u6cd5\u5bb6\u30021949\u81f31976\u5e74\uff0c\u6bdb\u6cfd\u4e1c\u62c5\u4efb\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u6700\u9ad8\u9886\u5bfc\u4eba\u3002\u4ed6\u5bf9\u9a6c\u514b\u601d\u5217\u5b81\u4e3b\u4e49\u7684\u53d1\n\u5c55\u3001\u519b\u4e8b\u7406\u8bba\u7684\u8d21\u732e\u4ee5\u53ca\u5bf9\u5171\u4ea7\u515a\u7684\u7406\u8bba\u8d21\u732e\u88ab\u79f0\u4e3a\u6bdb\u6cfd\u4e1c\u601d\u60f3\u3002\u56e0\u6bdb\u6cfd\u4e1c\u62c5\u4efb\u8fc7\u7684\u4e3b\u8981\u804c\u52a1\n\u51e0\u4e4e\u5168\u90e8\u79f0\u4e3a\u4e3b\u5e2d\uff0c\u6240\u4ee5\u4e5f\u88ab\u4eba\u4eec\u5c0a\u79f0\u4e3a\u201c\u6bdb\u4e3b\u5e2d\u201d\u3002\u6bdb\u6cfd\u4e1c\u88ab\u89c6\u4e3a\u73b0\u4ee3\u4e16\u754c\u5386\u53f2\u4e2d\u6700\u91cd\u8981\u7684\u4eba\n\u7269\u4e4b\u4e00\uff0c\u300a\u65f6\u4ee3\u300b\u6742\u5fd7\u4e5f\u5c06\u4ed6\u8bc4\u4e3a20\u4e16\u7eaa\u6700\u5177\u5f71\u54cd100\u4eba\u4e4b\u4e00\u3002",A=[{variant:"primary",text:"\u65e5\u671f"},{variant:"secondary",text:"\u5730\u70b9"},{variant:"success",text:"\u65f6\u95f4"},{variant:"warning",text:"\u4eba\u540d"},{variant:"danger",text:"\u56fd\u5bb6"}];var B,T=(B=function(){var e=Object(r.useState)(H),t=Object(j.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(20),s=Object(j.a)(l,2),i=s[0],m=s[1],o=Object(r.useMemo)((function(){return{startIdx:-1,endIdx:-1}}),[]),u=Object(r.useMemo)((function(){return[]}),[]),E=Object(r.useCallback)((function(){return alert(JSON.stringify(u,["startIdx","endIdx","text","type"],2))}),[]),p=Object(r.useCallback)((function(){return u.findIndex((function(e){return o.startIdx>=e.startIdx&&o.startIdx<=e.endIdx||o.endIdx>=e.startIdx&&o.endIdx<=e.endIdx||o.startIdx>=e.startIdx&&o.endIdx<=e.endIdx||o.startIdx<=e.startIdx&&o.endIdx>=e.endIdx}))}),[]),d=Object(r.useCallback)((function(){var e=window.getSelection(),t=e.isCollapsed,a=e.anchorOffset,n=e.focusOffset;t||(o.startIdx=Math.min(n,a),o.endIdx=Math.max(n,a),o.text=e.toString())}),[]),h=Object(r.useCallback)((function(e,t){if(-1!==o.startIdx&&-1!==o.endIdx&&-1===p()){var a=u.reduce((function(e,t){return t.endIdx<o.startIdx?e+t.codeNum:e}),0),l=o.startIdx+a,r=o.endIdx+a;n((function(a){var n=a;return n="".concat(n.slice(0,r),"</span>").concat(n.slice(r)),n="".concat(n.slice(0,l),'<span class="text-').concat(e,'"><span class="type">').concat(t,"</span>").concat(n.slice(l))})),u.push(Object(M.a)(Object(M.a)({},o),{},{variant:e,type:t,codeNum:'<span class="text-"></span><span class="type"></span>'.length+e.length+t.length})),o.startIdx=-1,o.endIdx=-1}}),[]);return c.a.createElement("div",{className:"select-text"},c.a.createElement("div",{className:"header"},A.map((function(e){var t=e.variant,a=e.text;return c.a.createElement(P.a,{variant:t,key:t,size:"sm",onClick:function(){return h(t,a)}},a)}))),c.a.createElement("div",{className:"tools"},c.a.createElement("div",{className:"tools-left"},"\u5b57\u4f53:\xa0",c.a.createElement(C.a.Control,{className:"tools-fontsize-select",as:"select",custom:!0,size:"sm",defaultValue:i,onChange:function(e){return m(Number(e.currentTarget.value))}},new Array(8).fill(0).map((function(e,t){return e+t})).map((function(e){return c.a.createElement("option",{value:e+16,key:e},e+16)})))),c.a.createElement("div",{className:"tools-right"},c.a.createElement("b",{className:"rule text-primary"},"\u89c4\u5219\u6587\u4ef6\u9884\u89c8"),c.a.createElement(C.a.Control,{className:"tools-mode-select",as:"select",custom:!0,size:"sm",defaultValue:"mode1"},c.a.createElement("option",{value:"mode1"},"\u6a21\u578b1"),c.a.createElement("option",{value:"mode2"},"\u6a21\u578b2"),c.a.createElement("option",{value:"mode3"},"\u6a21\u578b3")),c.a.createElement("span",{className:"mode"},"\u8fd0\u884c\u6a21\u578b"))),c.a.createElement("div",{className:"main",style:{fontSize:"".concat(i,"px")}},c.a.createElement("div",{className:"main-origin",dangerouslySetInnerHTML:{__html:a}}),c.a.createElement("div",{className:"main-cover",onSelect:d,contentEditable:"true"},H.replace(/<\/?span>/g,""))),c.a.createElement("div",{className:"footer"},c.a.createElement(P.a,{variant:"outline-secondary",size:"sm",onClick:E},"\u4fdd\u5b58"),"\xa0\xa0",c.a.createElement(P.a,{variant:"primary",size:"sm",onClick:E},"\u63d0\u4ea4")))},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,{className:"bread"},c.a.createElement(R.a.Item,{href:"/#/"},"\u7b80\u5386\u9875"),c.a.createElement(R.a.Item,{active:!0},"\u8bcd\u6c47\u6ed1\u52a8\u6807\u8bb0"),c.a.createElement(R.a.Item,{href:"https://github.com/Rnet-Ao/resume/tree/master/src/components/SelectText"},"\u6e90\u7801")),B(e))});a(55),a(56);l.a.render(c.a.createElement(s.a,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",component:O}),c.a.createElement(i.b,{exact:!0,path:"/select-text",component:T}),c.a.createElement(i.a,{to:"/"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.88d5bd67.chunk.js.map