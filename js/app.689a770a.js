(function(){"use strict";var t={3795:function(t,a,s){var n=s(5130),e=s(6768);const o={class:"container mt-4"},r={class:"navbar navbar-expand-lg navbar-dark bg-custom shadow-sm mb-4"},i={class:"container-fluid"},c={class:"collapse navbar-collapse justify-content-start",id:"navbarNav"},l={class:"navbar-nav ms-auto"},d={class:"nav-item"},u={class:"nav-item"},k={class:"nav-item"};function v(t,a,s,n,v,m){const f=(0,e.g2)("router-link"),b=(0,e.g2)("router-view");return(0,e.uX)(),(0,e.CE)("div",o,[(0,e.Lk)("nav",r,[(0,e.Lk)("div",i,[(0,e.bF)(f,{to:"/",class:"navbar-brand fs-2 text-light fw-bold d-flex align-items-center"},{default:(0,e.k6)((()=>a[0]||(a[0]=[(0,e.Lk)("i",{class:"bi bi-list-ul me-2"},null,-1),(0,e.eW)(" Gestor de Tareas ")]))),_:1}),a[4]||(a[4]=(0,e.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,e.Lk)("div",c,[(0,e.Lk)("ul",l,[(0,e.Lk)("li",d,[(0,e.bF)(f,{to:"/manual",class:"nav-link btn btn-custom text-light rounded-3 me-2 px-4 py-2 transition-all hover-effect"},{default:(0,e.k6)((()=>a[1]||(a[1]=[(0,e.Lk)("i",{class:"bi bi-file-earmark-plus me-2"},null,-1),(0,e.eW)(" Agregar Tareas Manualmente ")]))),_:1})]),(0,e.Lk)("li",u,[(0,e.bF)(f,{to:"/api",class:"nav-link btn btn-custom text-light rounded-3 me-2 px-4 py-2 transition-all hover-effect"},{default:(0,e.k6)((()=>a[2]||(a[2]=[(0,e.Lk)("i",{class:"bi bi-cloud-download me-2"},null,-1),(0,e.eW)(" Extraer Tareas de la API ")]))),_:1})]),(0,e.Lk)("li",k,[(0,e.bF)(f,{to:"/combined",class:"nav-link btn btn-custom text-light rounded-3 me-2 px-4 py-2 transition-all hover-effect"},{default:(0,e.k6)((()=>a[3]||(a[3]=[(0,e.Lk)("i",{class:"bi bi-columns me-2"},null,-1),(0,e.eW)(" Vista Combinada ")]))),_:1})])])])])]),(0,e.bF)(b)])}var m={},f=s(1241);const b=(0,f.A)(m,[["render",v],["__scopeId","data-v-03d70dce"]]);var p=b,h=s(1387);const L={class:"container mt-4"},T={class:"row"},g={class:"col-md-6 offset-md-3 mb-4"},x={class:"row"},w={class:"col-md-8 offset-md-2"};function y(t,a,s,n,o,r){const i=(0,e.g2)("task-form"),c=(0,e.g2)("task-list");return(0,e.uX)(),(0,e.CE)("div",L,[a[0]||(a[0]=(0,e.Lk)("div",{class:"row"},[(0,e.Lk)("div",{class:"col-12 text-center mb-4"},[(0,e.Lk)("h2",null,"Agregar Tareas Manualmente")])],-1)),(0,e.Lk)("div",T,[(0,e.Lk)("div",g,[(0,e.bF)(i,{onAddTask:r.addTask},null,8,["onAddTask"])])]),(0,e.Lk)("div",x,[(0,e.Lk)("div",w,[(0,e.bF)(c,{tasks:o.tasks},null,8,["tasks"])])])])}s(4114);const A={class:"task-form"},C={class:"mb-3"};function E(t,a,s,o,r,i){return(0,e.uX)(),(0,e.CE)("div",A,[(0,e.Lk)("form",{onSubmit:a[1]||(a[1]=(0,n.D$)(((...t)=>i.addTask&&i.addTask(...t)),["prevent"]))},[(0,e.Lk)("div",C,[(0,e.bo)((0,e.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>r.taskText=t),class:"form-control",placeholder:"Nueva Tarea"},null,512),[[n.Jo,r.taskText]])]),a[2]||(a[2]=(0,e.Lk)("button",{type:"submit",class:"btn btn-primary"},"Agg Tarea",-1))],32)])}var F={data(){return{taskText:""}},methods:{addTask(){this.taskText.trim()&&(this.$emit("add-task",this.taskText),this.taskText="")}}};const _=(0,f.A)(F,[["render",E]]);var j=_;const O={class:"task-list"};function X(t,a,s,n,o,r){const i=(0,e.g2)("task-item");return(0,e.uX)(),(0,e.CE)("div",O,[a[0]||(a[0]=(0,e.Lk)("h3",null,"Lista de Tareas",-1)),((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(s.tasks,(t=>((0,e.uX)(),(0,e.Wv)(i,{key:t.id,task:t},null,8,["task"])))),128))])}var I=s(4232);const P={class:"task-item"};function W(t,a,s,n,o,r){return(0,e.uX)(),(0,e.CE)("div",P,[(0,e.Lk)("span",null,(0,I.v_)(s.task.text),1)])}var N={props:{task:Object}};const D=(0,f.A)(N,[["render",W]]);var M=D,V={components:{TaskItem:M},props:{tasks:Array}};const $=(0,f.A)(V,[["render",X]]);var G=$,J={components:{TaskForm:j,TaskList:G},data(){return{tasks:[]}},methods:{addTask(t){this.tasks.push({id:Date.now(),text:t})}}};const K=(0,f.A)(J,[["render",y]]);var S=K;const U={class:"container mt-4"},q={class:"row"},z={class:"col-12 text-center mb-4"},B={class:"row"},H={class:"col-md-8 offset-md-2"};function Q(t,a,s,n,o,r){const i=(0,e.g2)("task-list");return(0,e.uX)(),(0,e.CE)("div",U,[(0,e.Lk)("div",q,[(0,e.Lk)("div",z,[(0,e.Lk)("button",{onClick:a[0]||(a[0]=(...t)=>r.fetchTasks&&r.fetchTasks(...t)),class:"btn btn-primary"},"Extraer Tareas de la API")])]),(0,e.Lk)("div",B,[(0,e.Lk)("div",H,[(0,e.bF)(i,{tasks:o.tasks},null,8,["tasks"])])])])}s(1454);var R={components:{TaskList:G},data(){return{tasks:[]}},methods:{async fetchTasks(){const t=await fetch("https://dummyjson.com/todos"),a=await t.json();this.tasks=a.todos.map((t=>({id:t.id,text:t.todo})))}}};const Y=(0,f.A)(R,[["render",Q]]);var Z=Y;const tt={class:"container mt-4"},at={class:"row mb-4"},st={class:"col-md-6 offset-md-3"},nt={class:"row mb-4"},et={class:"col-12 text-center"},ot={class:"row"},rt={class:"col-md-8 offset-md-2"};function it(t,a,s,n,o,r){const i=(0,e.g2)("task-form"),c=(0,e.g2)("task-list");return(0,e.uX)(),(0,e.CE)("div",tt,[a[1]||(a[1]=(0,e.Lk)("div",{class:"row"},[(0,e.Lk)("div",{class:"col-12 text-center mb-4"},[(0,e.Lk)("h2",null,"Vista Combinada de Tareas")])],-1)),(0,e.Lk)("div",at,[(0,e.Lk)("div",st,[(0,e.bF)(i,{onAddTask:r.addTask},null,8,["onAddTask"])])]),(0,e.Lk)("div",nt,[(0,e.Lk)("div",et,[(0,e.Lk)("button",{onClick:a[0]||(a[0]=(...t)=>r.fetchTasks&&r.fetchTasks(...t)),class:"btn btn-primary"},"Extraer Tareas de la API")])]),(0,e.Lk)("div",ot,[(0,e.Lk)("div",rt,[(0,e.bF)(c,{tasks:o.tasks},null,8,["tasks"])])])])}var ct={components:{TaskForm:j,TaskList:G},data(){return{tasks:[]}},methods:{addTask(t){this.tasks.push({id:Date.now(),text:t})},async fetchTasks(){const t=await fetch("https://dummyjson.com/todos"),a=await t.json();this.tasks=[...this.tasks,...a.todos.map((t=>({id:t.id,text:t.todo})))]}},created(){this.fetchTasks()}};const lt=(0,f.A)(ct,[["render",it]]);var dt=lt;const ut=[{path:"/manual",component:S},{path:"/api",component:Z},{path:"/combined",component:dt}],kt=(0,h.aE)({history:(0,h.LA)(),routes:ut});var vt=kt;const mt=(0,n.Ef)(p);mt.use(vt),mt.mount("#app")}},a={};function s(n){var e=a[n];if(void 0!==e)return e.exports;var o=a[n]={exports:{}};return t[n].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(a,n,e,o){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],e=t[d][1],o=t[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(d--,1);var l=e();void 0!==l&&(a=l)}}return a}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,e,o]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var n in a)s.o(a,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={524:0};s.O.j=function(a){return 0===t[a]};var a=function(a,n){var e,o,r=n[0],i=n[1],c=n[2],l=0;if(r.some((function(a){return 0!==t[a]}))){for(e in i)s.o(i,e)&&(s.m[e]=i[e]);if(c)var d=c(s)}for(a&&a(n);l<r.length;l++)o=r[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(d)},n=self["webpackChunkgestor_tareas_vue"]=self["webpackChunkgestor_tareas_vue"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(3795)}));n=s.O(n)})();
//# sourceMappingURL=app.689a770a.js.map