"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[1804],{21804:(S,c,a)=>{a.r(c),a.d(c,{AnalyticsModule:()=>M});var u=a(63423),Z=a(51095),g=a(42542),T=a(1769),h=a(76627),l=a(33935),x=a(12178),q=a(11494),b=a(32789),m=a(11436),v=a(34256),y=a(44466),U=a(79765),w=a(46782),t=a(37716),V=a(26215),_=a(93342),k=a(91841);let p=(()=>{class s{constructor(i){this._httpClient=i,this._data=new V.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/analytics").pipe((0,_.b)(i=>{this._data.next(i)}))}}return s.\u0275fac=function(i){return new(i||s)(t.LFG(k.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var f=a(38583);function C(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",69),t.TgZ(2,"div",48),t._UZ(3,"div",70),t.TgZ(4,"div",71),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",72),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"div",73),t._uU(10),t.qZA(),t.qZA(),t.BQk()),2&s){const i=r.$implicit,e=r.index,o=t.oxw();t.xp6(3),t.Udp("background-color",o.chartNewVsReturning.colors[e]),t.xp6(2),t.Oqu(o.data.newVsReturning.labels[e]),t.xp6(2),t.Oqu(t.xi3(8,5,o.data.newVsReturning.uniqueVisitors*i/100,"1.0-0")),t.xp6(3),t.hij("",i,"%")}}function F(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",69),t.TgZ(2,"div",48),t._UZ(3,"div",70),t.TgZ(4,"div",71),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",72),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"div",73),t._uU(10),t.qZA(),t.qZA(),t.BQk()),2&s){const i=r.$implicit,e=r.index,o=t.oxw();t.xp6(3),t.Udp("background-color",o.chartGender.colors[e]),t.xp6(2),t.Oqu(o.data.gender.labels[e]),t.xp6(2),t.Oqu(t.xi3(8,5,o.data.gender.uniqueVisitors*i/100,"1.0-0")),t.xp6(3),t.hij("",i,"%")}}function O(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",69),t.TgZ(2,"div",48),t._UZ(3,"div",70),t.TgZ(4,"div",71),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",72),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"div",73),t._uU(10),t.qZA(),t.qZA(),t.BQk()),2&s){const i=r.$implicit,e=r.index,o=t.oxw();t.xp6(3),t.Udp("background-color",o.chartAge.colors[e]),t.xp6(2),t.Oqu(o.data.age.labels[e]),t.xp6(2),t.Oqu(t.xi3(8,5,o.data.age.uniqueVisitors*i/100,"1.0-0")),t.xp6(3),t.hij("",i,"%")}}function Q(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",69),t.TgZ(2,"div",48),t._UZ(3,"div",70),t.TgZ(4,"div",71),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",72),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"div",73),t._uU(10),t.qZA(),t.qZA(),t.BQk()),2&s){const i=r.$implicit,e=r.index,o=t.oxw();t.xp6(3),t.Udp("background-color",o.chartLanguage.colors[e]),t.xp6(2),t.Oqu(o.data.language.labels[e]),t.xp6(2),t.Oqu(t.xi3(8,5,o.data.language.uniqueVisitors*i/100,"1.0-0")),t.xp6(3),t.hij("",i,"%")}}const J=[{path:"",component:(()=>{class s{constructor(i,e){this._analyticsService=i,this._router=e,this._unsubscribeAll=new U.xQ}ngOnInit(){this._analyticsService.data$.pipe((0,w.R)(this._unsubscribeAll)).subscribe(i=>{this.data=i,this._prepareChartData()}),window.Apex={chart:{events:{mounted:(i,e)=>{this._fixSvgFill(i.el)},updated:(i,e)=>{this._fixSvgFill(i.el)}}}}}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}trackByFn(i,e){return e.id||i}_fixSvgFill(i){const e=this._router.url;Array.from(i.querySelectorAll("*[fill]")).filter(o=>-1!==o.getAttribute("fill").indexOf("url(")).forEach(o=>{const d=o.getAttribute("fill");o.setAttribute("fill",`url(${e}${d.slice(d.indexOf("#"))}`)})}_prepareChartData(){this.chartVisitors={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#818CF8"],dataLabels:{enabled:!1},fill:{colors:["#312E81"]},grid:{show:!0,borderColor:"#334155",padding:{top:10,bottom:-40,left:0,right:0},position:"back",xaxis:{lines:{show:!0}}},series:this.data.visitors.series,stroke:{width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:i=>`${i}`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{stroke:{color:"#475569",dashArray:0,width:2}},labels:{offsetY:-20,style:{colors:"#CBD5E1"}},tickAmount:20,tooltip:{enabled:!1},type:"datetime"},yaxis:{axisTicks:{show:!1},axisBorder:{show:!1},min:i=>i-750,max:i=>i+250,tickAmount:5,show:!1}},this.chartConversions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#38BDF8"],fill:{colors:["#38BDF8"],opacity:.5},series:this.data.conversions.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.conversions.labels},yaxis:{labels:{formatter:i=>i.toString()}}},this.chartImpressions={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#34D399"],fill:{colors:["#34D399"],opacity:.5},series:this.data.impressions.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.impressions.labels},yaxis:{labels:{formatter:i=>i.toString()}}},this.chartVisits={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#FB7185"],fill:{colors:["#FB7185"],opacity:.5},series:this.data.visits.series,stroke:{curve:"smooth"},tooltip:{followCursor:!0,theme:"dark"},xaxis:{type:"category",categories:this.data.visits.labels},yaxis:{labels:{formatter:i=>i.toString()}}},this.chartVisitorsVsPageViews={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"area",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#64748B","#94A3B8"],dataLabels:{enabled:!1},fill:{colors:["#64748B","#94A3B8"],opacity:.5},grid:{show:!1,padding:{bottom:-40,left:0,right:0}},legend:{show:!1},series:this.data.visitorsVsPageViews.series,stroke:{curve:"smooth",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"}},xaxis:{axisBorder:{show:!1},labels:{offsetY:-20,rotate:0,style:{colors:"var(--fuse-text-secondary)"}},tickAmount:3,tooltip:{enabled:!1},type:"datetime"},yaxis:{labels:{style:{colors:"var(--fuse-text-secondary)"}},max:i=>i+250,min:i=>i-250,show:!1,tickAmount:5}},this.chartNewVsReturning={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#3182CE","#63B3ED"],labels:this.data.newVsReturning.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.newVsReturning.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[i]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${e.config.labels[i]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${e.config.series[i]}%</div>\n                                                </div>`}},this.chartGender={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#319795","#4FD1C5"],labels:this.data.gender.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.gender.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                     <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[i]};"></div>\n                                                     <div class="ml-2 text-md leading-none">${e.config.labels[i]}:</div>\n                                                     <div class="ml-2 text-md font-bold leading-none">${e.config.series[i]}%</div>\n                                                 </div>`}},this.chartAge={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#DD6B20","#F6AD55"],labels:this.data.age.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.age.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[i]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${e.config.labels[i]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${e.config.series[i]}%</div>\n                                                </div>`}},this.chartLanguage={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"donut",sparkline:{enabled:!0}},colors:["#805AD5","#B794F4"],labels:this.data.language.labels,plotOptions:{pie:{customScale:.9,expandOnClick:!1,donut:{size:"70%"}}},series:this.data.language.series,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},tooltip:{enabled:!0,fillSeriesColor:!1,theme:"dark",custom:({seriesIndex:i,w:e})=>`<div class="flex items-center h-8 min-h-8 max-h-8 px-3">\n                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${e.config.colors[i]};"></div>\n                                                    <div class="ml-2 text-md leading-none">${e.config.labels[i]}:</div>\n                                                    <div class="ml-2 text-md font-bold leading-none">${e.config.series[i]}%</div>\n                                                </div>`}}}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(p),t.Y36(u.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["analytics"]],decls:287,vars:121,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],["mat-stroked-button","",1,"hidden","sm:inline-flex"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","w-full","mt-8"],[1,"sm:col-span-2","lg:col-span-3","dark","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-center","justify-between","mt-10","ml-10","mr-6","sm:mr-10"],[1,"flex","flex-col"],[1,"mr-4","text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7"],[1,"font-medium","text-secondary"],["value","this-year",1,"hidden","sm:inline-flex","border-none","space-x-1"],["visitorsYearSelector","matButtonToggleGroup"],["value","last-year",1,"px-1.5","rounded-full","overflow-hidden","border-none","font-medium"],["value","this-year",1,"px-1.5","rounded-full","overflow-hidden","border-none","font-medium"],["visitorsMenu","matMenu"],[1,"flex","flex-col","flex-auto","h-80"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","fill","grid","series","stroke","tooltip","xaxis","yaxis"],[1,"sm:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between","m-6","mb-0"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],["mat-button","",1,"h-6","min-h-6","px-2","rounded-full","bg-hover",3,"matMenuTriggerFor"],[1,"font-medium","text-sm","text-secondary"],["conversionMenu","matMenu"],[1,"flex","flex-col","lg:flex-row","lg:items-center","mx-6","mt-3"],[1,"text-7xl","font-bold","tracking-tighter","leading-tight"],[1,"flex","lg:flex-col","lg:ml-3"],[1,"icon-size-5","text-red-500",3,"svgIcon"],[1,"flex","items-center","ml-1","lg:ml-0","lg:mt-0.5","text-md","leading-none","whitespace-nowrap","text-secondary"],[1,"font-medium","text-red-500"],[1,"ml-1"],[1,"flex","flex-col","flex-auto","h-20"],[1,"flex-auto","w-full","h-full",3,"chart","colors","series","stroke","tooltip","xaxis","yaxis"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],["impressionsMenu","matMenu"],[1,"flex","flex-col","flex-auto","mt-8","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","mt-6","mx-6"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-8","sm:gap-12"],[1,"flex","items-center"],[1,"font-medium","text-secondary","leading-5"],[1,"ml-1.5","icon-size-4","text-hint",3,"svgIcon","matTooltip"],[1,"flex","items-start","mt-2"],[1,"text-4xl","font-bold","tracking-tight","leading-none"],[1,"flex","items-center","ml-2"],[1,"icon-size-5","text-green-500",3,"svgIcon"],[1,"ml-1","text-md","font-medium","text-green-500"],[1,"ml-1","text-md","font-medium","text-red-500"],[1,"flex","flex-col","flex-auto","h-80","mt-3"],[1,"flex-auto","w-full","h-full",3,"chart","colors","dataLabels","grid","legend","series","stroke","tooltip","xaxis","yaxis"],[1,"w-full","mt-12"],[1,"text-2xl","font-semibold","tracking-tight","leading-6"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-8","w-full","mt-6","md:mt-8"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden","p-6"],[1,"flex","items-start","justify-between"],[1,"flex","flex-col","flex-auto","mt-6","h-44"],[1,"flex","flex-auto","items-center","justify-center","w-full","h-full",3,"chart","colors","labels","plotOptions","series","states","tooltip"],[1,"mt-8"],[1,"-my-3","divide-y"],[4,"ngFor","ngForOf"],[1,"grid","grid-cols-3","py-3"],[1,"flex-0","w-2","h-2","rounded-full"],[1,"ml-3","truncate"],[1,"font-medium","text-right"],[1,"text-right","text-secondary"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"div",3),t._uU(5,"Analytics dashboard"),t.qZA(),t.TgZ(6,"div",4),t._uU(7,"Monitor metrics, check reports and review performance"),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"button",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"span",8),t._uU(12,"Settings"),t.qZA(),t.qZA(),t.TgZ(13,"button",9),t._UZ(14,"mat-icon",7),t.TgZ(15,"span",8),t._uU(16,"Export"),t.qZA(),t.qZA(),t.TgZ(17,"div",10),t.TgZ(18,"button",11),t._UZ(19,"mat-icon",12),t.qZA(),t.TgZ(20,"mat-menu",null,13),t.TgZ(22,"button",14),t._uU(23,"Export"),t.qZA(),t.TgZ(24,"button",14),t._uU(25,"Settings"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",15),t.TgZ(27,"div",16),t.TgZ(28,"div",17),t.TgZ(29,"div",18),t.TgZ(30,"div",19),t._uU(31,"Visitors Overview"),t.qZA(),t.TgZ(32,"div",20),t._uU(33,"Number of unique visitors"),t.qZA(),t.qZA(),t.TgZ(34,"div",8),t.TgZ(35,"mat-button-toggle-group",21,22),t.TgZ(37,"mat-button-toggle",23),t._uU(38,"Last Year "),t.qZA(),t.TgZ(39,"mat-button-toggle",24),t._uU(40,"This Year "),t.qZA(),t.qZA(),t.TgZ(41,"div",10),t.TgZ(42,"button",11),t._UZ(43,"mat-icon",12),t.qZA(),t.TgZ(44,"mat-menu",null,25),t.TgZ(46,"button",14),t._uU(47,"This Year"),t.qZA(),t.TgZ(48,"button",14),t._uU(49,"Last Year"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",26),t._UZ(51,"apx-chart",27),t.qZA(),t.qZA(),t.TgZ(52,"div",28),t.TgZ(53,"div",29),t.TgZ(54,"div",30),t._uU(55,"Conversions"),t.qZA(),t.TgZ(56,"div",8),t.TgZ(57,"button",31),t.TgZ(58,"span",32),t._uU(59,"30 days"),t.qZA(),t.qZA(),t.TgZ(60,"mat-menu",null,33),t.TgZ(62,"button",14),t._uU(63,"30 days"),t.qZA(),t.TgZ(64,"button",14),t._uU(65,"3 months"),t.qZA(),t.TgZ(66,"button",14),t._uU(67,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"div",34),t.TgZ(69,"div",35),t._uU(70),t.ALo(71,"number"),t.qZA(),t.TgZ(72,"div",36),t._UZ(73,"mat-icon",37),t.TgZ(74,"div",38),t.TgZ(75,"span",39),t._uU(76,"2%"),t.qZA(),t.TgZ(77,"span",40),t._uU(78,"below target"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"div",41),t._UZ(80,"apx-chart",42),t.qZA(),t.qZA(),t.TgZ(81,"div",43),t.TgZ(82,"div",29),t.TgZ(83,"div",30),t._uU(84,"Impressions"),t.qZA(),t.TgZ(85,"div",8),t.TgZ(86,"button",31),t.TgZ(87,"span",32),t._uU(88,"30 days"),t.qZA(),t.qZA(),t.TgZ(89,"mat-menu",null,44),t.TgZ(91,"button",14),t._uU(92,"30 days"),t.qZA(),t.TgZ(93,"button",14),t._uU(94,"3 months"),t.qZA(),t.TgZ(95,"button",14),t._uU(96,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(97,"div",34),t.TgZ(98,"div",35),t._uU(99),t.ALo(100,"number"),t.qZA(),t.TgZ(101,"div",36),t._UZ(102,"mat-icon",37),t.TgZ(103,"div",38),t.TgZ(104,"span",39),t._uU(105,"4%"),t.qZA(),t.TgZ(106,"span",40),t._uU(107,"below target"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(108,"div",41),t._UZ(109,"apx-chart",42),t.qZA(),t.qZA(),t.TgZ(110,"div",43),t.TgZ(111,"div",29),t.TgZ(112,"div",30),t._uU(113,"Visits"),t.qZA(),t.TgZ(114,"div",8),t.TgZ(115,"button",31),t.TgZ(116,"span",32),t._uU(117,"30 days"),t.qZA(),t.qZA(),t.TgZ(118,"mat-menu",null,44),t.TgZ(120,"button",14),t._uU(121,"30 days"),t.qZA(),t.TgZ(122,"button",14),t._uU(123,"3 months"),t.qZA(),t.TgZ(124,"button",14),t._uU(125,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(126,"div",34),t.TgZ(127,"div",35),t._uU(128),t.ALo(129,"number"),t.qZA(),t.TgZ(130,"div",36),t._UZ(131,"mat-icon",37),t.TgZ(132,"div",38),t.TgZ(133,"span",39),t._uU(134,"4%"),t.qZA(),t.TgZ(135,"span",40),t._uU(136,"below target"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(137,"div",41),t._UZ(138,"apx-chart",42),t.qZA(),t.qZA(),t.qZA(),t.TgZ(139,"div",45),t.TgZ(140,"div",29),t.TgZ(141,"div",30),t._uU(142,"Visitors vs. Page Views"),t.qZA(),t.TgZ(143,"div",8),t.TgZ(144,"button",31),t.TgZ(145,"span",32),t._uU(146,"30 days"),t.qZA(),t.qZA(),t.TgZ(147,"mat-menu",null,33),t.TgZ(149,"button",14),t._uU(150,"30 days"),t.qZA(),t.TgZ(151,"button",14),t._uU(152,"3 months"),t.qZA(),t.TgZ(153,"button",14),t._uU(154,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(155,"div",46),t.TgZ(156,"div",47),t.TgZ(157,"div",18),t.TgZ(158,"div",48),t.TgZ(159,"div",49),t._uU(160,"Overall Score"),t.qZA(),t._UZ(161,"mat-icon",50),t.qZA(),t.TgZ(162,"div",51),t.TgZ(163,"div",52),t._uU(164),t.qZA(),t.TgZ(165,"div",53),t._UZ(166,"mat-icon",54),t.TgZ(167,"div",55),t._uU(168,"42.9%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(169,"div",18),t.TgZ(170,"div",48),t.TgZ(171,"div",49),t._uU(172,"Average Ratio"),t.qZA(),t._UZ(173,"mat-icon",50),t.qZA(),t.TgZ(174,"div",51),t.TgZ(175,"div",52),t._uU(176),t.ALo(177,"number"),t.qZA(),t.TgZ(178,"div",53),t._UZ(179,"mat-icon",37),t.TgZ(180,"div",56),t._uU(181,"13.1%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(182,"div",18),t.TgZ(183,"div",48),t.TgZ(184,"div",49),t._uU(185,"Predicted Ratio"),t.qZA(),t._UZ(186,"mat-icon",50),t.qZA(),t.TgZ(187,"div",51),t.TgZ(188,"div",52),t._uU(189),t.ALo(190,"number"),t.qZA(),t.TgZ(191,"div",53),t._UZ(192,"mat-icon",54),t.TgZ(193,"div",55),t._uU(194,"22.2%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(195,"div",57),t._UZ(196,"apx-chart",58),t.qZA(),t.qZA(),t.TgZ(197,"div",59),t.TgZ(198,"div",60),t._uU(199,"Your Audience"),t.qZA(),t.TgZ(200,"div",4),t._uU(201,"Demographic properties of your users"),t.qZA(),t.qZA(),t.TgZ(202,"div",61),t.TgZ(203,"div",62),t.TgZ(204,"div",63),t.TgZ(205,"div",30),t._uU(206,"New vs. Returning"),t.qZA(),t.TgZ(207,"div",8),t.TgZ(208,"button",31),t.TgZ(209,"span",32),t._uU(210,"30 days"),t.qZA(),t.qZA(),t.TgZ(211,"mat-menu",null,33),t.TgZ(213,"button",14),t._uU(214,"30 days"),t.qZA(),t.TgZ(215,"button",14),t._uU(216,"3 months"),t.qZA(),t.TgZ(217,"button",14),t._uU(218,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(219,"div",64),t._UZ(220,"apx-chart",65),t.qZA(),t.TgZ(221,"div",66),t.TgZ(222,"div",67),t.YNc(223,C,11,8,"ng-container",68),t.qZA(),t.qZA(),t.qZA(),t.TgZ(224,"div",62),t.TgZ(225,"div",63),t.TgZ(226,"div",30),t._uU(227,"Gender"),t.qZA(),t.TgZ(228,"div",8),t.TgZ(229,"button",31),t.TgZ(230,"span",32),t._uU(231,"30 days"),t.qZA(),t.qZA(),t.TgZ(232,"mat-menu",null,33),t.TgZ(234,"button",14),t._uU(235,"30 days"),t.qZA(),t.TgZ(236,"button",14),t._uU(237,"3 months"),t.qZA(),t.TgZ(238,"button",14),t._uU(239,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(240,"div",64),t._UZ(241,"apx-chart",65),t.qZA(),t.TgZ(242,"div",66),t.TgZ(243,"div",67),t.YNc(244,F,11,8,"ng-container",68),t.qZA(),t.qZA(),t.qZA(),t.TgZ(245,"div",62),t.TgZ(246,"div",63),t.TgZ(247,"div",30),t._uU(248,"Age"),t.qZA(),t.TgZ(249,"div",8),t.TgZ(250,"button",31),t.TgZ(251,"span",32),t._uU(252,"30 days"),t.qZA(),t.qZA(),t.TgZ(253,"mat-menu",null,33),t.TgZ(255,"button",14),t._uU(256,"30 days"),t.qZA(),t.TgZ(257,"button",14),t._uU(258,"3 months"),t.qZA(),t.TgZ(259,"button",14),t._uU(260,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(261,"div",64),t._UZ(262,"apx-chart",65),t.qZA(),t.TgZ(263,"div",66),t.TgZ(264,"div",67),t.YNc(265,O,11,8,"ng-container",68),t.qZA(),t.qZA(),t.qZA(),t.TgZ(266,"div",62),t.TgZ(267,"div",63),t.TgZ(268,"div",30),t._uU(269,"Language"),t.qZA(),t.TgZ(270,"div",8),t.TgZ(271,"button",31),t.TgZ(272,"span",32),t._uU(273,"30 days"),t.qZA(),t.qZA(),t.TgZ(274,"mat-menu",null,33),t.TgZ(276,"button",14),t._uU(277,"30 days"),t.qZA(),t.TgZ(278,"button",14),t._uU(279,"3 months"),t.qZA(),t.TgZ(280,"button",14),t._uU(281,"9 months"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(282,"div",64),t._UZ(283,"apx-chart",65),t.qZA(),t.TgZ(284,"div",66),t.TgZ(285,"div",67),t.YNc(286,Q,11,8,"ng-container",68),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i){const o=t.MAs(21),d=t.MAs(36),L=t.MAs(45),n=t.MAs(61),A=t.MAs(90);t.xp6(10),t.Q6J("svgIcon","heroicons_solid:cog"),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:save"),t.xp6(4),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(23),t.Q6J("matMenuTriggerFor",L),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(8),t.Q6J("chart",e.chartVisitors.chart)("colors",e.chartVisitors.colors)("dataLabels",e.chartVisitors.dataLabels)("fill",e.chartVisitors.fill)("grid",e.chartVisitors.grid)("series",e.chartVisitors.series[d.value])("stroke",e.chartVisitors.stroke)("tooltip",e.chartVisitors.tooltip)("xaxis",e.chartVisitors.xaxis)("yaxis",e.chartVisitors.yaxis),t.xp6(6),t.Q6J("matMenuTriggerFor",n),t.xp6(13),t.Oqu(t.xi3(71,106,e.data.conversions.amount,"1.0-0")),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trending-down"),t.xp6(7),t.Q6J("chart",e.chartConversions.chart)("colors",e.chartConversions.colors)("series",e.chartConversions.series)("stroke",e.chartConversions.stroke)("tooltip",e.chartConversions.tooltip)("xaxis",e.chartConversions.xaxis)("yaxis",e.chartConversions.yaxis),t.xp6(6),t.Q6J("matMenuTriggerFor",A),t.xp6(13),t.Oqu(t.xi3(100,109,e.data.impressions.amount,"1.0-0")),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trending-down"),t.xp6(7),t.Q6J("chart",e.chartImpressions.chart)("colors",e.chartImpressions.colors)("series",e.chartImpressions.series)("stroke",e.chartImpressions.stroke)("tooltip",e.chartImpressions.tooltip)("xaxis",e.chartImpressions.xaxis)("yaxis",e.chartImpressions.yaxis),t.xp6(6),t.Q6J("matMenuTriggerFor",A),t.xp6(13),t.Oqu(t.xi3(129,112,e.data.visits.amount,"1.0-0")),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trending-down"),t.xp6(7),t.Q6J("chart",e.chartVisits.chart)("colors",e.chartVisits.colors)("series",e.chartVisits.series)("stroke",e.chartVisits.stroke)("tooltip",e.chartVisits.tooltip)("xaxis",e.chartVisits.xaxis)("yaxis",e.chartVisits.yaxis),t.xp6(6),t.Q6J("matMenuTriggerFor",n),t.xp6(17),t.Q6J("svgIcon","heroicons_solid:information-circle")("matTooltip","Score is calculated by using the historical ratio between Page Views and Visitors. Best score is 1000, worst score is 0."),t.xp6(3),t.Oqu(e.data.visitorsVsPageViews.overallScore),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:arrow-circle-up"),t.xp6(7),t.Q6J("svgIcon","heroicons_solid:information-circle")("matTooltip","Average Ratio is the average ratio between Page Views and Visitors"),t.xp6(3),t.hij("",t.xi3(177,115,e.data.visitorsVsPageViews.averageRatio,"1.0-0"),"%"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:arrow-circle-down"),t.xp6(7),t.Q6J("svgIcon","heroicons_solid:information-circle")("matTooltip","Predicted Ratio is calculated by using historical ratio, current trends and your goal targets."),t.xp6(3),t.hij("",t.xi3(190,118,e.data.visitorsVsPageViews.predictedRatio,"1.0-0"),"%"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:arrow-circle-up"),t.xp6(4),t.Q6J("chart",e.chartVisitorsVsPageViews.chart)("colors",e.chartVisitorsVsPageViews.colors)("dataLabels",e.chartVisitorsVsPageViews.dataLabels)("grid",e.chartVisitorsVsPageViews.grid)("legend",e.chartVisitorsVsPageViews.legend)("series",e.chartVisitorsVsPageViews.series)("stroke",e.chartVisitorsVsPageViews.stroke)("tooltip",e.chartVisitorsVsPageViews.tooltip)("xaxis",e.chartVisitorsVsPageViews.xaxis)("yaxis",e.chartVisitorsVsPageViews.yaxis),t.xp6(12),t.Q6J("matMenuTriggerFor",n),t.xp6(12),t.Q6J("chart",e.chartNewVsReturning.chart)("colors",e.chartNewVsReturning.colors)("labels",e.chartNewVsReturning.labels)("plotOptions",e.chartNewVsReturning.plotOptions)("series",e.chartNewVsReturning.series)("states",e.chartNewVsReturning.states)("tooltip",e.chartNewVsReturning.tooltip),t.xp6(3),t.Q6J("ngForOf",e.data.newVsReturning.series),t.xp6(6),t.Q6J("matMenuTriggerFor",n),t.xp6(12),t.Q6J("chart",e.chartGender.chart)("colors",e.chartGender.colors)("labels",e.chartGender.labels)("plotOptions",e.chartGender.plotOptions)("series",e.chartGender.series)("states",e.chartGender.states)("tooltip",e.chartGender.tooltip),t.xp6(3),t.Q6J("ngForOf",e.data.gender.series),t.xp6(6),t.Q6J("matMenuTriggerFor",n),t.xp6(12),t.Q6J("chart",e.chartAge.chart)("colors",e.chartAge.colors)("labels",e.chartAge.labels)("plotOptions",e.chartAge.plotOptions)("series",e.chartAge.series)("states",e.chartAge.states)("tooltip",e.chartAge.tooltip),t.xp6(3),t.Q6J("ngForOf",e.data.age.series),t.xp6(6),t.Q6J("matMenuTriggerFor",n),t.xp6(12),t.Q6J("chart",e.chartLanguage.chart)("colors",e.chartLanguage.colors)("labels",e.chartLanguage.labels)("plotOptions",e.chartLanguage.plotOptions)("series",e.chartLanguage.series)("states",e.chartLanguage.states)("tooltip",e.chartLanguage.tooltip),t.xp6(3),t.Q6J("ngForOf",e.data.language.series)}},directives:[Z.lW,h.Hw,l.p6,l.VK,l.OP,g.A9,g.Yi,v.x,m.gM,f.sg],pipes:[f.JJ],encapsulation:2,changeDetection:0}),s})(),resolve:{data:(()=>{class s{constructor(i){this._analyticsService=i}resolve(i,e){return this._analyticsService.getData()}}return s.\u0275fac=function(i){return new(i||s)(t.LFG(p))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}];let M=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[u.Bz.forChild(J),Z.ot,g.vV,T.t,h.Ps,l.Tx,x.Cv,q.JX,b.p0,m.AV,v.X,y.m]]}),s})()}}]);