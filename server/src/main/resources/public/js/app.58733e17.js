(function(){"use strict";var t={6129:function(t,e,o){var n=o(9242),a=o(3396);const s={class:"content-wrapper"};function r(t,e,o,n,r,i){const l=(0,a.up)("header-component"),c=(0,a.up)("router-view"),d=(0,a.up)("footer-component"),u=(0,a.up)("fa-icon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a._)("div",s,[(0,a.Wm)(c)]),(0,a.Wm)(d),r.btnUpEnabled?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn-up",onClick:e[0]||(e[0]=(...t)=>i.btnUpClick&&i.btnUpClick(...t))},[(0,a.Wm)(u,{icon:["fas","arrow-up"]})])):(0,a.kq)("",!0)],64)}var i=o(7139),l=o.p+"img/logo.7c5e7bce.png";const c=t=>((0,a.dD)("data-v-bd7c34aa"),t=t(),(0,a.Cn)(),t),d={class:"header-inner"},u=c((()=>(0,a._)("div",{class:"logo"},[(0,a._)("img",{src:l,alt:"nologo"})],-1))),m={class:"account-group"},p={key:3,class:"profile-mini"},h=c((()=>(0,a._)("div",{class:"header-line"},[(0,a._)("div",{class:"logo-part"}),(0,a._)("div",{class:"active-part"})],-1)));function f(t,e,o,n,s,r){const l=(0,a.up)("navigation-menu"),c=(0,a.up)("login-component"),f=(0,a.up)("register-component");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",d,[u,(0,a.Wm)(l),(0,a._)("div",m,[r.isLogged?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn-register inverse",onClick:e[0]||(e[0]=t=>s.showRegister=!0)},"Register")),r.isLogged?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn-login",onClick:e[1]||(e[1]=t=>s.showLogin=!0)},"Login")),r.isLogged?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"btn-logout inverse",onClick:e[2]||(e[2]=(...t)=>r.logout&&r.logout(...t))},"Logout")):(0,a.kq)("",!0),r.isLogged&&r.userData?((0,a.wg)(),(0,a.iD)("div",p,(0,i.zw)(r.userData.username),1)):(0,a.kq)("",!0)])]),h,((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(c,{show:s.showLogin,onClose:e[3]||(e[3]=t=>s.showLogin=!1)},null,8,["show"]),(0,a.Wm)(f,{show:s.showRegister,onClose:e[4]||(e[4]=t=>s.showRegister=!1)},null,8,["show"])]))])}const g={class:"menu"};function w(t,e,o,n,s,r){const i=(0,a.up)("navigation-item");return(0,a.wg)(),(0,a.iD)("nav",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.routes,(t=>((0,a.wg)(),(0,a.j4)(i,{key:t.id,routeName:t.name,text:t.text},null,8,["routeName","text"])))),128))])}const v={class:"menu-item"};function b(t,e,o,n,s,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(l,{to:o.routeName},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.text),1)])),_:1},8,["to"])])}var _={props:{routeName:String,text:String}},y=o(89);const k=(0,y.Z)(_,[["render",b],["__scopeId","data-v-6243b915"]]);var D=k,C={data(){return{routes:[{name:"home",text:"Home"},{name:"facility",text:"Facilities"},{name:"staff",text:"Staff"},{name:"about",text:"About"},{name:"contact",text:"Contact"}]}},components:{NavigationItem:D}};const S=(0,y.Z)(C,[["render",w],["__scopeId","data-v-6aae12f6"]]);var T=S;const x=(0,a.Uk)(" Login "),U={class:"info-block"},I={key:0,class:"loader"},L={key:1,class:"error"};function A(t,e,o,s,r,l){const c=(0,a.up)("modal-component");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[3]||(e[3]=(0,n.iM)(((...t)=>l.loginSubmit&&l.loginSubmit(...t)),["prevent"]))},[(0,a.Wm)(c,{show:o.show,disabled:r.loading,buttonText:"login",onClose:e[2]||(e[2]=e=>t.$emit("close"))},{header:(0,a.w5)((()=>[x])),body:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"text",class:"input-primary",name:"username",placeholder:"username","onUpdate:modelValue":e[0]||(e[0]=t=>r.formData.username=t)},null,512),[[n.nr,r.formData.username]]),(0,a.wy)((0,a._)("input",{type:"password",class:"input-primary",name:"password",placeholder:"password","onUpdate:modelValue":e[1]||(e[1]=t=>r.formData.password=t)},null,512),[[n.nr,r.formData.password]]),(0,a._)("div",U,[r.loading?((0,a.wg)(),(0,a.iD)("div",I)):(0,a.kq)("",!0),r.error?((0,a.wg)(),(0,a.iD)("div",L,(0,i.zw)(r.errorMessage),1)):(0,a.kq)("",!0)])])),_:1},8,["show","disabled"])],32)}const E={key:0,class:"modal-mask"},H={class:"modal-wrapper"},$={class:"modal-header"},O=(0,a.Uk)(" default heading "),M={class:"modal-content"},N={class:"modal-body"},F=(0,a.Uk)(" default body "),R={class:"modal-footer"},j=["disabled"],W=["disabled"];function Z(t,e,o,s,r,l){return(0,a.wg)(),(0,a.j4)(n.uT,{name:"modal"},{default:(0,a.w5)((()=>[o.show?((0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",H,[(0,a._)("div",{class:"modal-container",style:(0,i.j5)({width:o.width+"px"})},[(0,a._)("div",$,[(0,a.WI)(t.$slots,"header",{},(()=>[O]),!0)]),(0,a._)("div",M,[(0,a._)("div",N,[(0,a.WI)(t.$slots,"body",{},(()=>[F]),!0)]),(0,a._)("div",R,[(0,a.WI)(t.$slots,"footer",{},(()=>[(0,a._)("button",{type:"button",disabled:l.isDisabled,class:"button-primary",onClick:e[0]||(e[0]=e=>t.$emit("close"))},"cancel",8,j),(0,a._)("button",{type:"submit",disabled:l.isDisabled,class:"button-primary inverse",onClick:e[1]||(e[1]=e=>t.$emit("confirm"))},(0,i.zw)(o.buttonText),9,W)]),!0)])])],4)])])):(0,a.kq)("",!0)])),_:3})}var z={props:{show:Boolean,buttonText:String,width:Number,disabled:Boolean},computed:{isDisabled(){return this.disabled}},watch:{show(t,e){document.body.style.overflowY=1==t?"hidden":"scroll"}}};const V=(0,y.Z)(z,[["render",Z],["__scopeId","data-v-746997c3"]]);var B=V,q={props:{show:Boolean},components:{ModalComponent:B},data(){return{loading:!1,error:!1,errorMessage:"",formData:{username:"",password:""}}},methods:{resetInputData(){this.formData.username="",this.formData.password=""},resetValidation(){this.errorMessage="",this.error=!1},async loginSubmit(t){this.loading=!0,this.resetValidation();try{await this.$store.dispatch("auth/login",this.formData)}catch(e){this.errorMessage=e,this.loading=!1,this.error=!0}this.error||(this.resetValidation(),this.resetInputData(),this.loading=!1,this.$emit("close"))}}};const Y=(0,y.Z)(q,[["render",A],["__scopeId","data-v-3177d423"]]);var P=Y;const G=(0,a.Uk)(" Register a new account "),J={class:"row"},K={class:"col-6"},Q={class:"col-6"},X={class:"info-block"},tt={key:0,class:"loader"},et={key:1,class:"error"};function ot(t,e,o,s,r,l){const c=(0,a.up)("modal-component");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[6]||(e[6]=(0,n.iM)(((...t)=>l.registerSubmit&&l.registerSubmit(...t)),["prevent"]))},[(0,a.Wm)(c,{show:o.show,disabled:r.loading,width:500,buttonText:"register",onClose:e[5]||(e[5]=e=>t.$emit("close"))},{header:(0,a.w5)((()=>[G])),body:(0,a.w5)((()=>[(0,a._)("div",J,[(0,a._)("div",K,[(0,a.wy)((0,a._)("input",{type:"text",class:"input-primary",name:"username",placeholder:"username","onUpdate:modelValue":e[0]||(e[0]=t=>r.formData.username=t)},null,512),[[n.nr,r.formData.username]]),(0,a.wy)((0,a._)("input",{type:"text",class:"input-primary",name:"firstname",placeholder:"firstname","onUpdate:modelValue":e[1]||(e[1]=t=>r.formData.firstname=t)},null,512),[[n.nr,r.formData.firstname]]),(0,a.wy)((0,a._)("input",{type:"text",class:"input-primary",name:"lastname",placeholder:"lastname","onUpdate:modelValue":e[2]||(e[2]=t=>r.formData.lastname=t)},null,512),[[n.nr,r.formData.lastname]])]),(0,a._)("div",Q,[(0,a.wy)((0,a._)("input",{type:"password",class:"input-primary",name:"password",placeholder:"password","onUpdate:modelValue":e[3]||(e[3]=t=>r.formData.password=t)},null,512),[[n.nr,r.formData.password]]),(0,a.wy)((0,a._)("input",{type:"password",class:"input-primary",name:"password-confirm",placeholder:"confirm password","onUpdate:modelValue":e[4]||(e[4]=t=>r.formData.passwordConfirm=t)},null,512),[[n.nr,r.formData.passwordConfirm]])]),(0,a._)("div",X,[r.loading?((0,a.wg)(),(0,a.iD)("div",tt)):(0,a.kq)("",!0),r.error?((0,a.wg)(),(0,a.iD)("div",et,(0,i.zw)(r.errorMessage),1)):(0,a.kq)("",!0)])])])),_:1},8,["show","disabled"])],32)}var nt={props:{show:Boolean},data(){return{loading:!1,error:!1,errorMessage:"",formData:{username:"",firstname:"",lastname:"",password:"",passwordConfirm:""}}},components:{ModalComponent:B},methods:{resetInputData(){this.formData.username="",this.formData.firstname="",this.formData.lastname="",this.formData.password="",this.formData.passwordConfirm=""},resetValidation(){this.errorMessage="",this.error=!1},async registerSubmit(t){this.loading=!0,this.resetValidation();let e={username:this.formData.username,firstname:this.formData.firstname,lastname:this.formData.lastname,password:this.formData.password};this.error=!1;try{await this.$store.dispatch("auth/signup",e)}catch(o){this.errorMessage=o,this.loading=!1,this.error=!0}this.error||(this.resetValidation(),this.resetInputData(),this.loading=!1,this.$emit("close"))}}};const at=(0,y.Z)(nt,[["render",ot],["__scopeId","data-v-469e614d"]]);var st=at,rt={components:{NavigationMenu:T,LoginComponent:P,RegisterComponent:st},data(){return{showLogin:!1,showRegister:!1}},computed:{isLogged(){return this.$store.getters["auth/isLogged"]},userData(){return this.$store.getters["auth/user"]}},methods:{logout(t){this.$store.dispatch("auth/logout")}}};const it=(0,y.Z)(rt,[["render",f],["__scopeId","data-v-bd7c34aa"]]);var lt=it;const ct=t=>((0,a.dD)("data-v-06ad5542"),t=t(),(0,a.Cn)(),t),dt=ct((()=>(0,a._)("div",{class:"container"}," © 2022 All Rights Reserved ",-1))),ut=[dt];function mt(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("footer",null,ut)}var pt={};const ht=(0,y.Z)(pt,[["render",mt],["__scopeId","data-v-06ad5542"]]);var ft=ht,gt={components:{HeaderComponent:lt,FooterComponent:ft},created(){window.addEventListener("scroll",this.handleScroll),this.$store.dispatch("auth/checkAuthentication"),this.$store.dispatch("facility/fetchFacilities")},data(){return{btnUpEnabled:!1}},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{btnUpClick(t){window.scrollTo(0,0)},handleScroll(t){this.btnUpEnabled=window.scrollY>=window.innerHeight}}};const wt=(0,y.Z)(gt,[["render",r]]);var vt=wt,bt=o(678),_t=o.p+"img/home-header-image.f42ff8df.png";const yt=t=>((0,a.dD)("data-v-7ce34d8e"),t=t(),(0,a.Cn)(),t),kt={class:"page-header"},Dt=yt((()=>(0,a._)("h1",null,"HOME",-1))),Ct={class:"container"},St={class:"row"},Tt={class:"info col-6"},xt=yt((()=>(0,a._)("h2",null,[(0,a._)("div",{class:"animated-1"},"Feel Great."),(0,a._)("div",{class:"animated-2"},"Body and Mind.")],-1))),Ut=yt((()=>(0,a._)("div",{class:"text animated-3"},"Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.",-1))),It=yt((()=>(0,a._)("div",{class:"col-6"},[(0,a._)("img",{src:_t,alt:"noimage"})],-1))),Lt={class:"secondary",ref:"sectionGetStarted"},At={class:"container"},Et={class:"container"},Ht={class:"primary"},$t={class:"container"},Ot={class:"container"},Mt={class:"fade-wrapper"},Nt=yt((()=>(0,a._)("span",null,"see more",-1)));function Ft(t,e,o,n,s,r){const i=(0,a.up)("price-section"),l=(0,a.up)("facility-section"),c=(0,a.up)("fa-icon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",kt,[Dt,(0,a._)("div",Ct,[(0,a._)("div",St,[(0,a._)("div",Tt,[xt,Ut,(0,a._)("button",{class:"btn-join-now animated-4",onClick:e[0]||(e[0]=(...t)=>r.btnJoinNowClick&&r.btnJoinNowClick(...t))},"Join Now")]),It])])]),(0,a._)("section",Lt,[(0,a._)("div",At,[(0,a._)("h2",{ref:t=>s.scrollAnimated.push(t),class:"scroll-animated"},"GET STARTED.",512),(0,a._)("h3",{ref:t=>s.scrollAnimated.push(t),class:"scroll-animated"},"CHOOSE THE PLAN THAT SUITS YOU.",512)])],512),(0,a._)("section",null,[(0,a._)("div",Et,[(0,a.Wm)(i)])]),(0,a._)("section",Ht,[(0,a._)("div",$t,[(0,a._)("h2",{ref:t=>s.scrollAnimated.push(t),class:"scroll-animated"},"VAST SELECTION.",512),(0,a._)("h3",{ref:t=>s.scrollAnimated.push(t),class:"scroll-animated"},"FIND THE PLACE THAT WORKS FOR YOU.",512)])]),(0,a._)("section",null,[(0,a._)("div",Ot,[(0,a.Wm)(l)]),(0,a._)("div",Mt,[(0,a._)("button",{class:"btn-more",onClick:e[1]||(e[1]=(...t)=>r.btnMoreClick&&r.btnMoreClick(...t))},[(0,a.Wm)(c,{icon:["fas","arrow-right"]}),Nt])])])],64)}const Rt={class:"prices"};function jt(t,e,o,n,s,r){const i=(0,a.up)("price-item");return(0,a.wg)(),(0,a.iD)("div",Rt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.prices,((t,e)=>((0,a.wg)(),(0,a.j4)(i,{key:e,price:t},null,8,["price"])))),128))])}const Wt=t=>((0,a.dD)("data-v-2a6c8a62"),t=t(),(0,a.Cn)(),t),Zt={class:"text"},zt={class:"price"},Vt=Wt((()=>(0,a._)("span",{class:"unit"},"RSD",-1))),Bt=Wt((()=>(0,a._)("div",{class:"timespan"},"/monthly",-1)));function qt(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["item nohighlight",{"bold-item":o.price.bold}])},[(0,a._)("div",{class:"header",style:(0,i.j5)({backgroundColor:o.price.color})},(0,i.zw)(o.price.title),5),(0,a._)("div",Zt,(0,i.zw)(o.price.text),1),(0,a._)("div",zt,[(0,a.Uk)((0,i.zw)(o.price.amount)+" ",1),Vt]),Bt,(0,a._)("button",{class:(0,i.C_)({inverse:o.price.bold})},"Learn More",2)],2)}var Yt={props:{price:{title:String,color:String,amount:Number,text:String,bold:Boolean}},created(){window.addEventListener("scroll",this.handleScroll)},mounted(){this.checkAnimations()},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(t){this.checkAnimations()},checkAnimations(){const t=this.$el;let e=window.innerHeight,o=t.getBoundingClientRect().top;o-e+t.offsetHeight<=0&&t.classList.add("appear")}}};const Pt=(0,y.Z)(Yt,[["render",qt],["__scopeId","data-v-2a6c8a62"]]);var Gt=Pt,Jt={components:{PriceItem:Gt},data(){return{prices:[{title:"bronze",color:"#CD7F32",amount:3e3,text:"lorem ipsum",bold:!1},{title:"silver",color:"#C0C0C0",amount:3e3,text:"dolor sit amet",bold:!1},{title:"gold",color:"#FFD700",amount:3e3,text:"consectetur adipiscing",bold:!0}]}}};const Kt=(0,y.Z)(Jt,[["render",jt]]);var Qt=Kt;const Xt={class:"facilities row"};function te(t,e,o,n,s,r){const i=(0,a.up)("facility-item");return(0,a.wg)(),(0,a.iD)("div",Xt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.facilities,((t,e)=>((0,a.wg)(),(0,a.j4)(i,{class:"col-6",key:e,facility:t},null,8,["facility"])))),128))])}const ee=t=>((0,a.dD)("data-v-42071698"),t=t(),(0,a.Cn)(),t),oe={class:"item"},ne={class:"item-inner"},ae={class:"header"},se={class:"type"},re={class:"body"},ie=ee((()=>(0,a._)("td",null,"available: ",-1))),le=ee((()=>(0,a._)("td",null,"content: ",-1))),ce=ee((()=>(0,a._)("td",null,"grade: ",-1))),de=ee((()=>(0,a._)("td",null,"work hours: ",-1)));function ue(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("div",oe,[(0,a._)("div",ne,[(0,a._)("div",ae,[(0,a.Uk)((0,i.zw)(o.facility.name)+" ",1),(0,a._)("span",se,"/ "+(0,i.zw)(o.facility.facilityType),1)]),(0,a._)("div",re,[(0,a._)("table",null,[(0,a._)("tr",null,[ie,(0,a._)("td",null,(0,i.zw)(o.facility.available),1)]),(0,a._)("tr",null,[le,(0,a._)("td",null,(0,i.zw)(o.facility.content),1)]),(0,a._)("tr",null,[ce,(0,a._)("td",null,(0,i.zw)(o.facility.grade),1)]),(0,a._)("tr",null,[de,(0,a._)("td",null,(0,i.zw)(r.workHourDisplay),1)])])])])])}var me={props:{facility:{available:Boolean,content:String,facilityType:String,name:String,grade:Number,workingHours:{startHour:Number,startMinute:Number,endHour:Number,endMinute:Number}}},computed:{workHourDisplay(){let t=this.facility.workingHours;return`${t.startHour}:${t.startMinute} - ${t.endHour}:${t.endMinute}`}},created(){window.addEventListener("scroll",this.handleScroll)},mounted(){this.checkAnimations()},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(t){this.checkAnimations()},checkAnimations(){const t=this.$el;let e=window.innerHeight,o=t.getBoundingClientRect().top;o-e+t.offsetHeight<=0&&t.classList.add("appear")}}};const pe=(0,y.Z)(me,[["render",ue],["__scopeId","data-v-42071698"]]);var he=pe,fe={components:{FacilityItem:he},computed:{facilities(){return this.$store.getters["facility/facilities"]}}};const ge=(0,y.Z)(fe,[["render",te],["__scopeId","data-v-9fddf1da"]]);var we=ge,ve={components:{PriceSection:Qt,FacilitySection:we},data(){return{scrollAnimated:[]}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},mounted(){this.checkAnimations()},methods:{handleScroll(t){this.checkAnimations()},checkAnimations(){const t=this.scrollAnimated;let e=window.innerHeight;for(let o of t){let t=o.getBoundingClientRect().top;t-e+o.offsetHeight<=0&&o.classList.add("appear")}},btnJoinNowClick(){window.scrollTo(0,this.$refs.sectionGetStarted.offsetTop)},btnMoreClick(){this.$router.push("/facility"),window.scrollTo(0,0)}}};const be=(0,y.Z)(ve,[["render",Ft],["__scopeId","data-v-7ce34d8e"]]);var _e=be;function ye(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("h1",null,"FACILITY")}var ke={};const De=(0,y.Z)(ke,[["render",ye]]);var Ce=De;function Se(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("h1",null,"STAFF")}var Te={};const xe=(0,y.Z)(Te,[["render",Se]]);var Ue=xe;function Ie(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("h1",null,"ABOUT")}var Le={};const Ae=(0,y.Z)(Le,[["render",Ie]]);var Ee=Ae;function He(t,e,o,n,s,r){return(0,a.wg)(),(0,a.iD)("h1",null,"CONTACT")}var $e={};const Oe=(0,y.Z)($e,[["render",He]]);var Me=Oe;const Ne=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:_e},{path:"/facility",name:"facility",component:Ce},{path:"/staff",name:"staff",component:Ue},{path:"/about",name:"about",component:Ee},{path:"/contact",name:"contact",component:Me},{path:"/:all(.*)",redirect:"/home"}],Fe=(0,bt.p7)({history:(0,bt.PO)("/"),routes:Ne});var Re=Fe,je=o(65),We={setUser(t,e){t.token=e.token,t.user=e.user},setToken(t,e){t.token=e.token},setUserData(t,e){t.user=e.user}};o(1703);let Ze=!0,ze="http://localhost:9999";Ze&&(ze="");var Ve={serverUrl:ze};let Be;var qe={async login(t,e){const o=await fetch(`${Ve.serverUrl}/api/auth/login`,{method:"POST",body:JSON.stringify({username:e.username,password:e.password})}),n=await o.json();if(!o.ok){const t=new Error(n.message||"Failed to authenticate.");throw t}const a=+n.expirationTime-(new Date).getTime();localStorage.setItem("token",n.token),localStorage.setItem("tokenExpiration",n.expirationTime),Be=setTimeout((()=>{t.dispatch("logout")}),a),t.commit("setToken",{token:n.token}),t.dispatch("getUserData",{token:n.token})},async signup(t,e){},async getUserData(t,e){const o=await fetch(`${Ve.serverUrl}/api/users/get`,{method:"GET",headers:{Authorization:"Bearer "+e.token}}),n=await o.json();if(!o.ok){const t=new Error(n.message||"Failed to fetch user data.");throw t}console.log(n),t.commit("setUserData",{user:n})},logout(t,e){localStorage.removeItem("token"),localStorage.removeItem("tokenExpiration"),clearTimeout(Be),t.commit("setUser",{token:null,user:null})},checkAuthentication(t,e){const o=localStorage.getItem("token"),n=localStorage.getItem("tokenExpiration"),a=+n-(new Date).getTime();a<0||(Be=setTimeout((()=>{t.dispatch("logout")}),a),o&&(t.commit("setToken",{token:o}),t.dispatch("getUserData",{token:o})))}},Ye={user(t){return t.user},isLogged(t){return!!t.token}},Pe={namespaced:!0,state(){return{user:null,token:null}},mutations:We,actions:qe,getters:Ye},Ge={setFacilities(t,e){t.facilities=e.facilities}},Je={async fetchFacilities(t,e){const o=await fetch(`${Ve.serverUrl}/api/facilities/all`,{method:"GET"}),n=await o.json();if(!o.ok){const t=new Error(n.message||"Failed to fetch user data.");throw t}console.log(n),t.commit("setFacilities",{facilities:n})}},Ke={facilities(t){return JSON.parse(JSON.stringify(t.facilities))}},Qe={namespaced:!0,state(){return{facilities:[]}},mutations:Ge,actions:Je,getters:Ke};const Xe=(0,je.MT)({modules:{auth:Pe,facility:Qe}});var to=Xe,eo=o(8125),oo=o(8321),no=o(7749);eo.vI.add(oo.mRB);const ao=(0,n.ri)(vt);ao.use(Re),ao.use(to),ao.component("fa-icon",no.GN),ao.mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,s){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],a=t[d][1],s=t[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,a,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var d=l(o)}for(e&&e(n);c<r.length;c++)s=r[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(d)},n=self["webpackChunkFitpass"]=self["webpackChunkFitpass"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6129)}));n=o.O(n)})();
//# sourceMappingURL=app.58733e17.js.map