(function(){var t={5856:function(t,e,a){"use strict";a(6992),a(8674),a(9601),a(7727);var n=a(144),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("picture",[t.t_src?t._e():a("source",{attrs:{type:"image/webp",srcset:null==t._2x?t.src+".webp":t._2x+".webp 2x, "+t.src+".webp 1x",media:t.mquery_src}}),t.t_src?t._e():a("source",{attrs:{type:t.src.toLowerCase().endsWith(".png")?"image/png":"image/jpeg",srcset:null==t._2x?t.src:t._2x+" 2x, "+t.src+" 1x",media:t.mquery_src}}),t.src650w?a("source",{attrs:{type:"image/webp",srcset:null==t._2x650w?t.src650w+".webp":t._2x650w+".webp 2x, "+t.src650w+".webp 1x",media:t.mquery_650w}}):t._e(),t.src650w?a("source",{attrs:{type:t.src650w.toLowerCase().endsWith(".png")?"image/png":"image/jpeg",srcset:null==t._2x650w?t.src650w:t._2x650w+" 2x, "+t.src650w+" 1x",media:t.mquery_650w}}):t._e(),t.src992w?a("source",{attrs:{type:"image/webp",srcset:null==t._2x992w?t.src992w+".webp":t._2x992w+".webp 2x, "+t.src992w+".webp 1x",media:t.mquery_992w}}):t._e(),t.src992w?a("source",{attrs:{type:t.src992w.toLowerCase().endsWith(".png")?"image/png":"image/jpeg",srcset:null==t._2x992w?t.src992w:t._2x992w+" 2x, "+t.src992w+" 1x",media:t.mquery_992w}}):t._e(),t.src1280w?a("source",{attrs:{type:"image/webp",srcset:null==t._2x1280w?t.src1280w+".webp":t._2x1280w+".webp 2x, "+t.src1280w+".webp 1x",media:t.mquery_1280w}}):t._e(),t.src1280w?a("source",{attrs:{type:t.src1280w.toLowerCase().endsWith(".png")?"image/png":"image/jpeg",srcset:null==t._2x1280w?t.src1280w:t._2x1280w+" 2x, "+t.src1280w+" 1x",media:t.mquery_1280w}}):t._e(),t.src1600w?a("source",{attrs:{type:"image/webp",srcset:null==t._2x1600w?t.src1600w+".webp":t._2x1600w+".webp 2x, "+t.src1600w+".webp 1x",media:t.mquery_1600w}}):t._e(),t.src1600w?a("source",{attrs:{type:t.src1600w.toLowerCase().endsWith(".png")?"image/png":"image/jpeg",srcset:null==t._2x1600w?t.src1600w:t._2x1600w+" 2x, "+t.src1600w+" 1x",media:t.mquery_1600w}}):t._e(),a("img",t._b({class:t.m_class,style:t.s,attrs:{src:t.t_src?t.t_src:t.src}},"img",t.m_attrs,!1))])},i=[],r=a(5199),o=a(593),c=(a(5666),a(4916),a(3123),a(3210),a(1539),"data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),l=null;function u(){return null!=l?l:l=new Promise((function(t){var e=new Image;e.onload=function(){return t(l=e.width>0&&e.height>0)},e.onerror=function(){return t(l=!1)},e.src=c}))}var m={props:["c","s","src","_2x","thumb","src650w","_2x650w","src992w","_2x992w","src1280w","_2x1280w","src1600w","_2x1600w"],inheritAttrs:!1,computed:{m_class:function(){var t,e=Object.assign({},this.classes),a=(0,o.Z)((this.c||"").split(" "));try{for(a.s();!(t=a.n()).done;){var n=t.value;n=n.trim(),n.length>0&&(e[n]=!0)}}catch(s){a.e(s)}finally{a.f()}return e},m_attrs:function(){return Object.assign({},this.attribs,this.$attrs)},mquery_src:function(){var t=(this.src650w?"649.98":"")||(this.src992w?"991.98":"")||(this.src1280w?"1279.98":"")||(this.src1600w?"1599.98":"");return t?"(max-width: ".concat(t,"px)"):""},mquery_650w:function(){var t=(this.src992w?"991.98":"")||(this.src1280w?"1279.98":"")||(this.src1600w?"1599.98":"");return"(min-width: 650px)"+(t?" and (max-width: ".concat(t,"px)"):"")},mquery_992w:function(){var t=(this.src1280w?"1279.98":"")||(this.src1600w?"1599.98":"");return"(min-width: 992px)"+(t?" and (max-width: ".concat(t,"px)"):"")},mquery_1280w:function(){var t=this.src1600w?"1599.98":"";return"(min-width: 1280px)"+(t?" and (max-width: ".concat(t,"px)"):"")},mquery_1600w:function(){return"(min-width: 1600px)"}},data:function(){return{attribs:{},classes:{},t_src:null}},created:function(){this.thumb&&(this.t_src=this.thumb,this.classes["v-img-loading"]=!0);var t=this;while(t&&t.$vnode){try{var e=t.$vnode.context.$options._scopeId;e&&(this.attribs[e]="")}catch(a){}t=t.$parent}},mounted:function(){this.classes["v-img"]=!0,this.forceUpdateClasses(),this.thumb&&this.src&&this.lazyLoad()},methods:{forceUpdateClasses:function(){this.classes=JSON.parse(JSON.stringify(this.classes))},lazyLoad:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.matchMedia("(min-width: 992px)").matches){e.next=5;break}t.t_src=null,t.classes["v-img-loading"]=!1,e.next=16;break;case 5:return e.next=7,u();case 7:if(a=e.sent,n=window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches,s=null,s=t._2x&&n?t._2x+(a?".webp":""):t.src+(a?".webp":""),s){e.next=13;break}return e.abrupt("return");case 13:i=new Image,i.onload=function(){t.t_src=i.src,t.classes["v-img-loading"]=!1},i.src=s;case 16:case"end":return e.stop()}}),e)})))()}}},p=m,d=a(5961),f=(0,d.Z)(p,s,i,!1,null,null,null),h=f.exports;n.Z.component("v-img",h);var v=a(3081),w=a.n(v);n.Z.use(w());var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},_=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-holder"},[a("div",{staticClass:"x-navbar",class:{"x-navbar-collapsed":!t.visible}},[a("div",{staticClass:"d-flex w-100 align-items-center x-nav-wrapper"},[a("div",{staticClass:"d-flex flex-grow-1 justify-content-center d-lg-none"},t._l(t.pages_always,(function(e){return a("div",{key:e.pos,staticClass:"x-nav-item-always",on:{click:function(a){return t.gotoPage(e)}}},[t._v(t._s(e.name))])})),0),a("div",{staticClass:"d-lg-none x-nav-toggle pr-2 py-2 ml-auto",on:{click:function(e){t.visible=!0}}},[a("icon",{staticClass:"icon",attrs:{name:"bars"}})],1)]),a("div",{staticClass:"x-nav-drawer"},[a("div",{staticClass:"d-lg-none x-nav-toggle px-2 py-2",on:{click:function(e){t.visible=!1}}},[a("icon",{staticClass:"icon",attrs:{name:"times"}})],1),a("div",{staticClass:"x-navbar-nav"},t._l(t.pages,(function(e){return a("div",{key:e.pos,staticClass:"x-nav-item",on:{click:function(a){return t.gotoPage(e)}}},[t._v(t._s(e.name))])})),0)])])])},b=[],C=(a(7327),a(1249),a(6755),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",{class:"icon-"+t.name})}),y=[],q={props:["name"]},A=q,E=(0,d.Z)(A,C,y,!1,null,"63d0efa5",null),j=E.exports,$=a(3081),k={components:{icon:j},data:function(){return{pages:[],visible:!1}},computed:{pages_always:function(){return this.pages.filter((function(t){return t.always_show}))}},mounted:function(){var t=0;this.pages=this.$router.options.routes.filter((function(t){return t.navbar})).map((function(e){return e.pos=t++,e}))},methods:{gotoPage:function(t){this.visible=!1,t.path&&t.path.startsWith("http://")||t.path.startsWith("https://")?location.href=t.path:$.scrollTo(document.getElementById(t.id))}}},O=k,Z=(0,d.Z)(O,g,b,!1,null,"1e062a92",null),L=Z.exports,G={components:{navbar:L}},M=G,F=(0,d.Z)(M,x,_,!1,null,null,null),I=F.exports,S=a(1165),P=a(6018),U=(a(9826),{routes:[]}),z=function(){function t(e){(0,S.Z)(this,t),Object.assign(U,e)}return(0,P.Z)(t,null,[{key:"install",value:function(t,e){t.prototype.$router={options:U},t.component("router-view",{render:function(t){return t(U.routes.find((function(t){return"/"===t.path&&!!t.component})).component)}})}}]),t}(),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template d-flex flex-column align-items-center"},[a("landing"),a("glioblastoma"),a("contato"),a("historia")],1)},W=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-center align-items-center w-100",attrs:{id:"inicio"}},[n("v-img",{attrs:{width:"275",height:"275",alt:"Logo",draggable:"false",src:a(8922)}}),n("h1",{staticClass:"mb-0"},[t._v("Ararinhas UFF")]),n("p",{staticClass:"text-center mb-0",staticStyle:{"max-width":"15rem"}},[t._v("1° equipe de Biologia Sintética da Universidade Federal Fluminense")])],1)},D=[],J={},N=(0,d.Z)(J,R,D,!1,null,"2d2c0823",null),H=N.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center w-100 pt-5",attrs:{id:"glioblastoma"}},[n("div",{staticClass:"d-flex justify-content-center align-items-center holder-1"},[n("v-img",{attrs:{width:"110",height:"110",c:"img-1",alt:"Glioblastoma",draggable:"false",src:a(3777)}}),t._m(0)],1),t._m(1)])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column pl-2"},[a("h3",{staticClass:"mb-0"},[t._v("Ararinhas UFF")]),a("p",{staticClass:"mb-0"},[t._v("Somos uma equipe de Biologia Sintética que desenvolve um projeto de um biofármaco para o tratamento de glioblastoma.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mbox-holder"},[a("div",{staticClass:"d-flex flex-column mbox mr-auto mt-5"},[a("div",{staticClass:"header p-3 px-5 m-3 mr-4"},[a("h2",[t._v("Glioblastoma")])]),a("p",{staticClass:"pl-5 ml-4 pr-4 mb-0 pb-4"},[t._v(" Glioblastoma é um tipo de tumor formado pelo crescimento exagerado das células na região do cérebro, gerando um tumor maligno. ")])])])}],Q={},V=(0,d.Z)(Q,T,K,!1,null,"814926e2",null),X=V.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center w-100",attrs:{id:"contato"}},[a("h2",{staticClass:"mb-1"},[t._v("Contato")]),a("div",{staticClass:"box-holder"},[a("div",{staticClass:"mbox"},t._l(t.contatos,(function(e){return a("div",{key:e.text,staticClass:"d-flex x-item"},[a("icon",{staticClass:"x-icon",attrs:{name:e.icon}}),a("div",{staticClass:"d-flex flex-column"},[a("p",{staticClass:"mb-0 x-text"},[a("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])]),e.hint?a("p",{staticClass:"mb-0 x-hint text-muted"},[t._v(t._s(e.hint))]):t._e()])],1)})),0),a("div",{staticClass:"mbox-2"},[a("div",{staticClass:"d-flex x-item"},[a("icon",{staticClass:"x-icon",attrs:{name:"map-marker"}}),t._m(0)],1)])])])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},[a("p",{staticClass:"mb-0 x-text-2"},[t._v(" Universidade Federal Fluminense"),a("br"),t._v(" Campus Valonguinho"),a("br"),t._v(" Instituto de Biologia."),a("br"),a("br"),t._v(" CEP 24210-130. Niterói, RJ. ")])])}],et={components:{icon:j},data:function(){return{contatos:[{icon:"envelope",text:"ararinhasuff@gmail.com",href:"mailto:ararinhasuff@gmail.com",hint:null},{icon:"phone",text:"(21) 97430-1018",href:"https://api.whatsapp.com/send/?phone=5521974301018",hint:"Louíse Castro, Líder"},{icon:"phone",text:"(21) 2629-2291",href:"tel:2126292291",hint:"Luiz Mors, Orientador"}]}}},at=et,nt=(0,d.Z)(at,Y,tt,!1,null,"8007cb48",null),st=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-content-center align-items-center w-100",attrs:{id:"historia"}},[n("div",{staticClass:"d-flex flex-column"},[n("h2",{staticClass:"mb-2 px-2 w-100"},[t._v("Ararinhas desenvolve")]),n("div",{staticClass:"d-flex holder"},[t._m(0),t._m(1),n("div",{staticClass:"d-flex flex-column"},[n("h3",{staticClass:"d-none"},[t._v("iGEM Design League")]),n("v-img",{staticClass:"x-img mb-4 pr-3",attrs:{width:"224",height:"109",alt:"iGEM Design League",draggable:"false",src:a(5650)}}),t._m(2)],1)])])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column text-1"},[a("p",{staticClass:"px-2 mb-5"},[t._v(" A equipe do Ararinhas foi criada para competir no iGEM Design League, onde criou o projeto K-Herc, o qual pesquisa formas de manipular molecularmente a Salmonella para combater o glioblastoma. "),a("br"),a("br"),t._v(" O K-Herc foi o primeiro projeto de pesquisa desenvolvido pela equipe e foi utilizado no ano de 2021 no iGEM da América Latina. "),a("br"),a("br"),t._v(" No ano de 2022 a equipe mantém a linha de pesquisa e aperfeiçoa os resultados obtidos "),a("i",[t._v("in silico")]),t._v(" e inicia os testes "),a("i",[t._v("in vitro")]),t._v(". ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column text-2"},[a("h3",{staticClass:"mb-2 px-2 w-100"},[t._v("K-Herc")]),a("p",{staticClass:"px-2 mb-5"},[t._v(" O projeto trabalha com métodos de modificar geneticamente as funções da "),a("i",[t._v("Salmonella sp.")]),t._v(", para que ela possa injetar "),a("b",[t._v("caspase-3")]),t._v(" no tumor, fazendo com que ele entre em apoptose. Para isso, a equipe utiliza métodos de predição em bioinformática e outras informações na literatura visando avançar para experimentos "),a("i",[t._v("in vitro")]),t._v(". ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"px-2 text-igem"},[t._v(" O International Genetically Engineered Machine - iGEM é a "),a("span",{staticClass:"highlight"},[t._v("maior competição de biologia sintética do mundo")]),t._v(" e é organizada anualmente pela iGEM Foundation. "),a("br"),a("br"),t._v(" Nela, equipes formadas por estudantes de ensino médio, graduação ou pós graduação "),a("b",[t._v("apresentam seus projetos de biologia sintética")]),t._v(", em um ambiente muito intenso de troca acadêmica, competitividade saudável e de divulgação científica. ")])}],ot={},ct=(0,d.Z)(ot,it,rt,!1,null,"04309d58",null),lt=ct.exports,ut={components:{landing:H,glioblastoma:X,contato:st,historia:lt}},mt=ut,pt=(0,d.Z)(mt,B,W,!1,null,"2a1cd9e2",null),dt=pt.exports;n.Z.use(z);var ft=new z({routes:[{id:"inicio",name:"Início",path:"/",parent:null,navbar:!0,always_show:!0,component:dt},{id:"glioblastoma",name:"Glioblastoma",path:"/glioblastoma",parent:null,navbar:!0,component:null},{id:"contato",name:"Contato",path:"/contato",parent:null,navbar:!0,always_show:!0,component:null},{id:"historia",name:"História",path:"/historia",parent:null,navbar:!0,always_show:!0,component:null},{id:"linha-do-tempo",name:"Linha do tempo",path:"/linha-do-tempo",parent:null,navbar:!0,component:null},{id:"redes-sociais",name:"Redes sociais",path:"/redes-sociais",parent:null,navbar:!0,component:null},{id:"apoie",name:"Apoie",path:"/apoie",parent:null,navbar:!0,always_show:!0,component:null},{id:"entre-para-o-time",name:"Entre para o time",path:"/entre-para-o-time",parent:null,navbar:!0,component:null}]});function ht(){var t=new n.Z({router:ft,render:function(t){return t(I)}});return{app:t}}n.Z.config.productionTip=!1;var vt=ht(),wt=vt.app;wt.$mount("#app")},3777:function(t,e,a){t.exports=a.p+"img/glioblastoma.c68641c0.png"},5650:function(t,e,a){t.exports=a.p+"img/igem-dl.b3919dc0.png"},8922:function(t,e,a){t.exports=a.p+"img/logo.525639e9.png"}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,i){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],s=t[l][1],i=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(o=!1,i<r&&(r=i));o&&(t.splice(l--,1),e=s())}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={179:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,r=n[0],o=n[1],c=n[2],l=0;for(s in o)a.o(o,s)&&(a.m[s]=o[s]);for(c&&c(a),e&&e(n);l<r.length;l++)i=r[l],a.o(t,i)&&t[i]&&t[i][0](),t[r[l]]=0;a.O()},n=self["webpackChunkhomepage_ararinhas"]=self["webpackChunkhomepage_ararinhas"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5856)}));n=a.O(n)})();