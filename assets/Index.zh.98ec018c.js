import{u as n,a}from"./index.af04afb6.js";import{n as t,o as s,b as l,u as o,F as e,d as c,g as p,f as u,m as i,q as k,v as r,a6 as d,a7 as g,a8 as m}from"./vendor.244d3a4e.js";const v={};v.render=function(n,a){const c=t("ix-statistic");return s(),l(e,null,[o(c,{title:"Active Users",value:"321321"}),o(c,{title:"Account Balance (CNY)",precision:2,value:112893}),o(c,{title:"Account Balance (CNY)",precision:2,value:112893.116},null,8,["value"])],64)};var f=c({name:"components-statistic-Basic",components:{"raw-demo":v},setup(){const{copy:t}=n(),s=p(!1),{lang:l}=u(a);return{copied:s,onCopy:()=>{s.value||t("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:l}}});const h={key:0},x=o("p",null,"简单展示",-1),w={key:1},q=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Active Users"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("321321"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token punctuation"},"/>")]),r("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Account Balance (CNY)"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":precision"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("2"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("112893"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token punctuation"},"/>")]),r("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Account Balance (CNY)"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":precision"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("2"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("112893.116"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token punctuation"},"/>")]),r("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n")])])],-1);f.render=function(n,a,e,c,p,u){const r=t("raw-demo"),d=t("global-code-box");return s(),l(d,{packageName:"components",componentName:"statistic",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:i((()=>["zh"===n.lang?(s(),l("span",h,[x])):k("",!0),"en"===n.lang?(s(),l("span",w)):k("",!0)])),rawCode:i((()=>[o(r)])),highlightCode:i((()=>[q])),_:1},8,["title","copied","onCopy"])};var y=c({setup(){const n=p(2);return{precision:n,add:()=>n.value++}}});const b=m();d("data-v-79c99014");const C={class:"statistic-demo-unit"},_=o("span",null," / 100",-1);g();const A=b(((n,a,e,c,p,u)=>{const i=t("ix-icon"),k=t("ix-statistic");return s(),l("div",C,[o(k,{title:"Feedback",value:1128},{suffix:b((()=>[o(i,{name:"like"})])),_:1}),o(k,{title:"Unmerged",value:93,class:"demo-class"},{suffix:b((()=>[_])),_:1}),o(k,{title:"Feedback",value:11.28,precision:2,suffix:"%",class:"unit-up"},{prefix:b((()=>[o(i,{name:"arrow-up"})])),_:1},8,["value"]),o(k,{title:"Idle",value:9.3,precision:2,suffix:"%",class:"unit-down"},{prefix:b((()=>[o(i,{name:"arrow-down"})])),_:1},8,["value"])])}));y.render=A,y.__scopeId="data-v-79c99014";var B=c({name:"components-statistic-Unit",components:{"raw-demo":y},setup(){const{copy:t}=n(),s=p(!1),{lang:l}=u(a);return{copied:s,onCopy:()=>{s.value||t("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:l}}});const N={key:0},U=o("p",null,"通过前缀和后缀添加单位。",-1),I={key:1},F=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("div")]),r(),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("statistic-demo-unit"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Feedback"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("1128"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("template")]),r(),o("span",{class:"token attr-name"},"#suffix"),o("span",{class:"token punctuation"},">")]),r("\n        "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-icon")]),r(),o("span",{class:"token attr-name"},"name"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("like"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token punctuation"},"/>")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("ix-statistic")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Unmerged"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("93"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("demo-class"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("template")]),r(),o("span",{class:"token attr-name"},"#suffix"),o("span",{class:"token punctuation"},">")]),r("\n        "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("span")]),o("span",{class:"token punctuation"},">")]),r(" / 100"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("span")]),o("span",{class:"token punctuation"},">")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("ix-statistic")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Feedback"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("11.28"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":precision"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("2"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"suffix"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("%"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("unit-up"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("template")]),r(),o("span",{class:"token attr-name"},"#prefix"),o("span",{class:"token punctuation"},">")]),r("\n        "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-icon")]),r(),o("span",{class:"token attr-name"},"name"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("arrow-up"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token punctuation"},"/>")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("ix-statistic")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-statistic")]),r(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("Idle"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":value"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("9.3"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},":precision"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("2"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"suffix"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("%"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("unit-down"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("template")]),r(),o("span",{class:"token attr-name"},"#prefix"),o("span",{class:"token punctuation"},">")]),r("\n        "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("ix-icon")]),r(),o("span",{class:"token attr-name"},"name"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("arrow-down"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token punctuation"},"/>")]),r("\n      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("ix-statistic")]),o("span",{class:"token punctuation"},">")]),r("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("div")]),o("span",{class:"token punctuation"},">")]),r("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("template")]),o("span",{class:"token punctuation"},">")]),r("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("script")]),r(),o("span",{class:"token attr-name"},"lang"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("ts"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token script"},[o("span",{class:"token language-javascript"},[r("\n"),o("span",{class:"token keyword"},"import"),r(),o("span",{class:"token punctuation"},"{"),r(" defineComponent"),o("span",{class:"token punctuation"},","),r(" ref "),o("span",{class:"token punctuation"},"}"),r(),o("span",{class:"token keyword"},"from"),r(),o("span",{class:"token string"},"'vue'"),r("\n\n"),o("span",{class:"token keyword"},"export"),r(),o("span",{class:"token keyword"},"default"),r(),o("span",{class:"token function"},"defineComponent"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),r("\n  "),o("span",{class:"token function"},"setup"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),r(),o("span",{class:"token punctuation"},"{"),r("\n    "),o("span",{class:"token keyword"},"const"),r(" precision "),o("span",{class:"token operator"},"="),r(),o("span",{class:"token function"},"ref"),o("span",{class:"token punctuation"},"("),o("span",{class:"token number"},"2"),o("span",{class:"token punctuation"},")"),r("\n    "),o("span",{class:"token keyword"},"const"),r(),o("span",{class:"token function-variable function"},"add"),r(),o("span",{class:"token operator"},"="),r(),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),r(),o("span",{class:"token operator"},"=>"),r(" precision"),o("span",{class:"token punctuation"},"."),r("value"),o("span",{class:"token operator"},"++"),r("\n    "),o("span",{class:"token keyword"},"return"),r(),o("span",{class:"token punctuation"},"{"),r(" precision"),o("span",{class:"token punctuation"},","),r(" add "),o("span",{class:"token punctuation"},"}"),r("\n  "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),r("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),r("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("script")]),o("span",{class:"token punctuation"},">")]),r("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),r("style")]),r(),o("span",{class:"token attr-name"},"lang"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),r("less"),o("span",{class:"token punctuation"},'"')]),r(),o("span",{class:"token attr-name"},"scoped"),o("span",{class:"token punctuation"},">")]),o("span",{class:"token style"},[o("span",{class:"token language-css"},[r("\n"),o("span",{class:"token selector"},".statistic-demo-unit"),r(),o("span",{class:"token punctuation"},"{"),r("\n  "),o("span",{class:"token selector"},".unit-up"),r(),o("span",{class:"token punctuation"},"{"),r("\n    "),o("span",{class:"token selector"},":deep(.ix-statistic-content)"),r(),o("span",{class:"token punctuation"},"{"),r("\n      "),o("span",{class:"token property"},"color"),o("span",{class:"token punctuation"},":"),r(" red"),o("span",{class:"token punctuation"},";"),r("\n    "),o("span",{class:"token punctuation"},"}"),r("\n  "),o("span",{class:"token punctuation"},"}"),r("\n  "),o("span",{class:"token selector"},".unit-down"),r(),o("span",{class:"token punctuation"},"{"),r("\n    "),o("span",{class:"token selector"},":deep(.ix-statistic-content)"),r(),o("span",{class:"token punctuation"},"{"),r("\n      "),o("span",{class:"token property"},"color"),o("span",{class:"token punctuation"},":"),r(" green"),o("span",{class:"token punctuation"},";"),r("\n    "),o("span",{class:"token punctuation"},"}"),r("\n  "),o("span",{class:"token punctuation"},"}"),r("\n"),o("span",{class:"token punctuation"},"}"),r("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),r("style")]),o("span",{class:"token punctuation"},">")]),r("\n")])])],-1);B.render=function(n,a,e,c,p,u){const r=t("raw-demo"),d=t("global-code-box");return s(),l(d,{packageName:"components",componentName:"statistic",demoName:"Unit",title:"zh"===n.lang?"单位":"prefix/suffix usage",copied:n.copied,onCopy:n.onCopy},{description:i((()=>["zh"===n.lang?(s(),l("span",N,[U])):k("",!0),"en"===n.lang?(s(),l("span",I)):k("",!0)])),rawCode:i((()=>[o(r)])),highlightCode:i((()=>[F])),_:1},8,["title","copied","onCopy"])};var z={name:"Demostatistic",components:{Basic:f,Unit:B},setup(){const n=p(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const Y={class:"toc-wrapper"},j=o("a",{href:"#components-statistic-demo-Basic",title:"基本使用"},"基本使用",-1),P=r(),E=o("a",{href:"#components-statistic-demo-Unit",title:"单位"},"单位",-1),L=r(),S=o("a",{href:"#api",title:"API"},null,-1),T={class:"markdown header-wrapper"},D=r("Statistic"),G=o("span",{class:"subtitle"},"统计数值",-1),H={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/components/statistic/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},J=o("section",{class:"markdown"},[o("p",null,"展示统计数值。"),o("h2",{id:"何时使用"},[o("span",null,"何时使用"),o("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),o("ul",null,[o("li",null," 当需要突出某个或某组数字时"),o("li",null," 当需要展示带描述的统计类数据时使用")])],-1),K=o("span",null,"代码演示",-1),M={class:"example-wrapper"},O=o("section",{class:"markdown api-wrapper"},[o("h2",{id:"api"},[o("span",null,"API"),o("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),o("h3",{id:"<code>ix-statistic</code>"},[o("span",null,[o("code",null,"ix-statistic")]),o("a",{onclick:"window.location.hash = '<code>ix-statistic</code>'",class:"anchor"},"#")]),o("h4",{id:"props"},[o("span",null,"Props"),o("a",{onclick:"window.location.hash = 'props'",class:"anchor"},"#")]),o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"名称"),o("th",null,"说明"),o("th",null,"类型"),o("th",null,"默认值"),o("th",null,"全局配置"),o("th",null,"备注")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"formatter")]),o("td",null,"自定义数值展示"),o("td",null,"v-slot"),o("td",null,[o("code",null,"(value, precision) => { value: string, int: string, decimal: string }")]),o("td",null,"✅"),o("td",null,"返回值为一个对象，对象的value值表示格式化后的完整字符串，int为整数部分，decimal为小数部分，若格式化后的字符串不是合法的数字字符串，请将int和decimal设置为空字符串")]),o("tr",null,[o("td",null,[o("code",null,"precision")]),o("td",null,"数值精度"),o("td",null,"number"),o("td",null,"-"),o("td",null,"✅"),o("td")]),o("tr",null,[o("td",null,[o("code",null,"prefix")]),o("td",null,"设置数值的前缀"),o("td",null,"string"),o("td",null,"v-slot"),o("td",null,"-"),o("td")]),o("tr",null,[o("td",null,[o("code",null,"suffix")]),o("td",null,"设置数值的后缀"),o("td",null,"string"),o("td",null,"v-slot"),o("td",null,"-"),o("td")]),o("tr",null,[o("td",null,[o("code",null,"title")]),o("td",null,"数值的标题"),o("td",null,"string"),o("td",null,"v-slot"),o("td",null,"-"),o("td")]),o("tr",null,[o("td",null,[o("code",null,"value")]),o("td",null,"数值内容"),o("td",null,"string"),o("td",null,"number"),o("td",null,"-"),o("td")])])]),o("h3",{id:"slots"},[o("span",null,"Slots"),o("a",{onclick:"window.location.hash = 'slots'",class:"anchor"},"#")]),o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"名称"),o("th",null,"说明"),o("th",null,"参数类型"),o("th",null,"备注")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"title")]),o("td",null,"自定义标题"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"defalut")]),o("td",null,"自定义内容"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"prefix")]),o("td",null,"自定义前缀"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"suffix")]),o("td",null,"自定义后缀"),o("td",null,"-"),o("td",null,"-")])])])],-1);z.render=function(n,a,e,c,p,u){const k=t("ix-icon"),r=t("Basic"),d=t("ix-col"),g=t("Unit"),m=t("ix-row");return s(),l("article",null,[o("a",Y,[o("a",{onClick:a[1]||(a[1]=n=>c.goLink(n))},[j,P,E,L,S])]),o("section",T,[o("h1",null,[D,G,o("a",H,[o(k,{name:"edit"})])]),J,o("h2",null,[K,o(k,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:a[2]||(a[2]=n=>c.expandAll())})])]),o("section",M,[o(m,{gutter:"16"},{default:i((()=>[o(d,{xl:"12",span:"24"},{default:i((()=>[o(r)])),_:1}),o(d,{xl:"12",span:"24"},{default:i((()=>[o(g)])),_:1})])),_:1})]),O])};export default z;