(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{284:function(t,n,r){"use strict";var e=r(2),o=r(285);e({target:"String",proto:!0,forced:r(286)("link")},{link:function(t){return o(this,"a","href",t)}})},285:function(t,n,r){"use strict";var e=r(3),o=r(22),c=r(14),l=/"/g,f=e("".replace);t.exports=function(t,n,r,e){var k=c(o(t)),w="<"+n;return""!==r&&(w+=" "+r+'="'+f(c(e),l,"&quot;")+'"'),w+">"+k+"</"+n+">"}},286:function(t,n,r){"use strict";var e=r(4);t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},293:function(t,n,r){"use strict";r.r(n);r(284);var e={mounted:function(){this.$refs.link.click()},computed:{wikiUrl:function(){return this.$store.getters.wikiUrl}}},o=r(23),component=Object(o.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"mt-8"},[n("a",{ref:"link",staticClass:"yellow-link",attrs:{href:t.wikiUrl}},[t._v("Wiki")]),t._v(" "),n("img",{staticStyle:{border:"0"},attrs:{src:"https://analytics.naito.one/matomo.php?idsite=1&rec=1&action_name=Wiki",alt:""}})])}),[],!1,null,null,null);n.default=component.exports}}]);