(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5886c939"],{1681:function(t,a,e){},7036:function(t,a,e){"use strict";var o=e("b0af"),s=e("99d9"),i=e("490a"),n=function(){var t=this,a=t._self._c;return a(o["a"],{staticClass:"text-center"},[a(s["d"],[t._v(t._s(t.title))]),t.load?a(s["c"],[a(i["a"],{attrs:{size:70,width:7,color:"blue",indeterminate:""}})],1):a(s["c"],[a("h3",{staticClass:"mt-2"},[t._v("No hay convocatoria habilitada para "+t._s(t.process)+".")])])],1)},r=[],l={props:["title","process","load"]},c=l,d=e("2877"),u=Object(d["a"])(c,n,r,!1,null,null,null);a["a"]=u.exports},a844:function(t,a,e){"use strict";e("1681");var o=e("8654"),s=e("58df");const i=Object(s["a"])(o["a"]);a["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...o["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var a;t?this.calculateInputHeight():null===(a=this.$refs.input)||void 0===a||a.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"},genInput(){const t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},c973:function(t,a,e){"use strict";e.r(a);var o=e("8336"),s=e("b0af"),i=e("99d9"),n=e("cc20"),r=e("62ad"),l=e("a523"),c=e("8fea"),d=e("169a"),u=e("ce7e"),h=e("4bd4"),p=e("132d"),g=e("891e"),m=e("0fd9"),v=e("b974"),f=e("2fa4"),_=e("8654"),b=e("a844"),x=function(){var t=this,a=t._self._c;return a("div",[a(l["a"],{attrs:{"grid-list-xl":"",fluid:""}},[a("header-title",{attrs:{title:"Revisar habilitado escrita"}}),t.convocatoria.id>0?a("div",[a(m["a"],[a(r["a"],{attrs:{cols:"12"}},[a(s["a"],[a(i["c"],[a("p",{staticClass:"subtitle-1 font-weight-bold"},[t._v(" "+t._s(t.convocatoria.cite)+" ")]),a("p",[t._v(" Lista de resultados de la "),a("b",[t._v("prueba de aptitud")]),t._v(" para su revisión, modalidad "),a("b",[t._v("A")]),t._v(". ")])])],1)],1)],1),a(m["a"],{staticClass:"mb-1"},[a(r["a"],{attrs:{cols:"12"}},[a(s["a"],[a(i["c"],[a(h["a"],{ref:"formp",on:{submit:function(a){return a.preventDefault(),t.searchPostulantes()}}},[a(m["a"],{staticClass:"mt-1"},[a(r["a"],{attrs:{cols:"12",sm:"3"}},[a(v["a"],{attrs:{label:"ESFM/UA",items:t.instituciones,"item-text":"nombre","item-value":"id",rules:[t=>!!t||"Seleccione una opción"],"hide-details":"",filled:""},on:{change:function(a){return t.changeInstitucion()}},model:{value:t.options.institucion_id,callback:function(a){t.$set(t.options,"institucion_id",a)},expression:"options.institucion_id"}})],1),a(r["a"],{attrs:{cols:"12",sm:"3"}},[a(_["a"],{attrs:{label:"CI, nombre, apellidos",hint:"1234567 o 1234567-1G","hide-details":"",clearable:"",filled:""},on:{input:t.changeSearch},model:{value:t.options.search,callback:function(a){t.$set(t.options,"search",a)},expression:"options.search"}})],1),a(r["a"],{attrs:{cols:"12",sm:"3"}},[a(o["a"],{attrs:{type:"submit",large:"",color:"primary",loading:t.load_search}},[a(p["a"],[t._v("mdi-magnify")]),t._v(" Buscar ")],1)],1)],1)],1),a(c["a"],{staticClass:"elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.postulantes,page:t.options.page,"items-per-page":t.options.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(a){return t.$set(t.options,"page",a)}},scopedSlots:t._u([{key:"item.num",fn:function({item:e}){return[a("td",[t._v(" "+t._s((t.options.page-1)*t.options.itemsPerPage+(t.postulantes.indexOf(e)+1))+" ")])]}},{key:"item.a_persona.fecha_nacimiento",fn:function({item:e}){return[a("td",[t._v(" "+t._s(t._f("formatdate")(e.a_persona.fecha_nacimiento))+" ")])]}},{key:"item.estado",fn:function({item:e}){return[a("td",[6==e.estado_id?a(n["a"],{attrs:{small:"",color:"blue lighten-3"}},[t._v(" observado ")]):a(n["a"],{attrs:{small:"",color:"green lighten-4"}},[t._v(" habilitado ")])],1)]}},{key:"item.accion",fn:function({item:e}){return[a("td",[a(o["a"],{attrs:{small:"",color:"success"},on:{click:function(a){return t.confirmObservado(e.id,e.a_persona.nombre_completo,e.observacion)}}},[t._v(" Observar ")])],1)]}}],null,!0)}),a("div",{staticClass:"v-data-footer"},[a(m["a"],[a(r["a"],{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"v-data-footer__select"},[t._v(" Filas por página: "),a(v["a"],{staticClass:"my-0",attrs:{items:[10,20,30,50,100],"hide-details":""},on:{change:function(a){return t.changePerPage()}},model:{value:t.options.itemsPerPage,callback:function(a){t.$set(t.options,"itemsPerPage",a)},expression:"options.itemsPerPage"}})],1)]),a(r["a"],{staticClass:"text-center",attrs:{cols:"12",sm:"8"}},[a(g["a"],{attrs:{length:t.options.pageCount,"total-visible":5},on:{input:t.changePage},model:{value:t.options.page,callback:function(a){t.$set(t.options,"page",a)},expression:"options.page"}})],1)],1)],1)],1)],1)],1)],1)],1):a("div",[a("notify-card",{attrs:{title:t.notify_title,load:t.notify_load,process:"el proceso de admisión"}})],1)],1),a(d["a"],{attrs:{width:"350"},model:{value:t.controlDialog,callback:function(a){t.controlDialog=a},expression:"controlDialog"}},[a(s["a"],[a(h["a"],{ref:"formo",on:{submit:function(a){return a.preventDefault(),t.updateAptitud()}}},[a(i["d"],{staticClass:"headline grey lighten-3",attrs:{"primary-title":""}},[a("span",{staticClass:"headline"},[t._v("Alerta")])]),a(i["c"],{staticClass:"text-center"},[a("p",[t._v(" ¿Hay alguna observación del/la postulante "),a("br"),a("b",{staticClass:"blue--text"},[t._v(t._s(t.nombre))]),t._v("? ")]),a("p",{staticClass:"red--text"},[t._v("¿Está seguro/a de observar al postulante?")]),a(m["a"],{staticClass:"mt-1"},[a(b["a"],{attrs:{outlined:"",label:"Detalle observación",rules:[t=>!!t||"El campo es requerido"],"no-resize":"",rows:"3"},model:{value:t.postulante.observacion,callback:function(a){t.$set(t.postulante,"observacion",a)},expression:"postulante.observacion"}})],1)],1),a(u["a"]),a(i["a"],[a(f["a"]),a(o["a"],{attrs:{type:"submit",color:"success",loading:t.load_send,text:""}},[t._v("Aceptar")]),a(o["a"],{attrs:{color:"red",text:""},on:{click:function(a){t.controlDialog=!1}}},[t._v("Cancelar")])],1)],1)],1)],1)],1)},P=[],y=e("78d5"),w=e("7036"),C=e("154f"),k=e("2f62"),I=e("bc3a"),$=e.n(I),H={name:"admision-verificar-caja",components:{HeaderTitle:y["a"],NotifyCard:w["a"]},data:()=>({notify_title:"Cargando",notify_load:!0,loading:!1,load_search:!1,load_send:!1,convocatoria:{id:null,cite:"",gestion:""},headers:[{text:"#",align:"start",sortable:!1,value:"num"},{text:"Apellidos y nombres",value:"a_persona.nombre_completo"},{text:"Cédula identidad",value:"a_persona.cedula_dni"},{text:"Fecha nacimiento",value:"a_persona.fecha_nacimiento"},{text:"Especialidad",value:"especialidad.descripcion"},{text:"Estado",value:"estado"},{text:"Acción",value:"accion",sortable:!1}],options:{search:"",convocatoria_id:"",institucion_id:"",page:1,pageCount:0,itemsPerPage:10},postulantes:[],nombre:"",postulante:{id:"",convocatoria_id:"",observacion:""},controlDialog:!1,serve:"",user:null}),created(){this.user=C["a"].getUser(),null==this.user&&this.$router.replace({name:"root"})},mounted(){const t=[1,12,13];this.user&&t.includes(this.user.rid)?this.getParametricas():this.$router.replace({name:"root"})},methods:{...Object(k["b"])(["toast"]),getParametricas(){this.notify_load=!0,$.a.get(C["a"].getUrlAPI()+"admision/convocatoria/institucion",C["a"].getHeader()).then(t=>{this.convocatoria=t.data.convocatorias?t.data.convocatorias[0]:{id:null,cite:"",gestion:""},this.instituciones=t.data.instituciones,this.options.convocatoria_id=this.convocatoria.id,this.notify_title="Notificación",this.notify_load=!1}).catch(()=>{this.notify_load=!1,console.error("Parametros no encontrado")})},getPostulantes(){this.loading=!0,$.a.post(C["a"].getUrlAPI()+"admision/lista/habilitado/escrita",this.options,C["a"].getHeader()).then(t=>{this.loading=!1,this.postulantes=t.data.rows,t.data.count>0&&(this.options.pageCount=Math.floor(t.data.count/this.options.itemsPerPage)+1)}).catch(t=>{this.loading=!1,console.error("Error al cargar registros",t)})},searchPostulantes(){this.load_search=!0,this.$refs.formp.validate()?(this.getPostulantes(),this.load_search=!1):(this.load_search=!1,this.toast({color:"info",text:"Seleccione ESFM/UA"}))},changeSearch(){this.options.search&&this.options.search.length>2&&this.getPostulantes()},changePerPage(){this.options.page=1,this.getPostulantes()},changePage(){this.getPostulantes()},changeInstitucion(){this.postulantes=[],this.options.page=1,this.options.pageCount=0,this.options.itemsPerPage=10,this.getPostulantes()},confirmObservado(t,a,e){this.nombre=a,this.postulante.id=t,this.postulante.convocatoria_id=this.options.convocatoria_id,this.postulante.observacion=e,this.controlDialog=!0},updateAptitud(){this.$refs["formo"][0].validate()?(this.load_send=!0,$.a.post(C["a"].getUrlAPI()+"admision/habilitado/escrita/observar",this.postulante,C["a"].getHeader()).then(t=>{this.load_send=!1,this.postulante.id="",this.postulante.observacion="",this.$refs.formo&&this.$refs["formo"][0].reset(),this.toast({color:"success",text:t.data}),this.controlDialog=!1,this.getPostulantes()}).catch(()=>{this.load_send=!1,this.toast({color:"error",text:"No se pudo confirmar"})})):this.toast({color:"info",text:"Ingrese la observación"})}}},A=H,D=e("2877"),N=Object(D["a"])(A,x,P,!1,null,null,null);a["default"]=N.exports}}]);
//# sourceMappingURL=chunk-5886c939.6650a6ba.js.map