(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"6ac4":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home relative overflow-hidden"},[r("div",{staticClass:"w-screen h-screen flex justify-center items-center bg-blue-gray z-0"},[r("ProfileCard",{staticClass:"z-50"}),e._l(e.balls,(function(e,t){return r("div",{key:t,staticClass:"absolute z-10",style:{top:e.y+"px",left:e.x+"px"}},[r("div",{staticClass:"rounded-full border",style:{width:2*e.r+"px",height:2*e.r+"px","border-color":e.color,"border-width":e.border+"px"}})])}))],2)])},a=[],n=r("07c2"),l=r("e3e8"),i=r("412d"),s=r.n(i),d={name:"Home",components:{ProfileCard:n["a"]},data:function(){return{balls:[]}},computed:{isMobile:function(){return!!this.$isMobile()}},created:function(){var e=Math.floor(10*Math.random()+3),t=s.a.noise;t.seed(Math.random);for(var r=0;r<e;r++){var o=Math.floor(Math.random()*(window.innerWidth-40)+20),a=Math.floor(Math.random()*(window.innerHeight-40)+20);this.balls.push({x:o,y:a,r:Math.floor(100*Math.random()),border:Math.floor(10*Math.random()+1),color:Object(l["a"])(360*Math.abs(t.perlin2(o/100,a/100))).hex})}}},c=d,h=r("2877"),u=Object(h["a"])(c,o,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=about.eaeddef6.js.map