(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"1a12":function(e,t,a){},"412d":function(e,t){(function(e){var t=e.noise={};function a(e,t,a){this.x=e,this.y=t,this.z=a}a.prototype.dot2=function(e,t){return this.x*e+this.y*t},a.prototype.dot3=function(e,t,a){return this.x*e+this.y*t+this.z*a};var n=[new a(1,1,0),new a(-1,1,0),new a(1,-1,0),new a(-1,-1,0),new a(1,0,1),new a(-1,0,1),new a(1,0,-1),new a(-1,0,-1),new a(0,1,1),new a(0,-1,1),new a(0,1,-1),new a(0,-1,-1)],o=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],i=new Array(512),r=new Array(512);t.seed=function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var a;a=1&t?o[t]^255&e:o[t]^e>>8&255,i[t]=i[t+256]=a,r[t]=r[t+256]=n[a%12]}},t.seed(0);var s=.5*(Math.sqrt(3)-1),l=(3-Math.sqrt(3))/6,c=1/3,d=1/6;function u(e){return e*e*e*(e*(6*e-15)+10)}function h(e,t,a){return(1-a)*e+a*t}t.simplex2=function(e,t){var a,n,o,c,d,u=(e+t)*s,h=Math.floor(e+u),m=Math.floor(t+u),p=(h+m)*l,f=e-h+p,v=t-m+p;f>v?(c=1,d=0):(c=0,d=1);var b=f-c+l,g=v-d+l,w=f-1+2*l,x=v-1+2*l;h&=255,m&=255;var y=r[h+i[m]],k=r[h+c+i[m+d]],M=r[h+1+i[m+1]],C=.5-f*f-v*v;C<0?a=0:(C*=C,a=C*C*y.dot2(f,v));var _=.5-b*b-g*g;_<0?n=0:(_*=_,n=_*_*k.dot2(b,g));var j=.5-w*w-x*x;return j<0?o=0:(j*=j,o=j*j*M.dot2(w,x)),70*(a+n+o)},t.simplex3=function(e,t,a){var n,o,s,l,u,h,m,p,f,v,b=(e+t+a)*c,g=Math.floor(e+b),w=Math.floor(t+b),x=Math.floor(a+b),y=(g+w+x)*d,k=e-g+y,M=t-w+y,C=a-x+y;k>=M?M>=C?(u=1,h=0,m=0,p=1,f=1,v=0):k>=C?(u=1,h=0,m=0,p=1,f=0,v=1):(u=0,h=0,m=1,p=1,f=0,v=1):M<C?(u=0,h=0,m=1,p=0,f=1,v=1):k<C?(u=0,h=1,m=0,p=0,f=1,v=1):(u=0,h=1,m=0,p=1,f=1,v=0);var _=k-u+d,j=M-h+d,O=C-m+d,S=k-p+2*d,$=M-f+2*d,z=C-v+2*d,T=k-1+3*d,E=M-1+3*d,P=C-1+3*d;g&=255,w&=255,x&=255;var R=r[g+i[w+i[x]]],A=r[g+u+i[w+h+i[x+m]]],H=r[g+p+i[w+f+i[x+v]]],q=r[g+1+i[w+1+i[x+1]]],F=.6-k*k-M*M-C*C;F<0?n=0:(F*=F,n=F*F*R.dot3(k,M,C));var N=.6-_*_-j*j-O*O;N<0?o=0:(N*=N,o=N*N*A.dot3(_,j,O));var U=.6-S*S-$*$-z*z;U<0?s=0:(U*=U,s=U*U*H.dot3(S,$,z));var W=.6-T*T-E*E-P*P;return W<0?l=0:(W*=W,l=W*W*q.dot3(T,E,P)),32*(n+o+s+l)},t.perlin2=function(e,t){var a=Math.floor(e),n=Math.floor(t);e-=a,t-=n,a&=255,n&=255;var o=r[a+i[n]].dot2(e,t),s=r[a+i[n+1]].dot2(e,t-1),l=r[a+1+i[n]].dot2(e-1,t),c=r[a+1+i[n+1]].dot2(e-1,t-1),d=u(e);return h(h(o,l,d),h(s,c,d),u(t))},t.perlin3=function(e,t,a){var n=Math.floor(e),o=Math.floor(t),s=Math.floor(a);e-=n,t-=o,a-=s,n&=255,o&=255,s&=255;var l=r[n+i[o+i[s]]].dot3(e,t,a),c=r[n+i[o+i[s+1]]].dot3(e,t,a-1),d=r[n+i[o+1+i[s]]].dot3(e,t-1,a),m=r[n+i[o+1+i[s+1]]].dot3(e,t-1,a-1),p=r[n+1+i[o+i[s]]].dot3(e-1,t,a),f=r[n+1+i[o+i[s+1]]].dot3(e-1,t,a-1),v=r[n+1+i[o+1+i[s]]].dot3(e-1,t-1,a),b=r[n+1+i[o+1+i[s+1]]].dot3(e-1,t-1,a-1),g=u(e),w=u(t),x=u(a);return h(h(h(l,p,g),h(c,f,g),x),h(h(d,v,g),h(m,b,g),x),w)}})(this)},"5dfc":function(e,t,a){"use strict";var n=a("1a12"),o=a.n(n);o.a},"85ec":function(e,t,a){},a2a4:function(e){e.exports=JSON.parse('{"name":"Magdiel Campelo","bio":{"graduation":"Engenheiro de computação - UFC","age":"25","position":"Desenvolvedor Fullstack","hobbies":"Entusiasta de IoT, Machine Learning e Blockchain"},"github":"/MagdielCAS","linkedin":"/magdiel-campelo","projects":"Projetos","home":"Início","maurer_rose":{"animate":"Animação","theme":"Tema claro","params":"Parametros"},"warnings":{"development":"Essa página está em desenvolvimento!"}}')},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-blue-gray relative ml-16",attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},i=[],r=(a("b0c0"),a("d4ec")),s=a("bee2"),l=a("262e"),c=a("2caf"),d=a("9ab4"),u=a("60a3"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unselectable navbar fixed left-0 h-screen text-white z-50 group ease-in-out duration-500 w-16 hover:w-48"},[a("div",{staticClass:"flex flex-col"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"flex p-4 items-center cursor-pointer nav-item text-tea-green"},[a("i",{staticClass:"fas fa-user-alt text-2xl"}),a("div",{staticClass:"ml-2 text-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 item-text",attrs:{transition:"fade"}},[e._v(" "+e._s(e.$t("home"))+" ")])])]),a("router-link",{attrs:{to:"/projects"}},[a("div",{staticClass:"flex p-4 items-center cursor-pointer nav-item text-tea-green"},[a("i",{staticClass:"fas fa-cubes text-2xl"}),a("div",{staticClass:"ml-2 text-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 item-text",attrs:{transition:"fade"}},[e._v(" "+e._s(e.$t("projects"))+" ")])])])],1)])},m=[],p=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.name="Navbar",e}return a}(u["b"]),f=p,v=(a("5dfc"),a("2877")),b=Object(v["a"])(f,h,m,!1,null,null,null),g=b.exports;function w(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}var x=w,y=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.name="App",e}return Object(s["a"])(a,[{key:"created",value:function(){window.onresize=this.verifyMobileOnResize(this),this.verifyMobileOnResize(this)()}},{key:"verifyMobileOnResize",value:function(e){return function(){console.log(e),"Mobile"!==e.$router.history.current.name&&"Home"!==e.$router.history.current.name||(x()&&"Home"===e.$router.history.current.name?e.$router.push("/mobile"):"Mobile"===e.$router.history.current.name&&e.$router.push("/"))}}}]),a}(u["b"]);y=Object(d["a"])([Object(u["a"])({components:{Navbar:g}})],y);var k=y,M=k,C=(a("034f"),Object(v["a"])(M,o,i,!1,null,null,null)),_=C.exports,j=a("8c4f"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home relative overflow-hidden"},[a("kinesis-container",{attrs:{active:!e.isMobile}},[a("div",{staticClass:"w-screen h-screen flex justify-center items-center z-0"},[a("kinesis-element",{staticClass:"z-50",attrs:{strength:10,type:"depth"}},[a("ProfileCard")],1),e._l(e.balls,(function(e,t){return a("kinesis-element",{key:t,staticClass:"absolute z-10",style:{top:e.y+"px",left:e.x+"px"}},[a("div",{staticClass:"rounded-full border",style:{width:2*e.r+"px",height:2*e.r+"px","border-color":e.color,"border-width":e.border+"px"}})])}))],2)])],1)},S=[],$=a("09fd"),z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rounded overflow-hidden shadow-lg bg-white"},[a("SmoothReflow",[a("div",{staticClass:"px-6 py-4 flex flex-col sm:flex-row"},[a("div",{staticClass:"flex justify-start sm:justify-center sm:items-center m-2"},[a("img",{staticClass:"rounded-full w-1/3 sm:w-auto mr-4 sm:mr-0",attrs:{width:"150",height:"150",src:"https://www.gravatar.com/avatar/c3c2f0d199db2d43eae71665ab1e129f?s=150"}}),a("div",{staticClass:"sm:hidden flex flex-col justify-center items-center"},[a("div",{staticClass:"font-bold text-xl mb-2"},[e._v(e._s(e.$t("name")))]),a("span",[e._v(e._s(e.$t("bio.position")))])])]),a("div",{staticClass:"p-4"},[a("div",{staticClass:"font-bold text-xl mb-2 hidden sm:block"},[e._v(" "+e._s(e.$t("name"))+" ")]),a("p",{staticClass:"text-gray-700 text-base flex flex-col"},[a("strong",[e._v(e._s(e.$t("bio.graduation")))]),a("span",{staticClass:"hidden sm:block"},[e._v(e._s(e.$t("bio.position")))]),a("span",[e._v(e._s(e.$t("bio.hobbies")))])]),a("div",{staticClass:"flex flex-row justify-around flex-wrap mt-2"},[a("div",{staticClass:"cursor-pointer",staticStyle:{color:"#333"},on:{click:function(t){return e.openUrl("https://github.com/MagdielCAS")}}},[a("i",{staticClass:"fab fa-github mr-1"}),e._v(" "+e._s(e.$t("github"))+" ")]),a("div",{staticClass:"cursor-pointer",staticStyle:{color:"#0077b5"},on:{click:function(t){return e.openUrl("https://linkedin.com/in/magdiel-campelo/")}}},[a("i",{staticClass:"fab fa-linkedin mr-1"}),e._v(" "+e._s(e.$t("linkedin"))+" ")])])])])])],1)},T=[],E={name:"ProfileCard",methods:{openUrl:function(e){window.open(e,"_blank")}}},P=E,R=Object(v["a"])(P,z,T,!1,null,null,null),A=R.exports,H=(a("fb6a"),a("d3b7"),a("25f0"),function(e){var t,a,n,o=.618033988749895;void 0===e?(n=Math.floor(361*Math.random()+0)/360,e=(n+n/o)%360):e/=360,a=Math.floor(81*Math.random()+20),t=(a-10)/100,a/=100;var i=0,r=0,s=0,l=0,c=0,d=0,u=0,h=0;switch(l=Math.floor(6*e),c=6*e-l,d=a*(1-t),u=a*(1-c*t),h=a*(1-(1-c)*t),l%6){case 0:i=a,r=h,s=d;break;case 1:i=u,r=a,s=d;break;case 2:i=d,r=a,s=h;break;case 3:i=d,r=u,s=a;break;case 4:i=h,r=d,s=a;break;case 5:i=a,r=d,s=u;break}i=Math.round(255*i),r=Math.round(255*r),s=Math.round(255*s);var m="#"+((1<<24)+(i<<16)+(r<<8)+s).toString(16).slice(1);return{h:e,s:t,v:a,r:i,g:r,b:s,hex:m}}),q=H,F=a("412d"),N=a.n(F),U={name:"Home",components:{KinesisContainer:$["KinesisContainer"],KinesisElement:$["KinesisElement"],ProfileCard:A},data:function(){return{balls:[]}},computed:{isMobile:function(){return!!x()}},created:function(){var e=Math.floor(10*Math.random()+3),t=N.a.noise;t.seed(Math.random);for(var a=0;a<e;a++){var n=Math.floor(Math.random()*(window.innerWidth-40)+20),o=Math.floor(Math.random()*(window.innerHeight-40)+20);this.balls.push({x:n,y:o,r:Math.floor(100*Math.random()),border:Math.floor(10*Math.random()+1),color:q(360*Math.abs(t.perlin2(n/100,o/100))).hex})}}},W=U,J=Object(v["a"])(W,O,S,!1,null,null,null),K=J.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home relative overflow-hidden"},[a("div",{staticClass:"w-screen h-screen flex justify-center items-center z-0"},[a("ProfileCard",{staticClass:"z-50"}),e._l(e.balls,(function(e,t){return a("div",{key:t,staticClass:"absolute z-10",style:{top:e.y+"px",left:e.x+"px"}},[a("div",{staticClass:"rounded-full border",style:{width:2*e.r+"px",height:2*e.r+"px","border-color":e.color,"border-width":e.border+"px"}})])}))],2)])},D=[],I={name:"Home",components:{ProfileCard:A},data:function(){return{balls:[]}},computed:{isMobile:function(){return!!x()}},created:function(){var e=Math.floor(10*Math.random()+3),t=N.a.noise;t.seed(Math.random);for(var a=0;a<e;a++){var n=Math.floor(Math.random()*(window.innerWidth-40)+20),o=Math.floor(Math.random()*(window.innerHeight-40)+20);this.balls.push({x:n,y:o,r:Math.floor(100*Math.random()),border:Math.floor(10*Math.random()+1),color:q(360*Math.abs(t.perlin2(n/100,o/100))).hex})}}},B=I,V=Object(v["a"])(B,L,D,!1,null,null,null),G=V.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-screen relative overflow-hidden"},[a("div",{staticClass:"text-lg text-white font-medium p-4"},[e._v(" "+e._s(e.$t("warnings.development"))+" ")]),a("div",{staticClass:"w-screen flex justify-center items-center z-0"},[a("MaurerRose")],1)])},X=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rounded overflow-hidden shadow-lg bg-white p-4 flex"},[a("div",{staticClass:"rounded"},[a("vue-p5",{on:{setup:e.setup,draw:e.draw}})],1),a("div",{staticClass:"flex flex-col px-4"},[a("div",{staticClass:"flex flex-row items-center mb-2"},[a("ToggleSwitch",{model:{value:e.dnoise,callback:function(t){e.dnoise=t},expression:"dnoise"}}),a("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("maurer_rose.animate")))])],1),a("div",{staticClass:"flex flex-row items-center mb-2"},[a("ToggleSwitch",{model:{value:e.lightTheme,callback:function(t){e.lightTheme=t},expression:"lightTheme"}}),a("span",{staticClass:"ml-1"},[e._v(e._s(e.$t("maurer_rose.theme")))])],1),a("span",{staticClass:"mb-1"},[e._v(e._s(e.$t("maurer_rose.params")))]),a("div",{staticClass:"flex flex-row items-center mb-2"},[a("span",{staticClass:"mr-2"},[e._v("n")]),a("vue-slider",{staticClass:"flex-1",attrs:{max:e.nMax,min:e.nMin,interval:e.nStep,contained:""},model:{value:e.n,callback:function(t){e.n=t},expression:"n"}})],1),e.dnoise?e._e():a("div",{staticClass:"flex flex-row items-center mb-2"},[a("span",{staticClass:"mr-2"},[e._v("d")]),a("vue-slider",{staticClass:"flex-1",attrs:{max:e.dMax,min:e.dMin,interval:e.dStep,contained:!0},model:{value:e.d,callback:function(t){e.d=t},expression:"d"}})],1)])])},Z=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"px-2"},[a("div",{staticClass:"rounded-full p-1 bg-manatee cursor-pointer ease duration-300",class:{"bg-manatee":!e.content,"bg-munsell":e.content},on:{click:function(t){e.content=!e.content}}},[a("div",{staticClass:"rounded-full border-8 ease duration-300",class:{"border-white mr-4":!e.content,"border-tea-green ml-4":e.content}})])])},te=[],ae={name:"ToggleSwitch",props:["value"],computed:{content:{get:function(){return!!this.value},set:function(e){this.$emit("input",e)}}}},ne=ae,oe=Object(v["a"])(ne,ee,te,!1,null,null,null),ie=oe.exports,re=a("e25d"),se=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.name="MaurerRose",e.vh=400,e.vw=400,e.s=10,e.n=2,e.d=29,e.nMin=0,e.nMax=20,e.nStep=1,e.dMin=0,e.dMax=360,e.dStep=.1,e.dvelocity=1,e.dvelocityMin=-10,e.dvelocityMax=10,e.dvelocityStep=.01,e.dnoise=!0,e.lightTheme=!1,e.gui=null,e}return Object(s["a"])(a,[{key:"setup",value:function(e){e.createCanvas(400,400),e.angleMode(e.DEGREES)}},{key:"draw",value:function(e){this.lightTheme?e.background(255):e.background(0),e.translate(this.vw/2,this.vh/2),e.scale(this.s),this.lightTheme?e.stroke(0):e.stroke(255),e.strokeWeight(1/this.s),e.line(this.vw/2,0,-this.vw/2,0),e.line(0,this.vh/2,0,-this.vh/2),this.lightTheme?e.stroke(0,0,255,255):e.stroke(255,255,255,158),e.noFill(),e.beginShape(),e.strokeWeight(1/this.s);for(var t=0;t<=360;t++){var a=t*this.d,n=e.sin(this.n*a)*e.min(this.vh/2,this.vw/2)/this.s,o=a,i=n*e.cos(o),r=n*e.sin(o);e.vertex(i,r)}e.endShape(),e.noFill(),this.lightTheme?e.stroke(255,0,0,255):e.stroke(255,0,255,255),e.strokeWeight(3/this.s),e.beginShape();for(var s=0;s<361;s++){var l=s,c=e.sin(this.n*l)*e.min(e.vh/2,e.vw/2)/e.s,d=c*e.cos(l),u=c*e.sin(l);e.vertex(d,u)}e.endShape(),this.dnoise&&(this.d=e.noise(this.d)*this.dvelocity+this.d,this.d=this.d>360?0:this.d)}}]),a}(u["b"]);se=Object(d["a"])([Object(u["a"])({components:{"vue-p5":re,ToggleSwitch:ie}})],se);var le=se,ce=le,de=Object(v["a"])(ce,Y,Z,!1,null,null,null),ue=de.exports,he={components:{MaurerRose:ue}},me=he,pe=Object(v["a"])(me,Q,X,!1,null,null,null),fe=pe.exports;n["default"].use(j["a"]);var ve=[{path:"/",name:"Home",component:K},{path:"/mobile",name:"Mobile",component:G},{path:"/projects",name:"Projects",component:fe}],be=new j["a"]({routes:ve}),ge=be,we=a("2f62");n["default"].use(we["a"]);var xe=new we["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ye=a("a925"),ke=a("e312"),Me=a("a2a4");n["default"].use(ye["a"]);var Ce=new ye["a"]({locale:"br",fallbackLocale:"br",messages:{en:ke,br:Me}}),_e=(a("24df"),a("4971"));n["default"].component("VueSlider",_e);var je="Vue slider",Oe=a("09fd");n["default"].use(Oe);var Se="kinesis",$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.tag,{tag:"component"},[e._t("default")],2)},ze=[],Te=a("bb45"),Ee=a.n(Te),Pe={name:"SmoothReflow",mixins:[Ee.a],props:{tag:{type:String,default:"div"},options:Object},mounted:function(){this.$smoothReflow(this.options)}},Re=Pe,Ae=Object(v["a"])(Re,$e,ze,!1,null,null,null),He=Ae.exports;n["default"].component("SmoothReflow",He);var qe="SmoothReflow",Fe={smoothReflow:qe,kinesis:Se,slider:je,i18n:Ce};n["default"].config.productionTip=!1,new n["default"]({router:ge,store:xe,i18n:Fe.i18n,render:function(e){return e(_)}}).$mount("#app")},e312:function(e){e.exports=JSON.parse('{"name":"Magdiel Campelo","bio":{"graduation":"Computer Engineer - UFC","age":"25","position":"Fullstack Developer","hobbies":"IoT, Machine Learning and Blockchain enthusiast"},"github":"/MagdielCAS","linkedin":"/magdiel-campelo","projects":"Projects","home":"Home","maurer_rose":{"animate":"Animate","theme":"Light Mode","params":"Rose params"},"warnings":{"development":"This page is under development!"}}')}});
//# sourceMappingURL=app.52a13912.js.map