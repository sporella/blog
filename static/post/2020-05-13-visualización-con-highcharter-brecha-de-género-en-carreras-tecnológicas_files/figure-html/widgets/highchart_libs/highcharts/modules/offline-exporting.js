/*
 Highcharts JS v7.0.1 (2018-12-19)
 Client side exporting module

 (c) 2015-2018 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(h){"object"===typeof module&&module.exports?module.exports=h:"function"===typeof define&&define.amd?define(function(){return h}):h("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(h){(function(a){var b=a.win,h=b.navigator,n=b.document,d=b.URL||b.webkitURL||b,r=/Edge\/\d+/.test(h.userAgent);a.dataURLtoBlob=function(a){if((a=a.match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&d.createObjectURL){for(var g=b.atob(a[3]),e=
new b.ArrayBuffer(g.length),e=new b.Uint8Array(e),h=0;h<e.length;++h)e[h]=g.charCodeAt(h);a=new b.Blob([e],{type:a[1]});return d.createObjectURL(a)}};a.downloadURL=function(g,d){var e=n.createElement("a"),x;if("string"===typeof g||g instanceof String||!h.msSaveOrOpenBlob){if(r||2E6<g.length)if(g=a.dataURLtoBlob(g),!g)throw"Failed to convert to blob";if(void 0!==e.download)e.href=g,e.download=d,n.body.appendChild(e),e.click(),n.body.removeChild(e);else try{if(x=b.open(g,"chart"),void 0===x||null===
x)throw"Failed to open window";}catch(k){b.location.href=g}}else h.msSaveOrOpenBlob(g,d)}})(h);(function(a){function b(k,b){var f=g.getElementsByTagName("head")[0],c=g.createElement("script");c.type="text/javascript";c.src=k;c.onload=b;c.onerror=function(){a.error("Error loading script "+k)};f.appendChild(c)}var h=a.addEvent,n=a.merge,d=a.win,r=d.navigator,g=d.document,B=d.URL||d.webkitURL||d,e=/Edge\/|Trident\/|MSIE /.test(r.userAgent),x=e?150:0;a.CanVGRenderer={};a.svgToDataUrl=function(a){var k=
-1<r.userAgent.indexOf("WebKit")&&0>r.userAgent.indexOf("Chrome");try{if(!k&&0>r.userAgent.toLowerCase().indexOf("firefox"))return B.createObjectURL(new d.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(f){}return"data:image/svg+xml;charset\x3dUTF-8,"+encodeURIComponent(a)};a.imageToDataUrl=function(a,b,f,c,h,e,q,t,p){var l=new d.Image,k,y=function(){setTimeout(function(){var d=g.createElement("canvas"),e=d.getContext&&d.getContext("2d"),z;try{if(e){d.height=l.height*c;d.width=l.width*c;e.drawImage(l,
0,0,d.width,d.height);try{z=d.toDataURL(b),h(z,b,f,c)}catch(C){k(a,b,f,c)}}else q(a,b,f,c)}finally{p&&p(a,b,f,c)}},x)},u=function(){t(a,b,f,c);p&&p(a,b,f,c)};k=function(){l=new d.Image;k=e;l.crossOrigin="Anonymous";l.onload=y;l.onerror=u;l.src=a};l.onload=y;l.onerror=u;l.src=a};a.downloadSVGLocal=function(k,e,f,c){function h(a,c){c=new d.jsPDF("l","pt",[a.width.baseVal.value+2*c,a.height.baseVal.value+2*c]);[].forEach.call(a.querySelectorAll('*[visibility\x3d"hidden"]'),function(a){a.parentNode.removeChild(a)});
d.svg2pdf(a,c,{removeInvalid:!0});return c.output("datauristring")}function u(){A.innerHTML=k;var b=A.getElementsByTagName("text"),d;[].forEach.call(b,function(a){["font-family","font-size"].forEach(function(c){for(var b=a;b&&b!==A;){if(b.style[c]){a.style[c]=b.style[c];break}b=b.parentNode}});a.style["font-family"]=a.style["font-family"]&&a.style["font-family"].split(" ").splice(-1);d=a.getElementsByTagName("title");[].forEach.call(d,function(c){a.removeChild(c)})});b=h(A.firstChild,0);try{a.downloadURL(b,
v),c&&c()}catch(D){f(D)}}var q,t,p=!0,l,m=e.libURL||a.getOptions().exporting.libURL,A=g.createElement("div"),w=e.type||"image/png",v=(e.filename||"chart")+"."+("image/svg+xml"===w?"svg":w.split("/")[1]),n=e.scale||1,m="/"!==m.slice(-1)?m+"/":m;if("image/svg+xml"===w)try{r.msSaveOrOpenBlob?(t=new MSBlobBuilder,t.append(k),q=t.getBlob("image/svg+xml")):q=a.svgToDataUrl(k),a.downloadURL(q,v),c&&c()}catch(z){f(z)}else"application/pdf"===w?d.jsPDF&&d.svg2pdf?u():(p=!0,b(m+"jspdf.js",function(){b(m+"svg2pdf.js",
function(){u()})})):(q=a.svgToDataUrl(k),l=function(){try{B.revokeObjectURL(q)}catch(z){}},a.imageToDataUrl(q,w,{},n,function(b){try{a.downloadURL(b,v),c&&c()}catch(C){f(C)}},function(){var e=g.createElement("canvas"),h=e.getContext("2d"),u=k.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*n,y=k.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*n,q=function(){h.drawSvg(k,0,0,u,y);try{a.downloadURL(r.msSaveOrOpenBlob?e.msToBlob():e.toDataURL(w),v),c&&c()}catch(E){f(E)}finally{l()}};e.width=
u;e.height=y;d.canvg?q():(p=!0,b(m+"rgbcolor.js",function(){b(m+"canvg.js",function(){q()})}))},f,f,function(){p&&l()}))};a.Chart.prototype.getSVGForLocalExport=function(b,e,d,c){var f=this,g,k=0,t,p,l,m,n,r=function(a,b,d){++k;d.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);k===g.length&&c(f.sanitizeSVG(t.innerHTML,p))};f.unbindGetSVG=h(f,"getSVG",function(a){p=a.chartCopy.options;t=a.chartCopy.container.cloneNode(!0)});f.getSVGForExport(b,e);g=t.getElementsByTagName("image");
try{if(!g.length){c(f.sanitizeSVG(t.innerHTML,p));return}m=0;for(n=g.length;m<n;++m)l=g[m],a.imageToDataUrl(l.getAttributeNS("http://www.w3.org/1999/xlink","href"),"image/png",{imageElement:l},b.scale,r,d,d,d)}catch(v){d(v)}f.unbindGetSVG()};a.Chart.prototype.exportChartLocal=function(b,d){var f=this,c=a.merge(f.options.exporting,b),g=function(b){!1===c.fallbackToExportServer?c.error?c.error(c,b):a.error(28,!0):f.exportChart(c)};e&&f.styledMode&&(a.SVGRenderer.prototype.inlineWhitelist=[/^blockSize/,
/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/]);e&&("application/pdf"===c.type||f.container.getElementsByTagName("image").length&&"image/svg+xml"!==c.type)||"application/pdf"===c.type&&f.container.getElementsByTagName("image").length?
g("Image type not supported for this chart/browser."):f.getSVGForLocalExport(c,d,g,function(b){-1<b.indexOf("\x3cforeignObject")&&"image/svg+xml"!==c.type?g("Image type not supported for charts with embedded HTML"):a.downloadSVGLocal(b,a.extend({filename:f.getFilename()},c),g)})};n(!0,a.getOptions().exporting,{libURL:"https://code.highcharts.com/7.0.1/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},
downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}})})(h)});
//# sourceMappingURL=offline-exporting.js.map
