(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{283:function(e,t,n){"use strict";var r=n(2),o=n(3),l=n(48),c=n(202),v=n(200),m=n(4),_=RangeError,d=String,f=Math.floor,h=o(v),y=o("".slice),x=o(1..toFixed),w=function(e,t,n){return 0===t?n:t%2==1?w(e,t-1,n*e):w(e*e,t/2,n)},C=function(data,e,t){for(var n=-1,r=t;++n<6;)r+=e*data[n],data[n]=r%1e7,r=f(r/1e7)},P=function(data,e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=f(n/e),n=n%e*1e7},S=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=d(data[e]);s=""===s?t:s+h("0",7-t.length)+t}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!m((function(){x({})}))},{toFixed:function(e){var t,n,r,o,v=c(this),m=l(e),data=[0,0,0,0,0,0],f="",x="0";if(m<0||m>20)throw new _("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return d(v);if(v<0&&(f="-",v=-v),v>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(v*w(2,69,1))-69)<0?v*w(2,-t,1):v/w(2,t,1),n*=4503599627370496,(t=52-t)>0){for(C(data,0,n),r=m;r>=7;)C(data,1e7,0),r-=7;for(C(data,w(10,r,1),0),r=t-1;r>=23;)P(data,1<<23),r-=23;P(data,1<<r),C(data,1,1),P(data,2),x=S(data)}else C(data,0,n),C(data,1<<-t,0),x=S(data)+h("0",m);return x=m>0?f+((o=x.length)<=m?"0."+h("0",m-o)+x:y(x,0,o-m)+"."+y(x,o-m)):f+x}})},288:function(e,t,n){"use strict";n.r(t);n(283),n(111),n(201),n(31),n(65);var r=n(86),o=n(23),l=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("ul",{staticClass:"flex flex-wrap justify-center w-full py-10"},[t("li",{staticClass:"flex flex-col items-center m-4"},[t("div",{staticClass:"flex flex-col items-center mb-6"},[t("h4",{staticClass:"text-naito-yellow-100 font-heading text-xl"},[e._v("\n        Pierre Steulet SA, 2802 Develier\n      ")])]),e._v(" "),t("img",{staticClass:"w-56 lg:w-72 opacity-75 hover:opacity-100 transition-opacity-200",attrs:{src:"/images/clients/pierre-steulet-sa-white.png",alt:"Logo MERCEDES-BENZ Pierre Steulet SA",title:"MERCEDES-BENZ Pierre Steulet SA"}})]),e._v(" "),t("li",{staticClass:"flex flex-col items-center m-4"},[t("div",{staticClass:"flex flex-col items-center mb-6"},[t("h4",{staticClass:"text-naito-yellow-100 font-heading text-xl"},[e._v("\n        bio&co, 2842 Rossemaison\n      ")])]),e._v(" "),t("img",{staticClass:"w-56 lg:w-72 opacity-75 hover:opacity-100 transition-opacity-200",attrs:{src:"/images/clients/bioetco-white.png",alt:"Logo bio&co",title:"bio&co"}})])])}],!1,null,null,null).exports,c={components:{Clients:l}},v={components:{Clients:l}},content={en:Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{attrs:{lang:"en"}},[t("h1",[e._v("Meters")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("h2",[e._v("Explore")]),e._v(" "),e._m(5),e._v(" "),t("div",{staticClass:"text-gray-100 bg-gray-700 p-4 rounded-sm shadow-md mb-4"},[e._v("\n    Now all cards are in your hands. You can easily figure out where and when\n    overconsumption occurs. Thanks to this information, finding out the cause\n    is easier than ever.\n  ")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),t("h2",[e._v("Energy signature")]),e._v(" "),e._m(8),e._v(" "),t("h2",[e._v("Objectives")]),e._v(" "),e._m(9),e._v(" "),t("h2",[e._v("Alerts")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),t("h2",[e._v("For the big and small ones")]),e._v(" "),e._m(12),e._v(" "),t("p",[e._v("\n    Also, a map allows you to see the location of your resources at a glance.\n  ")]),e._v(" "),t("h2",[e._v("Multi access")]),e._v(" "),t("p",[e._v("\n    You need accesses for multiple of your employes? No problem. They will\n    each have their dashboard, alerts and objectives.\n  ")]),e._v(" "),t("h2",[e._v("Wiki")]),e._v(" "),t("p",[e._v("\n    To learn all there is to know about the features of\n    "),t("strong",[e._v("Meters")]),e._v(", head to the Wiki\n    "),t("a",{attrs:{href:e.$store.getters.wikiUrl,target:"_blank",rel:"noopener"}},[e._v("by clicking here")]),e._v(".\n  ")]),e._v(" "),t("h2",[e._v("Our clients include")]),e._v(" "),t("clients"),e._v(" "),t("h2",[e._v("How much power does it use")]),e._v(" "),e._m(13),e._v(" "),t("h2",[e._v("How much does it cost")]),e._v(" "),e._m(14)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"w-full h-40 sm:h-64 md:h-76 rounded-md shadow mb-8 overflow-hidden",attrs:{id:"meters-banner-outer"}},[e("div",{staticClass:"w-full h-full",attrs:{id:"meters-banner"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"},[t("i",{staticClass:"material-icons mr-4"},[e._v("trending_down")]),e._v(" "),t("span",[e._v("\n      Having trouble\n      "),t("strong",[e._v("decreasing")]),e._v(" your water, gas, oil or electricity\n      "),t("strong",[e._v("consumption")]),e._v("?\n    ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"},[t("i",{staticClass:"material-icons mr-4"},[e._v("eco")]),e._v(" "),t("span",[e._v("\n      Maybe you are looking for a way to improve your\n      "),t("strong",[e._v("environmental image")]),e._v("?\n    ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-8"},[t("i",{staticClass:"material-icons mr-4"},[e._v("notifications")]),e._v(" "),t("span",[e._v("\n      Or maybe you want to keep an eye on the\n      "),t("strong",[e._v("temperature of your premises")]),e._v("?\n    ")])])},function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Meters")]),e._v(" was developped to answer your needs! "),t("br"),e._v("After\n    installing sensors on your water, gas, oil or electricity meters, or\n    installing temperature sensors in your premises,\n    "),t("strong",[e._v("Meters")]),e._v(" allows you to monitor your data.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Your data is accessible at any time through a\n    "),t("strong",[e._v("modern web interface")]),e._v(", usable on smartphones, tablets and\n    desktops. "),t("br"),e._v("On the web platform, you can view\n    "),t("strong",[e._v("charts")]),e._v(" of the evolution of your temperatures or your\n    consumption.\n    "),t("br"),e._v(" "),t("a",{attrs:{href:"https://meters.ch",target:"_blank",rel:"noopener"}},[e._v("Go to the Meters platform")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    You can\n    "),t("strong",[e._v("download your data")]),e._v(" in different formats in order to\n    analyse it with your favourite tools, or to include it in presentations.\n    "),t("br"),e._v("A "),t("strong",[e._v("dashboard")]),e._v(" allows you to save your most useful\n    charts for quick access.\n  ")])},function(){var e=this._self._c;return e("figure",[e("img",{staticClass:"md:w-168",attrs:{src:"/images/meters-app-02.jpg",alt:"Meters Dashboard"}})])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    If you have a temperature sensor as well as a sensor on a heating resource\n    for a building (like electricity, gas or oil), an energy signature tool is\n    made available to you."),t("br"),e._v("\n    This tool allows you to identify irregularities in heating in order to\n    optimize your facilities and save money.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Is it hard to give yourself energy consumption objectives? Thanks to\n    "),t("strong",[e._v("Meters")]),e._v(", you can define concrete objectives monthly or\n    weekly in order to be kept up to date by email on your progress.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    You want to be alerted when the temperature of a premise gets abnormally\n    high or low?\n    "),t("strong",[e._v("Meters")]),e._v(" provides you with an email alert tool.\n  ")])},function(){var e=this._self._c;return e("figure",[e("img",{staticClass:"md:w-168",attrs:{src:"/images/meters-app-03.jpg",alt:"Meters Alerts"}})])},function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Meters")]),e._v(" was conceived with\n    "),t("strong",[e._v("small companies")]),e._v(" as well as\n    "),t("strong",[e._v("big companies")]),e._v(" in mind. You have resources on multiple\n    sites? You will be able to find them easily through an intelligent\n    searching tool.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    One sensor consumes "),t("strong",[e._v("<1W")]),e._v(", about 7kWh per year."),t("br"),e._v("\n    For reference, 6 sensors consume as much as 1 computer screen of energy\n    category A."),t("br"),e._v("\n    We are constantly improving the energy efficiency through software updates\n    and by choosing less power hungry hardware.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Interested in the product? You can use the tool below to\n    "),t("strong",[e._v("estimate the total cost for your specific needs")]),e._v("."),t("br"),e._v("\n    The estimate includes the hardware's cost, it's installation and the\n    service per month. The service includes the hosting of your data, the\n    access to the platform, the support and replacment of defected\n    hardware."),t("br"),e._v(" "),t("i",[e._v("\n      Please note that the prices shown below do not count as a quotation and\n      that actual prices may vary. "),t("br"),e._v("Please\n      "),t("a",{attrs:{href:"mailto:hello@naito.one"}},[e._v("get in touch")]),e._v(" to recieve a complete\n      quotation for free.\n    ")])])}],!1,null,null,null).exports,fr:Object(o.a)(v,(function(){var e=this,t=e._self._c;return t("div",{attrs:{lang:"fr"}},[t("h1",[e._v("Meters")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("h2",[e._v("Exploration")]),e._v(" "),e._m(5),e._v(" "),t("div",{staticClass:"text-gray-100 bg-gray-700 p-4 rounded-sm shadow-md mb-4"},[e._v("\n    Maintenant, toutes les cartes sont dans vos mains. Vous pouvez avec\n    aisance repérer où et quand une surconsommation se produit. Grâce à ces\n    informations, en déterminer la cause devient plus facile.\n  ")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),t("h2",[e._v("Signature énergétique")]),e._v(" "),e._m(8),e._v(" "),t("h2",[e._v("Objectifs")]),e._v(" "),e._m(9),e._v(" "),t("h2",[e._v("Alertes")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),t("h2",[e._v("Pour les petits et les grands")]),e._v(" "),e._m(12),e._v(" "),t("p",[e._v("\n    Une carte vous permet également d'avoir un aperçu rapide de l'emplacement\n    de vos ressources.\n  ")]),e._v(" "),t("h2",[e._v("Accès multiples")]),e._v(" "),t("p",[e._v("\n    Besoin d'accès pour plusieurs de vos employés ? Aucun problème. Ils auront\n    chacun leur tableau de bord, leurs alertes et leurs objectifs.\n  ")]),e._v(" "),t("h2",[e._v("Wiki")]),e._v(" "),t("p",[e._v("\n    Pour tout savoir sur les fonctionnalites de\n    "),t("strong",[e._v("Meters")]),e._v(", veuillez vous référer au Wiki\n    "),t("a",{attrs:{href:e.$store.getters.wikiUrl,target:"_blank",rel:"noopener"}},[e._v("en cliquant ici")]),e._v(".\n  ")]),e._v(" "),t("h2",[e._v("Parmi nos clients")]),e._v(" "),t("clients"),e._v(" "),t("h2",[e._v("Combien ça consomme")]),e._v(" "),e._m(13),e._v(" "),t("h2",[e._v("Combien ça coûte")]),e._v(" "),e._m(14)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"w-full h-40 sm:h-64 md:h-76 rounded-md shadow mb-8 overflow-hidden",attrs:{id:"meters-banner-outer"}},[e("div",{staticClass:"w-full h-full",attrs:{id:"meters-banner"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"},[t("i",{staticClass:"material-icons mr-4"},[e._v("trending_down")]),e._v(" "),t("span",[e._v("\n      Vous avez du mal à\n      "),t("strong",[e._v("diminuer votre consommation")]),e._v(" d'eau, gaz, mazout ou\n      encore électricité ?\n    ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"},[t("i",{staticClass:"material-icons mr-4"},[e._v("eco")]),e._v(" "),t("span",[e._v("\n      Peut-être cherchez-vous à améliorer votre\n      "),t("strong",[e._v("image environnementale")]),e._v(" ?\n    ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-8"},[t("i",{staticClass:"material-icons mr-4"},[e._v("notifications")]),e._v(" "),t("span",[e._v("\n      Ou alors vous souhaitez garder un oeil sur les\n      "),t("strong",[e._v("températures de vos locaux")]),e._v(" ?\n    ")])])},function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Meters")]),e._v(" a été développé spécialement pour répondre à vos\n    besoins ! "),t("br"),e._v("Après l'installation de capteurs sur vos compteurs d'eau,\n    gaz, mazout ou électricité, ou l'installation de capteurs de température\n    dans vos locaux, "),t("strong",[e._v("Meters")]),e._v(" vous permet de suivre l'évolution\n    de vos données.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Vos données sont accessibles en tout temps par une\n    "),t("strong",[e._v("interface web moderne")]),e._v(", utilisable sur smartphone,\n    tablette et ordinateur. "),t("br"),e._v("Par la plateforme web, vous pouvez visionner\n    des "),t("strong",[e._v("graphiques")]),e._v(" de l'évolution de vos températures ou de\n    votre consommation.\n    "),t("br"),e._v(" "),t("a",{attrs:{href:"https://meters.ch",target:"_blank",rel:"noopener"}},[e._v("Se rendre sur la plateforme Meters")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Vous pouvez\n    "),t("strong",[e._v("télécharger vos données")]),e._v(" dans différents formats afin de\n    les analyser avec vos outils favoris, ou afin de les inclure dans des\n    présentations. "),t("br"),e._v("Un "),t("strong",[e._v("tableau de bord")]),e._v(" vous permet de\n    sauvegarder vos graphiques les plus utiles, afin d'y accéder en un rien de\n    temps.\n  ")])},function(){var e=this._self._c;return e("figure",[e("img",{staticClass:"md:w-168",attrs:{src:"/images/meters-app-02.jpg",alt:"Tableau de bord Meters"}})])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Si vous possédez un capteur de température ainsi qu'un capteur sur une\n    ressource servant à chauffer un bâtiment (comme l'électricité, le gaz où\n    le mazout), un outil de signature énergétique est mis à votre\n    disposition."),t("br"),e._v("\n    Il vous permet de repérer les irrégularités de chauffage afin d'optimiser\n    vos installation et d'économiser de l'argent.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Difficile de définir des objectifs de réduction de consommation\n    énergétique ? Grâce à\n    "),t("strong",[e._v("Meters")]),e._v(", vous pouvez définir un objectif concret mensuel\n    ou hebdomadaire afin d'être tenu au courant par email de vos avancées.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Envie d'être averti lorsque la température d'un local est anormalement\n    haute ou base ?\n    "),t("strong",[e._v("Meters")]),e._v(" vous met à disposition un outils d'alertes email.\n  ")])},function(){var e=this._self._c;return e("figure",[e("img",{staticClass:"md:w-168",attrs:{src:"/images/meters-app-03.jpg",alt:"Alertes Meters"}})])},function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Meters")]),e._v(" a été conçu pour prendre en compte les\n    "),t("strong",[e._v("petites entreprises")]),e._v(" comme les "),t("strong",[e._v("grandes")]),e._v(".\n    Vous avez des ressources sur plusieurs sites ? Vous pourrez les retrouver\n    sans problème au travers d'un outil de recherche intelligent.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Un capteur consomme "),t("strong",[e._v("<1W")]),e._v(", environ 7kWh par an."),t("br"),e._v("\n    Pour référence, 6 capteurs consomment autant que 1 écran d'ordinateur de\n    catégorie énergétique A."),t("br"),e._v("\n    Nous travaillons en permenance à réduire la consommation énergétique, au\n    travers de mises à jour logiciel et en choisissant du matériel moins\n    énergivore.\n  ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n    Intéressés par le produit ? Vous pouvez utiliser l'outil ci-dessous pour\n    "),t("strong",[e._v("estimer le coût total selon vos besoins")]),e._v("."),t("br"),e._v("\n    L'estimation inclut le prix du matériel, son installation et le service\n    par mois. Le service inclut l'hébergement des données, l'accès à la\n    platforme, le support et le remplacement du matériel en cas de\n    défectuosité."),t("br"),e._v(" "),t("i",[e._v("\n      Veuillez noter que les prix affichés ci-dessous ne constituent pas une\n      offre et que les prix pratiqués peuvent différer. "),t("br"),e._v("Veuillez\n      "),t("a",{attrs:{href:"mailto:hello@naito.one"}},[e._v("prendre contact avec nous")]),e._v(" pour\n      obtenir une offre complète gratuitement.\n    ")])])}],!1,null,null,null).exports},m={head:function(){return{title:"".concat(this.title," - Naito One"),htmlAttrs:{lang:this.$store.state.locale},meta:[{hid:"description",name:"description",content:this.$t("pages.meters.description")},{hid:"keywords",name:"keywords",content:this.$t("pages.meters.keywords")}]}},data:function(){return{numTempSensors:1,numMbusSensors:2,serviceYears:3,electricityPrice:.272,sensorConsumption:7.227}},computed:{title:function(){return this.$t("pages.meters.title")},localeContent:function(){return content[this.$i18n.locale]},offerEmailString:function(){var e=this.$t("pages.meters.offer_email_subject"),body=this.$t("pages.meters.offer_email_body",{service:this.serviceYears,temp:this.numTempSensors,mbus:this.numMbusSensors});return"mailto:".concat(this.$store.state.email,"?subject=").concat(e,"&body=").concat(body).replace(/\n/g,"%0D%0A")},totalSensors:function(){return Number(this.numTempSensors)+Number(this.numMbusSensors)},totalMonths:function(){return 12*Number(this.serviceYears)},tempSensorsCost:function(){return 170*Number(this.numTempSensors)},mbusSensosCost:function(){return 210*Number(this.numMbusSensors)},serviceCost:function(){return this.totalMonths*this.totalSensors*9},installCost:function(){return this.totalSensors>0?90+30*(this.totalSensors-1):0},sensorDiscountPlan:function(){return this.totalSensors<5?0:this.totalSensors<10?-10:-20},sensorDiscount:function(){return this.sensorDiscountPlan*this.totalSensors},serviceDiscountYearsPlan:function(){return Number(this.serviceYears)<2?0:Number(this.serviceYears)<3?-1.5:-2.5},serviceDiscountYears:function(){return this.serviceDiscountYearsPlan*this.totalSensors*this.totalMonths},serviceDiscountGlobalPercentage:function(){return.8*(1-Math.pow(.9,this.totalSensors/1.5))},serviceDiscountGlobal:function(){return this.serviceDiscountGlobalPercentage*-(this.serviceCost+this.serviceDiscountYears)},initialCost:function(){return(this.tempSensorsCost+this.mbusSensosCost+this.installCost+this.sensorDiscount).toLocaleString(this.$numberLocale,r.b)},serviceCostPerMonth:function(){return((this.serviceCost+this.serviceDiscountYears+this.serviceDiscountGlobal)/this.totalMonths).toLocaleString(this.$numberLocale,r.d)},electricityCostPerYear:function(){return(this.totalSensors*this.sensorConsumption*this.electricityPrice).toLocaleString(this.$numberLocale,r.d)}}},_=Object(o.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"mt-4 marked"},[t(e.localeContent,{tag:"component"})],1),e._v(" "),t("section",[t("form",{staticClass:"flex flex-col items-center mb-4",attrs:{action:"#"}},[t("div",{staticClass:"md:w-1/2 flex flex-col"},[t("p",{domProps:{textContent:e._s(e.$t("pages.meters.years.service_duration"))}}),e._v(" "),t("div",{staticClass:"flex flex-col lg:flex-row"},[t("div",{staticClass:"flex items-center"},[t("label",{staticClass:"material-radio text-naito-green-100",attrs:{for:"service-three-input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceYears,expression:"serviceYears"}],attrs:{type:"radio",id:"service-three-input",value:"3",name:"service-input"},domProps:{checked:e._q(e.serviceYears,"3")},on:{change:function(t){e.serviceYears="3"}}}),e._v(" "),t("div",{staticClass:"material-radio-fake"})]),e._v(" "),t("label",{staticClass:"flex-grow select-none font-bold",attrs:{for:"service-three-input"},domProps:{textContent:e._s(e.$t("pages.meters.years.three"))}})]),e._v(" "),t("div",{staticClass:"flex items-center"},[t("label",{staticClass:"material-radio text-naito-green-100",attrs:{for:"service-two-input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceYears,expression:"serviceYears"}],attrs:{type:"radio",id:"service-two-input",value:"2",name:"service-input"},domProps:{checked:e._q(e.serviceYears,"2")},on:{change:function(t){e.serviceYears="2"}}}),e._v(" "),t("div",{staticClass:"material-radio-fake"})]),e._v(" "),t("label",{staticClass:"flex-grow select-none font-bold",attrs:{for:"service-two-input"},domProps:{textContent:e._s(e.$t("pages.meters.years.two"))}})]),e._v(" "),t("div",{staticClass:"flex items-center"},[t("label",{staticClass:"material-radio text-naito-green-100",attrs:{for:"service-one-input"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceYears,expression:"serviceYears"}],attrs:{type:"radio",id:"service-one-input",value:"1",name:"service-input"},domProps:{checked:e._q(e.serviceYears,"1")},on:{change:function(t){e.serviceYears="1"}}}),e._v(" "),t("div",{staticClass:"material-radio-fake"})]),e._v(" "),t("label",{staticClass:"flex-grow select-none font-bold",attrs:{for:"service-one-input"},domProps:{textContent:e._s(e.$t("pages.meters.years.one"))}})])]),e._v(" "),t("label",{attrs:{for:"num-temp-sensors"},domProps:{textContent:e._s(e.$t("pages.meters.how_many_temp"))}}),e._v(" "),t("div",{staticClass:"flex items-center mb-2"},[t("div",{staticClass:"range-slider flex-grow"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.numTempSensors,expression:"numTempSensors"}],staticClass:"range-slider__range w-full",attrs:{id:"num-temp-sensors",name:"num-temp-sensors",type:"range",min:"0",max:"15"},domProps:{value:e.numTempSensors},on:{__r:function(t){e.numTempSensors=t.target.value}}})]),e._v(" "),t("span",{staticClass:"ml-4 font-bold w-1/4 text-right",domProps:{textContent:e._s(e.$tc("pages.meters.sensors",e.numTempSensors,{count:e.numTempSensors}))}})]),e._v(" "),t("label",{attrs:{for:"num-mbus-sensors"},domProps:{textContent:e._s(e.$t("pages.meters.how_many_mbus"))}}),e._v(" "),t("div",{staticClass:"flex items-center"},[t("div",{staticClass:"range-slider flex-grow"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.numMbusSensors,expression:"numMbusSensors"}],staticClass:"range-slider__range w-full",attrs:{id:"num-mbus-sensors",name:"num-mbus-sensors",type:"range",min:"0",max:"15"},domProps:{value:e.numMbusSensors},on:{__r:function(t){e.numMbusSensors=t.target.value}}})]),e._v(" "),t("span",{staticClass:"ml-4 font-bold w-1/4 text-right",domProps:{textContent:e._s(e.$tc("pages.meters.sensors",e.numMbusSensors,{count:e.numMbusSensors}))}})])])]),e._v(" "),t("div",{staticClass:"flex flex-col lg:flex-row justify-center"},[e.sensorDiscountPlan<0?t("span",{staticClass:"title-on-click text-sm my-1 mx-2 py-2 px-4 rounded-full bg-gray-700 text-gray-100 font-bold hover-action",attrs:{title:e.$t("pages.meters.discounts_explained.hardware")},domProps:{textContent:e._s(e.$t("pages.meters.discounts.hardware",{amount:-e.sensorDiscountPlan}))}}):e._e(),e._v(" "),e.serviceDiscountYearsPlan<0?t("span",{staticClass:"title-on-click text-sm my-1 mx-2 py-2 px-4 rounded-full bg-gray-700 text-gray-100 font-bold hover-action",attrs:{title:e.$t("pages.meters.discounts_explained.service")},domProps:{textContent:e._s(e.$t("pages.meters.discounts.service",{amount:-e.serviceDiscountYearsPlan}))}}):e._e(),e._v(" "),e.serviceDiscountGlobalPercentage>0?t("span",{staticClass:"title-on-click text-sm my-1 mx-2 py-2 px-4 rounded-full bg-gray-700 text-gray-100 font-bold hover-action",attrs:{title:e.$t("pages.meters.discounts_explained.global_service")},domProps:{textContent:e._s(e.$t("pages.meters.discounts.global_service",{amount:(100*e.serviceDiscountGlobalPercentage).toFixed(0)}))}}):e._e()]),e._v(" "),t("div",{staticClass:"flex justify-center text-gray-900 mt-2"},[t("div",{staticClass:"w-56 flex flex-col rounded-md shadow-lg overflow-hidden"},[t("div",{staticClass:"bg-naito-yellow-100 flex items-center justify-center shadow-md"},[t("span",{staticClass:"font-heading py-8 text-2xl"},[e._v("CHF "+e._s(e.initialCost))])]),e._v(" "),t("div",{staticClass:"bg-naito-yellow-200 flex-grow flex items-center justify-center relative"},[t("span",{staticClass:"absolute top-0 left-0 w-full py-2 text-center text-xl",domProps:{textContent:e._s(e.$t("pages.meters.then"))}}),e._v(" "),t("span",{staticClass:"font-heading py-12 text-2xl",domProps:{textContent:e._s(e.$t("pages.meters.per_month",{amount:e.serviceCostPerMonth}))}})])])]),e._v(" "),t("div",{staticClass:"flex flex-col items-center mt-2"},[t("span",{domProps:{textContent:e._s(e.$t("pages.meters.electricity_cost",{amount:e.electricityCostPerYear}))}})]),e._v(" "),t("div",{staticClass:"flex justify-center my-8"},[t("a",{staticClass:"action w-full sm:w-72 font-medium bg-naito-green-200 text-gray-100",attrs:{href:e.offerEmailString},domProps:{textContent:e._s(e.$t("pages.meters.offer"))}})]),e._v(" "),t("p",{staticClass:"text-gray-400 text-sm mt-16"},[t("span",{domProps:{textContent:e._s(e.$t("pages.meters.electricity_note"))}}),e._v(" "),t("a",{staticClass:"yellow-link",attrs:{href:"https://www.prix-electricite.elcom.admin.ch/",rel:"noopener"}},[e._v("https://www.prix-electricite.elcom.admin.ch/")])]),e._v(" "),t("p",{staticClass:"text-gray-400 text-sm mt-2",domProps:{textContent:e._s(e.$t("pages.meters.notice"))}})]),e._v(" "),t("a",{staticClass:"fixed w-full h-12 sm:w-auto sm:h-auto bottom-0 right-0 sm:mb-8 sm:mr-8 sm:p-4 sm:px-6 sm:rounded-full simple-action shadow-lg font-medium bg-naito-yellow-200 text-gray-900 flex items-center",attrs:{href:"mailto:hello@naito.one?subject=".concat(e.$t("pages.meters.demo_access_email_subject"))}},[t("i",{staticClass:"material-icons text-lg mr-2"},[e._v("web")]),e._v(" "),t("span",{domProps:{textContent:e._s(e.$t("pages.meters.demo_access"))}})]),e._v(" "),t("img",{staticStyle:{border:"0"},attrs:{src:"https://analytics.naito.one/matomo.php?idsite=1&rec=1&action_name=Meters",alt:""}})])}),[],!1,null,null,null);t.default=_.exports}}]);