(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43203e50"],{7036:function(t,a,e){"use strict";var o=e("b0af"),i=e("99d9"),s=e("490a"),n=function(){var t=this,a=t._self._c;return a(o["a"],{staticClass:"text-center"},[a(i["d"],[t._v(t._s(t.title))]),t.load?a(i["c"],[a(s["a"],{attrs:{size:70,width:7,color:"blue",indeterminate:""}})],1):a(i["c"],[a("h3",{staticClass:"mt-2"},[t._v("No hay convocatoria habilitada para "+t._s(t.process)+".")])])],1)},l=[],r={props:["title","process","load"]},d=r,c=e("2877"),p=Object(c["a"])(d,n,l,!1,null,null,null);a["a"]=p.exports},a1fa:function(t,a,e){"use strict";e.r(a);var o=e("8336"),i=e("b0af"),s=e("99d9"),n=e("62ad"),l=e("a523"),r=e("8fea"),d=e("4bd4"),c=e("132d"),p=e("891e"),u=e("0fd9"),h=e("b974"),g=e("8654"),m=function(){var t=this,a=t._self._c;return a("div",[a(l["a"],{attrs:{"grid-list-xl":"",fluid:""}},[a("header-title",{attrs:{title:"Habilitados aptitud"}}),t.convocatoria.id>0?a("div",[a(u["a"],[a(n["a"],{attrs:{cols:"12"}},[a(i["a"],[a(s["c"],[a("p",{staticClass:"subtitle-1 font-weight-bold"},[t._v(" "+t._s(t.convocatoria.cite)+" ")]),a("p",[t._v(" Lista de postulantes habilitados para la "),a("b",[t._v("prueba de aptitud")]),t._v(" de la modalidad "),a("b",[t._v("A")]),t._v(". ")])])],1)],1)],1),a(u["a"],{staticClass:"mb-1"},[a(n["a"],{attrs:{cols:"12"}},[a(i["a"],[a(s["c"],[a(d["a"],{ref:"formp",on:{submit:function(a){return a.preventDefault(),t.searchPostulantes()}}},[a(u["a"],{staticClass:"mt-1"},[a(n["a"],{attrs:{cols:"12",sm:"4"}},[a(g["a"],{attrs:{label:"CI, nombre, apellidos",hint:"1234567 o 1234567-1G","hide-details":"",clearable:"",filled:""},on:{input:t.changeSearch},model:{value:t.options.search,callback:function(a){t.$set(t.options,"search",a)},expression:"options.search"}})],1),a(n["a"],{attrs:{cols:"12",sm:"3"}},[a(o["a"],{attrs:{type:"submit",large:"",color:"primary"}},[a(c["a"],[t._v("mdi-magnify")]),t._v(" Buscar ")],1),a(o["a"],{staticClass:"ml-1",attrs:{type:"button",large:"",color:"error",loading:t.load_report,disabled:0==t.postulantes.length},on:{click:t.reportAptitud}},[a(c["a"],[t._v("mdi-file-download")]),t._v(" PDF ")],1),a(o["a"],{staticClass:"ml-1 px-0",attrs:{type:"button",large:"",color:"success",loading:t.load_excel,disabled:0==t.postulantes.length},on:{click:t.reportAptitudExcel}},[a(c["a"],[t._v("mdi-file-download")]),t._v(" XLS ")],1)],1)],1)],1),a(r["a"],{staticClass:"elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.postulantes,page:t.options.page,"items-per-page":t.options.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(a){return t.$set(t.options,"page",a)}},scopedSlots:t._u([{key:"item.num",fn:function({item:e}){return[a("td",[t._v(" "+t._s((t.options.page-1)*t.options.itemsPerPage+(t.postulantes.indexOf(e)+1))+" ")])]}}],null,!0)}),a("div",{staticClass:"v-data-footer"},[a(u["a"],[a(n["a"],{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"v-data-footer__select"},[t._v(" Filas por página: "),a(h["a"],{staticClass:"my-0",attrs:{items:[10,20,30,50,100],"hide-details":""},on:{change:function(a){return t.changePerPage()}},model:{value:t.options.itemsPerPage,callback:function(a){t.$set(t.options,"itemsPerPage",a)},expression:"options.itemsPerPage"}})],1)]),a(n["a"],{staticClass:"text-center",attrs:{cols:"12",sm:"8"}},[a(p["a"],{attrs:{length:t.options.pageCount,"total-visible":5},on:{input:t.changePage},model:{value:t.options.page,callback:function(a){t.$set(t.options,"page",a)},expression:"options.page"}})],1)],1)],1)],1)],1)],1)],1)],1):a("div",[a("notify-card",{attrs:{title:t.notify_title,load:t.notify_load,process:"el proceso de admisión"}})],1)],1)],1)},f=[],_=(e("14d9"),e("78d5")),b=e("7036"),v=e("154f"),P=e("9380"),x=e("e499"),A=e.n(x),C=e("4ebb"),y=e.n(C),w=e("2f62"),S=e("bc3a"),k=e.n(S);A.a.vfs=y.a.pdfMake.vfs;var E={name:"admision-verificar-caja",components:{HeaderTitle:_["a"],NotifyCard:b["a"]},data:()=>({notify_title:"Cargando",notify_load:!0,loading:!1,load_report:!1,load_excel:!1,convocatoria:{id:null,cite:"",gestion:""},headers:[{text:"#",align:"start",sortable:!1,value:"num"},{text:"Apellidos y nombres",value:"a_persona.nombre_completo"},{text:"Cédula identidad",value:"a_persona.cedula_dni"},{text:"Teléfono/Celular",value:"a_persona.celular"},{text:"Especialidad",value:"especialidad.descripcion"}],options:{search:"",convocatoria_id:"",institucion_id:"",modalidade:"A",page:1,pageCount:0,itemsPerPage:10},instituciones:[],modalidades:[],postulantes:[],user:null}),created(){this.user=v["a"].getUser(),null==this.user&&this.$router.replace({name:"root"})},mounted(){const t=[8,11,13];this.user&&t.includes(this.user.rid)?(this.options.institucion_id=this.user.ies,this.getParametricas()):this.$router.replace({name:"root"})},methods:{...Object(w["b"])(["toast"]),getParametricas(){this.notify_load=!0,k.a.get(v["a"].getUrlAPI()+"admision/convocatoria/institucion",v["a"].getHeader()).then(t=>{this.convocatoria=t.data.convocatorias?t.data.convocatorias[0]:{id:null,cite:"",gestion:""},this.instituciones=t.data.instituciones,this.options.convocatoria_id=this.convocatoria.id,this.notify_title="Notificación",this.notify_load=!1,this.getPostulantes()}).catch(()=>{this.notify_load=!1,console.error("Parametros no encontrado")})},getPostulantes(){this.loading=!0,k.a.post(v["a"].getUrlAPI()+"admision/habilitados/aptitud",this.options,v["a"].getHeader()).then(t=>{this.loading=!1,this.postulantes=t.data.rows,t.data.count>0&&(this.options.pageCount=Math.floor(t.data.count/this.options.itemsPerPage)+1)}).catch(t=>{this.loading=!1,console.error("Error al cargar registros",t)})},searchPostulantes(){this.$refs.formp.validate()?this.getPostulantes():this.toast({color:"info",text:"Ingrese datos para buscar"})},changeSearch(){this.options.search&&this.options.search.length>2&&this.getPostulantes()},changePerPage(){this.options.page=1,this.getPostulantes()},changePage(){this.getPostulantes()},reportAptitud(){this.load_report=!0,k.a.post(v["a"].getUrlAPI()+"admision/reporte/habilitados/aptitud",this.options,v["a"].getHeader()).then(t=>{const a=(new Date).toISOString(),e=this.instituciones.find(t=>t.id==this.options.institucion_id);let o=[{stack:[{marginTop:-20,fontSize:6,text:"Fecha actual\n"+P["a"].formatDate(a),alignment:"right"},{fontSize:14,bold:!0,color:"#212121",text:this.convocatoria.cite,alignment:"center"},{fontSize:12,bold:!0,color:"#424242",text:"HABILITADOS PARA LA PRUEBA DE APTITUD",alignment:"center"},{fontSize:12,bold:!0,color:"#424242",text:"MODALIDAD A - "+this.convocatoria.gestion,alignment:"center"},{marginTop:8,fontSize:9,columns:[{width:"12%",bold:!0,text:"Departamento: ",style:"header"},{width:"15%",text:e?e.departamento.descripcion:""},{width:"9%",bold:!0,text:"ESFM/UA: "},{width:"64%",text:e?e.nombre:""}]}]}],i={marginTop:5,fontSize:8,layout:"lightHorizontalLines",table:{headerRows:1,widths:["5%","40%","13%","42%"],body:[[{text:"#",bold:!0,fillColor:"#dddddd"},{text:"Apellidos y Nombres",bold:!0,fillColor:"#dddddd"},{text:"Cédula Identidad",bold:!0,fillColor:"#dddddd"},{text:"Especialidad",bold:!0,fillColor:"#dddddd"}]]}},s="";t.data.forEach((t,a)=>{s=`${t.a_persona.paterno?t.a_persona.paterno:""} ${t.a_persona.materno?t.a_persona.materno:""} ${t.a_persona.nombres}`,i.table.body.push([a+1,s,t.a_persona.cedula_dni,t.especialidad.descripcion])}),o.push(i);var n={pageSize:"LETTER",pageMargins:[40,70,40,30],header:P["a"].setting().header,footer:P["a"].setting().footer,content:o};A.a.createPdf(n).download("HabilitadosAptitudModA.pdf"),this.load_report=!1}).catch(t=>{this.load_report=!1,console.error(t)})},reportAptitudExcel(){this.load_excel=!0,k.a.post(v["a"].getUrlAPI()+"admision/reporte/aptitud/esfm/excel",this.options,v["a"].getHeader()).then(t=>{if(200===t.status){let t=document.createElement("a");t.href=v["a"].getServe()+"plantillas/HabilitadosAptitudModalidadA.xlsx",t.download=t.click()}this.load_excel=!1}).catch(t=>{this.load_excel=!1,console.error(t)})}}},I=E,D=e("2877"),H=Object(D["a"])(I,m,f,!1,null,null,null);a["default"]=H.exports}}]);
//# sourceMappingURL=chunk-43203e50.6d0e7f5d.js.map