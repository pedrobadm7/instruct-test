(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5,7],{263:function(e,t,n){"use strict";n.r(t);n(190),n(268);var o={props:{search:{type:[String,Number],default:String}}},r=n(57),l=n(278),c=n.n(l),d=n(322),f=n(323),m=n(324),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-form"},[n("h1",[e._v("Procura por alguém em específico?")]),e._v(" "),n("v-row",{staticClass:"v-form",attrs:{align:"center",justify:"space-around"}},[n("v-col",{staticClass:"v-col",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{staticClass:"v-text-field",attrs:{type:"search",placeholder:"Procure por um nome ou categoria de empresa",value:e.search},nativeOn:{input:function(t){return e.$emit("input",t.target.value)}}})],1)],1)],1)}),[],!1,null,"8b72143c",null);t.default=component.exports;c()(component,{VCol:d.a,VRow:f.a,VTextField:m.a})},264:function(e,t,n){"use strict";n.r(t);n(270);var o={name:"Leads",props:{leads:{type:Array,default:function(){return[]}}}},r=n(57),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"leads__title"},[e._v("Leads")]),e._v(" "),n("main",{staticClass:"Leads"},e._l(e.leads,(function(t,o){return n("div",{key:o,staticClass:"content"},[n("img",{staticClass:"img-profile",attrs:{src:"https://image.flaticon.com/icons/svg/149/149992.svg"}}),e._v(" "),n("div",{staticClass:"infos"},[n("div",{staticClass:"items"},[n("fa-icon",{attrs:{icon:"user"}}),e._v(" "),n("h1",[e._v("Nome:")]),e._v(" "),n("p",[e._v(e._s(t.name))])],1),e._v(" "),n("div",{staticClass:"items"},[n("fa-icon",{attrs:{icon:"building"}}),e._v(" "),n("h1",[e._v("Empresa:")]),e._v(" "),n("p",[e._v(e._s(t.company.name))])],1),e._v(" "),n("div",{staticClass:"items"},[n("fa-icon",{attrs:{icon:"building"}}),e._v(" "),n("h1",[e._v("Categoria de empresa:")]),e._v(" "),n("p",[e._v(e._s(t.company.bs))])],1),e._v(" "),n("div",{staticClass:"items"},[n("fa-icon",{attrs:{icon:"envelope"}}),e._v(" "),n("h1",[e._v("E-mail:")]),e._v(" "),n("p",[e._v(e._s(t.email))])],1),e._v(" "),n("div",{staticClass:"items"},[n("fa-icon",{attrs:{icon:"phone-square-alt"}}),e._v(" "),n("h1",[e._v("Telefone:")]),e._v(" "),n("p",[e._v(e._s(t.phone))])],1),e._v(" "),n("div",{staticClass:"items"},[n("fa-icon",{attrs:{icon:"map-marker-alt"}}),e._v(" "),n("h1",[e._v("Endereço:")]),e._v(" "),n("p",[e._v("\n            "+e._s(t.address.street)+", "+e._s(t.address.suite)+",\n            "+e._s(t.address.zipcode)+", "+e._s(t.address.city)+"\n          ")])],1)])])})),0)])}),[],!1,null,null,null);t.default=component.exports},265:function(e,t,n){"use strict";n.r(t);n(272);var o={name:"Leads",props:{leads:{type:Array,default:function(){return[]}}}},r=n(57),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"leadsOff"},[n("h1",{staticClass:"leads"},[e._v("Lead não encontrado")])])}],!1,null,null,null);t.default=component.exports},268:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("04e229e4",content,!0,{sourceMap:!1})},269:function(e,t,n){var o=n(68)(!1);o.push([e.i,'*,:after,:before{margin:0;padding:0}html{font-size:16px}body{padding:1rem;font-family:"Roboto",sans-serif;color:#180f50}h1{font-size:2rem;font-weight:400}.v-form{text-align:center;padding:5px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.v-form h1{font-family:"Roboto",sans-serif;padding:10px}.v-form .v-col,.v-form .v-text-field{display:flex;align-items:center;justify-content:center}.v-form .v-text-field{width:auto;height:auto;padding:15px;border-radius:10px}.v-form .v-btn{position:relative;bottom:10px}.v-form .v-btn .fa-icon{margin:10px}@media(max-width:414px){.v-col{display:flex;flex-direction:column}}',""]),e.exports=o},270:function(e,t,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("a17b56d0",content,!0,{sourceMap:!1})},271:function(e,t,n){var o=n(68)(!1);o.push([e.i,'*,:after,:before{margin:0;padding:0}html{font-size:16px}body{padding:1rem;font-family:"Roboto",sans-serif;color:#180f50}h1{font-size:2rem;font-weight:400}.container{display:flex;align-items:center;justify-content:space-between;flex-direction:column;border-radius:20px;width:100%;background:#180f50;padding-bottom:20px;margin-top:20px;margin-bottom:20px}.container .leads__title{color:#ecf0f1}@media(max-width:393px){.content img{display:none}}@media(max-width:944px){.content img{display:none}}.Leads{display:flex;width:100%;flex-direction:row;flex-wrap:wrap}.Leads .content{width:calc(50% - 20px);min-width:300px;display:flex;justify-content:space-between;align-items:center;background-color:#ecf0f1;border-radius:10px;margin:10px auto;padding:15px}.Leads .content:hover{background-color:#fff;transform:scale(1.015)}.Leads .content .img-profile{width:160px;height:60px}.Leads .content .infos{justify-content:center;flex-direction:column}.Leads .content .infos,.Leads .content .infos .items{width:100%;display:flex;align-items:center;grid-gap:5px;gap:5px}.Leads .content .infos .items{justify-content:flex-start;margin-top:5px}.Leads .content .infos .items h1{font-size:.9rem;font-weight:700;margin-right:10px}.Leads .content .infos .items p{font-size:12px}',""]),e.exports=o},272:function(e,t,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("1b8169b1",content,!0,{sourceMap:!1})},273:function(e,t,n){var o=n(68)(!1);o.push([e.i,'*,:after,:before{margin:0;padding:0}html{font-size:16px}body{padding:1rem;font-family:"Roboto",sans-serif;color:#180f50}h1{font-size:2rem;font-weight:400}.leadsOff{border-radius:20px;background:#180f50;padding-bottom:20px;margin-top:20px;display:flex;align-items:center;flex-direction:column;width:50%;position:relative;left:25%;margin-bottom:250px}.leadsOff .leads{color:#ecf0f1;position:relative;top:10px}@media(max-width:944px){.leadsOff{margin-bottom:400px;margin-bottom:340px}}h1{font-size:.9rem;font-weight:700;margin-right:10px}p{font-size:12px}',""]),e.exports=o},279:function(e,t,n){"use strict";n.r(t);n(30),n(59),n(60),n(24),n(31),n(130);var o=n(263),r=n(264),l=n(265),c=n(82),d=n.n(c).a.create({baseURL:"https://jsonplaceholder.typicode.com/users"}),f={components:{SearchBar:o.default,Leads:r.default,LeadsOff:l.default},data:function(){return{cards:[],search:""}},computed:{filteredCards:function(){var e=this;return this.cards.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())||t.company.bs.toLowerCase().includes(e.search.toLowerCase())}))}},created:function(){var e=this;d.get().then((function(t){e.cards=t.data}))}},m=n(57),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SearchBar",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),e.filteredCards.length>0?n("Leads",{attrs:{leads:e.filteredCards}}):n("LeadsOff")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SearchBar:n(263).default,Leads:n(264).default,LeadsOff:n(265).default})}}]);