(function(){var c=" usando o Google Tradutor?",d=".",e="Desativar para: ",h="Desativar tradu\u00e7\u00e3o do ",k="O Google traduziu automaticamente esta p\u00e1gina para: ",l="Powered by ",m="Traduzido para: ",n="Traduzir esta p\u00e1gina para: ",p="Traduzir tudo para o ",q="Ver esta p\u00e1gina em: ",r="var ",t=this;function u(a,w){var f=a.split(d),b=t;f[0]in b||!b.execScript||b.execScript(r+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===w?b[g]?b=b[g]:b=b[g]={}:b[g]=w};var v={0:"Traduzir",1:"Cancelar",2:"Fechar",3:function(a){return k+a},4:function(a){return m+a},5:"Erro: o servidor n\u00e3o conseguiu completar a sua solicita\u00e7\u00e3o. Tente novamente mais tarde.",6:"Saiba mais",7:function(a){return l+a},8:"Tradutor",9:"Tradu\u00e7\u00e3o em andamento",10:function(a){return n+(a+c)},11:function(a){return q+a},12:"Mostrar o original",13:"O conte\u00fado deste arquivo local ser\u00e1 enviado ao Google para tradu\u00e7\u00e3o usando uma conex\u00e3o segura.",14:"O conte\u00fado desta p\u00e1gina segura ser\u00e1 enviado ao Google para tradu\u00e7\u00e3o usando uma conex\u00e3o segura.",
15:"O conte\u00fado desta p\u00e1gina da intranet ser\u00e1 enviado ao Google para tradu\u00e7\u00e3o usando uma conex\u00e3o segura.",16:"Selecione o idioma",17:function(a){return h+a},18:function(a){return e+a},19:"Sempre ocultar",20:"Texto original:",21:"Sugira uma tradu\u00e7\u00e3o melhor",22:"Sugerir",23:"Traduzir tudo",24:"Restaurar tudo",25:"Cancelar tudo",26:"Traduzir se\u00e7\u00f5es para meu idioma",27:function(a){return p+a},28:"Mostrar idiomas originais",29:"Op\u00e7\u00f5es",30:"Desativar tradu\u00e7\u00e3o para este site",
31:null,32:"Mostrar tradu\u00e7\u00f5es alternativas",33:"Clique nas palavras acima para ver tradu\u00e7\u00f5es alternativas",34:"Usar",35:"Para reorganizar, arraste usando a tecla Shift",36:"Clique para ver tradu\u00e7\u00f5es alternativas",37:'Mantenha a tecla "Shift" pressionada, clique e arraste as palavras acima para reordenar a frase.',38:"Agradecemos a pela sua contribui\u00e7\u00e3o ao Google Tradutor.",39:"Gerenciar tradu\u00e7\u00e3o deste site",40:"Clique em uma palavra para ver tradu\u00e7\u00f5es alternativas ou clique duas vezes para editar diretamente",
41:"Texto original",42:"Tradutor",43:"Traduzir",44:"Sua corre\u00e7\u00e3o foi enviada.",45:"Erro: o idioma da p\u00e1gina n\u00e3o \u00e9 compat\u00edvel."};var x=window.google&&google.translate&&google.translate._const;
if(x){var y;a:{for(var z=[],A=["26,0.01,20150908"],B=0;B<A.length;++B){var C=A[B].split(","),D=C[0];if(D){var E=Number(C[1]);if(!(!E||.1<E||0>E)){var F=Number(C[2]),G=new Date,H=1E4*G.getFullYear()+100*(G.getMonth()+1)+G.getDate();!F||F<H||z.push({version:D,ratio:E,a:F})}}}for(var I=0,J=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),K=Number(J&&J[1])||Math.random(),B=0;B<z.length;++B){var L=z[B],I=I+L.ratio;if(1<=I)break;if(K<I){y=L.version;break a}}y="34"}var M="/translate_static/js/element/%s/element_main.js".replace("%s",
y);if("0"==y){var N=" translate_static js element %s element_main.js".split(" ");N[N.length-1]="main_pt-BR.js";M=N.join("/").replace("%s",y)}if(x._cjlc)x._cjlc(x._pas+x._pah+M);else{var O=x._pas+x._pah+M,P=document.createElement("script");P.type="text/javascript";P.charset="UTF-8";P.src=O;var Q=document.getElementsByTagName("head")[0];Q||(Q=document.body.parentNode.appendChild(document.createElement("head")));Q.appendChild(P)}u("google.translate.m",v);u("google.translate.v",y)};})()
